# Lessons learned

Engineering decisions that aren't obvious from reading the code alone. Read this before reversing something here.

## Analytics: always call `window.gtag()`, never push to `dataLayer` directly

`app/lib/analytics.ts`'s `trackEvent()` used to push straight onto `window.dataLayer` (`dataLayer.push(["event", ...])`) to avoid a race where the `afterInteractive` gtag script hadn't run yet. That reasoning was half right and half wrong:

- **Right:** pushing to `dataLayer` before `gtag.js` has loaded is safe - `gtag.js` does a one-time scan of whatever's already in the array when it first loads, and correctly captures those entries.
- **Wrong:** that queueing behavior is a **one-time backlog scan, not an ongoing subscription**. Once `gtag.js` finishes loading, it stops watching the raw array. From that point on it only reacts to calls made through the (now internally-replaced) `window.gtag()` function. A raw `dataLayer.push()` made *after* that point is silently accepted by the array but never turns into a network request - no error, no warning, just a dropped event.

This meant `generate_lead` (fired from `handleSubmit`, always well after `gtag.js` has loaded since a user has to fill out a form first) was **never reaching GA4**, while `form_start` (fired on the first keystroke, often early enough to land in the one-time backlog) happened to work. Confirmed via isolated testing: a raw array push made after page-idle produced zero network requests over 8+ seconds; calling `window.gtag(...)` directly produced one immediately.

**Fix:** `trackEvent()` now calls `window.gtag(...)` whenever it exists, only falling back to a raw `dataLayer.push()` for the narrow window before the inline init script has even defined the `gtag` shim.

**Don't revert this to a plain `dataLayer.push()`** to "simplify" or to dodge a `window.gtag` type check - it will silently break conversion tracking for any event fired more than a second or two after page load, and there is no error to signal the breakage.

## Lazily-hydrated forms need a mounted-guard on submit, not just correct event tracking

Separately from the above: `RentalReadinessSection` is loaded via `next/dynamic()` as its own client chunk. The `<form>` it renders has no `action`/`method` attribute (submission is handled entirely by React's `onSubmit`), so if a user (or, realistically, a password manager / autofill flow) submits before that chunk's hydration completes, the click falls through to the browser's native form submission instead of React's handler - which just reloads the page and drops the entire lead, not just its analytics.

Fixed by gating the submit button on a `mounted` state (`useState(false)` + `useEffect(() => setMounted(true), [])`) so it's `disabled` until hydration for that component has actually completed - confirmed via testing that clicks while disabled are safe no-ops (no lead sent, no page reload) and clicks after mounting submit correctly every time.

## Never call `dynamic()` directly from a Server Component - it silently skips code-splitting

`app/page.tsx` is a Server Component. It used to call `next/dynamic()` directly on `ReviewsSection` and `RentalReadinessSection` to defer their client JS. Per `node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md`: *"When a Server Component dynamically imports a Client Component, automatic code splitting is currently not supported."*

There's no error or warning when you do this wrong - the build succeeds, the page renders correctly, and `dynamic()` still returns a working component. The only symptom is that the deferral silently doesn't happen: confirmed via the production network waterfall, where the chunk was requested at ~300ms alongside every other resource instead of after the critical content painted. This was a real, measurable contributor to LCP (main-thread work from that chunk competing with the hero `<h1>`'s render).

**Fix / rule going forward:** if a Server Component needs to lazily render a Client Component, never call `dynamic()` at the Server Component's own module scope. Route through a small `"use client"` gateway component that calls `dynamic()` itself (see `app/components/LazySections.tsx`), then import *that* into the Server Component. Code splitting only works when the `dynamic()` call site is textually inside a Client Component.

## Sentry error monitoring: the setup wizard can't run in a non-interactive shell

`npx @sentry/wizard@latest -i nextjs` requires a real TTY - it crashes with `ERR_TTY_INIT_FAILED` the moment it reaches the account-login prompt, and this happens regardless of `--non-interactive`, `--ignore-git-changes`, or a pre-set `SENTRY_AUTH_TOKEN` env var. Checked the wizard's own source: even with `--org` and `--project` both supplied, its login flow still calls `askForWizardLogin`, which makes a "wizard hash" request and expects a browser to complete that handshake - there's no CLI/env-var path that skips it in wizard v6.13.0. `SENTRY_AUTH_TOKEN` as an env var is only consumed later, by the *build plugin* (source map upload), not by the wizard's own auth step.

**What worked instead:** use the Sentry Management API directly with an org-scoped auth token (`org:read`, `project:write` scopes) to create the project (`POST /api/0/teams/{org}/{team}/projects/`) and fetch its DSN (`GET /api/0/projects/{org}/{project}/keys/`), then hand-write the SDK config files matching Sentry's current documented structure - verified against the installed `@sentry/nextjs` package's own `.d.ts` files, not just the docs site (a docs-page fetch summary invented a plausible-looking `dataCollection` init option shape that turned out to be real but misdescribed; the type definitions were the actual ground truth).

**Current setup, for reference:**
- `instrumentation-client.ts`, `sentry.server.config.ts`, `sentry.edge.config.ts`, `instrumentation.ts`, `app/global-error.tsx` at the project root (not inside `app/`, except `global-error.tsx` which is a Next.js App Router special file) - this is the current instrumentation-based SDK layout, not the older `sentry.client.config.ts` pattern.
- `next.config.ts` wraps the config with `withSentryConfig(nextConfig, { org: "key-to-gta", project: "keytogta", ... })`. The SDK auto-detects Turbopack and adjusts (confirmed via its own type declarations: it warns that webpack-specific build-time instrumentation doesn't apply under Turbopack, but source maps and the instrumentation-file-based setup we're using both work fine).
- DSN lives in `.env.local` as `NEXT_PUBLIC_SENTRY_DSN` (public value, safe to expose client-side - it's a write-only ingest key, not a secret).
- The source-map upload auth token lives in `.env.sentry-build-plugin` (gitignored, matches Sentry's own convention - kept separate from `.env.local` on purpose), and must also be set as `SENTRY_AUTH_TOKEN` in Vercel's project env vars for the same source maps to upload on production builds.
- No session replay or feedback widget integrations were added - scope was error monitoring only, per what was actually requested.

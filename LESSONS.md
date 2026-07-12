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

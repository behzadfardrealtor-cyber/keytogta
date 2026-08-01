import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Performance tracing off in production: browserTracingIntegration ships
  // regardless of this value under Turbopack (no tree-shake define support
  // yet, unlike the webpack build - confirmed against the installed SDK),
  // so this only stops transactions from being sent, not the bundle weight.
  // Full sampling in dev is fine since dev never ships to a real user.
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0,

  // Error monitoring only - no session replay or feedback widget, which
  // weren't requested and would ship extra client JS.
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

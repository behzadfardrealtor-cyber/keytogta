import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Trace a sample of transactions for performance monitoring. Keep this low
  // in production to control event volume/cost; full sampling in dev is fine.
  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,

  // Error monitoring only - no session replay or feedback widget, which
  // weren't requested and would ship extra client JS.
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

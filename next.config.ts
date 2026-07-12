import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
};

export default withSentryConfig(nextConfig, {
  org: "key-to-gta",
  project: "keytogta",
  // authToken is read from the SENTRY_AUTH_TOKEN env var (.env.sentry-build-plugin
  // locally, a Vercel env var in production) - never hardcode it here.
  silent: !process.env.CI,
  widenClientFileUpload: true,
});

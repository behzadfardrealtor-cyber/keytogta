import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  experimental: {
    inlineCss: true,
  },
  images: {
    // Next.js 16 requires an explicit allowlist for `quality`; 75 is the
    // implicit default already used everywhere else, 60 is only for the
    // area guide images in AreaGuidesSection.tsx that opt into it.
    qualities: [60, 75],
  },
  async headers() {
    return [
      {
        // Static images in /public aren't content-hashed, so this is a
        // deliberate tradeoff: replacing a file at the same path won't be
        // seen by returning visitors until the year-long cache expires.
        // Acceptable here since these are stable marketing photos/logos
        // that change rarely, if ever.
        source: "/:path*.(jpg|jpeg|png|webp|avif|ico|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
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

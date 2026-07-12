"use client";

import dynamic from "next/dynamic";

// Next.js only code-splits a dynamic() import when the call site itself is
// inside a Client Component - a Server Component dynamically importing a
// Client Component does NOT get real code splitting (per
// node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md: "When a
// Server Component dynamically imports a Client Component, automatic code
// splitting is currently not supported"). app/page.tsx is a Server
// Component, so calling dynamic() there for these two genuinely-interactive
// sections was silently not deferring their JS at all - confirmed via the
// production network waterfall, where their chunk was requested at ~300ms
// alongside everything else instead of after the critical content. Moving
// the dynamic() call into this small Client Component gateway is the
// documented fix.
export const LazyReviewsSection = dynamic(() => import("./ReviewsSection"));
export const LazyRentalReadinessSection = dynamic(() => import("./RentalReadinessSection"));

import type { MetadataRoute } from "next";

const BASE_URL = "https://www.keytogta.ca";

const areaSlugs = [
  "north-york",
  "vaughan",
  "richmond-hill",
  "markham",
  "scarborough",
  "toronto",
];

const contentPages = [
  "rental-guides",
  "renting-condo-toronto-before-signing-lease",
  "rental-documents/checklist-ontario",
  "credit-score-rental-application-gta",
  "newcomer-rental-help-gta",
  "persian-newcomer-neighbourhoods-gta",
  "ontario-tenant-rights-gta",
  "bill-60-ontario-tenant-changes-2026",
  "cheapest-areas-to-rent-gta",
  "guarantor-vs-cosigner-ontario-rentals",
  "n12-eviction-notice-ontario-guide",
  "rent-toronto-without-canadian-credit",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL + "/",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: BASE_URL + "/review",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: BASE_URL + "/privacy",
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: BASE_URL + "/about",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...areaSlugs.map((slug) => ({
      url: BASE_URL + "/rent/" + slug,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...contentPages.map((path) => ({
      url: BASE_URL + "/" + path,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

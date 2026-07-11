import type { MetadataRoute } from "next";

const BASE_URL = "https://www.keytogta.ca";

const areaSlugs = [
  "north-york",
  "vaughan",
  "richmond-hill",
  "markham",
  "scarborough",
];

const contentPages = [
  "rental-documents/checklist-ontario",
  "credit-score-rental-application-gta",
  "newcomer-rental-help-gta",
  "persian-newcomer-neighbourhoods-gta",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE_URL + "/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: BASE_URL + "/review",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: BASE_URL + "/privacy",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: BASE_URL + "/about",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...areaSlugs.map((slug) => ({
      url: BASE_URL + "/rent/" + slug,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...contentPages.map((path) => ({
      url: BASE_URL + "/" + path,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
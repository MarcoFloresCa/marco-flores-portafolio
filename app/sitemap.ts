import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://marcoflores.cl",
      lastModified: new Date("2026-08-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

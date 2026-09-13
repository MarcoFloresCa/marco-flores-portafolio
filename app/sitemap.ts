import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://marcoflores.cl",
      lastModified: new Date("2026-08-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://marcoflores.cl/proyectos/orion",
      lastModified: new Date("2026-09-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

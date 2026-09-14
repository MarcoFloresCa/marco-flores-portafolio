import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://marcoflores.cl",
      lastModified: new Date("2026-09-13"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://marcoflores.cl/salesforce",
      lastModified: new Date("2026-09-13"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://marcoflores.cl/proyectos",
      lastModified: new Date("2026-09-13"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://marcoflores.cl/proyectos/orion",
      lastModified: new Date("2026-09-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://marcoflores.cl/proyectos/google-drive-salesforce",
      lastModified: new Date("2026-09-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://marcoflores.cl/blog",
      lastModified: new Date("2026-09-13"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://marcoflores.cl/blog/integraciones-rest-desde-apex",
      lastModified: new Date("2026-09-13"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: "https://marcoflores.cl/privacy",
      lastModified: new Date("2026-09-14"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}

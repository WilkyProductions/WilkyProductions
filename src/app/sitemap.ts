import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/videos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/photography", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/design", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/website-design", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/review", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

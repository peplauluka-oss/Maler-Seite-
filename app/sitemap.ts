import type { MetadataRoute } from "next";
import { site, services, districts } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const now = new Date();

  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/leistungen", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/maler", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/gewerbekunden", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/ueber-uns", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/kontakt", priority: 0.8, changeFrequency: "yearly" as const },
    { url: "/impressum", priority: 0.2, changeFrequency: "yearly" as const },
    { url: "/datenschutz", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  const servicePages = services.map((s) => ({
    url: `/leistungen/${s.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const districtPages = districts.map((d) => ({
    url: `/maler/${d.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages, ...districtPages].map((p) => ({
    url: `${base}${p.url}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}

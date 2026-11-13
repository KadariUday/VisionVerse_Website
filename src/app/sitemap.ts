import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projectsData } from "@/config/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/pricing",
    "/process",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.9 : 0.7,
  }));

  return [...staticPages, ...projectPages];
}

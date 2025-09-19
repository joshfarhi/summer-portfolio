import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://joshuafarhi.com";

  const routes = [
    "",
    "/about",
    "/work",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/work" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}



import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/blog"],
    },
    sitemap: "https://joshuafarhi.com/sitemap.xml",
    host: "https://joshuafarhi.com",
  };
}



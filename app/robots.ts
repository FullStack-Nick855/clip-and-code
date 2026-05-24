import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://clipandcode.com/sitemap.xml",
    host: "https://clipandcode.com",
  };
}

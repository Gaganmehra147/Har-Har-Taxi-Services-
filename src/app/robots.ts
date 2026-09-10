import { MetadataRoute } from "next";
import { BUSINESS_CONFIG } from "@/data/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BUSINESS_CONFIG.siteUrl}/sitemap.xml`,
  };
}

import { MetadataRoute } from "next";
import { BUSINESS_CONFIG } from "@/data/business";
import { ROUTES_DATA } from "@/data/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_CONFIG.siteUrl;

  // Static core service & company pages
  const staticPages = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: "daily" as const },
    { url: `${baseUrl}/taxi-service-in-jabalpur/`, priority: 0.95, changeFrequency: "daily" as const },
    { url: `${baseUrl}/cab-service-jabalpur/`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/taxi-booking-jabalpur/`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/local-taxi-jabalpur/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/outstation-taxi-jabalpur/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/airport-taxi-jabalpur/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/railway-station-taxi-jabalpur/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/one-way-taxi-jabalpur/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/round-trip-taxi-jabalpur/`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/car-rental-jabalpur/`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/routes/`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about/`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact/`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  // Route pages (10 destinations)
  const routePages = ROUTES_DATA.map((r) => ({
    url: `${baseUrl}/routes/${r.slug}/`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
    lastModified: new Date(),
  }));

  return [...staticPages, ...routePages].map((page) => ({
    ...page,
    lastModified: new Date(),
  }));
}

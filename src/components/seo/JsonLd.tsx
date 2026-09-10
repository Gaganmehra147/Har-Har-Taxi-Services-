import React from "react";
import { BUSINESS_CONFIG } from "@/data/business";

interface JsonLdProps {
  breadcrumbs?: { name: string; item: string }[];
  faqs?: { q: string; a: string }[];
  pageType?: "Home" | "Service" | "Route" | "About" | "Contact";
  customData?: Record<string, unknown>;
}

export default function JsonLd({ breadcrumbs, faqs, pageType = "Home", customData }: JsonLdProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": `${BUSINESS_CONFIG.siteUrl}/#business`,
    "name": BUSINESS_CONFIG.name,
    "image": `${BUSINESS_CONFIG.siteUrl}/images/har-har-taxi-jabalpur.jpg`,
    "telephone": BUSINESS_CONFIG.phoneRaw,
    "url": BUSINESS_CONFIG.siteUrl,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wright Town / Madan Mahal Station Area",
      "addressLocality": "Jabalpur",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "482002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_CONFIG.coordinates.latitude,
      "longitude": BUSINESS_CONFIG.coordinates.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Jabalpur" },
      { "@type": "AdministrativeArea", "name": "Madhya Pradesh" }
    ],
    "paymentAccepted": "Cash, UPI, Online Bank Transfer",
    "currenciesAccepted": "INR"
  };

  const breadcrumbsSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith("http") ? crumb.item : `${BUSINESS_CONFIG.siteUrl}${crumb.item}`
    }))
  } : null;

  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {breadcrumbsSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {customData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(customData) }}
        />
      )}
    </>
  );
}

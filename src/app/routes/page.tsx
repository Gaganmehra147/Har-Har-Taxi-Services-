import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES_DATA } from "@/data/routes";
import { BUSINESS_CONFIG } from "@/data/business";
import PopularRoutes from "@/components/sections/PopularRoutes";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import JsonLd from "@/components/seo/JsonLd";
import { MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Popular Taxi Routes from Jabalpur | Har Har Taxi Services",
  description:
    "Explore popular outstation taxi routes from Jabalpur to Kanha, Bandhavgarh, Bhedaghat, Pachmarhi, Khajuraho, Bhopal, Indore, and Nagpur. Transparent fares & verified drivers.",
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/routes/`,
  },
};

export default function RoutesHubPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Popular Routes", item: "/routes/" }
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} pageType="Route" />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
            <Link href="/" className="hover:text-zinc-700 dark:text-zinc-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-700 dark:text-zinc-300">Popular Routes</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
              Intercity &amp; Tourist Corridors
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white font-display tracking-tight leading-tight">
              Popular Taxi Routes from Jabalpur
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Jabalpur is strategically located as the central gateway to world-renowned tiger reserves, UNESCO heritage monuments, hill stations, and major economic hubs. Browse our dedicated route guides for travel distances, estimated fares, and highway tips.
            </p>
          </div>
        </div>
      </section>

      {/* Routes Grid Component */}
      <PopularRoutes />

      <FinalCta />
    </>
  );
}

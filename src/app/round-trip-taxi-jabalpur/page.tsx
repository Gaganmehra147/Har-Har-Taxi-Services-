import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import BookingCard from "@/components/booking/BookingCard";
import FleetSection from "@/components/sections/FleetSection";
import PopularRoutes from "@/components/sections/PopularRoutes";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS_CONFIG } from "@/data/business";
import { Repeat, Users, Compass, ShieldCheck, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Round Trip Taxi Jabalpur | Book a Return Cab | Har Har Taxi",
  description:
    "Comfortable return-trip taxi service from Jabalpur. Dedicated chauffeur and AC car for multi-day wildlife safaris, family vacations, and temple pilgrimages.",
  keywords: [
    "round trip taxi jabalpur",
    "round trip cab service jabalpur",
    "jabalpur return taxi booking",
    "multi day taxi package jabalpur",
    "family tour taxi jabalpur"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/round-trip-taxi-jabalpur/`,
  },
};

const roundTripFaqs = [
  {
    q: "Does the chauffeur stay with us during multi-day tours?",
    a: "Yes! On all round-trip bookings, your dedicated car and driver remain exclusively at your disposal for local transit, resort transfers, and return journey back to Jabalpur."
  },
  {
    q: "How is the minimum daily running distance calculated?",
    a: "Standard round-trip outstation bookings are calculated on a minimum 250 km or 300 km daily average, ensuring the most economical per-km rates for your itinerary."
  },
  {
    q: "Are driver night stay allowances included?",
    a: "Our quotes clearly outline daily driver night allowances so you have zero ambiguity or awkward discussions on the road."
  }
];

export default function RoundTripTaxiJabalpurPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Round Trip Taxi Jabalpur", item: "/round-trip-taxi-jabalpur/" }
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} faqs={roundTripFaqs} pageType="Service" />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
            <Link href="/" className="hover:text-zinc-700 dark:text-zinc-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-700 dark:text-zinc-300">Round Trip Taxi Jabalpur</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
                Multi-Day Family Tours &amp; Safaris
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white font-display tracking-tight leading-tight">
                Round Trip Taxi Service in Jabalpur
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Enjoy total travel flexibility with Har Har Taxi Services. Keep your dedicated private car and chauffeur throughout your entire trip—whether it is a weekend safari at Kanha, a hill station tour in Pachmarhi, or an outstation family wedding.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="btn-saffron px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 shadow-glow-saffron"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a round-trip taxi from Jabalpur.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Round-Trip Quote</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingCard initialPickup="Jabalpur" initialDestination="Kanha / Pachmarhi / Khajuraho" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-display mb-4">
              The Ultimate Comfort for Family Holidays
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Having your own taxi waiting right outside your jungle resort or hotel means you can set your own departure schedule, explore remote spots without local transport hassles, and return to Jabalpur at your own pace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <Users className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">Ideal for Groups &amp; Families</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Spacious 6-seater Ertiga and 7-seater Innova Crysta provide supreme legroom and luggage storage for elders and children.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <Compass className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">Flexible Sightseeing Stops</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Pause for scenic roadside views, historical monuments, local tea stalls, and clean dining dhabas whenever your group desires.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">Safe &amp; Courteous Chauffeurs</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Our drivers are respectful, patient, and knowledgeable about local MP tourist rules, safari permits, and road conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PopularRoutes />
      <FleetSection />
      <FaqAccordion faqs={roundTripFaqs} />
      <FinalCta />
    </>
  );
}

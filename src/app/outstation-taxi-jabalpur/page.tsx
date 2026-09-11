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
import { ShieldCheck, MapPin, Compass, Car, Phone, MessageSquare, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Outstation Taxi Jabalpur | Intercity Cab Booking | Har Har Taxi",
  description:
    "Book outstation taxi from Jabalpur for Kanha, Bandhavgarh, Pachmarhi, Khajuraho, Bhopal, and Nagpur. Verified highway drivers, clean AC cars, one-way & round-trips.",
  keywords: [
    "outstation taxi jabalpur",
    "outstation cab jabalpur",
    "jabalpur outstation cab service",
    "intercity taxi from jabalpur",
    "outstation car rental jabalpur"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/outstation-taxi-jabalpur/`,
  },
};

const outstationFaqs = [
  {
    q: "Do you provide one-way outstation taxi from Jabalpur?",
    a: "Yes, we provide dedicated one-way outstation drops to Bhopal, Indore, Katni, Mandla, and Nagpur so you only pay for one-way travel."
  },
  {
    q: "Are highway toll taxes and state permits included in the quote?",
    a: "We provide 100% transparent pricing. You can choose an all-inclusive quote covering toll taxes and state permits, or a standard per-km rate where actual tolls are paid at the toll plazas."
  },
  {
    q: "Can the driver accompany us for multi-day wildlife safaris at Kanha or Bandhavgarh?",
    a: "Yes, our round-trip packages include a dedicated vehicle and chauffeur throughout your multi-day itinerary, including safari gate transfers and resort travel."
  }
];

export default function OutstationTaxiJabalpurPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Outstation Taxi Jabalpur", item: "/outstation-taxi-jabalpur/" }
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} faqs={outstationFaqs} pageType="Service" />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
            <Link href="/" className="hover:text-zinc-700 dark:text-zinc-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-700 dark:text-zinc-300">Outstation Taxi Jabalpur</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
                Intercity & Highway Journeys
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white font-display tracking-tight leading-tight">
                Outstation Taxi Service in Jabalpur
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Planning an intercity journey from Jabalpur? Travel with complete peace of mind. Har Har Taxi Services offers well-maintained outstation cabs with verified, highway-certified drivers for family vacations, national park safaris, and business trips.
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
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book an outstation taxi from Jabalpur.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Outstation Quote</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingCard initialPickup="Jabalpur" initialDestination="Kanha / Bhopal / Pachmarhi" />
            </div>
          </div>
        </div>
      </section>

      {/* Outstation Benefits */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-display mb-4">
              Why Book Outstation Cabs With Har Har Taxi Services?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Highway driving demands mechanical reliability, skilled drivers, and honest communication. We ensure every outstation journey from Jabalpur is safe and relaxing for you and your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">Experienced Highway Drivers</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Our drivers have years of experience navigating national highways (NH-30, NH-44, NH-45) and ghat roads like Pachmarhi and Pench with calm, defensive driving.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <Car className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">Clean Sanitized Cars</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Vehicles are inspected for tyre tread, brake performance, AC cooling, and engine health before every outstation dispatch.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <Compass className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">Flexible Itineraries</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Enjoy total freedom to pause at scenic vantage points, hygienic family restaurants, and heritage sites along the highway.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PopularRoutes />
      <FleetSection />
      <FaqAccordion faqs={outstationFaqs} />
      <FinalCta />
    </>
  );
}

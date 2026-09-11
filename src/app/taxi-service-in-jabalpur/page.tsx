import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import BookingCard from "@/components/booking/BookingCard";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FleetSection from "@/components/sections/FleetSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PopularRoutes from "@/components/sections/PopularRoutes";
import LocalAreas from "@/components/sections/LocalAreas";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS_CONFIG, GENERAL_FAQS } from "@/data/business";
import { 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Car, 
  ArrowRight,
  ShieldCheck,
  Compass,
  Plane,
  Train,
  ArrowRightCircle,
  Repeat
} from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Service in Jabalpur | Har Har Taxi Services",
  description:
    "Looking for a reliable taxi service in Jabalpur? Har Har Taxi Services offers local, outstation, airport and one-way taxi booking. Call or WhatsApp to book.",
  keywords: [
    "taxi service in jabalpur",
    "best taxi service in jabalpur",
    "taxi services in jabalpur",
    "cab service in jabalpur",
    "jabalpur cab service",
    "taxi booking in jabalpur"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/taxi-service-in-jabalpur/`,
  },
};

export default function TaxiServiceInJabalpurPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Taxi Service in Jabalpur", item: "/taxi-service-in-jabalpur/" }
  ];

  return (
    <>
      <JsonLd
        breadcrumbs={breadcrumbs}
        faqs={GENERAL_FAQS}
        pageType="Service"
      />

      {/* Page Hero */}
      <section className="relative pt-12 pb-16 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
            <Link href="/" className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-zinc-700 dark:text-zinc-300">Taxi Service in Jabalpur</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
                Primary City & Outstation Cab Booking
              </span>

              <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white font-display tracking-tight leading-tight">
                Taxi Service in Jabalpur
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Looking for a dependable, transparently priced taxi service in Jabalpur? Har Har Taxi Services offers well-maintained AC cabs for city transfers, corporate commutes, Dumna Airport shuttles, and intercity trips across Madhya Pradesh.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-zinc-600 dark:text-zinc-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <ShieldCheck className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0" />
                  <span>Verified Drivers</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>On-Time Arrival</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <Car className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Clean AC Fleet</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="btn-saffron px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 shadow-glow-saffron"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi in Jabalpur.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingCard initialPickup="Jabalpur City" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Semantic H2 Hierarchy */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section: Taxi Services We Offer in Jabalpur */}
          <div>
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white font-display">
                Taxi Services We Offer in Jabalpur
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 leading-relaxed">
                Whether you need a quick station pickup, a full-day city rental for wedding functions, or an outstation holiday cab, Har Har Taxi Services has tailored packages designed for maximum convenience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Local Taxi */}
              <div className="glass-panel p-6 rounded-2xl">
                <Car className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">
                  Local Taxi Service
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                  Doorstep pickups across Wright Town, Napier Town, Civil Lines, and Vijay Nagar for business or leisure.
                </p>
                <Link
                  href="/local-taxi-jabalpur/"
                  className="text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1"
                >
                  <span>Learn about local packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Outstation Taxi */}
              <div className="glass-panel p-6 rounded-2xl">
                <Compass className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">
                  Outstation Taxi Service
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                  Comfortable intercity sedans and SUVs for Kanha, Bandhavgarh, Pachmarhi, Khajuraho, and Bhopal.
                </p>
                <Link
                  href="/outstation-taxi-jabalpur/"
                  className="text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1"
                >
                  <span>View outstation cab options</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Airport Taxi */}
              <div className="glass-panel p-6 rounded-2xl">
                <Plane className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">
                  Airport Taxi Service
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                  Dedicated Dumna Airport (JLR) pickup and drop with real-time flight tracking to prevent delays.
                </p>
                <Link
                  href="/airport-taxi-jabalpur/"
                  className="text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1"
                >
                  <span>Check airport transfer rates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Railway Station Taxi */}
              <div className="glass-panel p-6 rounded-2xl">
                <Train className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">
                  Railway Station Taxi Service
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                  Zero waiting queues at Jabalpur Junction (JBP) and Madan Mahal (MML) stations with luggage assistance.
                </p>
                <Link
                  href="/railway-station-taxi-jabalpur/"
                  className="text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1"
                >
                  <span>Book station cab</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* One Way Taxi */}
              <div className="glass-panel p-6 rounded-2xl">
                <ArrowRightCircle className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">
                  One Way Taxi Service
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                  Pay only for the distance you travel from Jabalpur to Bhopal, Indore, Katni, Mandla, or Nagpur.
                </p>
                <Link
                  href="/one-way-taxi-jabalpur/"
                  className="text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1"
                >
                  <span>Check one-way routes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Round Trip Taxi */}
              <div className="glass-panel p-6 rounded-2xl">
                <Repeat className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">
                  Round Trip Taxi Service
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                  Dedicated private vehicle and chauffeur for multi-day tourism, family weddings, and wildlife excursions.
                </p>
                <Link
                  href="/round-trip-taxi-jabalpur/"
                  className="text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1"
                >
                  <span>Explore round-trip packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FLEET SHOWCASE */}
      <FleetSection />

      {/* POPULAR ROUTES SECTION */}
      <PopularRoutes />

      {/* WHY CHOOSE HAR HAR TAXI SERVICES */}
      <WhyChooseUs />

      {/* LOCAL SERVICE AREAS */}
      <LocalAreas />

      {/* FAQS */}
      <FaqAccordion
        faqs={GENERAL_FAQS}
        title="Frequently Asked Questions"
        subtitle="Answers to common queries about hiring a taxi in Jabalpur with Har Har Taxi Services."
      />

      {/* FINAL CALL TO ACTION */}
      <FinalCta />
    </>
  );
}

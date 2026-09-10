import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import BookingCard from "@/components/booking/BookingCard";
import FleetSection from "@/components/sections/FleetSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS_CONFIG, GENERAL_FAQS } from "@/data/business";
import { ShieldCheck, Clock, Car, Phone, MessageSquare, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cab Service in Jabalpur | Book Your Cab | Har Har Taxi Services",
  description:
    "Looking for a reliable cab service in Jabalpur? Book comfortable AC cabs for local city travel, Dumna airport, railway station and outstation trips.",
  keywords: [
    "cab service in jabalpur",
    "cab booking in jabalpur",
    "jabalpur cab service",
    "best cab service in jabalpur",
    "online cab booking jabalpur"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/cab-service-jabalpur/`,
  },
};

export default function CabServiceJabalpurPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Cab Service in Jabalpur", item: "/cab-service-jabalpur/" }
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} faqs={GENERAL_FAQS} pageType="Service" />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-charcoal-900 to-charcoal-950 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-saffron-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-saffron-400">Cab Service in Jabalpur</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-saffron-500/15 text-saffron-400 border border-saffron-500/30">
                Punctual & Affordable
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
                Cab Service in Jabalpur
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Experience hassle-free cab booking in Jabalpur with Har Har Taxi Services. We provide punctual, air-conditioned cabs for local errands, airport drops, railway station pickups, and outstation trips with courteous verified drivers.
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
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a cab in Jabalpur.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Cab Booking</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingCard initialPickup="Jabalpur" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
              Jabalpur Cab Booking Made Easy
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
              Finding a clean, reliable cab at fair rates shouldn&apos;t require endless bargaining or dealing with app surges. Har Har Taxi Services offers transparent per-kilometer and fixed package cab services across all Jabalpur residential and commercial areas, from Civil Lines and Wright Town to Madan Mahal and Tilhari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white font-display mb-2">Local City Cabs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Convenient point-to-point and hourly packages for shopping, doctor appointments, or corporate meetings throughout Jabalpur.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white font-display mb-2">Outstation Cabs</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Long-distance highway cabs to wildlife sanctuaries like Kanha and Bandhavgarh, hill stations like Pachmarhi, and major MP cities.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white font-display mb-2">Airport & Station Transfers</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prompt pickup and drops for Dumna Airport (JLR) flights and trains arriving at Jabalpur Junction or Madan Mahal Station.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
      <WhyChooseUs />
      <FaqAccordion faqs={GENERAL_FAQS} />
      <FinalCta />
    </>
  );
}

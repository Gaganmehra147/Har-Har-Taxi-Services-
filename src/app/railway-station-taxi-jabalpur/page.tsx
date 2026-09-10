import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import BookingCard from "@/components/booking/BookingCard";
import FleetSection from "@/components/sections/FleetSection";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS_CONFIG } from "@/data/business";
import { Train, Clock, ShieldCheck, MapPin, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Railway Station Taxi Jabalpur | Station Cab Service | Har Har Taxi",
  description:
    "Reliable taxi service from Jabalpur Railway Station (JBP) and Madan Mahal Station (MML). Pre-book your station cab for local hotel drops and outstation journeys.",
  keywords: [
    "railway station taxi jabalpur",
    "railway station cab jabalpur",
    "taxi from jabalpur railway station",
    "jabalpur junction cab booking",
    "madan mahal railway station taxi"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/railway-station-taxi-jabalpur/`,
  },
};

const stationFaqs = [
  {
    q: "Which gate at Jabalpur Junction does the taxi driver pick up from?",
    a: "Our driver can coordinate pickup at either Platform 1 (Main City Side / Civil Lines Gate) or Platform 6 (Cantonment Side Gate) according to your train coach position."
  },
  {
    q: "Can I book a taxi from Madan Mahal Railway Station (MML)?",
    a: "Yes, we regularly provide pickups and drops for passengers boarding or alighting at Madan Mahal Station."
  },
  {
    q: "What happens if my train is delayed?",
    a: "Share your PNR or train number when reserving. We track railway arrivals so your chauffeur is ready when your train pulls into the station."
  }
];

export default function RailwayStationTaxiJabalpurPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Railway Station Taxi Jabalpur", item: "/railway-station-taxi-jabalpur/" }
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} faqs={stationFaqs} pageType="Service" />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-charcoal-900 to-charcoal-950 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-saffron-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-saffron-400">Railway Station Taxi Jabalpur</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-saffron-500/15 text-saffron-400 border border-saffron-500/30">
                Jabalpur Junction (JBP) & Madan Mahal (MML)
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
                Railway Station Taxi in Jabalpur
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Step off your train and straight into a sanitized, pre-cooled AC taxi. Avoid station auto queues, erratic pricing, and luggage hassles with Har Har Taxi Services.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="btn-saffron px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 shadow-glow-saffron"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Book Station Taxi</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I need a taxi from Jabalpur Railway Station.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Station Booking</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingCard initialPickup="Jabalpur Railway Junction (JBP)" initialDestination="Hotel / Outstation" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
              Direct Station Transfers for Families & Outstation Tourists
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Jabalpur Junction is the prime railway terminus for travelers heading to Kanha National Park, Bandhavgarh, and Bhedaghat. We offer seamless direct transfers straight from the railway platform to your jungle resort or local hotel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <Clock className="w-8 h-8 text-saffron-400 mb-3" />
              <h3 className="text-lg font-bold text-white font-display mb-2">Train Delay Monitoring</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We track Indian Railways live status so you will never be left stranded if your train arrives in the middle of the night.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <Train className="w-8 h-8 text-saffron-400 mb-3" />
              <h3 className="text-lg font-bold text-white font-display mb-2">Platform Gate Coordination</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct phone and WhatsApp coordination before arrival ensures you find your cab right outside the station exit.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-saffron-400 mb-3" />
              <h3 className="text-lg font-bold text-white font-display mb-2">Fixed Upfront Fares</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Say goodbye to station counter haggling. Enjoy clear transparent rates with parking and tolls specified upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
      <FaqAccordion faqs={stationFaqs} />
      <FinalCta />
    </>
  );
}

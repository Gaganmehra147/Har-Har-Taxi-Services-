import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import BookingCard from "@/components/booking/BookingCard";
import FleetSection from "@/components/sections/FleetSection";
import LocalAreas from "@/components/sections/LocalAreas";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS_CONFIG } from "@/data/business";
import { MapPin, Navigation, Compass, Landmark, Briefcase, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Local Taxi Jabalpur | Local Cab Service & Sightseeing | Har Har Taxi",
  description:
    "Book local taxi in Jabalpur for city travel, local sightseeing, business meetings, and shopping. Half-day and full-day AC cab rental packages available.",
  keywords: [
    "local taxi jabalpur",
    "taxi for local sightseeing in jabalpur",
    "local cab service jabalpur",
    "jabalpur city taxi",
    "full day taxi rental jabalpur"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/local-taxi-jabalpur/`,
  },
};

const localFaqs = [
  {
    q: "Do you offer full-day and half-day local taxi packages in Jabalpur?",
    a: "Yes, we offer convenient 4 hours / 40 km half-day packages and 8 hours / 80 km full-day rental packages for local sightseeing, shopping, and business visits within Jabalpur."
  },
  {
    q: "Can the taxi take us to all major sightseeing spots in Jabalpur in a single day?",
    a: "Absolutely. A typical full-day local tour covers Bhedaghat (Dhuandhar Falls & Marble Rocks boating), Chausath Yogini Temple, Balancing Rock, Madan Mahal Fort, Kachnar City Shiva statue, and evening Narmada Aarti at Gwarighat."
  },
  {
    q: "Are the drivers familiar with Jabalpur city routes and local markets?",
    a: "Yes, our drivers are residents of Jabalpur with deep knowledge of local traffic routes, parking facilities, handicraft shops, and authentic food joints."
  }
];

export default function LocalTaxiJabalpurPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Local Taxi Jabalpur", item: "/local-taxi-jabalpur/" }
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} faqs={localFaqs} pageType="Service" />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-charcoal-900 to-charcoal-950 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-saffron-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-saffron-400">Local Taxi Jabalpur</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-saffron-500/15 text-saffron-400 border border-saffron-500/30">
                City Travel & Sightseeing
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
                Local Taxi Service in Jabalpur
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Enjoy comfortable, stress-free travel within Jabalpur city. Whether you need a quick point-to-point drop or a full-day AC car for local sightseeing, Har Har Taxi Services provides clean vehicles and respectful local chauffeurs.
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
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a local taxi in Jabalpur.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book Local Taxi on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingCard initialPickup="Wright Town, Jabalpur" initialDestination="Local Sightseeing" />
            </div>
          </div>
        </div>
      </section>

      {/* Local Sightseeing & Use Cases */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
              Taxi for Local Sightseeing in Jabalpur
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Jabalpur is steeped in natural marble wonders, ancient Gond heritage, and sacred Narmada river ghats. Explore the city&apos;s iconic landmarks in air-conditioned comfort:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <Landmark className="w-8 h-8 text-saffron-400 mb-3" />
              <h3 className="text-lg font-bold text-white font-display mb-2">Bhedaghat & Marble Rocks</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Marvel at the roaring Dhuandhar Falls, take the famous Narmada marble canyon boat ride, and ascend to the 10th-century Chausath Yogini Temple.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <Compass className="w-8 h-8 text-saffron-400 mb-3" />
              <h3 className="text-lg font-bold text-white font-display mb-2">Madan Mahal & Balancing Rock</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Visit the 11th-century Gond fortress of Rani Durgavati atop the rocky ridge and witness the geological marvel of the Balancing Rock.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <Briefcase className="w-8 h-8 text-saffron-400 mb-3" />
              <h3 className="text-lg font-bold text-white font-display mb-2">Gwarighat Evening Aarti</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experience the spiritual grandeur of the evening Narmada Maha Aarti at Gwarighat, accompanied by serene riverbank breeze and devotional lamps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LocalAreas />
      <FleetSection />
      <FaqAccordion faqs={localFaqs} />
      <FinalCta />
    </>
  );
}

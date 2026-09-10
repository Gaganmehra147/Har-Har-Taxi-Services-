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
import { ArrowRightCircle, CheckCircle2, ShieldCheck, BadgeIndianRupee, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "One Way Taxi Jabalpur | Affordable One-Way Cabs | Har Har Taxi",
  description:
    "Book affordable one-way taxi from Jabalpur to Bhopal, Indore, Katni, Mandla, and Nagpur. Pay only for one-way distance without return charges.",
  keywords: [
    "one way taxi jabalpur",
    "one way cab jabalpur",
    "jabalpur to bhopal one way taxi",
    "jabalpur to nagpur one way cab",
    "one way drop taxi jabalpur"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/one-way-taxi-jabalpur/`,
  },
};

const oneWayFaqs = [
  {
    q: "How does one-way taxi pricing work from Jabalpur?",
    a: "Unlike traditional car rentals that charge you round-trip distance even if you only need a drop, our one-way taxi service charges you exclusively for the one-way distance to your destination."
  },
  {
    q: "Which are the most popular one-way routes from Jabalpur?",
    a: "Our frequent one-way corridors include Jabalpur to Bhopal, Jabalpur to Indore, Jabalpur to Katni, Jabalpur to Mandla, and Jabalpur to Nagpur."
  },
  {
    q: "Can I book a one-way taxi for airport drop in another city?",
    a: "Yes! Many clients book one-way cabs from Jabalpur to Nagpur Airport (NAG) or Bhopal Airport (BHO) for domestic and international departures."
  }
];

export default function OneWayTaxiJabalpurPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "One Way Taxi Jabalpur", item: "/one-way-taxi-jabalpur/" }
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} faqs={oneWayFaqs} pageType="Service" />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-charcoal-900 to-charcoal-950 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-saffron-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-saffron-400">One Way Taxi Jabalpur</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-saffron-500/15 text-saffron-400 border border-saffron-500/30">
                Drop-Only Cabs &bull; No Return Fare
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
                One Way Taxi Service from Jabalpur
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Why pay for two-way travel when you only need a drop? Har Har Taxi Services offers transparent, economical one-way cab bookings from Jabalpur to major cities across Madhya Pradesh and Maharashtra.
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
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a one-way taxi from Jabalpur.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp One-Way Booking</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingCard initialPickup="Jabalpur" initialDestination="Bhopal / Nagpur" />
            </div>
          </div>
        </div>
      </section>

      {/* Explaining One-Way Value */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
              What Is One-Way Taxi &amp; How Does It Save You Money?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Traditional car rentals charge customers for round-trip mileage (minimum 250-300 km/day) plus driver return night allowance. Our dedicated one-way routes eliminate these surplus charges. You only pay for your actual point A to point B journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <BadgeIndianRupee className="w-8 h-8 text-saffron-400 mb-3" />
              <h3 className="text-lg font-bold text-white font-display mb-2">Save up to 40%</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Save significantly compared to standard two-way booking tariffs when relocating, catching flights, or taking single-leg business trips.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <ArrowRightCircle className="w-8 h-8 text-saffron-400 mb-3" />
              <h3 className="text-lg font-bold text-white font-display mb-2">Doorstep Pickup & Drop</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cab picks you up directly at your doorstep in Jabalpur and drops you right at your address in Bhopal, Indore, or Nagpur.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-saffron-400 mb-3" />
              <h3 className="text-lg font-bold text-white font-display mb-2">All-Inclusive Fixed Quotes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clear quotes covering driver allowance, fuel, and highway permits agreed upon before your trip begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PopularRoutes />
      <FleetSection />
      <FaqAccordion faqs={oneWayFaqs} />
      <FinalCta />
    </>
  );
}

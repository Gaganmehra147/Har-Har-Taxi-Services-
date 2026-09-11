import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import BookingCard from "@/components/booking/BookingCard";
import FleetSection from "@/components/sections/FleetSection";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS_CONFIG, GENERAL_FAQS } from "@/data/business";
import { Phone, MessageSquare, Calendar, CreditCard, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Booking in Jabalpur | Book a Taxi Online | Har Har Taxi",
  description:
    "Instant online taxi booking in Jabalpur. Reserve your sedan or SUV via WhatsApp or phone call. Transparent fares, zero cancellation fee, advance booking available.",
  keywords: [
    "taxi booking in jabalpur",
    "online taxi booking jabalpur",
    "book taxi jabalpur",
    "cab booking jabalpur",
    "har har taxi booking"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/taxi-booking-jabalpur/`,
  },
};

export default function TaxiBookingJabalpurPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Taxi Booking in Jabalpur", item: "/taxi-booking-jabalpur/" }
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} faqs={GENERAL_FAQS} pageType="Service" />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
            <Link href="/" className="hover:text-zinc-700 dark:text-zinc-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-700 dark:text-zinc-300">Taxi Booking in Jabalpur</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
                Fast & Direct Reservation
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white font-display tracking-tight leading-tight">
                Taxi Booking in Jabalpur
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Need to book a cab right now or reserve a car for an upcoming trip? Har Har Taxi Services offers instant booking via WhatsApp and phone with zero complicated app downloads and transparent fixed quotes.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Booking</span>
                </a>
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="btn-saffron px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 shadow-glow-saffron"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Book ({BUSINESS_CONFIG.phoneDisplay})</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingCard initialPickup="Jabalpur" />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Details & Transparency */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-display mb-4">
              How Taxi Booking Works With Har Har Taxi Services
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              We keep booking straightforward and human. You share your journey requirements, we confirm driver and vehicle details, and the car arrives on time at your specified address.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <Calendar className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">Advance Booking</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Secure your preferred Sedan or 7-seater Innova Crysta days or weeks in advance for family holidays, wildlife safaris, and marriage events.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <CreditCard className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">Transparent Fares</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Zero hidden driver allowances or sudden surge rates. Pay conveniently via UPI, Google Pay, PhonePe, or Cash after completing your trip.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <Clock className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mb-3" />
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white font-display mb-2">24x7 Trip Coordination</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Our support team stays accessible throughout your trip for updates, route guidance, or emergency timing adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <FleetSection />
      <FaqAccordion faqs={GENERAL_FAQS} />
      <FinalCta />
    </>
  );
}

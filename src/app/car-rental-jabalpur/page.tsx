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
import { Car, ShieldCheck, Clock, BadgeCheck, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Car Rental in Jabalpur | Har Har Taxi Services",
  description:
    "Premium car rental with driver in Jabalpur. Rent Sedans, SUVs, and Innova Crysta for corporate events, weddings, city travel, and MP tourism.",
  keywords: [
    "car rental in jabalpur",
    "rent a car with driver jabalpur",
    "innova rental jabalpur",
    "luxury car rental jabalpur",
    "jabalpur car hire service"
  ],
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/car-rental-jabalpur/`,
  },
};

export default function CarRentalJabalpurPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Car Rental in Jabalpur", item: "/car-rental-jabalpur/" }
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
            <span className="text-saffron-400">Car Rental in Jabalpur</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-saffron-500/15 text-saffron-400 border border-saffron-500/30">
                Chauffeur-Driven Vehicles
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
                Car Rental Service in Jabalpur
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Looking for a dependable car rental with driver in Jabalpur? Har Har Taxi Services offers pristine Swift Dzire, Maruti Ertiga, and Toyota Innova Crysta rentals for corporate delegates, marriage functions, and extended MP wildlife vacations.
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
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to rent a car with driver in Jabalpur.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Rental Inquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingCard initialPickup="Jabalpur" initialDestination="Local / Outstation Rental" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
              Premium Chauffeur-Driven Car Hire
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              We specialize in chauffeur-driven rentals so you never have to worry about self-drive security deposits, city parking hassles, unfamiliar highway navigation, or mechanical breakdowns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <BadgeCheck className="w-8 h-8 text-saffron-400 mb-3" />
              <h3 className="text-lg font-bold text-white font-display mb-2">Corporate &amp; VIP Rentals</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Executive cars for High Court lawyers, state government consultants, and visiting corporate delegates in Civil Lines and Wright Town.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <Car className="w-8 h-8 text-saffron-400 mb-3" />
              <h3 className="text-lg font-bold text-white font-display mb-2">Wedding &amp; Event Fleets</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multiple synchronized sedans and SUVs for guest pickup from railway stations, hotel shuttles, and banquet halls.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-saffron-400 mb-3" />
              <h3 className="text-lg font-bold text-white font-display mb-2">Long-Term Tourist Hire</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated cars for multi-week MP heritage tours covering Khajuraho, Panna, Bandhavgarh, Kanha, and Pachmarhi.
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

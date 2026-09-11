import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/sections/TrustBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FleetSection from "@/components/sections/FleetSection";
import FinalCta from "@/components/sections/FinalCta";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS_CONFIG } from "@/data/business";
import { ShieldCheck, HeartHandshake, MapPin, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Har Har Taxi Services Jabalpur",
  description:
    "Learn about Har Har Taxi Services, Jabalpur's premier taxi and cab booking provider. Dedicated to punctual pickups, verified drivers, and transparent pricing.",
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/about/`,
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about/" }
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} pageType="About" />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
            <Link href="/" className="hover:text-zinc-700 dark:text-zinc-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-700 dark:text-zinc-300">About Us</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
              Our Journey &amp; Values
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white font-display tracking-tight leading-tight">
              About Har Har Taxi Services
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Founded with a mission to deliver trustworthy, comfortable, and honest taxi services across Jabalpur and Central India, Har Har Taxi Services is your reliable travel partner for local commutes, airport transfers, and outstation wildlife expeditions.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Story & Commitment */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white font-display">
                Rooted in Jabalpur, Serving Travellers Across India
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Jabalpur is a city of rich natural beauty, flanked by the holy Narmada River and serving as the primary tourist launchpad for India&apos;s most celebrated tiger reserves—Kanha and Bandhavgarh.
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Too often, travelers arriving at Dumna Airport or Jabalpur Junction face frustrating haggling, hidden charges, or poor vehicle hygiene. Har Har Taxi Services was built to change that: offering verified chauffeurs, sparkling clean AC cabs, and transparent rates confirmed upfront on WhatsApp.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-zinc-200/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Genuine Local Expertise</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Our chauffeurs know every street, ghat, shortcut, and highway detour across Madhya Pradesh.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Safety &amp; Reliability First</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Vehicles undergo rigorous pre-trip inspection with regular maintenance and complete emergency equipment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Zero Hidden Surcharges</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">No surge pricing during rain or festive seasons. What we quote on WhatsApp is what you pay.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Glass Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-6 rounded-2xl text-center">
                <ShieldCheck className="w-8 h-8 text-zinc-700 dark:text-zinc-300 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-zinc-950 dark:text-white font-display">100%</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Verified Chauffeurs</p>
              </div>

              <div className="glass-panel p-6 rounded-2xl text-center">
                <Award className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-zinc-950 dark:text-white font-display">4.9★</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Google Rating</p>
              </div>

              <div className="glass-panel p-6 rounded-2xl text-center">
                <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-zinc-950 dark:text-white font-display">12+</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Jabalpur Zones</p>
              </div>

              <div className="glass-panel p-6 rounded-2xl text-center">
                <HeartHandshake className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-zinc-950 dark:text-white font-display">24x7</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Dedicated Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
      <WhyChooseUs />
      <FinalCta />
    </>
  );
}

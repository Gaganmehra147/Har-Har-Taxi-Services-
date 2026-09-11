import React from "react";
import WhiteSwiftShowcase from "@/components/vehicle/WhiteSwiftShowcase";
import BookingCard from "@/components/booking/BookingCard";
import TrustBar from "@/components/sections/TrustBar";
import FleetSection from "@/components/sections/FleetSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FinalCta from "@/components/sections/FinalCta";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS_CONFIG, GENERAL_FAQS } from "@/data/business";
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Star, Sparkles, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <JsonLd
        faqs={GENERAL_FAQS}
        pageType="Home"
      />

      {/* HERO SECTION - MONOCHROME LUXURY THEME */}
      <section className="relative pt-4 sm:pt-8 pb-12 sm:pb-16 overflow-hidden border-b border-zinc-200 dark:border-zinc-800/80">
        {/* Ambient Subtle Glow */}
        <div className="hidden sm:block absolute top-10 left-10 w-96 h-96 bg-zinc-200/50 dark:bg-white/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="hidden sm:block absolute top-20 right-10 w-96 h-96 bg-zinc-300/40 dark:bg-zinc-700/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            
            {/* Left Column: Headlines, Trust, CTAs, and White Swift Showcase */}
            <div className="lg:col-span-7 space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-zinc-900 dark:text-white" />
                <span>#1 Trusted Cab Partner in Jabalpur</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl xl:text-6xl font-black text-zinc-950 dark:text-white font-display tracking-tight leading-[1.12]">
                Reliable Taxi Service in{" "}
                <span className="underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-8">
                  Jabalpur
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xs xs:text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl font-normal">
                {BUSINESS_CONFIG.subheadline}
              </p>

              {/* CTA Action Buttons */}
              <div className="grid grid-cols-1 xs:grid-cols-3 sm:flex sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                <a
                  href="#book"
                  className="btn-royal px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform"
                >
                  <span>Book a Taxi</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi in Jabalpur.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="btn-gold px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Key Quick Badges */}
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-2 sm:gap-4 text-[10px] xs:text-xs text-zinc-600 dark:text-zinc-400 pt-1">
                <div className="flex items-center gap-1.5 justify-center sm:justify-start bg-zinc-100 dark:bg-zinc-900/70 p-2 sm:p-0 rounded-lg border border-zinc-200 dark:border-zinc-800 sm:border-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-900 dark:text-white shrink-0" />
                  <span className="truncate font-semibold">Verified Drivers</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center sm:justify-start bg-zinc-100 dark:bg-zinc-900/70 p-2 sm:p-0 rounded-lg border border-zinc-200 dark:border-zinc-800 sm:border-0">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                  <span className="truncate font-semibold">4.9★ Rated</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center sm:justify-start bg-zinc-100 dark:bg-zinc-900/70 p-2 sm:p-0 rounded-lg border border-zinc-200 dark:border-zinc-800 sm:border-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="truncate font-semibold">Zero Cancel Fee</span>
                </div>
              </div>

              {/* REALISTIC WHITE SWIFT DZIRE CAR SHOWCASE */}
              <div className="pt-2">
                <WhiteSwiftShowcase />
              </div>
            </div>

            {/* Right Column: Prominent Interactive Booking Card */}
            <div className="lg:col-span-5 sticky top-20" id="book">
              <BookingCard initialPickup="Jabalpur" />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* FLEET SECTION */}
      <FleetSection />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* GOOGLE REVIEWS SECTION */}
      <ReviewsSection />

      {/* FAQ SECTION */}
      <FaqAccordion
        faqs={GENERAL_FAQS}
        title="Frequently Asked Questions"
        subtitle="Common questions from Jabalpur residents and tourists regarding taxi booking, rates, and fleet options."
      />

      {/* FINAL CTA */}
      <FinalCta />
    </>
  );
}

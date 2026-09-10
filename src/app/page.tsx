import React from "react";
import WhiteSwiftShowcase from "@/components/vehicle/WhiteSwiftShowcase";
import BookingCard from "@/components/booking/BookingCard";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FleetSection from "@/components/sections/FleetSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PopularRoutes from "@/components/sections/PopularRoutes";
import LocalAreas from "@/components/sections/LocalAreas";
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

      {/* HERO SECTION - ROYAL BLUE & GOLD THEME */}
      <section className="relative pt-4 sm:pt-6 pb-12 overflow-hidden border-b border-navy-800/80">
        {/* Ambient Royal Blue & Gold glow */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-royal-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            
            {/* Left Column: Headlines, Trust, CTAs, and White Swift Showcase */}
            <div className="lg:col-span-7 space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-royal-600/20 text-royal-300 border border-royal-500/40 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>#1 Trusted Cab Partner in Jabalpur</span>
              </div>

              {/* Exact H1 requested */}
              <h1 className="text-2xl xs:text-3xl sm:text-5xl xl:text-6xl font-black text-white font-display tracking-tight leading-[1.15]">
                Reliable Taxi Service in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-400 via-sky-300 to-gold-400">
                  Jabalpur
                </span>
              </h1>

              {/* Exact Subheadline */}
              <p className="text-xs xs:text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                {BUSINESS_CONFIG.subheadline}
              </p>

              {/* CTA Action Buttons - Full-width stacked on mobile, inline on desktop */}
              <div className="grid grid-cols-1 xs:grid-cols-3 sm:flex sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                <a
                  href="#book"
                  className="btn-royal px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-glow-royal cursor-pointer active:scale-95 transition-transform"
                >
                  <span>Book a Taxi</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi in Jabalpur.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="btn-gold px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-glow-gold-sm active:scale-95 transition-transform"
                >
                  <Phone className="w-4 h-4 text-navy-950" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Key Quick Badges - Clean responsive grid on small mobile */}
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-2 sm:gap-4 text-[10px] xs:text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-1.5 justify-center sm:justify-start bg-navy-900/60 sm:bg-transparent p-1.5 sm:p-0 rounded-lg border border-navy-800 sm:border-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-royal-400 shrink-0" />
                  <span className="truncate">Verified Drivers</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center sm:justify-start bg-navy-900/60 sm:bg-transparent p-1.5 sm:p-0 rounded-lg border border-navy-800 sm:border-0">
                  <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400 shrink-0" />
                  <span className="truncate">4.9★ Rated</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center sm:justify-start bg-navy-900/60 sm:bg-transparent p-1.5 sm:p-0 rounded-lg border border-navy-800 sm:border-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">Zero Cancel Fee</span>
                </div>
              </div>

              {/* REALISTIC WHITE SWIFT DZIRE CAR SHOWCASE */}
              <div className="pt-2">
                <WhiteSwiftShowcase />
              </div>
            </div>

            {/* Right Column: Prominent Interactive Booking Card directly visible without scrolling */}
            <div className="lg:col-span-5 sticky top-20" id="book">
              <BookingCard initialPickup="Jabalpur" />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* SERVICES SECTION */}
      <ServicesGrid />

      {/* FLEET SECTION */}
      <FleetSection />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* POPULAR JABALPUR ROUTES */}
      <PopularRoutes />

      {/* JABALPUR LOCAL SERVICE AREAS */}
      <LocalAreas />

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

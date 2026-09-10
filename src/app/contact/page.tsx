import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import BookingCard from "@/components/booking/BookingCard";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS_CONFIG, JABALPUR_LOCALITIES } from "@/data/business";
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink,
  ShieldCheck,
  Send
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Har Har Taxi Services Jabalpur",
  description:
    "Contact Har Har Taxi Services in Jabalpur. Direct phone and WhatsApp booking support, business address, service areas, and 24x7 travel assistance.",
  alternates: {
    canonical: `${BUSINESS_CONFIG.siteUrl}/contact/`,
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact/" }
  ];

  return (
    <>
      <JsonLd breadcrumbs={breadcrumbs} pageType="Contact" />

      {/* Hero */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-charcoal-900 to-charcoal-950 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-saffron-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-saffron-400">Contact</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-saffron-500/15 text-saffron-400 border border-saffron-500/30">
              Get in Touch 24x7
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
              Contact Har Har Taxi Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have questions about taxi availability, highway routes, or group quotes? Reach out to our Jabalpur support team directly via WhatsApp or telephone for instant assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left: Contact Info & NAP Cards */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl font-bold text-white font-display">
                Direct Contact Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Card */}
                <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-saffron-500/15 text-saffron-400 flex items-center justify-center mb-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white font-display">Phone Helpline</h3>
                    <p className="text-xs text-slate-400 mt-1">Direct voice call for instant cab booking</p>
                  </div>
                  <div className="pt-4">
                    <a
                      href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                      className="btn-saffron block text-center py-2 px-3 rounded-lg text-xs font-bold"
                    >
                      Call {BUSINESS_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-3">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white font-display">WhatsApp Booking</h3>
                    <p className="text-xs text-slate-400 mt-1">Get fare quotes &amp; driver details</p>
                  </div>
                  <div className="pt-4">
                    <a
                      href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center py-2 px-3 rounded-lg text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Full Business Address (NAP) */}
              <div className="glass-panel p-6 rounded-2xl space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-saffron-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">Office Address (NAP)</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {BUSINESS_CONFIG.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-charcoal-800">
                  <Mail className="w-4 h-4 text-saffron-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400">Email: </span>
                    <span className="text-xs text-slate-200">{BUSINESS_CONFIG.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-charcoal-800">
                  <Clock className="w-4 h-4 text-saffron-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400">Operating Hours: </span>
                    <span className="text-xs text-slate-200">{BUSINESS_CONFIG.businessHours}</span>
                  </div>
                </div>

                {/* GBP Link placeholder */}
                <div className="pt-3 border-t border-charcoal-800">
                  <a
                    href={BUSINESS_CONFIG.googleBusinessProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-saffron-400 hover:underline"
                  >
                    <span>Google Business Profile &bull; Har Har Taxi Services</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Styled Google Maps Placeholder */}
              <div className="glass-panel p-4 rounded-2xl">
                <div className="flex items-center justify-between mb-3 text-xs text-slate-300">
                  <span className="font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-saffron-400" />
                    Jabalpur Base &bull; Geographic Coordinates
                  </span>
                  <span className="text-[11px] text-slate-500">23.1815° N, 79.9864° E</span>
                </div>
                <div className="w-full h-52 rounded-xl bg-charcoal-900 border border-charcoal-800 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-charcoal-950/80 via-charcoal-900/60 to-charcoal-950/80" />
                  <div className="relative z-10 space-y-2">
                    <div className="w-12 h-12 rounded-full bg-saffron-500/20 border border-saffron-500/40 text-saffron-400 flex items-center justify-center mx-auto">
                      <MapPin className="w-6 h-6 animate-bounce" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-display">
                      Har Har Taxi Services Base
                    </h4>
                    <p className="text-xs text-slate-400 max-w-xs">
                      Covering Wright Town, Civil Lines, Napier Town, Dumna Airport, and Jabalpur Junction.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Quick Booking Form */}
            <div className="lg:col-span-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white font-display">
                  Book or Get Quote Now
                </h2>
                <BookingCard initialPickup="Jabalpur" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Areas Footprint */}
      <section className="py-16 bg-charcoal-900/40 border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white font-display mb-4">
            Areas We Serve Across Jabalpur
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
            {JABALPUR_LOCALITIES.map((loc) => (
              <div
                key={loc.name}
                className="p-3 rounded-xl bg-charcoal-900 border border-charcoal-800 text-slate-300"
              >
                <div className="font-semibold text-white mb-0.5">{loc.name}</div>
                <div className="text-[11px] text-slate-400 truncate">{loc.popularSpots.join(", ")}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

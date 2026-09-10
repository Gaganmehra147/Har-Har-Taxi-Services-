import React from "react";
import { BUSINESS_CONFIG } from "@/data/business";
import { MessageSquare, Phone, Car } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden border-t border-navy-800">
      {/* Decorative radial royal blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-royal-600/15 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Floating car icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-royal-600 via-royal-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-glow-royal animate-float-gentle text-white">
          <Car className="w-8 h-8" />
        </div>

        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-royal-500/20 text-royal-300 border border-royal-500/30 mb-3">
          Fast &amp; Reliable Jabalpur Taxi Service
        </span>

        <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
          Ready to Travel?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
          Book your taxi in Jabalpur today. Enjoy clean air-conditioned White Swift Dzire and SUV vehicles, transparent billing, and verified local chauffeurs.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi in Jabalpur.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Book on WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 text-sm font-bold btn-gold shadow-glow-gold"
          >
            <Phone className="w-4 h-4 text-navy-950" />
            <span>Call Now ({BUSINESS_CONFIG.phoneDisplay})</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 mt-6 font-medium">
          Pickup available from Wright Town, Napier Town, Civil Lines, Vijay Nagar, Dumna Airport, and Railway Station.
        </p>
      </div>
    </section>
  );
}

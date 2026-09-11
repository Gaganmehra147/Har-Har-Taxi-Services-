import React from "react";
import { BUSINESS_CONFIG } from "@/data/business";
import { MessageSquare, Phone, Car } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-20 relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Floating car icon */}
        <div className="w-16 h-16 rounded-2xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center mx-auto mb-6 shadow-xl animate-float-gentle border border-zinc-200 dark:border-zinc-800">
          <Car className="w-8 h-8" />
        </div>

        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 mb-3">
          Fast &amp; Reliable Jabalpur Taxi Service
        </span>

        <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white font-display tracking-tight">
          Ready to Travel?
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
          Book your taxi in Jabalpur today. Enjoy clean air-conditioned White Swift Dzire and SUV vehicles, transparent billing, and verified local chauffeurs.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi in Jabalpur.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 text-sm font-bold btn-whatsapp"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book on WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 text-sm font-bold btn-royal"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now ({BUSINESS_CONFIG.phoneDisplay})</span>
          </a>
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-6 font-medium">
          Pickup available from Wright Town, Napier Town, Civil Lines, Vijay Nagar, Dumna Airport, and Railway Station.
        </p>
      </div>
    </section>
  );
}

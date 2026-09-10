"use client";

import React from "react";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/data/business";
import { Phone, MessageSquare, Car } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <aside aria-label="Quick mobile booking actions" className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy-950/98 border-t border-navy-800 px-3 pt-2 pb-2 safe-bottom shadow-[0_-8px_30px_rgba(0,0,0,0.7)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* CALL BUTTON */}
        <a
          href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-navy-900/90 text-slate-100 hover:text-white border border-navy-750 active:scale-95 transition-all shadow-sm group"
        >
          <Phone className="w-4 h-4 text-gold-400 mb-0.5 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-bold tracking-tight">Call Now</span>
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi in Jabalpur.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/35 active:scale-95 transition-all shadow-sm group hover:bg-emerald-500/25"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* BOOK BUTTON */}
        <Link
          href="/taxi-booking-jabalpur/"
          className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl btn-royal text-white active:scale-95 transition-all shadow-glow-royal-sm group"
        >
          <Car className="w-4 h-4 text-white mb-0.5 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-bold tracking-tight">Book Taxi</span>
        </Link>
      </div>
    </aside>
  );
}

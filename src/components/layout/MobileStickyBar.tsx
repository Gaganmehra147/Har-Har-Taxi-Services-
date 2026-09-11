"use client";

import React from "react";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/data/business";
import { Phone, MessageSquare, Car } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <aside aria-label="Quick mobile booking actions" className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 px-3 pt-2 pb-2 safe-bottom shadow-[0_-8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.7)] transition-colors">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* CALL BUTTON */}
        <a
          href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 active:scale-95 transition-all shadow-sm group"
        >
          <Phone className="w-4 h-4 mb-0.5 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-bold tracking-tight">Call Now</span>
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi in Jabalpur.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl btn-whatsapp active:scale-95 transition-all shadow-sm group"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* BOOK BUTTON */}
        <Link
          href="/taxi-booking-jabalpur/"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl btn-royal active:scale-95 transition-all group"
        >
          <Car className="w-4 h-4 mb-0.5 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-bold tracking-tight">Book Taxi</span>
        </Link>
      </div>
    </aside>
  );
}

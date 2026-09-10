import React from "react";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/data/business";
import { Car, Phone, MessageSquare, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-charcoal-950">
      <div className="max-w-md w-full glass-panel p-8 rounded-2xl text-center border border-charcoal-800 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-saffron-500/20 border border-saffron-500/40 text-saffron-400 flex items-center justify-center mx-auto">
          <Car className="w-8 h-8 animate-pulse" />
        </div>

        <div>
          <span className="text-4xl font-extrabold text-saffron-500 font-display">404</span>
          <h1 className="text-2xl font-bold text-white font-display mt-1">
            Page Not Found
          </h1>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            The page or route you are looking for has moved or does not exist. Return home or book your taxi directly on WhatsApp.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            href="/"
            className="btn-saffron w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi in Jabalpur.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center gap-2 hover:bg-emerald-500/30 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

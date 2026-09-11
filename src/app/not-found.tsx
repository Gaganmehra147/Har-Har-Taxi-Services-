import React from "react";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/data/business";
import { Car, ArrowLeft, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 transition-colors">
      <div className="max-w-md w-full glass-panel p-8 rounded-2xl text-center border border-zinc-200 dark:border-zinc-800 space-y-6 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white flex items-center justify-center mx-auto">
          <Car className="w-8 h-8" />
        </div>

        <div>
          <span className="text-4xl font-extrabold text-zinc-950 dark:text-white font-display">404</span>
          <h1 className="text-2xl font-bold text-zinc-950 dark:text-white font-display mt-1">
            Page Not Found
          </h1>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
            The page or route you are looking for has moved or does not exist. Return home or book your taxi directly on WhatsApp.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            href="/"
            className="btn-royal w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi in Jabalpur.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl text-xs font-bold btn-whatsapp flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

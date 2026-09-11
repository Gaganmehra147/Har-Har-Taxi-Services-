import React from "react";
import { ShieldCheck, HeartHandshake, Award, Clock } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 py-6 sm:py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Main Trust Claim */}
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Our Core Promise
            </p>
            <h2 className="text-lg sm:text-xl font-black text-zinc-950 dark:text-white font-display mt-0.5">
              Reliable &bull; Comfortable &bull; Professional &bull; Local & Outstation
            </h2>
          </div>

          {/* Business Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-center w-full md:w-auto">
            <div className="px-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="flex items-center justify-center gap-1.5 text-zinc-950 dark:text-white mb-0.5">
                <Clock className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300" />
                <span className="text-base sm:text-lg font-black font-display">24x7</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">Advance Booking</p>
            </div>

            <div className="px-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="text-base sm:text-lg font-black font-display">100%</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">AC Fleet Guarantee</p>
            </div>

            <div className="px-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="flex items-center justify-center gap-1.5 text-amber-500 mb-0.5">
                <Award className="w-3.5 h-3.5 fill-amber-500" />
                <span className="text-base sm:text-lg font-black font-display text-zinc-950 dark:text-white">4.9★</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">Trip Satisfaction</p>
            </div>

            <div className="px-3 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="flex items-center justify-center gap-1.5 text-zinc-950 dark:text-white mb-0.5">
                <HeartHandshake className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
                <span className="text-base sm:text-lg font-black font-display">₹0</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">Hidden Charges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

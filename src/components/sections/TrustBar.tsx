import React from "react";
import { ShieldCheck, HeartHandshake, Award, Clock } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="border-y border-navy-800 bg-navy-900/80 backdrop-blur-md py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Main Trust Claim */}
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Our Core Promise
            </p>
            <h2 className="text-lg sm:text-xl font-black text-white font-display">
              Reliable &bull; Comfortable &bull; Professional &bull; Local & Outstation
            </h2>
          </div>

          {/* Business Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-6 text-center w-full md:w-auto">
            <div className="px-2.5 py-2 rounded-xl bg-navy-950/60 border border-navy-750">
              <div className="flex items-center justify-center gap-1 text-royal-400 mb-0.5">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span className="text-base sm:text-lg font-black font-display">24x7</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">Advance Booking</p>
            </div>

            <div className="px-2.5 py-2 rounded-xl bg-navy-950/60 border border-navy-750">
              <div className="flex items-center justify-center gap-1 text-emerald-400 mb-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="text-base sm:text-lg font-black font-display">100%</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">AC Fleet Guarantee</p>
            </div>

            <div className="px-2.5 py-2 rounded-xl bg-navy-950/60 border border-navy-750">
              <div className="flex items-center justify-center gap-1 text-gold-400 mb-0.5">
                <Award className="w-3.5 h-3.5 fill-gold-400" />
                <span className="text-base sm:text-lg font-black font-display">4.9★</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">Trip Satisfaction</p>
            </div>

            <div className="px-2.5 py-2 rounded-xl bg-navy-950/60 border border-navy-750">
              <div className="flex items-center justify-center gap-1 text-cyan-400 mb-0.5">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span className="text-base sm:text-lg font-black font-display">₹0</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">Hidden Charges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

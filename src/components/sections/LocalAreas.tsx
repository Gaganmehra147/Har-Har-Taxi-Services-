import React from "react";
import { JABALPUR_LOCALITIES } from "@/data/business";
import { MapPin, Navigation, Clock } from "lucide-react";

export default function LocalAreas() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-navy-950/60 border-t border-navy-800" id="local-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-royal-500/15 text-royal-300 border border-royal-500/30 mb-2.5">
            Local Coverage
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-display">
            Taxi Service Across Jabalpur
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-2.5 leading-relaxed">
            Our drivers are stationed strategically across the city for rapid 15 to 25 minute doorstep pickups anywhere in Jabalpur.
          </p>
        </div>

        {/* Localities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {JABALPUR_LOCALITIES.map((area) => (
            <div
              key={area.name}
              className="glass-panel rounded-xl p-4 sm:p-5 hover:border-royal-500/40 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-royal-500/15 flex items-center justify-center text-royal-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-base font-display">
                  {area.name}
                </h3>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {area.description}
              </p>

              <div className="pt-2 border-t border-navy-800">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1.5">
                  Key Landmark Coverage:
                </span>
                <div className="flex flex-wrap gap-1">
                  {area.popularSpots.map((spot, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-navy-900 border border-navy-800 text-[10px] text-slate-300 font-medium"
                    >
                      {spot}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

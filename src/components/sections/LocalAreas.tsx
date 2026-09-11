import React from "react";
import { JABALPUR_LOCALITIES } from "@/data/business";
import { MapPin } from "lucide-react";

export default function LocalAreas() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 border-t border-zinc-200 dark:border-zinc-800 relative transition-colors" id="local-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 mb-2.5">
            Local Coverage
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white font-display">
            Taxi Service Across Jabalpur
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-base mt-2.5 leading-relaxed">
            Our drivers are stationed strategically across the city for rapid 15 to 25 minute doorstep pickups anywhere in Jabalpur.
          </p>
        </div>

        {/* Localities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {JABALPUR_LOCALITIES.map((area) => (
            <div
              key={area.name}
              className="glass-panel rounded-xl p-4 sm:p-5 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-zinc-950 dark:text-white text-base font-display">
                  {area.name}
                </h3>
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                {area.description}
              </p>

              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1.5">
                  Key Landmark Coverage:
                </span>
                <div className="flex flex-wrap gap-1">
                  {area.popularSpots.map((spot, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-700 dark:text-zinc-300 font-medium"
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

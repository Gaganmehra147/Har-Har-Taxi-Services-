import React from "react";
import Link from "next/link";
import { ROUTES_DATA } from "@/data/routes";
import { buildWhatsAppLink } from "@/data/business";
import { Clock, ArrowRight } from "lucide-react";

export default function PopularRoutes() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-navy-950/70 relative" id="routes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-royal-500/15 text-royal-300 border border-royal-500/30 mb-2.5">
              Outstation & Excursions
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-display">
              Popular Taxi Routes from Jabalpur
            </h2>
            <p className="text-slate-300 text-xs sm:text-base mt-2 max-w-2xl">
              Reliable door-to-door highway taxis for weekend getaways, tiger safaris, industrial hubs, and intercity travel across Central India.
            </p>
          </div>

          <Link
            href="/routes/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-royal-400 hover:text-white transition-colors shrink-0 self-start md:self-auto"
          >
            <span>View All 10 Routes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ROUTES_DATA.map((route) => {
            const whatsappUrl = buildWhatsAppLink({
              pickup: "Jabalpur",
              destination: route.destination,
              tripType: "One-Way / Round-Trip",
            });

            return (
              <div
                key={route.slug}
                className="glass-panel rounded-2xl p-4 xs:p-5 sm:p-6 flex flex-col justify-between hover:border-royal-500/40 hover:shadow-glow-royal-sm transition-all duration-300 group"
              >
                <div>
                  {/* Route Badge & Distances */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-royal-500/20 text-royal-300 border border-royal-500/35">
                      {route.distanceKm} km approx.
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-300 font-medium">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {route.estimatedTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display group-hover:text-royal-300 transition-colors">
                    Jabalpur &rarr; {route.destination}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {route.tagline}
                  </p>

                  {/* Fares overview table */}
                  <div className="mt-5 p-3 rounded-xl bg-navy-900/90 border border-navy-750 text-xs">
                    <div className="flex justify-between items-center text-slate-300 mb-1">
                      <span>Sedan (Swift Dzire):</span>
                      <span className="font-bold text-white">₹{route.fares.sedan.oneWay} oneway</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300 mb-1">
                      <span>SUV (Ertiga):</span>
                      <span className="font-bold text-white">₹{route.fares.suv.oneWay} oneway</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400 text-[11px] pt-1 border-t border-navy-800">
                      <span>Round-trip packages:</span>
                      <span className="text-gold-400 font-bold">Available</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 mt-4 sm:pt-5 sm:mt-5 border-t border-navy-800 grid grid-cols-2 gap-2">
                  <Link
                    href={`/routes/${route.slug}/`}
                    className="py-2.5 px-2 rounded-xl bg-navy-850 hover:bg-navy-750 text-xs font-bold text-slate-200 hover:text-white text-center transition-colors border border-navy-700 truncate active:scale-95"
                  >
                    Route Guide
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-2 rounded-xl btn-royal text-xs font-bold text-center shadow-glow-royal-sm truncate active:scale-95"
                  >
                    Book Taxi
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

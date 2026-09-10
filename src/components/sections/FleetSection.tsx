"use client";

import React, { useState } from "react";
import { FLEET_DATA, buildWhatsAppLink } from "@/data/business";
import { Users, Briefcase, Wind, Check, ArrowRight } from "lucide-react";

export default function FleetSection() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("sedan");

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-navy-900/50 border-t border-navy-800 relative" id="fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-royal-500/15 text-royal-300 border border-royal-500/30 mb-2.5">
            Our Vehicle Fleet
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-display">
            Choose Your Ride
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-2.5 leading-relaxed">
            Every vehicle in our fleet is thoroughly cleaned, mechanically verified, and driven by an experienced local chauffeur. Select the ideal car for your Jabalpur travel.
          </p>
        </div>

        {/* 3D-styled vehicle cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {FLEET_DATA.map((vehicle) => {
            const isFeatured = vehicle.id === "sedan"; // Make White Swift Dzire the featured hero card!
            const whatsappUrl = buildWhatsAppLink({
              pickup: "Jabalpur",
              destination: "Outstation / Local",
              vehicleType: `${vehicle.name} (${vehicle.modelExamples})`,
            });

            return (
              <div
                key={vehicle.id}
                className={`rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? "glass-panel-glow border-royal-400/60 lg:-translate-y-2 shadow-glow-royal-sm"
                    : "glass-panel hover:border-navy-600"
                }`}
              >
                {/* Popular badge */}
                {vehicle.badge && (
                  <div className="absolute -top-3 left-4 sm:left-6 max-w-[calc(100%-2rem)]">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold bg-gradient-to-r from-royal-600 via-royal-500 to-cyan-500 text-white shadow-md truncate">
                      {vehicle.id === "sedan" ? "★ POPULAR: WHITE SWIFT DZIRE" : vehicle.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top visual placeholder & vehicle name */}
                  <div className="pt-3">
                    <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                      <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                        {vehicle.name}
                      </h3>
                      <div className="text-left xs:text-right">
                        <span className="text-[11px] text-slate-400 block">Starting from</span>
                        <span className="text-base sm:text-lg font-black text-gold-400 font-display">
                          ₹{vehicle.baseFarePerKm}/km*
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 font-semibold">
                      {vehicle.modelExamples}
                    </p>
                  </div>

                  {/* Vehicle Stylized Visual */}
                  <div className="my-5 rounded-xl bg-navy-950 border border-navy-750 flex items-center justify-center relative overflow-hidden group h-36">
                    {vehicle.id === "sedan" ? (
                      <div className="relative w-full h-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/white-swift-taxi.jpg"
                          alt="White Swift Dzire Taxi Jabalpur"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                        <span className="absolute bottom-2 left-2.5 px-2 py-0.5 rounded text-[10px] bg-navy-900/90 text-gold-300 font-bold border border-gold-500/40">
                          White Swift Dzire
                        </span>
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-royal-600/5 via-transparent to-royal-600/5" />
                        <div className="text-center relative z-10">
                          <div className="text-5xl select-none mb-1 group-hover:scale-110 transition-transform">
                            {vehicle.id === "suv" ? "🚙" : "🚐"}
                          </div>
                          <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold">
                            {vehicle.name} &bull; AC Clean Fleet
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Vehicle Specs Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-navy-800 text-center text-xs">
                    <div className="p-2 rounded-lg bg-navy-900/80 border border-navy-800">
                      <div className="flex items-center justify-center gap-1 text-royal-400 mb-0.5">
                        <Users className="w-3.5 h-3.5" />
                        <span className="font-bold">{vehicle.capacityPassengers}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Passengers</span>
                    </div>

                    <div className="p-2 rounded-lg bg-navy-900/80 border border-navy-800">
                      <div className="flex items-center justify-center gap-1 text-royal-400 mb-0.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span className="font-bold">{vehicle.capacityLuggage}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Luggage Bags</span>
                    </div>

                    <div className="p-2 rounded-lg bg-navy-900/80 border border-navy-800">
                      <div className="flex items-center justify-center gap-1 text-emerald-400 mb-0.5">
                        <Wind className="w-3.5 h-3.5" />
                        <span className="font-bold">100%</span>
                      </div>
                      <span className="text-[10px] text-slate-400">AC Cabin</span>
                    </div>
                  </div>

                  {/* Suitable For */}
                  <div className="mt-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Suitable For:
                    </h4>
                    <ul className="space-y-1.5">
                      {vehicle.suitableFor.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-6 mt-6 border-t border-navy-800">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-bold transition-all ${
                      isFeatured
                        ? "btn-royal shadow-glow-royal"
                        : "btn-gold"
                    }`}
                  >
                    <span>Book This Vehicle</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          *Base fares indicated are guidelines; final quotes reflect route distance, toll taxes, and parking requirements.
        </p>
      </div>
    </section>
  );
}

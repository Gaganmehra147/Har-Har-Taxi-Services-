"use client";

import React, { useState, useEffect } from "react";
import { FLEET_DATA, buildWhatsAppLink } from "@/data/business";
import { Users, Briefcase, Wind, Check, ArrowRight } from "lucide-react";
import { CarItem } from "@/data/db/types";

const DEFAULT_VEHICLE_MEDIA: Record<string, { src: string; alt: string; tag: string }> = {
  sedan: {
    src: "/images/white-swift-taxi.jpg",
    alt: "White Swift Dzire Taxi Jabalpur",
    tag: "White Swift Dzire",
  },
  suv: {
    src: "/images/ertiga-taxi.jpg",
    alt: "Maruti Ertiga SUV Taxi Jabalpur",
    tag: "Maruti Ertiga SUV",
  },
  "premium-suv": {
    src: "/images/innova-crysta-taxi.jpg",
    alt: "Toyota Innova Crysta Luxury Taxi Jabalpur",
    tag: "Toyota Innova Crysta",
  },
};

export default function FleetSection() {
  const [dbCars, setDbCars] = useState<CarItem[]>([]);

  useEffect(() => {
    async function loadFleet() {
      try {
        const res = await fetch("/api/cars");
        const data = await res.json();
        if (data.success && Array.isArray(data.cars) && data.cars.length > 0) {
          setDbCars(data.cars.filter((c: CarItem) => c.active));
        }
      } catch (err) {
        // Fallback to static FLEET_DATA
      }
    }
    loadFleet();
  }, []);

  // Use dynamic db cars if available, otherwise static FLEET_DATA
  const vehiclesToDisplay = dbCars.length > 0 ? dbCars : FLEET_DATA.map(f => ({
    id: f.id,
    name: f.name,
    modelExamples: f.modelExamples,
    category: f.id as any,
    badge: f.badge,
    ratePerKm: f.baseFarePerKm,
    normalBookingFare: f.baseFarePerKm * 160,
    normalBookingTerms: "Full Day Local (8 hrs / 80 km)",
    capacityPassengers: f.capacityPassengers,
    capacityLuggage: f.capacityLuggage,
    hasAC: f.hasAC,
    image: DEFAULT_VEHICLE_MEDIA[f.id]?.src || "/images/white-swift-taxi.jpg",
    description: "Every vehicle is verified and sanitized.",
    features: f.features,
    active: true,
    createdAt: ""
  }));

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-zinc-50/60 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800 relative transition-colors" id="fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 mb-2.5">
            Our Vehicle Fleet
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white font-display">
            Choose Your Ride
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-base mt-2.5 leading-relaxed">
            Every vehicle in our fleet is thoroughly cleaned, mechanically verified, and driven by an experienced local chauffeur. Select the ideal car for your Jabalpur travel.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vehiclesToDisplay.map((vehicle) => {
            const isFeatured = vehicle.id === "sedan"; // White Swift Dzire featured card
            const whatsappUrl = buildWhatsAppLink({
              pickup: "Jabalpur",
              destination: "Outstation / Local",
              vehicleType: `${vehicle.name} (${vehicle.modelExamples})`,
            });
            const fallbackMedia = DEFAULT_VEHICLE_MEDIA[vehicle.id];
            const imgSrc = vehicle.image || fallbackMedia?.src || "/images/white-swift-taxi.jpg";
            const tag = fallbackMedia?.tag || vehicle.name;

            return (
              <div
                key={vehicle.id}
                className={`rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? "glass-panel-glow border-2 border-zinc-950 dark:border-white lg:-translate-y-2 shadow-xl"
                    : "glass-panel border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 shadow-sm"
                }`}
              >
                {/* Popular badge */}
                {vehicle.badge && (
                  <div className="absolute -top-3 left-4 sm:left-6 max-w-[calc(100%-2rem)]">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-md truncate border border-zinc-200 dark:border-zinc-800">
                      {vehicle.id === "sedan" ? "★ POPULAR: WHITE SWIFT DZIRE" : vehicle.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top visual placeholder & vehicle name */}
                  <div className="pt-3">
                    <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                      <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white font-display">
                        {vehicle.name}
                      </h3>
                      <div className="text-left xs:text-right">
                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">Starting from</span>
                        <span className="text-base sm:text-lg font-black text-zinc-950 dark:text-white font-display">
                          ₹{vehicle.ratePerKm}/km*
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 font-semibold">
                      {vehicle.modelExamples}
                    </p>
                  </div>

                  {/* Vehicle Stylized Visual */}
                  <div className="my-5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center relative overflow-hidden group h-36">
                    <div className="relative w-full h-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgSrc}
                        alt={vehicle.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/white-swift-taxi.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-2.5 px-2 py-0.5 rounded text-[10px] bg-black/80 text-white font-bold border border-white/20">
                        {tag}
                      </span>
                    </div>
                  </div>

                  {/* Dual Pricing Info (Per KM & Normal Day Rental) */}
                  <div className="grid grid-cols-2 gap-2 mb-3 p-2 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 text-center">
                    <div>
                      <span className="text-[10px] text-zinc-500 block">Highway Outstation</span>
                      <span className="text-xs font-black text-zinc-900 dark:text-white">₹{vehicle.ratePerKm}/km</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500 block">Normal Full Day</span>
                      <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">₹{vehicle.normalBookingFare}/day</span>
                    </div>
                  </div>

                  {/* Vehicle Specs Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-200 dark:border-zinc-800 text-center text-xs">
                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center justify-center gap-1 text-zinc-900 dark:text-white mb-0.5">
                        <Users className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                        <span className="font-bold">{vehicle.capacityPassengers}</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 dark:text-zinc-400">Passengers</span>
                    </div>

                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center justify-center gap-1 text-zinc-900 dark:text-white mb-0.5">
                        <Briefcase className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                        <span className="font-bold">{vehicle.capacityLuggage}</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 dark:text-zinc-400">Luggage Bags</span>
                    </div>

                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 mb-0.5">
                        <Wind className="w-3.5 h-3.5" />
                        <span className="font-bold">100%</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 dark:text-zinc-400">AC Cabin</span>
                    </div>
                  </div>

                  {/* Description / Features */}
                  <div className="mt-4">
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2 line-clamp-2">
                      {vehicle.description}
                    </p>
                    <ul className="space-y-1.5">
                      {vehicle.features?.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-bold transition-all ${
                      isFeatured
                        ? "btn-royal"
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

        <p className="text-center text-xs text-zinc-500 dark:text-zinc-400 mt-8">
          *Base fares indicated are guidelines; final quotes reflect route distance, toll taxes, and parking requirements.
        </p>
      </div>
    </section>
  );
}

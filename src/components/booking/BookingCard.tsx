"use client";

import React, { useState, useMemo } from "react";
import { BUSINESS_CONFIG, buildWhatsAppLink } from "@/data/business";
import { ROUTES_DATA } from "@/data/routes";
import { 
  MapPin, 
  Navigation, 
  Calendar, 
  Users, 
  Car, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

interface BookingCardProps {
  initialPickup?: string;
  initialDestination?: string;
  initialVehicle?: "sedan" | "suv" | "premium-suv";
  compact?: boolean;
}

export default function BookingCard({
  initialPickup = "Jabalpur",
  initialDestination = "",
  initialVehicle = "sedan",
  compact = false,
}: BookingCardProps) {
  const [pickup, setPickup] = useState(initialPickup);
  const [destination, setDestination] = useState(initialDestination);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [time, setTime] = useState("08:00");
  const [passengers, setPassengers] = useState("2");
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [vehicle, setVehicle] = useState<"sedan" | "suv" | "premium-suv">(initialVehicle);

  // Match destination with known route to estimate fare
  const matchedRoute = useMemo(() => {
    if (!destination) return null;
    const destLower = destination.toLowerCase().trim();
    return ROUTES_DATA.find(r => 
      destLower.includes(r.destination.toLowerCase()) || 
      r.destination.toLowerCase().includes(destLower)
    );
  }, [destination]);

  const estimatedFare = useMemo(() => {
    if (!matchedRoute) return null;
    const vehicleKey = vehicle === "premium-suv" ? "premiumSuv" : vehicle;
    const fareObj = matchedRoute.fares[vehicleKey];
    return tripType === "one-way" ? fareObj.oneWay : fareObj.roundTrip;
  }, [matchedRoute, vehicle, tripType]);

  const whatsappUrl = useMemo(() => {
    return buildWhatsAppLink({
      pickup: pickup || "Jabalpur",
      destination: destination || "My Destination",
      date,
      time,
      passengers,
      vehicleType: vehicle === "sedan" ? "Sedan (White Swift Dzire)" : vehicle === "suv" ? "SUV (Ertiga)" : "Premium SUV (Innova Crysta)",
      tripType: tripType === "one-way" ? "One-Way Drop" : "Round-Trip",
    });
  }, [pickup, destination, date, time, passengers, vehicle, tripType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`glass-panel-glow rounded-2xl p-4 xs:p-5 sm:p-7 relative overflow-hidden transition-all duration-300 ${compact ? 'max-w-xl' : 'w-full'}`}>
      {/* Decorative top monochrome luxury accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800 dark:from-white dark:via-zinc-400 dark:to-zinc-800" />

      <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 mb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
            <Sparkles className="w-3 h-3 text-zinc-950 dark:text-white" /> Quick 2-Min Booking
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-display text-zinc-950 dark:text-white mt-1.5">
            Book Your Taxi
          </h3>
        </div>

        {/* Trip type selector toggle */}
        <div className="flex p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-medium self-start xs:self-auto">
          <button
            type="button"
            onClick={() => setTripType("one-way")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              tripType === "one-way"
                ? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-sm font-bold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            One-Way
          </button>
          <button
            type="button"
            onClick={() => setTripType("round-trip")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              tripType === "round-trip"
                ? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-sm font-bold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            Round-Trip
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pickup & Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Pickup */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
              Pickup Location
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 dark:text-zinc-400">
                <MapPin className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="e.g. Wright Town, Airport, Station"
                className="w-full pl-9 pr-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-white focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white transition-all"
              />
            </div>
          </div>

          {/* Destination */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
              Destination
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 dark:text-zinc-400">
                <Navigation className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Bhedaghat, Kanha, Bhopal"
                list="popular-destinations"
                className="w-full pl-9 pr-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-white focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white transition-all"
              />
              <datalist id="popular-destinations">
                {ROUTES_DATA.map((r) => (
                  <option key={r.slug} value={r.destination} />
                ))}
              </datalist>
            </div>
          </div>
        </div>

        {/* Date, Time & Passengers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* Date */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
              Travel Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                <Calendar className="w-4 h-4" />
              </div>
              <input
                type="date"
                required
                value={date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white transition-all"
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
              Pickup Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white transition-all"
            />
          </div>

          {/* Passengers */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
              Passengers
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                <Users className="w-4 h-4" />
              </div>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white transition-all appearance-none cursor-pointer"
              >
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons (Sedan)</option>
                <option value="5">5 Persons (SUV)</option>
                <option value="6">6 Persons (SUV)</option>
                <option value="7">7 Persons (Innova)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Vehicle Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
            Vehicle Type
          </label>
          <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3">
            {[
              { id: "sedan", label: "Sedan", sub: "Swift Dzire" },
              { id: "suv", label: "SUV", sub: "Ertiga" },
              { id: "premium-suv", label: "Prem. SUV", sub: "Innova" },
            ].map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVehicle(v.id as any)}
                className={`p-2 xs:p-2.5 sm:p-3 rounded-xl border text-left transition-all ${
                  vehicle === v.id
                    ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 border-zinc-950 dark:border-white shadow-md font-bold"
                    : "bg-zinc-50 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600"
                }`}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
                  <Car className={`w-3.5 h-3.5 shrink-0 ${vehicle === v.id ? "text-white dark:text-zinc-950" : "text-zinc-400"}`} />
                  <span className="text-[11px] xs:text-xs sm:text-sm truncate">{v.label}</span>
                </div>
                <p className={`text-[9px] xs:text-[10px] leading-tight truncate ${vehicle === v.id ? "text-zinc-300 dark:text-zinc-700" : "text-zinc-500 dark:text-zinc-400"}`}>
                  {v.sub}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Live Estimate Feedback */}
        {estimatedFare && (
          <div className="p-3 bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-700 rounded-xl flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-zinc-700 dark:text-zinc-300">
                Estimated {tripType === "one-way" ? "One-Way" : "Round-Trip"} Fare:
              </span>
            </div>
            <div className="font-extrabold text-zinc-950 dark:text-white text-base sm:text-lg">
              ₹{estimatedFare.toLocaleString("en-IN")}*
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* WhatsApp Estimate CTA */}
          <button
            type="submit"
            className="btn-royal w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold cursor-pointer"
          >
            <span>Get Fare Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Direct Call Button */}
          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="btn-gold w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
          </a>
        </div>

        <p className="text-center text-[11px] text-zinc-500 dark:text-zinc-400 pt-1">
          Instant WhatsApp quotes &bull; Zero cancellation fee &bull; Verified drivers
        </p>
      </form>
    </div>
  );
}

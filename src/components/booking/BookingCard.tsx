"use client";

import React, { useState, useMemo, useEffect } from "react";
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
  Sparkles,
  Phone,
  User,
  Clock,
  Check,
  ShieldCheck,
  Loader2
} from "lucide-react";
import { CarItem, Booking } from "@/data/db/types";
import { getClientCars, addClientBooking } from "@/data/clientStorage";

interface BookingCardProps {
  initialPickup?: string;
  initialDestination?: string;
  initialVehicle?: "sedan" | "suv" | "premium-suv" | string;
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
  const [vehicle, setVehicle] = useState<string>(initialVehicle);
  const [pricingModel, setPricingModel] = useState<"per-km" | "normal-rental">("per-km");
  
  // Customer details
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<Booking | null>(null);
  
  // Dynamic cars list from client storage
  const [availableCars, setAvailableCars] = useState<CarItem[]>([]);

  useEffect(() => {
    const loadCars = () => {
      const cars = getClientCars();
      setAvailableCars(cars.filter(c => c.active));
    };
    loadCars();

    window.addEventListener("harhar_cars_updated", loadCars);
    return () => window.removeEventListener("harhar_cars_updated", loadCars);
  }, []);

  // Selected car details
  const selectedCar = useMemo(() => {
    return availableCars.find(c => c.id === vehicle) || null;
  }, [availableCars, vehicle]);

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
    if (pricingModel === "normal-rental" && selectedCar) {
      return selectedCar.normalBookingFare;
    }
    if (!matchedRoute) return null;
    const vehicleKey = vehicle === "premium-suv" ? "premiumSuv" : vehicle === "suv" ? "suv" : "sedan";
    const fareObj = matchedRoute.fares[vehicleKey as keyof typeof matchedRoute.fares];
    if (!fareObj) return null;
    return tripType === "one-way" ? fareObj.oneWay : fareObj.roundTrip;
  }, [matchedRoute, vehicle, tripType, pricingModel, selectedCar]);

  const vehicleDisplayTitle = useMemo(() => {
    if (selectedCar) return selectedCar.name;
    if (vehicle === "sedan") return "Sedan (Swift Dzire)";
    if (vehicle === "suv") return "SUV (Ertiga)";
    return "Premium SUV (Innova Crysta)";
  }, [selectedCar, vehicle]);

  const whatsappUrl = useMemo(() => {
    const bookingPlan = pricingModel === "normal-rental" 
      ? `Normal / Full Day Rental (₹${selectedCar?.normalBookingFare || 2500})`
      : `Per-KM Rate (₹${selectedCar?.ratePerKm || 11}/km)`;

    return buildWhatsAppLink({
      pickup: pickup || "Jabalpur",
      destination: destination || "My Destination",
      date,
      time,
      passengers: `${passengers} (Cust: ${customerName || "Customer"}, Ph: ${customerPhone || "Direct"})`,
      vehicleType: `${vehicleDisplayTitle} [Plan: ${bookingPlan}]`,
      tripType: tripType === "one-way" ? "One-Way Drop" : "Round-Trip",
    });
  }, [pickup, destination, date, time, passengers, customerName, customerPhone, vehicleDisplayTitle, pricingModel, selectedCar, tripType]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerPhone.trim()) {
      alert("Kripya apna phone number bharein taaki driver aapse contact kar sake.");
      return;
    }

    setIsSubmitting(true);
    try {
      const newBooking = addClientBooking({
        customerName: customerName.trim() || "Website Customer",
        customerPhone: customerPhone.trim(),
        pickup: pickup.trim() || "Jabalpur",
        destination: destination.trim() || "Local / Outstation",
        date,
        time,
        passengers,
        tripType,
        vehicleId: vehicle,
        vehicleName: vehicleDisplayTitle,
        estimatedFare: estimatedFare || null,
        pricingModel,
        notes: pricingModel === "normal-rental" ? "Selected Full-Day / Normal Rental Package" : "Selected Per-KM Highway Booking"
      });

      setBookingSuccess(newBooking);
      // Open WhatsApp pre-filled with all details
      try {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      } catch (err) {
        // ignore popup blocker
      }
    } catch (err) {
      console.error(err);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`glass-panel-glow rounded-2xl p-4 xs:p-5 sm:p-7 relative overflow-hidden transition-all duration-300 ${compact ? 'max-w-xl' : 'w-full'}`}>
      {/* Decorative top monochrome luxury accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800 dark:from-white dark:via-zinc-400 dark:to-zinc-800" />

      {/* Success Modal / Banner */}
      {bookingSuccess && (
        <div className="absolute inset-0 z-30 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 shadow-lg">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 mb-2">
            Booking Received!
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white font-display">
            Booking ID: #{bookingSuccess.id}
          </h4>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-md">
            Aapki booking successfully Admin system mein register ho gayi hai. Hamara driver/manager aapko <strong className="text-zinc-950 dark:text-white">{bookingSuccess.customerPhone}</strong> par call karega.
          </p>

          <div className="mt-4 p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-xs text-left w-full max-w-sm border border-zinc-200 dark:border-zinc-800 space-y-1">
            <div className="flex justify-between"><span className="text-zinc-500">Route:</span> <strong className="text-zinc-900 dark:text-white">{bookingSuccess.pickup} &rarr; {bookingSuccess.destination}</strong></div>
            <div className="flex justify-between"><span className="text-zinc-500">Date & Time:</span> <span className="text-zinc-800 dark:text-zinc-200">{bookingSuccess.date} at {bookingSuccess.time}</span></div>
            <div className="flex justify-between"><span className="text-zinc-500">Vehicle:</span> <span className="text-zinc-800 dark:text-zinc-200">{bookingSuccess.vehicleName}</span></div>
            {bookingSuccess.estimatedFare && (
              <div className="flex justify-between font-bold text-emerald-600 dark:text-emerald-400"><span>Est. Fare:</span> <span>₹{bookingSuccess.estimatedFare.toLocaleString("en-IN")}</span></div>
            )}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setBookingSuccess(null)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-300"
            >
              Nayi Booking Karein
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="btn-gold px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Direct Call</span>
            </a>
          </div>
        </div>
      )}

      {/* Booking Header */}
      <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 mb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
            <Sparkles className="w-3 h-3 text-zinc-950 dark:text-white" /> Quick 2-Min Booking
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-display text-zinc-950 dark:text-white mt-1.5">
            Book Your Taxi
          </h3>
        </div>

        {/* Pricing Plan Selector: Per-Km vs Normal Booking */}
        <div className="flex p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-medium self-start xs:self-auto">
          <button
            type="button"
            onClick={() => setPricingModel("per-km")}
            title="Highway & Outstation Per Km charges"
            className={`px-3 py-1.5 rounded-lg transition-all ${
              pricingModel === "per-km"
                ? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-sm font-bold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            Per-KM
          </button>
          <button
            type="button"
            onClick={() => setPricingModel("normal-rental")}
            title="Full Day / Normal Rental Fixed Package"
            className={`px-3 py-1.5 rounded-lg transition-all ${
              pricingModel === "normal-rental"
                ? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-sm font-bold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            Normal Rental
          </button>
        </div>
      </div>

      {/* One-Way / Round-Trip toggle for Per-KM */}
      {pricingModel === "per-km" && (
        <div className="flex items-center gap-2 mb-4">
          <button
            type="button"
            onClick={() => setTripType("one-way")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              tripType === "one-way"
                ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white border border-zinc-400 dark:border-zinc-600"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
            }`}
          >
            &bull; One-Way Drop
          </button>
          <button
            type="button"
            onClick={() => setTripType("round-trip")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              tripType === "round-trip"
                ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white border border-zinc-400 dark:border-zinc-600"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
            }`}
          >
            &bull; Round-Trip (Same/Next Day)
          </button>
        </div>
      )}

      <form onSubmit={handleBookingSubmit} className="space-y-4">
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
              {pricingModel === "normal-rental" ? "Destination / Coverage" : "Destination"}
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
                placeholder={pricingModel === "normal-rental" ? "e.g. Jabalpur Local 80km / Sightseeing" : "e.g. Bhedaghat, Kanha, Bhopal"}
                list="popular-destinations"
                className="w-full pl-9 pr-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-900 dark:focus:border-white focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white transition-all"
              />
              <datalist id="popular-destinations">
                {ROUTES_DATA.map((r) => (
                  <option key={r.slug} value={r.destination} />
                ))}
                <option value="Jabalpur City Sightseeing (8 hrs / 80 km)" />
                <option value="Bhedaghat & Marble Rocks Excursion" />
                <option value="Dumna Airport Transfer" />
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

        {/* Vehicle Selection - Dynamic or Fallback */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
              Select Vehicle
            </label>
            {pricingModel === "normal-rental" && (
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                Package: Full Day / 80 KM
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3">
            {availableCars.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setVehicle(c.id)}
                className={`p-2 xs:p-2.5 sm:p-3 rounded-xl border text-left transition-all relative ${
                  vehicle === c.id
                    ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 border-zinc-950 dark:border-white shadow-md font-bold"
                    : "bg-zinc-50 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600"
                }`}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
                  <Car className={`w-3.5 h-3.5 shrink-0 ${vehicle === c.id ? "text-white dark:text-zinc-950" : "text-zinc-400"}`} />
                  <span className="text-[11px] xs:text-xs sm:text-sm truncate">{c.name.split(" ")[0]}</span>
                </div>
                <p className={`text-[9px] xs:text-[10px] leading-tight truncate ${vehicle === c.id ? "text-zinc-300 dark:text-zinc-700" : "text-zinc-500 dark:text-zinc-400"}`}>
                  {pricingModel === "normal-rental" ? `₹${c.normalBookingFare}/day` : `₹${c.ratePerKm}/km`}
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
                {pricingModel === "normal-rental" ? "Fixed Day Rental Rate:" : `Estimated ${tripType === "one-way" ? "One-Way" : "Round-Trip"} Fare:`}
              </span>
            </div>
            <div className="font-extrabold text-zinc-950 dark:text-white text-base sm:text-lg">
              ₹{estimatedFare.toLocaleString("en-IN")}*
            </div>
          </div>
        )}

        {/* Customer Details for Direct Admin Sync */}
        <div className="p-3.5 bg-zinc-100/70 dark:bg-zinc-900/70 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
              Customer Contact (Required for Booking):
            </span>
            <span className="text-[10px] text-zinc-500">Synced with Admin &amp; WhatsApp</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-zinc-400">
                <User className="w-3.5 h-3.5" />
              </div>
              <input
                type="text"
                placeholder="Your Name (Aapka Naam)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full pl-8 pr-3 py-2 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-900 dark:focus:border-white"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-zinc-400">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <input
                type="tel"
                required
                placeholder="Phone Number (Mobile No.) *"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full pl-8 pr-3 py-2 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-900 dark:focus:border-white"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {/* Submit & Sync CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-royal w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold cursor-pointer disabled:opacity-75"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Booking Ho Rahi Hai...</span>
              </>
            ) : (
              <>
                <span>Confirm &amp; Book Taxi</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
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
          Instant WhatsApp quotes &bull; Zero cancellation fee &bull; Direct Admin Dispatch
        </p>
      </form>
    </div>
  );
}

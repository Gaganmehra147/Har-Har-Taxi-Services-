"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { 
  Car, 
  Users, 
  Briefcase, 
  Calendar, 
  Clock, 
  MapPin, 
  Navigation, 
  Phone, 
  PhoneCall, 
  MessageSquare, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  ExternalLink, 
  Search, 
  Filter, 
  DollarSign, 
  CarFront, 
  Download, 
  Upload, 
  Sparkles, 
  FileText 
} from "lucide-react";
import { Booking, CarItem, BookingStatus } from "@/data/db/types";
import { 
  getClientBookings, 
  updateClientBookingStatus, 
  deleteClientBooking, 
  getClientCars, 
  addClientCar, 
  toggleClientCarActive, 
  deleteClientCar 
} from "@/data/clientStorage";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"bookings" | "fleet" | "add-car">("bookings");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [cars, setCars] = useState<CarItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  // Filter & Search states for bookings
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // New Car Form State
  const [newCar, setNewCar] = useState({
    name: "",
    modelExamples: "",
    category: "sedan" as "sedan" | "suv" | "premium-suv" | "luxury" | "tempo",
    badge: "",
    ratePerKm: "12",
    normalBookingFare: "2000",
    normalBookingTerms: "Full Day Local (8 hrs / 80 km)",
    capacityPassengers: "4",
    capacityLuggage: "2",
    hasAC: true,
    image: "/images/white-swift-taxi.jpg",
    customImageUrl: "",
    description: "",
    features: "Dual AC, Sanitized Interior, Bluetooth Audio, Professional Chauffeur, Carrier Available",
  });
  const [isSubmittingCar, setIsSubmittingCar] = useState(false);
  const [carSubmitSuccess, setCarSubmitSuccess] = useState(false);

  // Load from client storage
  const loadData = () => {
    setRefreshing(true);
    setBookings(getClientBookings());
    setCars(getClientCars());
    setTimeout(() => setRefreshing(false), 300);
  };

  useEffect(() => {
    loadData();

    window.addEventListener("harhar_bookings_updated", loadData);
    window.addEventListener("harhar_cars_updated", loadData);
    return () => {
      window.removeEventListener("harhar_bookings_updated", loadData);
      window.removeEventListener("harhar_cars_updated", loadData);
    };
  }, []);

  // Update Booking Status
  const handleUpdateStatus = (id: string, newStatus: BookingStatus) => {
    const updated = updateClientBookingStatus(id, newStatus);
    setBookings(updated);
  };

  // Delete Booking
  const handleDeleteBooking = (id: string) => {
    if (!confirm(`Are you sure you want to delete Booking #${id}?`)) return;
    const updated = deleteClientBooking(id);
    setBookings(updated);
  };

  // Toggle Car Active
  const handleToggleCar = (id: string) => {
    const updated = toggleClientCarActive(id);
    setCars(updated);
  };

  // Delete Car
  const handleDeleteCar = (id: string) => {
    if (!confirm("Are you sure you want to delete this car from fleet?")) return;
    const updated = deleteClientCar(id);
    setCars(updated);
  };

  // Export Data to JSON file
  const handleExportData = () => {
    const data = { bookings, cars, exportDate: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `harhar-taxi-data-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Add Car Submit
  const handleCreateCar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCar.name || !newCar.ratePerKm) {
      alert("Please fill in car name and per km rate.");
      return;
    }

    setIsSubmittingCar(true);
    try {
      const imgFinal = newCar.customImageUrl.trim() ? newCar.customImageUrl.trim() : newCar.image;
      const created = addClientCar({
        name: newCar.name.trim(),
        modelExamples: newCar.modelExamples.trim() || newCar.name.trim(),
        category: newCar.category,
        badge: newCar.badge.trim() || undefined,
        ratePerKm: Number(newCar.ratePerKm) || 12,
        normalBookingFare: Number(newCar.normalBookingFare) || 2000,
        normalBookingTerms: newCar.normalBookingTerms || "Full Day (8 hrs / 80 km)",
        capacityPassengers: Number(newCar.capacityPassengers) || 4,
        capacityLuggage: Number(newCar.capacityLuggage) || 2,
        hasAC: newCar.hasAC,
        image: imgFinal,
        description: newCar.description.trim() || `Comfortable ${newCar.name} taxi service in Jabalpur.`,
        features: newCar.features.split(",").map(f => f.trim()).filter(Boolean),
        active: true
      });

      setCars(prev => [created, ...prev]);
      setCarSubmitSuccess(true);
      setTimeout(() => {
        setCarSubmitSuccess(false);
        setActiveTab("fleet");
      }, 1200);

      // Reset form
      setNewCar({
        name: "",
        modelExamples: "",
        category: "sedan",
        badge: "",
        ratePerKm: "12",
        normalBookingFare: "2000",
        normalBookingTerms: "Full Day Local (8 hrs / 80 km)",
        capacityPassengers: "4",
        capacityLuggage: "2",
        hasAC: true,
        image: "/images/white-swift-taxi.jpg",
        customImageUrl: "",
        description: "",
        features: "Dual AC, Sanitized Interior, Bluetooth Audio, Professional Chauffeur",
      });
    } catch (err) {
      alert("Failed to add car");
    } finally {
      setIsSubmittingCar(false);
    }
  };

  // Filtered Bookings
  const filteredBookings = useMemo(() => {
    return bookings.filter(b => {
      const matchesStatus = statusFilter === "all" || b.status === statusFilter;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        b.customerName?.toLowerCase().includes(query) ||
        b.customerPhone?.toLowerCase().includes(query) ||
        b.pickup?.toLowerCase().includes(query) ||
        b.destination?.toLowerCase().includes(query) ||
        b.id?.toLowerCase().includes(query);
      return matchesStatus && matchesSearch;
    });
  }, [bookings, statusFilter, searchQuery]);

  // Stats calculation
  const stats = useMemo(() => {
    const total = bookings.length;
    const pending = bookings.filter(b => b.status === "pending").length;
    const confirmed = bookings.filter(b => b.status === "confirmed").length;
    const completed = bookings.filter(b => b.status === "completed").length;
    const totalRevenueEst = bookings
      .filter(b => b.status !== "cancelled")
      .reduce((sum, b) => sum + (b.estimatedFare || 0), 0);
    return { total, pending, confirmed, completed, totalRevenueEst, totalCars: cars.length };
  }, [bookings, cars]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-6 sm:py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header Bar */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-7 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-zinc-900 text-white dark:bg-white dark:text-zinc-950">
                Admin Portal
              </span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live System Active
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white font-display mt-2">
              Har Har Taxi Booking &amp; Fleet Manager
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Yahan se aap apni saari bookings manage kar sakte hain aur nayi gaadiyaan (Per-KM aur Normal rental rates ke sath) add kar sakte hain.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleExportData}
              title="Backup all bookings & cars to JSON"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 flex items-center gap-2 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Backup JSON</span>
            </button>

            <button
              onClick={loadData}
              disabled={refreshing}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 flex items-center gap-2 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`} />
              <span>{refreshing ? "Refreshing..." : "Refresh"}</span>
            </button>

            <Link
              href="/"
              target="_blank"
              className="btn-royal px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <span>Website Dekhein</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Dashboard Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-5">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-sm">
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block">Total Bookings</span>
            <div className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white font-display mt-1">
              {stats.total}
            </div>
            <span className="text-[10px] text-zinc-400 mt-1 block">Registered in portal</span>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 sm:p-5 shadow-sm">
            <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">Pending Actions</span>
            <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-300 font-display mt-1">
              {stats.pending}
            </div>
            <span className="text-[10px] text-amber-600/80 dark:text-amber-400/80 mt-1 block">Awaiting driver assign</span>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-4 sm:p-5 shadow-sm">
            <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">Confirmed</span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-300 font-display mt-1">
              {stats.confirmed}
            </div>
            <span className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80 mt-1 block">Ready for pickup</span>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 rounded-2xl p-4 sm:p-5 shadow-sm">
            <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider block">Active Fleet Cars</span>
            <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-300 font-display mt-1">
              {stats.totalCars}
            </div>
            <span className="text-[10px] text-blue-600/80 dark:text-blue-400/80 mt-1 block">Vehicles in system</span>
          </div>

          <div className="col-span-2 lg:col-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-sm">
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block">Est. Revenue</span>
            <div className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white font-display mt-1">
              ₹{stats.totalRevenueEst.toLocaleString("en-IN")}
            </div>
            <span className="text-[10px] text-zinc-400 mt-1 block">From registered rides</span>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 gap-2 sm:gap-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`pb-3 px-4 font-bold text-sm sm:text-base border-b-2 flex items-center gap-2 transition-all shrink-0 ${
              activeTab === "bookings"
                ? "border-zinc-950 dark:border-white text-zinc-950 dark:text-white"
                : "border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Customer Bookings ({bookings.length})</span>
            {stats.pending > 0 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500 text-white font-black">
                {stats.pending}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("fleet")}
            className={`pb-3 px-4 font-bold text-sm sm:text-base border-b-2 flex items-center gap-2 transition-all shrink-0 ${
              activeTab === "fleet"
                ? "border-zinc-950 dark:border-white text-zinc-950 dark:text-white"
                : "border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
            }`}
          >
            <CarFront className="w-4 h-4" />
            <span>Fleet &amp; Cars ({cars.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("add-car")}
            className={`pb-3 px-4 font-bold text-sm sm:text-base border-b-2 flex items-center gap-2 transition-all shrink-0 ${
              activeTab === "add-car"
                ? "border-zinc-950 dark:border-white text-zinc-950 dark:text-white"
                : "border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>+ Add New Car</span>
          </button>
        </div>

        {/* TAB 1: BOOKINGS LIST */}
        {activeTab === "bookings" && (
          <div className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
              {/* Search bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search name, phone, pickup, destination, ID..."
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white"
                />
              </div>

              {/* Status Filter Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {["all", "pending", "confirmed", "completed", "cancelled"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all shrink-0 ${
                      statusFilter === st
                        ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-sm"
                        : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Bookings Display Cards */}
            {filteredBookings.length === 0 ? (
              <div className="bg-white dark:bg-zinc-900 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-2xl p-12 text-center">
                <Car className="w-12 h-12 text-zinc-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200">Koi booking nahi mili</h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Jab koi website par booking form bharega, wo yahan automatic show hogi aur WhatsApp par aayegi.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredBookings.map((bk) => {
                  const whatsappCustomerUrl = `https://wa.me/${bk.customerPhone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Namaste ${bk.customerName}! Har Har Taxi Services Jabalpur se hum aapki booking #${bk.id} (${bk.pickup} to ${bk.destination}) ke silsile mein sampark kar rahe hain.`
                  )}`;

                  return (
                    <div
                      key={bk.id}
                      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition-all space-y-4"
                    >
                      {/* Top Header: ID, Badge, Timestamp, Delete */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200">
                            #{bk.id}
                          </span>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                              bk.status === "pending"
                                ? "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700"
                                : bk.status === "confirmed"
                                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700"
                                : bk.status === "completed"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300"
                                : "bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300"
                            }`}
                          >
                            {bk.status}
                          </span>
                          <span className="text-[11px] text-zinc-500 font-medium">
                            {new Date(bk.createdAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                          </span>
                        </div>

                        {/* Status Change Selector & Delete */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-zinc-500 font-medium hidden sm:inline">Status Badlein:</span>
                          <select
                            value={bk.status}
                            onChange={(e) => handleUpdateStatus(bk.id, e.target.value as BookingStatus)}
                            className="text-xs font-bold py-1 px-2.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-white cursor-pointer focus:outline-none"
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>

                          <button
                            onClick={() => handleDeleteBooking(bk.id)}
                            title="Delete booking"
                            className="p-1.5 text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Main Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                        {/* Col 1: Customer Contact */}
                        <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Customer Information</span>
                          <div className="text-sm font-black text-zinc-950 dark:text-white">
                            {bk.customerName}
                          </div>
                          <div className="font-mono text-zinc-700 dark:text-zinc-300 font-semibold">
                            {bk.customerPhone}
                          </div>

                          {/* Action Buttons: Call & WhatsApp */}
                          <div className="flex gap-2 pt-1">
                            <a
                              href={`tel:${bk.customerPhone}`}
                              className="btn-gold flex-1 py-1.5 px-2 rounded-lg flex items-center justify-center gap-1 font-bold text-[11px]"
                            >
                              <PhoneCall className="w-3 h-3" />
                              <span>Call Customer</span>
                            </a>
                            <a
                              href={whatsappCustomerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1 font-bold text-[11px] transition-colors"
                            >
                              <MessageSquare className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </a>
                          </div>
                        </div>

                        {/* Col 2: Trip Route & Time */}
                        <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Route &amp; Travel Date</span>
                          <div className="font-bold text-zinc-950 dark:text-white flex items-start gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                            <span>Pickup: {bk.pickup}</span>
                          </div>
                          <div className="font-bold text-zinc-950 dark:text-white flex items-start gap-1.5">
                            <Navigation className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                            <span>Drop: {bk.destination}</span>
                          </div>
                          <div className="text-zinc-600 dark:text-zinc-400 flex items-center gap-3 pt-1">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {bk.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {bk.time}
                            </span>
                          </div>
                        </div>

                        {/* Col 3: Vehicle & Plan */}
                        <div className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Vehicle &amp; Fare</span>
                          <div className="font-bold text-zinc-950 dark:text-white flex items-center gap-1.5">
                            <Car className="w-3.5 h-3.5 text-zinc-500" />
                            <span>{bk.vehicleName}</span>
                          </div>
                          <div className="text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
                            <span>Plan: <strong>{bk.pricingModel === "normal-rental" ? "Normal / Full Day Rental" : "Per-KM Rate"}</strong></span>
                            <span>{bk.tripType === "one-way" ? "One-Way" : "Round-Trip"}</span>
                          </div>
                          <div className="flex items-center justify-between pt-1 border-t border-zinc-200 dark:border-zinc-800">
                            <span className="text-zinc-500">{bk.passengers} Passengers</span>
                            <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 font-display">
                              {bk.estimatedFare ? `₹${bk.estimatedFare.toLocaleString("en-IN")}` : "Custom Quote"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Notes / Special Instructions if any */}
                      {bk.notes && (
                        <div className="text-xs bg-zinc-100/80 dark:bg-zinc-800/60 p-2.5 rounded-lg text-zinc-700 dark:text-zinc-300">
                          <strong>Note / Instructions:</strong> {bk.notes}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: FLEET & CARS MANAGEMENT */}
        {activeTab === "fleet" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-zinc-950 dark:text-white font-display">
                  Current Fleet ({cars.length} Cars)
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Yeh cars website ke Fleet section aur Booking selector mein dikhti hain.
                </p>
              </div>

              <button
                onClick={() => setActiveTab("add-car")}
                className="btn-royal px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Nayi Car Add Karein</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className={`bg-white dark:bg-zinc-900 border rounded-2xl p-5 flex flex-col justify-between transition-all shadow-sm ${
                    car.active
                      ? "border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
                      : "opacity-60 border-zinc-300 dark:border-zinc-800"
                  }`}
                >
                  <div>
                    {/* Car Image Visual */}
                    <div className="relative h-40 w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-4 border border-zinc-200 dark:border-zinc-800">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={car.image || "/images/white-swift-taxi.jpg"}
                        alt={car.name}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/white-swift-taxi.jpg";
                        }}
                      />
                      {car.badge && (
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow">
                          {car.badge}
                        </span>
                      )}
                      {!car.active && (
                        <span className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center font-bold text-xs text-white">
                          INACTIVE (Website par hidden)
                        </span>
                      )}
                    </div>

                    {/* Title & Model */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-black text-zinc-950 dark:text-white font-display">
                          {car.name}
                        </h4>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium block">
                          {car.modelExamples}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {car.category}
                      </span>
                    </div>

                    {/* Pricing Badges: Per KM vs Normal Full Day */}
                    <div className="grid grid-cols-2 gap-2 my-3 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                      <div>
                        <span className="text-[10px] text-zinc-500 font-medium block">Per KM Rate:</span>
                        <span className="text-sm font-black text-zinc-950 dark:text-white font-display">
                          ₹{car.ratePerKm}/km
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 font-medium block">Normal Rental:</span>
                        <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 font-display">
                          ₹{car.normalBookingFare}/day
                        </span>
                      </div>
                    </div>

                    {/* Capacity Specs */}
                    <div className="flex items-center gap-4 text-xs text-zinc-600 dark:text-zinc-400 py-2 border-y border-zinc-100 dark:border-zinc-800">
                      <span className="flex items-center gap-1 font-semibold">
                        <Users className="w-3.5 h-3.5" />
                        {car.capacityPassengers} Pax
                      </span>
                      <span className="flex items-center gap-1 font-semibold">
                        <Briefcase className="w-3.5 h-3.5" />
                        {car.capacityLuggage} Bags
                      </span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        {car.hasAC ? "AC Included" : "Non-AC"}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2.5 line-clamp-2">
                      {car.description}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {car.features?.slice(0, 3).map((feat, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-600 dark:text-zinc-400">
                          &bull; {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Toggle Active & Delete */}
                  <div className="flex items-center justify-between gap-2 pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <button
                      onClick={() => handleToggleCar(car.id)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-colors ${
                        car.active
                          ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-700"
                          : "bg-emerald-600 text-white border-emerald-600"
                      }`}
                    >
                      {car.active ? "Hide from Website" : "Activate on Website"}
                    </button>

                    <button
                      onClick={() => handleDeleteCar(car.id)}
                      className="p-1.5 text-zinc-400 hover:text-red-500 rounded-lg transition-colors"
                      title="Delete Car"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ADD NEW CAR FORM */}
        {activeTab === "add-car" && (
          <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">Fleet Manager</span>
              <h3 className="text-2xl font-black text-zinc-950 dark:text-white font-display mt-1">
                Nayi Car / Gaadi Upload Karein
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Yahan car ki saari details bharein: Per-KM rate, normal/full-day booking price, photo, aur poora description.
              </p>
            </div>

            {carSubmitSuccess && (
              <div className="p-4 mb-6 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 rounded-xl flex items-center gap-2 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Car successfully add ho gayi hai! Fleet list mein dikh rahi hai.</span>
              </div>
            )}

            <form onSubmit={handleCreateCar} className="space-y-5">
              {/* Row 1: Car Name & Models */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Car Name (e.g. Maruti Ertiga / Innova) *
                  </label>
                  <input
                    type="text"
                    required
                    value={newCar.name}
                    onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
                    placeholder="e.g. Maruti Suzuki Ertiga 2024"
                    className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Category *
                  </label>
                  <select
                    value={newCar.category}
                    onChange={(e) => setNewCar({ ...newCar, category: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white cursor-pointer"
                  >
                    <option value="sedan">Sedan (Swift Dzire, Etios)</option>
                    <option value="suv">SUV / MUV (Ertiga, Marazzo)</option>
                    <option value="premium-suv">Premium SUV (Innova Crysta, Hycross)</option>
                    <option value="luxury">Luxury (BMW, Mercedes, Audi)</option>
                    <option value="tempo">Tempo Traveller (12-17 Seater)</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Per KM Rate & Normal Rental Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Per KM Rate (₹ / km) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">₹</span>
                    <input
                      type="number"
                      required
                      min="1"
                      value={newCar.ratePerKm}
                      onChange={(e) => setNewCar({ ...newCar, ratePerKm: e.target.value })}
                      placeholder="12"
                      className="w-full pl-8 pr-3.5 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white font-bold"
                    />
                  </div>
                  <span className="text-[10px] text-zinc-500 mt-1 block">Highway aur outstation ke liye per km hisab</span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Normal / Full Day Fixed Price (₹) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">₹</span>
                    <input
                      type="number"
                      required
                      min="1"
                      value={newCar.normalBookingFare}
                      onChange={(e) => setNewCar({ ...newCar, normalBookingFare: e.target.value })}
                      placeholder="2200"
                      className="w-full pl-8 pr-3.5 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white font-bold"
                    />
                  </div>
                  <span className="text-[10px] text-zinc-500 mt-1 block">Normal local rental fixed package (e.g. 8 hrs 80 km)</span>
                </div>
              </div>

              {/* Row 3: Seating & Luggage Capacity */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Passenger Capacity
                  </label>
                  <input
                    type="number"
                    value={newCar.capacityPassengers}
                    onChange={(e) => setNewCar({ ...newCar, capacityPassengers: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Luggage Bags Capacity
                  </label>
                  <input
                    type="number"
                    value={newCar.capacityLuggage}
                    onChange={(e) => setNewCar({ ...newCar, capacityLuggage: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Badge (Optional)
                  </label>
                  <input
                    type="text"
                    value={newCar.badge}
                    onChange={(e) => setNewCar({ ...newCar, badge: e.target.value })}
                    placeholder="e.g. Best for Families / VIP"
                    className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white"
                  />
                </div>
              </div>

              {/* Row 4: Car Photo Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Car Photo Select Karein
                </label>
                <div className="grid grid-cols-3 gap-3 mb-2">
                  {[
                    { label: "White Swift Dzire", src: "/images/white-swift-taxi.jpg" },
                    { label: "Maruti Ertiga", src: "/images/ertiga-taxi.jpg" },
                    { label: "Toyota Innova Crysta", src: "/images/innova-crysta-taxi.jpg" },
                  ].map((preset) => (
                    <button
                      key={preset.src}
                      type="button"
                      onClick={() => {
                        setNewCar({ ...newCar, image: preset.src, customImageUrl: "" });
                      }}
                      className={`p-2 rounded-xl border text-left flex flex-col items-center gap-1.5 transition-all ${
                        newCar.image === preset.src && !newCar.customImageUrl
                          ? "border-zinc-950 dark:border-white bg-zinc-100 dark:bg-zinc-800 font-bold"
                          : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-400"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={preset.src} alt={preset.label} className="w-full h-16 object-cover rounded-lg" />
                      <span className="text-[10px] text-zinc-700 dark:text-zinc-300">{preset.label}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-2">
                  <span className="text-[11px] text-zinc-500 block mb-1">Ya Custom Photo URL dalein:</span>
                  <input
                    type="url"
                    value={newCar.customImageUrl}
                    onChange={(e) => setNewCar({ ...newCar, customImageUrl: e.target.value })}
                    placeholder="https://example.com/my-car.jpg"
                    className="w-full px-3.5 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-xs text-zinc-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Row 5: Full Description */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Full Car Description (Poori jaankari) *
                </label>
                <textarea
                  required
                  rows={3}
                  value={newCar.description}
                  onChange={(e) => setNewCar({ ...newCar, description: e.target.value })}
                  placeholder="Gaadi ke baare mein poori details likhein jaise AC performance, comfortable seating, outstation travel ke liye faayde, driver experience etc."
                  className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white"
                />
              </div>

              {/* Row 6: Features Highlights */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Key Features (Comma separated)
                </label>
                <input
                  type="text"
                  value={newCar.features}
                  onChange={(e) => setNewCar({ ...newCar, features: e.target.value })}
                  placeholder="Dual AC, Carrier available, Sanitized seats, Bluetooth music"
                  className="w-full px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-900 dark:focus:border-white"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmittingCar}
                  className="btn-royal py-3 px-6 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Plus className="w-4 h-4" />
                  <span>{isSubmittingCar ? "Uploading Car..." : "Gaadi Upload & Save Karein"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("fleet")}
                  className="px-4 py-3 rounded-xl text-xs sm:text-sm font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/data/business";
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  Car, 
  ChevronDown 
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/95 backdrop-blur-md border-b border-navy-800/80 shadow-2xl py-3"
          : "bg-gradient-to-b from-navy-950/95 via-navy-950/70 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-royal-600 via-royal-500 to-cyan-500 flex items-center justify-center shadow-glow-royal-sm group-hover:scale-105 transition-transform shrink-0">
              <Car className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <span className="block text-base sm:text-xl font-black tracking-tight text-white font-display leading-tight group-hover:text-royal-400 transition-colors">
                HAR HAR TAXI
              </span>
              <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gold-400">
                Jabalpur &bull; 24x7 Cabs
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-navy-850/80 transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/taxi-service-in-jabalpur/"
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-navy-850/80 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-2">
                  <div className="glass-dropdown rounded-xl shadow-2xl p-2 border border-navy-750">
                    <Link
                      href="/taxi-service-in-jabalpur/"
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-royal-400 hover:bg-navy-800 transition-colors"
                    >
                      All Taxi Services in Jabalpur
                    </Link>
                    <div className="h-px bg-navy-800 my-1" />
                    <Link
                      href="/local-taxi-jabalpur/"
                      className="block px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:text-white hover:bg-navy-800 transition-colors"
                    >
                      Local Taxi Jabalpur
                    </Link>
                    <Link
                      href="/outstation-taxi-jabalpur/"
                      className="block px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:text-white hover:bg-navy-800 transition-colors"
                    >
                      Outstation Taxi Jabalpur
                    </Link>
                    <Link
                      href="/airport-taxi-jabalpur/"
                      className="block px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:text-white hover:bg-navy-800 transition-colors"
                    >
                      Airport Taxi (Dumna JLR)
                    </Link>
                    <Link
                      href="/railway-station-taxi-jabalpur/"
                      className="block px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:text-white hover:bg-navy-800 transition-colors"
                    >
                      Railway Station Taxi
                    </Link>
                    <Link
                      href="/one-way-taxi-jabalpur/"
                      className="block px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:text-white hover:bg-navy-800 transition-colors"
                    >
                      One Way Taxi Service
                    </Link>
                    <Link
                      href="/round-trip-taxi-jabalpur/"
                      className="block px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:text-white hover:bg-navy-800 transition-colors"
                    >
                      Round Trip Taxi Service
                    </Link>
                    <Link
                      href="/car-rental-jabalpur/"
                      className="block px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:text-white hover:bg-navy-800 transition-colors"
                    >
                      Car Rental with Driver
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/routes/"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-navy-850/80 transition-colors"
            >
              Popular Routes
            </Link>

            <Link
              href="/taxi-booking-jabalpur/"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-navy-850/80 transition-colors"
            >
              Taxi Booking
            </Link>

            <Link
              href="/about/"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-navy-850/80 transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/contact/"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-navy-850/80 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* DESKTOP CTAS */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to inquire about taxi booking in Jabalpur.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/25 transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Now</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="btn-gold flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold shadow-glow-gold-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="p-2.5 rounded-xl bg-gold-500 text-navy-950 font-bold min-w-[42px] min-h-[42px] flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Call Har Har Taxi Services"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-navy-850 text-slate-200 hover:text-white border border-navy-750 min-w-[42px] min-h-[42px] flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-2xl border-b border-navy-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in max-h-[calc(100dvh-4.5rem)] overflow-y-auto shadow-2xl">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-navy-800 flex items-center justify-between"
            >
              <span>Home</span>
            </Link>
            <Link
              href="/taxi-service-in-jabalpur/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-royal-400 hover:bg-navy-800 flex items-center justify-between"
            >
              <span>Taxi Service in Jabalpur (All)</span>
            </Link>
            <div className="grid grid-cols-1 gap-1 pl-3 border-l-2 border-royal-500/30 ml-2 my-1">
              <Link
                href="/local-taxi-jabalpur/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs text-slate-300 hover:text-white rounded-md hover:bg-navy-900"
              >
                &bull; Local Taxi Jabalpur
              </Link>
              <Link
                href="/outstation-taxi-jabalpur/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs text-slate-300 hover:text-white rounded-md hover:bg-navy-900"
              >
                &bull; Outstation Taxi
              </Link>
              <Link
                href="/airport-taxi-jabalpur/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs text-slate-300 hover:text-white rounded-md hover:bg-navy-900"
              >
                &bull; Airport Taxi (Dumna)
              </Link>
              <Link
                href="/railway-station-taxi-jabalpur/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs text-slate-300 hover:text-white rounded-md hover:bg-navy-900"
              >
                &bull; Railway Station Taxi
              </Link>
              <Link
                href="/one-way-taxi-jabalpur/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs text-slate-300 hover:text-white rounded-md hover:bg-navy-900"
              >
                &bull; One Way Taxi
              </Link>
              <Link
                href="/round-trip-taxi-jabalpur/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs text-slate-300 hover:text-white rounded-md hover:bg-navy-900"
              >
                &bull; Round Trip Taxi
              </Link>
              <Link
                href="/car-rental-jabalpur/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs text-slate-300 hover:text-white rounded-md hover:bg-navy-900"
              >
                &bull; Car Rental with Driver
              </Link>
            </div>
            <Link
              href="/routes/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-navy-800"
            >
              Popular Routes
            </Link>
            <Link
              href="/taxi-booking-jabalpur/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-navy-800"
            >
              Taxi Booking
            </Link>
            <Link
              href="/about/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-navy-800"
            >
              About Us
            </Link>
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-navy-800"
            >
              Contact
            </Link>
          </nav>

          <div className="pt-2 grid grid-cols-2 gap-2.5">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi in Jabalpur.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md active:scale-95 transition-transform"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl btn-gold text-xs font-bold active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

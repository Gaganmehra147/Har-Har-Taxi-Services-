import React from "react";
import Link from "next/link";
import { BUSINESS_CONFIG, JABALPUR_LOCALITIES } from "@/data/business";
import { ROUTES_DATA } from "@/data/routes";
import { 
  Car, 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-slate-300 pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          {/* Col 1 & 2: Brand & NAP */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-600 via-royal-500 to-cyan-500 flex items-center justify-center text-white shadow-glow-royal-sm">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xl font-black text-white font-display">
                  HAR HAR TAXI SERVICES
                </span>
                <span className="block text-xs font-bold text-gold-400 uppercase tracking-wider">
                  Jabalpur &bull; Madhya Pradesh
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Har Har Taxi Services is Jabalpur&apos;s trusted private cab booking provider. Offering clean, AC sedans and SUVs for local city rides, Dumna Airport transfers, Jabalpur Junction pickups, and outstation trips to Kanha, Bandhavgarh, Pachmarhi, Khajuraho, and Bhopal.
            </p>

            {/* Contact details with NAP */}
            <div className="space-y-2.5 pt-2 text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
                <span>{BUSINESS_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="hover:text-white font-bold transition-colors">
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi.")}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white font-bold transition-colors"
                >
                  WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-royal-400 shrink-0" />
                <span>{BUSINESS_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-royal-400 shrink-0" />
                <span>{BUSINESS_CONFIG.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Taxi Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-display">
              Taxi Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/taxi-service-in-jabalpur/" className="hover:text-royal-400 transition-colors">
                  Taxi Service in Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/cab-service-jabalpur/" className="hover:text-royal-400 transition-colors">
                  Cab Service in Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/local-taxi-jabalpur/" className="hover:text-royal-400 transition-colors">
                  Local Taxi Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/outstation-taxi-jabalpur/" className="hover:text-royal-400 transition-colors">
                  Outstation Taxi Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/airport-taxi-jabalpur/" className="hover:text-royal-400 transition-colors">
                  Airport Taxi Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/railway-station-taxi-jabalpur/" className="hover:text-royal-400 transition-colors">
                  Railway Station Taxi
                </Link>
              </li>
              <li>
                <Link href="/one-way-taxi-jabalpur/" className="hover:text-royal-400 transition-colors">
                  One Way Taxi Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/round-trip-taxi-jabalpur/" className="hover:text-royal-400 transition-colors">
                  Round Trip Taxi Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/car-rental-jabalpur/" className="hover:text-royal-400 transition-colors">
                  Car Rental in Jabalpur
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Popular Routes */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-display">
              Popular Routes
            </h4>
            <ul className="space-y-2.5 text-sm">
              {ROUTES_DATA.slice(0, 8).map((route) => (
                <li key={route.slug}>
                  <Link
                    href={`/routes/${route.slug}/`}
                    className="hover:text-royal-400 transition-colors flex items-center justify-between group"
                  >
                    <span>Jabalpur to {route.destination}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-gold-400" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/routes/" className="text-xs font-bold text-royal-400 hover:underline">
                  View All Outstation Routes &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-display">
              Company &amp; Help
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about/" className="hover:text-royal-400 transition-colors">
                  About Har Har Taxi
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-royal-400 transition-colors">
                  Contact &amp; Support
                </Link>
              </li>
              <li>
                <Link href="/taxi-booking-jabalpur/" className="hover:text-royal-400 transition-colors">
                  Online Taxi Booking
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="inline-block mt-3 px-3 py-1.5 rounded-lg btn-gold text-xs font-bold"
                >
                  24x7 Helpline: {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Local Service Area Footprint */}
        <div className="py-8 border-b border-navy-800">
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 font-display">
            Local Taxi Service Areas Across Jabalpur:
          </h5>
          <div className="flex flex-wrap gap-2 text-xs">
            {JABALPUR_LOCALITIES.map((loc) => (
              <span
                key={loc.name}
                className="px-2.5 py-1 rounded-md bg-navy-900 border border-navy-800 text-slate-300 hover:text-white transition-colors"
              >
                Taxi in {loc.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright & SEO note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name} – Jabalpur, Madhya Pradesh. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Reliable Taxi Service in Jabalpur &bull; Clean AC Fleet &bull; Dumna Airport &amp; Outstation Transfers
          </p>
        </div>
      </div>
    </footer>
  );
}

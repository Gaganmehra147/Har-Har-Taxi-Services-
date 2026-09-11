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
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 pt-16 pb-24 lg:pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          {/* Col 1 & 2: Brand & NAP */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center shadow-md border border-zinc-200 dark:border-zinc-800">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xl font-black text-zinc-950 dark:text-white font-display">
                  HAR HAR TAXI SERVICES
                </span>
                <span className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Jabalpur &bull; Madhya Pradesh
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              Har Har Taxi Services is Jabalpur&apos;s trusted private cab booking provider. Offering clean, AC sedans and SUVs for local city rides, Dumna Airport transfers, Jabalpur Junction pickups, and outstation trips to Kanha, Bandhavgarh, Pachmarhi, Khajuraho, and Bhopal.
            </p>

            {/* Contact details with NAP */}
            <div className="space-y-2.5 pt-2 text-sm text-zinc-700 dark:text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-950 dark:text-white mt-1 shrink-0" />
                <span>{BUSINESS_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-950 dark:text-white shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="hover:text-black dark:hover:text-white font-bold transition-colors">
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a taxi.")}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-black dark:hover:text-white font-bold transition-colors"
                >
                  WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0" />
                <span>{BUSINESS_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0" />
                <span>{BUSINESS_CONFIG.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Taxi Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-4 font-display">
              Taxi Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/taxi-service-in-jabalpur/" className="hover:text-black dark:hover:text-white hover:underline transition-colors">
                  Taxi Service in Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/cab-service-jabalpur/" className="hover:text-black dark:hover:text-white hover:underline transition-colors">
                  Cab Service in Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/local-taxi-jabalpur/" className="hover:text-black dark:hover:text-white hover:underline transition-colors">
                  Local Taxi Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/outstation-taxi-jabalpur/" className="hover:text-black dark:hover:text-white hover:underline transition-colors">
                  Outstation Taxi Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/airport-taxi-jabalpur/" className="hover:text-black dark:hover:text-white hover:underline transition-colors">
                  Airport Taxi Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/railway-station-taxi-jabalpur/" className="hover:text-black dark:hover:text-white hover:underline transition-colors">
                  Railway Station Taxi
                </Link>
              </li>
              <li>
                <Link href="/one-way-taxi-jabalpur/" className="hover:text-black dark:hover:text-white hover:underline transition-colors">
                  One Way Taxi Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/round-trip-taxi-jabalpur/" className="hover:text-black dark:hover:text-white hover:underline transition-colors">
                  Round Trip Taxi Jabalpur
                </Link>
              </li>
              <li>
                <Link href="/car-rental-jabalpur/" className="hover:text-black dark:hover:text-white hover:underline transition-colors">
                  Car Rental in Jabalpur
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Popular Routes */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-4 font-display">
              Popular Routes
            </h4>
            <ul className="space-y-2.5 text-sm">
              {ROUTES_DATA.slice(0, 8).map((route) => (
                <li key={route.slug}>
                  <Link
                    href={`/routes/${route.slug}/`}
                    className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>Jabalpur to {route.destination}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/routes/" className="text-xs font-bold text-zinc-950 dark:text-white hover:underline">
                  View All Outstation Routes &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-white mb-4 font-display">
              Company &amp; Help
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about/" className="hover:text-black dark:hover:text-white hover:underline transition-colors">
                  About Har Har Taxi
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-black dark:hover:text-white hover:underline transition-colors">
                  Contact &amp; Support
                </Link>
              </li>
              <li>
                <Link href="/taxi-booking-jabalpur/" className="hover:text-black dark:hover:text-white hover:underline transition-colors">
                  Online Taxi Booking
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="inline-block mt-3 px-3.5 py-2 rounded-xl btn-royal text-xs font-bold"
                >
                  24x7 Helpline: {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Local Service Area Footprint */}
        <div className="py-8 border-b border-zinc-200 dark:border-zinc-800">
          <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-3 font-display">
            Local Taxi Service Areas Across Jabalpur:
          </h5>
          <div className="flex flex-wrap gap-2 text-xs">
            {JABALPUR_LOCALITIES.map((loc) => (
              <span
                key={loc.name}
                className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
              >
                Taxi in {loc.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name} – Jabalpur, Madhya Pradesh. All rights reserved.
            <span className="mx-2">&bull;</span>
            <Link href="/admin" className="font-semibold text-zinc-700 dark:text-zinc-300 hover:underline">
              Owner Admin Portal
            </Link>
          </p>
          <p className="text-center sm:text-right">
            Reliable Taxi Service in Jabalpur &bull; Clean AC Fleet &bull; Dumna Airport &amp; Outstation Transfers
          </p>
        </div>
      </div>
    </footer>
  );
}

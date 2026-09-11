import React from "react";
import Link from "next/link";
import { CORE_SERVICES } from "@/data/routes";
import { 
  Navigation, 
  MapPin, 
  Plane, 
  Train, 
  ArrowRightCircle, 
  Repeat, 
  ArrowRight,
  Check
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Navigation: <Navigation className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Plane: <Plane className="w-5 h-5" />,
  Train: <Train className="w-5 h-5" />,
  ArrowRightCircle: <ArrowRightCircle className="w-5 h-5" />,
  Repeat: <Repeat className="w-5 h-5" />,
};

export default function ServicesGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative transition-colors" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 mb-2.5">
            Tailored Cab Solutions
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white font-display">
            Taxi Services in Jabalpur
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-base mt-2.5 leading-relaxed">
            From quick city drops across Wright Town and Napier Town to intercity safaris in Kanha and Bandhavgarh, explore our dependable cab solutions designed for supreme comfort.
          </p>
        </div>

        {/* 6 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.slug}
              className="glass-panel rounded-2xl p-5 sm:p-7 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-750 flex items-center justify-center mb-5 text-zinc-900 dark:text-white group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  {iconMap[service.icon] || <Navigation className="w-5 h-5" />}
                </div>

                <h3 className="text-xl font-bold text-zinc-950 dark:text-white font-display group-hover:underline underline-offset-4 transition-colors">
                  {service.shortTitle}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2.5 leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="mt-5 space-y-2">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800">
                <Link
                  href={`/${service.slug}/`}
                  className="flex items-center justify-between text-xs font-bold text-zinc-950 dark:text-white hover:underline transition-colors"
                >
                  <span>Explore {service.shortTitle} Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

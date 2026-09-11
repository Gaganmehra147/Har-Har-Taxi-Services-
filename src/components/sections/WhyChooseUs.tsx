import React from "react";
import { TRUST_FEATURES } from "@/data/business";
import { 
  ShieldCheck, 
  Sparkles, 
  BadgeIndianRupee, 
  Clock, 
  Compass, 
  MessageCircle, 
  PhoneCall, 
  HeartHandshake 
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-zinc-900 dark:text-white" />,
  Sparkles: <Sparkles className="w-5 h-5 text-zinc-900 dark:text-white" />,
  BadgeIndianRupee: <BadgeIndianRupee className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Clock: <Clock className="w-5 h-5 text-zinc-900 dark:text-white" />,
  Compass: <Compass className="w-5 h-5 text-zinc-900 dark:text-white" />,
  MessageCircle: <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  PhoneCall: <PhoneCall className="w-5 h-5 text-zinc-900 dark:text-white" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-zinc-900 dark:text-white" />,
};

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative transition-colors" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 mb-2.5">
            Why Us
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white font-display">
            Why Choose Har Har Taxi Services?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-base mt-2.5 leading-relaxed">
            We operate with a simple goal: provide clean, well-serviced cabs driven by polite chauffeurs who respect your schedule and safety.
          </p>
        </div>

        {/* 8 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 sm:p-6 hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-1 transition-all duration-200 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-750 flex items-center justify-center mb-3.5">
                {iconMap[item.icon] || <ShieldCheck className="w-5 h-5" />}
              </div>

              <h3 className="text-base font-bold text-zinc-950 dark:text-white font-display">
                {item.title}
              </h3>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { 
  Compass, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  PhoneCall, 
  Sparkles,
  MapPin,
  Clock,
  Car
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/data/business";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Choose Route & Car",
      subtitle: "Pickup & Destination",
      desc: "Enter your pickup location in Jabalpur and choose your preferred destination — local city drops or outstation highways.",
      highlights: ["Doorstep pickup anywhere in Jabalpur", "Sedan, SUV & Luxury fleet choice"],
      icon: <Compass className="w-5 h-5 text-white dark:text-zinc-950" />,
      tag: "Step 1: Select Ride"
    },
    {
      step: "02",
      title: "Get Instant Quote",
      subtitle: "Transparent Pricing",
      desc: "Receive an upfront, all-inclusive fare estimate via WhatsApp or phone call. No hidden fees, zero surge pricing.",
      highlights: ["Instant WhatsApp confirmation", "Per-KM or Full-Day package rates"],
      icon: <MessageSquare className="w-5 h-5 text-white dark:text-zinc-950" />,
      tag: "Step 2: Fair Pricing"
    },
    {
      step: "03",
      title: "Enjoy Your Ride",
      subtitle: "Safe & On-Time Journey",
      desc: "Your verified driver arrives promptly in a spotless, AC-sanitized vehicle. Relax and enjoy safe highway or city commute.",
      highlights: ["Experienced polite chauffeurs", "24x7 customer assistance"],
      icon: <ShieldCheck className="w-5 h-5 text-white dark:text-zinc-950" />,
      tag: "Step 3: Relaxed Travel"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-zinc-50/70 dark:bg-zinc-950/70 border-t border-zinc-200 dark:border-zinc-800 relative transition-colors" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Simple 3-Step Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white font-display">
            How It Works
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-base mt-3 leading-relaxed">
            Booking a cab in Jabalpur with Har Har Taxi is fast, effortless, and completely transparent with no cancellation fees.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative shadow-sm hover:shadow-xl hover:border-zinc-950 dark:hover:border-white hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Top Row: Step Tag + Icon Box */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                    {step.tag}
                  </span>

                  {/* High-Contrast Icon Pill */}
                  <div className="w-11 h-11 rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Big Step Number Watermark & Title */}
                <div className="relative mb-4">
                  <div className="text-5xl font-black text-zinc-100 dark:text-zinc-800/80 font-display select-none absolute -top-4 right-0 pointer-events-none group-hover:text-zinc-200 dark:group-hover:text-zinc-700 transition-colors">
                    {step.step}
                  </div>
                  
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white font-display relative z-10 group-hover:underline transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* Key Highlight Bullets */}
                <ul className="space-y-2 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                  {step.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Step Indicator */}
              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-zinc-400 dark:text-zinc-500">
                <span>Progress: Step {step.step} of 03</span>
                <ArrowRight className="w-4 h-4 text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Call Dispatch Banner */}
        <div className="mt-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white font-display">
                Need urgent airport or station pickup in Jabalpur?
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Call our 24x7 control room for prompt 15-minute cab dispatch.
              </p>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="btn-gold px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
}

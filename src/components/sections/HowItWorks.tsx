import React from "react";
import { Compass, MessageCircle, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Trip",
      desc: "Enter your pickup address in Jabalpur and select your destination (local or outstation).",
      icon: <Compass className="w-6 h-6 text-royal-400" />
    },
    {
      num: "02",
      title: "Get Your Quote",
      desc: "Contact Har Har Taxi Services through WhatsApp or direct call for instant upfront vehicle confirmation.",
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />
    },
    {
      num: "03",
      title: "Enjoy Your Ride",
      desc: "Our verified, courteous driver picks you up on schedule in a clean, AC sanitized vehicle.",
      icon: <CheckCircle className="w-6 h-6 text-gold-400" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-navy-900/50 border-t border-navy-800" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-royal-500/15 text-royal-300 border border-royal-500/30 mb-2.5">
            Easy 3 Steps
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-display">
            How It Works
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-2.5 leading-relaxed">
            Booking a cab in Jabalpur with us is simple, transparent, and completely free of confusing cancellation charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-royal-500/40 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-black text-navy-750/80 group-hover:text-royal-500/25 font-display transition-colors mb-3 sm:mb-4">
                {step.num}
              </div>

              <div className="w-12 h-12 rounded-xl bg-navy-900 border border-navy-750 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-royal-600/20 group-hover:border-royal-500/40 transition-colors">
                {step.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-2 group-hover:text-royal-300 transition-colors">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

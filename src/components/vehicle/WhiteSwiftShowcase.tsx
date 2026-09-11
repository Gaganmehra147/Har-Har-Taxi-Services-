"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BUSINESS_CONFIG } from "@/data/business";
import { ShieldCheck, Wind, Users, Briefcase, Sparkles, Navigation } from "lucide-react";

export default function WhiteSwiftShowcase() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl overflow-hidden glass-panel-glow border border-zinc-200 dark:border-zinc-800 p-3 sm:p-4 transition-all duration-300 group"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg) scale3d(1.01, 1.01, 1.01)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
      }}
    >
      {/* Top Floating Badge */}
      <div className="flex items-center justify-between gap-2 mb-2 px-1">
        <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-200 text-[11px] sm:text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-zinc-950 dark:text-white shrink-0" />
          <span className="truncate">Prime Fleet &bull; White Swift Dzire</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-500/25 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>24x7 Ready</span>
        </div>
      </div>

      {/* Main White Swift Image Container */}
      <div className="relative w-full h-[200px] xs:h-[240px] sm:h-[270px] lg:h-[290px] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 shadow-inner">
        <Image
          src="/images/white-swift-taxi.jpg"
          alt="Har Har Taxi Services - White Maruti Swift Dzire Taxi in Jabalpur"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />

        {/* Ambient subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Floating Route Milestone Chip */}
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-bold text-white flex items-center gap-1 shadow-lg">
          <Navigation className="w-3 h-3 text-zinc-300" />
          <span>Jabalpur &bull; Dumna &bull; Kanha</span>
        </div>

        {/* Bottom Overlay Features on image */}
        <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 z-10 flex items-center justify-between gap-1 sm:gap-2 p-2 sm:p-2.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 text-[10px] xs:text-xs text-white">
          <div className="flex items-center gap-2 xs:gap-3">
            <span className="flex items-center gap-1 font-semibold text-zinc-200">
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-300" /> 4 Seater
            </span>
            <span className="flex items-center gap-1 font-semibold text-zinc-200">
              <Wind className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> Chilled AC
            </span>
            <span className="hidden xs:flex items-center gap-1 font-semibold text-zinc-200">
              <Briefcase className="w-3.5 h-3.5 text-zinc-300" /> 2 Bags
            </span>
          </div>
          <div className="text-right font-black text-white text-xs sm:text-sm shrink-0">
            From ₹11/km
          </div>
        </div>
      </div>

      {/* Under-Card Highway Road Simulation Bar */}
      <div className="mt-3 py-2 px-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1.5 xs:gap-2 text-xs">
        <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="text-[10px] sm:text-xs leading-tight">
            Clean sanitized white cab &bull; Verified polite local driver
          </span>
        </div>
        <a
          href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Har Har Taxi Services, I want to book a White Swift Dzire taxi in Jabalpur.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-zinc-950 dark:text-white transition-colors shrink-0 underline decoration-zinc-400 dark:decoration-zinc-600 self-end xs:self-auto hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          Book Swift &rarr;
        </a>
      </div>
    </div>
  );
}

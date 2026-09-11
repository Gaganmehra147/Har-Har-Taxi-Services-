"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Sparkles } from "lucide-react";

interface ThemeToggleProps {
  variant?: "navbar" | "floating" | "mobile" | "inline";
  className?: string;
}

export default function ThemeToggle({
  variant = "navbar",
  className = "",
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Avoid hydration mismatch by rendering a stable placeholder before mounted
  if (!mounted) {
    if (variant === "floating") {
      return (
        <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 p-3 rounded-full bg-zinc-900 text-white border border-zinc-700 shadow-xl opacity-0" />
      );
    }
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`p-2 rounded-xl border border-zinc-300 dark:border-zinc-800 opacity-50 ${className}`}
      >
        <Moon className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === "dark";

  // FLOATING QUICK-TOGGLE VARIANT
  if (variant === "floating") {
    return (
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to White Theme" : "Switch to Black Theme"}
          className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full backdrop-blur-xl transition-all duration-300 shadow-xl active:scale-95 border border-zinc-200 dark:border-zinc-700 bg-white/95 dark:bg-zinc-900/95 text-zinc-900 dark:text-white hover:border-zinc-400 dark:hover:border-zinc-500"
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-900 transition-transform duration-300 group-hover:-rotate-12" />
            )}
          </div>
          <span className="text-xs font-bold tracking-tight hidden sm:inline">
            {isDark ? "White Mode" : "Black Mode"}
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </button>
      </div>
    );
  }

  // MOBILE DRAWER VARIANT
  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border transition-all duration-200 ${
          isDark
            ? "bg-zinc-900/80 border-zinc-800 text-white hover:bg-zinc-800"
            : "bg-zinc-100 border-zinc-300 text-zinc-900 hover:bg-zinc-200"
        } ${className}`}
      >
        <div className="flex items-center gap-2.5">
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-zinc-800" />
          )}
          <span className="text-xs font-bold">
            Theme: {isDark ? "Black Mode" : "White Mode"}
          </span>
        </div>
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
          Switch to {isDark ? "White" : "Black"}
        </span>
      </button>
    );
  }

  // NAVBAR COMPACT VARIANT (Default)
  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? "Switch to White Theme" : "Switch to Black Theme"}
      aria-label={isDark ? "Switch to White Theme" : "Switch to Black Theme"}
      className={`group relative flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border transition-all duration-200 active:scale-95 ${
        isDark
          ? "bg-zinc-900/90 border-zinc-700/80 text-zinc-200 hover:text-white hover:border-zinc-500 hover:bg-zinc-800"
          : "bg-white border-zinc-300 text-zinc-800 hover:text-zinc-950 hover:border-zinc-400 hover:bg-zinc-100 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-zinc-900 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>
      <span className="text-[11px] font-bold tracking-tight hidden md:inline">
        {isDark ? "White" : "Black"}
      </span>
    </button>
  );
}

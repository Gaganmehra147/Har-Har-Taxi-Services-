import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060a14",
          900: "#0b1222",
          850: "#101a33",
          800: "#162244",
          750: "#1c2b54",
          700: "#243666",
          600: "#334b8c",
        },
        royal: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
        },
        gold: {
          300: "#fde047",
          400: "#facc15",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        charcoal: {
          950: "#070b16",
          900: "#0e1526",
          850: "#141e34",
          800: "#1c2842",
          700: "#2b3b5e",
          600: "#44557d",
        },
        saffron: {
          400: "#f59e0b",
          500: "#d97706",
          600: "#b45309",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "floatGentle 3s ease-in-out infinite",
      },
      keyframes: {
        floatGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      boxShadow: {
        "glow-royal": "0 0 35px -5px rgba(37, 99, 235, 0.45)",
        "glow-royal-sm": "0 0 15px -2px rgba(37, 99, 235, 0.35)",
        "glow-gold": "0 0 30px -5px rgba(245, 158, 11, 0.4)",
        "glow-gold-sm": "0 0 15px -2px rgba(245, 158, 11, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

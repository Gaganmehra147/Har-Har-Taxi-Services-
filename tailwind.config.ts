import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Monochrome tokens
        noir: {
          950: "#050505",
          900: "#0a0a0a",
          850: "#121212",
          800: "#18181b",
          700: "#27272a",
          600: "#3f3f46",
          500: "#52525b",
          400: "#71717a",
          300: "#a1a1aa",
          200: "#d4d4d8",
          100: "#f4f4f5",
          50: "#fafafa",
        },
        // Backward compatibility mappings
        navy: {
          950: "#09090b",
          900: "#121214",
          850: "#18181b",
          800: "#222226",
          750: "#27272a",
          700: "#323238",
          600: "#4b4b52",
        },
        royal: {
          400: "#71717a",
          500: "#27272a",
          600: "#18181b",
          700: "#09090b",
          800: "#000000",
        },
        gold: {
          300: "#e4e4e7",
          400: "#d4d4d8",
          500: "#a1a1aa",
          600: "#71717a",
          700: "#52525b",
        },
        charcoal: {
          950: "#050505",
          900: "#0a0a0a",
          850: "#121212",
          800: "#18181b",
          700: "#27272a",
          600: "#3f3f46",
        },
        saffron: {
          400: "#e4e4e7",
          500: "#a1a1aa",
          600: "#71717a",
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
        "glow-white": "0 0 35px -5px rgba(255, 255, 255, 0.25)",
        "glow-white-sm": "0 0 15px -2px rgba(255, 255, 255, 0.2)",
        "glow-dark": "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
        "glow-royal": "0 0 30px -5px rgba(255, 255, 255, 0.2)",
        "glow-royal-sm": "0 0 15px -2px rgba(255, 255, 255, 0.15)",
        "glow-gold": "0 0 25px -5px rgba(255, 255, 255, 0.15)",
        "glow-gold-sm": "0 0 12px -2px rgba(255, 255, 255, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

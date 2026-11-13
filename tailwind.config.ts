import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ["'Space Grotesk'", "Inter", "sans-serif"],
        serif: ["'Newsreader'", "Playfair Display", "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "monospace"],
      },
      colors: {
        ink: "#0C0D0E",
        navy: "#131517",
        warm: "#F7F6F2",
        amber: {
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
        copper: "#F97316",
        gold: "#F59E0B",
        muted: "#71717A",
        studio: {
          950: "#090A0B",
          900: "#0C0D0E",
          850: "#131517",
          800: "#181A1F",
          700: "#22252C",
          600: "#31353E",
          500: "#525866",
          400: "#71717A",
          300: "#A1A1AA",
          200: "#D4D4D8",
          100: "#F4F4F5",
          50: "#FAFAFA",
        },
        background: "#0C0D0E",
        foreground: "#F4F4F5",
        midnight: {
          950: "#090A0B",
          900: "#0C0D0E",
          850: "#131517",
          800: "#181A1F",
          700: "#22252C",
          600: "#31353E",
        },
        brand: {
          amber: "#F59E0B",
          emerald: "#10B981",
          copper: "#F97316",
          gold: "#D97706",
        },
        card: {
          DEFAULT: "rgba(19, 21, 23, 0.85)",
          hover: "rgba(24, 26, 31, 0.95)",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
      boxShadow: {
        studio: "0 20px 40px -15px rgba(0, 0, 0, 0.6)",
        "studio-elevated": "0 30px 60px -12px rgba(0, 0, 0, 0.75)",
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.3)",
        focus: "0 0 0 3px rgba(245, 158, 11, 0.35)",
        "glow-sm": "0 0 15px -3px rgba(245, 158, 11, 0.25)",
        "glow-amber": "0 0 25px -4px rgba(245, 158, 11, 0.3)",
        "glow-emerald": "0 0 25px -4px rgba(16, 185, 129, 0.3)",
        "glow-gold": "0 0 30px -4px rgba(245, 158, 11, 0.25)",
        "card-glass": "0 10px 30px 0 rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;

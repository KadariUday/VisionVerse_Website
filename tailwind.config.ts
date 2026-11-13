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
        ink: "#101114",
        navy: "#111827",
        warm: "#F7F6F2",
        electric: "#315BFF",
        violet: "#753BDB",
        coral: "#FF5D65",
        gold: "#D9A441",
        muted: "#777982",
        studio: {
          950: "#0B0C0E",
          900: "#101114",
          850: "#15171C",
          800: "#1B1E26",
          700: "#252934",
          600: "#323746",
          500: "#4D5366",
          400: "#777982",
          300: "#A2A6B2",
          200: "#D3D5DC",
          100: "#EDEFEF",
          50: "#F7F6F2",
        },
        background: "#101114",
        foreground: "#F7F6F2",
        midnight: {
          950: "#0B0C0E",
          900: "#101114",
          850: "#15171C",
          800: "#1B1E26",
          700: "#252934",
          600: "#323746",
        },
        brand: {
          blue: "#315BFF",
          purple: "#753BDB",
          pink: "#FF5D65",
          gold: "#D9A441",
          cyan: "#00E5FF",
        },
        card: {
          DEFAULT: "rgba(21, 23, 28, 0.85)",
          hover: "rgba(27, 30, 38, 0.95)",
          border: "rgba(255, 255, 255, 0.08)",
        },
      },
      boxShadow: {
        studio: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
        "studio-elevated": "0 30px 60px -12px rgba(0, 0, 0, 0.65)",
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.3)",
        focus: "0 0 0 3px rgba(49, 91, 255, 0.35)",
        "glow-sm": "0 0 15px -3px rgba(49, 91, 255, 0.25)",
        "glow-md": "0 0 25px -4px rgba(117, 59, 219, 0.3)",
        "glow-pink": "0 0 25px -4px rgba(255, 93, 101, 0.3)",
        "glow-gold": "0 0 30px -4px rgba(217, 164, 65, 0.25)",
        "card-glass": "0 10px 30px 0 rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;

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
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        background: "#080B1C",
        foreground: "#F8FAFC",
        midnight: {
          950: "#050713",
          900: "#080B1C",
          850: "#0D1127",
          800: "#111633",
          700: "#18204A",
          600: "#222D68",
        },
        brand: {
          blue: "#258BFF",
          purple: "#8B35FF",
          pink: "#F02D9B",
          gold: "#F7B83B",
          cyan: "#00E5FF",
        },
        card: {
          DEFAULT: "rgba(17, 22, 51, 0.75)",
          hover: "rgba(24, 32, 74, 0.85)",
          border: "rgba(139, 53, 255, 0.15)",
        },
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 53, 255, 0.3), transparent)",
        "blue-purple-gradient": "linear-gradient(135deg, #258BFF 0%, #8B35FF 50%, #F02D9B 100%)",
        "gold-gradient": "linear-gradient(135deg, #F7B83B 0%, #E69D1E 100%)",
        "neon-glow": "radial-gradient(circle at center, rgba(37, 139, 255, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px rgba(37, 139, 255, 0.3)",
        "glow-md": "0 0 25px -4px rgba(139, 53, 255, 0.35)",
        "glow-pink": "0 0 25px -4px rgba(240, 45, 155, 0.35)",
        "glow-gold": "0 0 25px -4px rgba(247, 184, 59, 0.35)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;

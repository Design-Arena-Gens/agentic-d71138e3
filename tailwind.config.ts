import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      colors: {
        canvas: {
          DEFAULT: "#0E1116",
          accent: "#141923",
          soft: "#1C222F"
        },
        primary: {
          DEFAULT: "#7C5CFC",
          foreground: "#F5F3FF"
        },
        positive: "#4ADE80",
        warning: "#FACC15",
        danger: "#F87171"
      },
      boxShadow: {
        glow: "0 10px 40px -15px rgba(124,92,252,0.45)"
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(124,92,252,0.35)" },
          "50%": { boxShadow: "0 0 0 10px rgba(124,92,252,0)" }
        }
      },
      animation: {
        "pulse-glow": "pulse-glow 3s infinite"
      }
    }
  },
  plugins: []
};

export default config;

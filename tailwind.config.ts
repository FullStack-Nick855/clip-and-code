import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        lg: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ink: {
          950: "#070A12",
          900: "#0B0F19",
          800: "#0F172A",
          700: "#111827",
          600: "#1F2937",
        },
        accent: {
          blue: "#3B82F6",
          violet: "#8B5CF6",
          cyan: "#06B6D4",
          teal: "#14B8A6",
        },
        fog: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.04em", fontWeight: "600" }],
        "display-xl": ["clamp(2.5rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "600" }],
        "display-lg": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "600" }],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "radial-spot":
          "radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, rgba(11,15,25,0) 70%)",
        "accent-gradient":
          "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)",
        "soft-gradient":
          "linear-gradient(135deg, rgba(59,130,246,0.18), rgba(139,92,246,0.18) 50%, rgba(6,182,212,0.18))",
      },
      boxShadow: {
        "glow-sm": "0 0 24px -6px rgba(59,130,246,0.45)",
        "glow-md": "0 0 60px -10px rgba(139,92,246,0.45)",
        "glow-lg": "0 0 120px -20px rgba(6,182,212,0.4)",
        "card": "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -30px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(0.5deg)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "shine": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 12s ease infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-slower": "float-slower 12s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "shine": "shine 3s linear infinite",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

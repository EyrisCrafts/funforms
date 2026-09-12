import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
        mono: ["var(--font-mono)", "monospace"],
        hand: ["var(--font-hand)", "cursive"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        neon: ["var(--font-neon)", "sans-serif"],
        comic: ["var(--font-comic)", "cursive"],
        rounded: ["var(--font-rounded)", "sans-serif"],
        western: ["var(--font-western)", "serif"],
        type: ["var(--font-type)", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "wand-wave": {
          "0%, 100%": { transform: "rotate(-18deg)" },
          "50%": { transform: "rotate(22deg)" },
        },
        "sprite-bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        sparkle: {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "0" },
          "50%": { transform: "scale(1) rotate(90deg)", opacity: "1" },
          "100%": { transform: "scale(0) rotate(180deg)", opacity: "0" },
        },
        "float-up": {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "neon-flicker": {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "1" },
          "50%": { opacity: "0.55" },
          "55%": { opacity: "1" },
          "80%": { opacity: "0.85" },
        },
        "comic-pop": {
          "0%, 100%": { transform: "scale(1) rotate(-4deg)" },
          "50%": { transform: "scale(1.12) rotate(4deg)" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        "wand-wave": "wand-wave 1.4s ease-in-out infinite",
        "sprite-bob": "sprite-bob 0.9s ease-in-out infinite",
        sparkle: "sparkle 1.6s ease-in-out infinite",
        "float-up": "float-up 0.4s ease-out both",
        scanline: "scanline 6s linear infinite",
        "float-slow": "float-slow 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        orbit: "orbit 18s linear infinite",
        "neon-flicker": "neon-flicker 4s ease-in-out infinite",
        "comic-pop": "comic-pop 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

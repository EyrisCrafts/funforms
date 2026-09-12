import { ThemeId } from "./types";

export interface ThemeStyle {
  label: string;
  /** page/section background behind the whole form area */
  pageBg: string;
  /** the form card */
  card: string;
  /** form title */
  title: string;
  /** form description */
  description: string;
  /** field label */
  fieldLabel: string;
  /** text inputs / textarea / select */
  input: string;
  /** submit button */
  button: string;
  /** font class applied to the card */
  font: string;
  /** small accent color for chips/dots on the home card */
  accent: string;
}

export const THEME_STYLES: Record<ThemeId, ThemeStyle> = {
  retro: {
    label: "Retro Pixel Game",
    pageBg: "bg-[#1a1030]",
    card: "pixel-border border-[#f8d878] bg-[#2b1a55] text-[#ffe9c4]",
    title: "font-pixel text-[#ffd34d] text-lg md:text-2xl leading-relaxed",
    description: "font-pixel text-[10px] md:text-xs text-[#b7a6ff] leading-relaxed",
    fieldLabel: "font-pixel text-[10px] md:text-xs text-[#8fe3a0] uppercase",
    input:
      "font-pixel text-[11px] bg-[#1a1030] border-2 border-[#f8d878] text-[#ffe9c4] placeholder-[#7a6bb0] focus:border-[#ffd34d] focus:outline-none",
    button:
      "pixel-btn pixel-border border-[#4be36b] bg-[#2fa84f] text-white font-pixel text-xs md:text-sm hover:bg-[#37c25c] transition-colors",
    font: "font-pixel",
    accent: "#ffd34d",
  },
  terminal: {
    label: "Terminal / Hacker",
    pageBg: "bg-black",
    card:
      "crt border border-[#1f6f2b] bg-black/90 text-[#33ff66] shadow-[0_0_40px_rgba(51,255,102,0.15)]",
    title: "font-mono text-[#4dff7a] text-xl md:text-2xl tracking-wide",
    description: "font-mono text-[#2fbf55] text-sm",
    fieldLabel: "font-mono text-[#33ff66] text-sm lowercase",
    input:
      "font-mono bg-black border border-[#1f6f2b] text-[#5fff8a] placeholder-[#2a7a3a] caret-[#4dff7a] focus:border-[#4dff7a] focus:shadow-[0_0_10px_rgba(77,255,122,0.4)] focus:outline-none",
    button:
      "font-mono border border-[#4dff7a] bg-[#0c2a12] text-[#5fff8a] hover:bg-[#123d1b] hover:shadow-[0_0_16px_rgba(77,255,122,0.5)] transition-all uppercase tracking-widest",
    font: "font-mono",
    accent: "#33ff66",
  },
  autumn: {
    label: "Autumn",
    pageBg: "bg-gradient-to-br from-[#f7b267] via-[#e07a3c] to-[#a63d1f]",
    card:
      "border-2 border-[#c65d21] bg-[#fff6e9]/95 text-[#5a2d12] shadow-[0_20px_50px_rgba(120,50,10,0.35)] backdrop-blur",
    title: "font-serif font-bold text-[#a63d1f] text-2xl md:text-3xl",
    description: "font-serif text-[#7a4321] text-base italic",
    fieldLabel: "font-serif font-semibold text-[#8a4a22] text-sm",
    input:
      "font-serif bg-white/80 border-2 border-[#e0a066] text-[#5a2d12] placeholder-[#b98a5e] focus:border-[#c65d21] focus:ring-2 focus:ring-[#f7b267] focus:outline-none",
    button:
      "font-serif font-bold bg-gradient-to-b from-[#e8792f] to-[#c14a17] text-white shadow-lg hover:from-[#f08a3f] hover:to-[#d1521c] transition-all",
    font: "font-serif",
    accent: "#e07a3c",
  },
  nerdy: {
    label: "Nerdy / Academic",
    pageBg: "bg-[#e8ecf5]",
    card:
      "graph-paper border-2 border-[#5078c8] text-[#1e3a5f] shadow-[6px_6px_0_0_rgba(80,120,200,0.25)]",
    title: "font-hand text-[#1e3a5f] text-3xl md:text-4xl",
    description: "font-hand text-[#3a5a8a] text-xl",
    fieldLabel: "font-hand text-[#2a4a7a] text-lg",
    input:
      "font-mono text-sm bg-white/70 border-b-2 border-t-0 border-x-0 border-[#5078c8] text-[#1e3a5f] placeholder-[#8aa0c8] rounded-none focus:border-[#e0574a] focus:outline-none",
    button:
      "font-hand text-xl bg-[#1e3a5f] text-[#fbfbf3] border-2 border-[#1e3a5f] hover:bg-[#2a4a7a] transition-colors shadow-[3px_3px_0_0_rgba(80,120,200,0.4)]",
    font: "font-hand",
    accent: "#5078c8",
  },
  neon: {
    label: "Synthwave",
    pageBg: "bg-gradient-to-b from-[#1a0b2e] via-[#2d1b4e] to-[#0f0524]",
    card:
      "border-2 border-[#ff2e97] bg-[#1a0b2e]/80 text-[#f5d6ff] shadow-[0_0_40px_rgba(255,46,151,0.4)] backdrop-blur",
    title: "font-neon font-bold neon-pink text-[#ff6ec7] text-2xl md:text-3xl tracking-widest animate-neon-flicker",
    description: "font-neon text-[#8fd0ff] text-sm tracking-wide",
    fieldLabel: "font-neon text-[#00e5ff] text-xs uppercase tracking-widest",
    input:
      "font-mono bg-[#0f0524]/80 border-2 border-[#00e5ff] text-[#d6faff] placeholder-[#6a7fb0] focus:border-[#ff2e97] focus:shadow-[0_0_14px_rgba(0,229,255,0.5)] focus:outline-none",
    button:
      "font-neon font-bold tracking-widest bg-gradient-to-r from-[#ff2e97] to-[#00e5ff] text-white shadow-[0_0_20px_rgba(255,46,151,0.6)] hover:brightness-110 transition-all uppercase",
    font: "font-neon",
    accent: "#ff2e97",
  },
  cosmic: {
    label: "Cosmic",
    pageBg: "bg-gradient-to-b from-[#05010f] via-[#0b0524] to-[#03010a]",
    card:
      "border border-[#6d5dfc]/60 bg-[#0d0826]/70 text-[#dfe4ff] shadow-[0_0_50px_rgba(109,93,252,0.3)] backdrop-blur",
    title: "font-neon font-bold neon-purple text-[#c6b8ff] text-2xl md:text-3xl tracking-wide",
    description: "font-neon text-[#9a90d0] text-sm tracking-wide",
    fieldLabel: "font-neon text-[#8fd0ff] text-xs uppercase tracking-widest",
    input:
      "font-mono bg-[#0d0826]/80 border border-[#3a2f7a] text-[#dfe4ff] placeholder-[#5a4f9a] focus:border-[#8fd0ff] focus:shadow-[0_0_12px_rgba(143,208,255,0.4)] focus:outline-none",
    button:
      "font-neon font-bold tracking-widest bg-gradient-to-r from-[#6d5dfc] to-[#c159ff] text-white shadow-[0_0_20px_rgba(109,93,252,0.5)] hover:brightness-110 transition-all uppercase",
    font: "font-neon",
    accent: "#8f7dff",
  },
  ocean: {
    label: "Underwater",
    pageBg: "bg-gradient-to-b from-[#2a9df4] via-[#0a6ebd] to-[#013a63]",
    card:
      "border-2 border-[#7fdbff] bg-[#e6f7ff]/90 text-[#013a63] shadow-[0_20px_50px_rgba(1,58,99,0.45)] backdrop-blur",
    title: "font-rounded font-semibold text-[#0a6ebd] text-2xl md:text-3xl",
    description: "font-rounded text-[#0d5a99] text-base",
    fieldLabel: "font-rounded font-medium text-[#0a6ebd] text-sm",
    input:
      "font-rounded bg-white/80 border-2 border-[#7fdbff] text-[#013a63] placeholder-[#6aa8c8] focus:border-[#2a9df4] focus:ring-2 focus:ring-[#7fdbff] focus:outline-none",
    button:
      "font-rounded font-semibold bg-gradient-to-b from-[#2a9df4] to-[#0a6ebd] text-white shadow-lg hover:from-[#3aa8ff] hover:to-[#0b7acd] transition-all",
    font: "font-rounded",
    accent: "#2a9df4",
  },
  comic: {
    label: "Comic Pop",
    pageBg: "halftone",
    card:
      "border-4 border-black bg-[#fff8e7] text-black shadow-[8px_8px_0_0_#000]",
    title: "font-comic comic-outline text-[#e5322d] text-4xl md:text-5xl tracking-wide",
    description: "font-comic text-[#1d4ed8] text-xl tracking-wide",
    fieldLabel: "font-comic text-black text-lg tracking-wide",
    input:
      "font-rounded bg-white border-2 border-black text-black placeholder-gray-400 shadow-[3px_3px_0_0_#000] focus:border-[#e5322d] focus:outline-none",
    button:
      "font-comic text-2xl tracking-wider bg-[#e5322d] text-white border-4 border-black shadow-[5px_5px_0_0_#000] hover:bg-[#ff4438] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#000] transition-all",
    font: "font-comic",
    accent: "#e5322d",
  },
  winter: {
    label: "Winter Frost",
    pageBg: "bg-gradient-to-b from-[#0b1e3f] via-[#16305c] to-[#2a4f86]",
    card:
      "border border-white/50 bg-white/15 text-white shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-md",
    title: "font-rounded font-semibold text-white text-2xl md:text-3xl drop-shadow",
    description: "font-rounded text-[#d6e8ff] text-base",
    fieldLabel: "font-rounded font-medium text-[#cfe4ff] text-sm",
    input:
      "font-rounded bg-white/20 border border-white/40 text-white placeholder-white/60 focus:border-white focus:ring-2 focus:ring-white/40 focus:outline-none",
    button:
      "font-rounded font-semibold bg-white text-[#16305c] shadow-lg hover:bg-[#eaf4ff] transition-all",
    font: "font-rounded",
    accent: "#bfe3ff",
  },
  birthday: {
    label: "Party Time",
    pageBg: "bg-gradient-to-b from-[#a06cd5] via-[#ff6f91] to-[#ffd23f]",
    card:
      "border-4 border-[#ff6f91] bg-white text-[#4a2545] shadow-[0_20px_50px_rgba(160,60,120,0.4)]",
    title: "font-rounded font-bold text-[#e63a72] text-3xl md:text-4xl",
    description: "font-rounded text-[#845ec2] text-base",
    fieldLabel: "font-rounded font-semibold text-[#7a3a8a] text-sm",
    input:
      "font-rounded bg-[#fff5fa] border-2 border-[#ffb3c8] text-[#4a2545] placeholder-[#c99] focus:border-[#ff6f91] focus:ring-2 focus:ring-[#ffd23f] focus:outline-none",
    button:
      "font-rounded font-bold bg-gradient-to-r from-[#ff6f91] to-[#ffb347] text-white shadow-lg hover:brightness-105 transition-all",
    font: "font-rounded",
    accent: "#ff6f91",
  },
  kawaii: {
    label: "Kawaii",
    pageBg: "bg-gradient-to-b from-[#ffe0f0] via-[#ffd1ec] to-[#ffc2e2]",
    card:
      "border-2 border-[#ff9ecb] bg-white/85 text-[#8a3b66] shadow-[0_14px_34px_rgba(255,158,203,0.55)] backdrop-blur",
    title: "font-rounded font-semibold text-[#ff5fa2] text-2xl md:text-3xl",
    description: "font-rounded text-[#b56a92] text-base",
    fieldLabel: "font-rounded font-medium text-[#c15c92] text-sm",
    input:
      "font-rounded bg-white/90 border-2 border-[#ffc2e2] text-[#8a3b66] placeholder-[#d9a] focus:border-[#ff7ec0] focus:ring-2 focus:ring-[#ffd1ec] focus:outline-none",
    button:
      "font-rounded font-semibold bg-gradient-to-r from-[#ff8fc7] to-[#ffb3d9] text-white shadow-md hover:brightness-105 transition-all",
    font: "font-rounded",
    accent: "#ff7ec0",
  },
  western: {
    label: "Wild West",
    pageBg: "bg-[#3a2416]",
    card:
      "border-4 border-[#5a3a1a] bg-[#e8d5a8] text-[#3a2410] shadow-[0_16px_40px_rgba(0,0,0,0.5)]",
    title: "font-western text-[#7a3b12] text-3xl md:text-4xl tracking-wide",
    description: "font-western text-[#8a5a2a] text-base",
    fieldLabel: "font-western text-[#5a3a1a] text-sm tracking-wide",
    input:
      "font-type bg-[#f3e6c4] border-2 border-[#8a5a2a] text-[#3a2410] placeholder-[#a98a5a] focus:border-[#7a3b12] focus:outline-none",
    button:
      "font-western tracking-wide bg-[#7a3b12] text-[#f3e6c4] border-2 border-[#3a2410] hover:bg-[#8a4718] transition-colors shadow-[3px_3px_0_0_rgba(0,0,0,0.4)]",
    font: "font-western",
    accent: "#a5642a",
  },
  noir: {
    label: "Film Noir",
    pageBg: "bg-[#0c0c0c] blinds",
    card:
      "border border-[#111] bg-[#ded9cc] text-[#1a1a1a] shadow-[0_24px_60px_rgba(0,0,0,0.8)]",
    title: "font-type text-[#1a1a1a] text-2xl md:text-3xl tracking-wide",
    description: "font-type text-[#4a4a44] text-sm",
    fieldLabel: "font-type text-[#2a2a2a] text-sm uppercase tracking-wide",
    input:
      "font-type bg-[#f0ede4] border border-[#3a3a3a] text-[#1a1a1a] placeholder-[#9a968c] rounded-none focus:border-[#b0342b] focus:outline-none",
    button:
      "font-type uppercase tracking-widest bg-[#1a1a1a] text-[#ded9cc] border border-[#000] hover:bg-[#2a2a2a] transition-colors",
    font: "font-type",
    accent: "#b0342b",
  },
};

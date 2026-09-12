"use client";

import { ThemeId } from "@/lib/types";
import PixelWizard from "./PixelWizard";

/**
 * A themed graphic that sits on top of the form card. `art` selects a variant
 * (0/1/2) so each variant of a theme shows a different character / object.
 */
export default function HeaderGraphic({
  theme,
  art = 0,
}: {
  theme: ThemeId;
  art?: number;
}) {
  const wrap = (node: React.ReactNode, mt = "-mt-12") => (
    <div className={`flex justify-center ${mt} mb-2`}>{node}</div>
  );

  /* ------------------------------- retro ------------------------------- */
  if (theme === "retro") {
    if (art === 1) return wrap(<PixelKnight />, "-mt-14");
    if (art === 2) return wrap(<PixelSlime />, "-mt-12");
    return wrap(<PixelWizard size={110} />, "-mt-16");
  }

  /* ------------------------------- autumn ------------------------------ */
  if (theme === "autumn") {
    if (art === 1) {
      return wrap(
        <svg width="110" height="96" viewBox="0 0 110 96" className="animate-float-slow">
          <rect x="50" y="52" width="10" height="34" rx="2" fill="#7a4a22" />
          <circle cx="40" cy="42" r="20" fill="#c14a17" />
          <circle cx="70" cy="40" r="22" fill="#e8792f" />
          <circle cx="55" cy="30" r="20" fill="#f0a04b" />
          <circle cx="60" cy="50" r="16" fill="#a63d1f" />
          <circle cx="44" cy="34" r="3" fill="#fff6e9" opacity="0.5" />
        </svg>
      );
    }
    if (art === 2) {
      return wrap(
        <svg width="90" height="96" viewBox="0 0 90 96" className="animate-float-slow">
          <ellipse cx="45" cy="58" rx="26" ry="30" fill="#c98a4a" />
          <ellipse cx="45" cy="58" rx="26" ry="30" fill="none" stroke="#8a5a2a" strokeWidth="2" />
          <path d="M19 40 Q45 26 71 40 Q71 50 45 50 Q19 50 19 40 Z" fill="#7a4a22" />
          <rect x="42" y="20" width="6" height="14" rx="3" fill="#7a4a22" />
          <path d="M32 44 L45 52 L58 44" fill="none" stroke="#8a5a2a" strokeWidth="1.5" />
        </svg>
      );
    }
    // art 0 — pumpkin
    return wrap(
      <svg width="120" height="90" viewBox="0 0 120 90" className="animate-float-slow" style={{ marginTop: -8 }}>
        <ellipse cx="60" cy="60" rx="34" ry="26" fill="#e8792f" />
        <ellipse cx="44" cy="60" rx="12" ry="26" fill="#d1521c" opacity="0.6" />
        <ellipse cx="76" cy="60" rx="12" ry="26" fill="#d1521c" opacity="0.6" />
        <rect x="56" y="30" width="8" height="12" fill="#5a7d3a" />
        <path d="M64 32 Q80 22 78 38" stroke="#5a7d3a" strokeWidth="3" fill="none" />
        <path d="M30 34 q-10 -6 -14 4 q12 6 14 -4 Z" fill="#c14a17" />
        <path d="M92 30 q10 -6 14 4 q-12 6 -14 -4 Z" fill="#a63d1f" />
      </svg>,
      "-mt-14"
    );
  }

  /* ------------------------------- nerdy ------------------------------- */
  if (theme === "nerdy") {
    if (art === 1) {
      return wrap(
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" stroke="#1e3a5f" strokeWidth="2.5" className="animate-float-slow">
          <circle cx="45" cy="45" r="5" fill="#1e3a5f" stroke="none" />
          <ellipse cx="45" cy="45" rx="36" ry="14" />
          <ellipse cx="45" cy="45" rx="36" ry="14" transform="rotate(60 45 45)" />
          <ellipse cx="45" cy="45" rx="36" ry="14" transform="rotate(120 45 45)" />
        </svg>
      );
    }
    if (art === 2) {
      return wrap(
        <svg width="70" height="90" viewBox="0 0 70 90" fill="none" stroke="#1e3a5f" strokeWidth="2.5" strokeLinejoin="round" className="animate-float-slow">
          <path d="M28 12 L28 36 L14 66 Q12 74 22 74 L48 74 Q58 74 56 66 L42 36 L42 12" />
          <line x1="24" y1="12" x2="46" y2="12" />
          <path d="M18 58 L52 58" stroke="#e0574a" />
          <circle cx="26" cy="66" r="3" fill="#e0574a" stroke="none" />
          <circle cx="38" cy="63" r="2" fill="#e0574a" stroke="none" />
          <circle cx="44" cy="68" r="1.6" fill="#e0574a" stroke="none" />
        </svg>
      );
    }
    // art 0 — pencil + ruler
    return wrap(
      <svg width="140" height="70" viewBox="0 0 140 70" fill="none" stroke="#1e3a5f" strokeWidth="2.5" strokeLinecap="round">
        <g transform="rotate(-12 40 40)">
          <rect x="16" y="34" width="52" height="12" fill="#f7c948" stroke="#1e3a5f" />
          <path d="M68 34 L82 40 L68 46 Z" fill="#f2c9a0" />
          <path d="M78 37 L82 40 L78 43 Z" fill="#1e3a5f" />
          <line x1="24" y1="34" x2="24" y2="46" stroke="#e0574a" />
        </g>
        <g transform="rotate(10 100 40)">
          <rect x="80" y="30" width="52" height="16" fill="#bcd0f0" stroke="#1e3a5f" />
          {[86, 94, 102, 110, 118, 126].map((x) => (
            <line key={x} x1={x} y1="30" x2={x} y2="37" />
          ))}
        </g>
      </svg>
    );
  }

  /* -------------------------------- neon ------------------------------- */
  if (theme === "neon") {
    if (art === 1) {
      return wrap(
        <svg width="120" height="74" viewBox="0 0 120 74">
          <rect x="12" y="16" width="96" height="46" rx="6" fill="#1a0b2e" stroke="#ff2e97" strokeWidth="2" />
          <circle cx="42" cy="39" r="11" fill="none" stroke="#00e5ff" strokeWidth="2" />
          <circle cx="78" cy="39" r="11" fill="none" stroke="#00e5ff" strokeWidth="2" />
          <circle cx="42" cy="39" r="3" fill="#ff2e97" />
          <circle cx="78" cy="39" r="3" fill="#ff2e97" />
          <rect x="54" y="36" width="12" height="6" fill="#00e5ff" />
        </svg>
      );
    }
    if (art === 2) {
      return wrap(
        <svg width="80" height="90" viewBox="0 0 80 90">
          <path d="M46 6 L20 50 L38 50 L30 84 L60 38 L42 38 Z" fill="#ffd23f" stroke="#ff2e97" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    }
    // art 0 — retro sun triangle
    return wrap(
      <svg width="130" height="80" viewBox="0 0 130 80">
        <defs>
          <linearGradient id="hgNeon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd23f" />
            <stop offset="100%" stopColor="#ff2e97" />
          </linearGradient>
        </defs>
        <path d="M65 6 L118 74 L12 74 Z" fill="url(#hgNeon)" stroke="#00e5ff" strokeWidth="2" />
        <g stroke="#1a0b2e" strokeWidth="5">
          <line x1="30" y1="60" x2="100" y2="60" />
          <line x1="38" y1="50" x2="92" y2="50" />
          <line x1="46" y1="40" x2="84" y2="40" />
        </g>
      </svg>
    );
  }

  /* ------------------------------- cosmic ------------------------------ */
  if (theme === "cosmic") {
    if (art === 1) {
      return wrap(
        <svg width="120" height="90" viewBox="0 0 120 90" className="animate-float-slow">
          <ellipse cx="60" cy="46" rx="52" ry="14" fill="none" stroke="#b8a6ff" strokeWidth="4" transform="rotate(-16 60 46)" />
          <defs>
            <radialGradient id="hgPlanet" cx="38%" cy="32%" r="75%">
              <stop offset="0%" stopColor="#8fd0ff" />
              <stop offset="60%" stopColor="#6d5dfc" />
              <stop offset="100%" stopColor="#2a1f6a" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="46" r="26" fill="url(#hgPlanet)" />
          <ellipse cx="52" cy="40" rx="6" ry="3" fill="#fff" opacity="0.35" />
        </svg>
      );
    }
    if (art === 2) {
      return wrap(
        <svg width="90" height="90" viewBox="0 0 90 90" className="animate-float-slow">
          <circle cx="45" cy="45" r="30" fill="#e6ecff" stroke="#6d5dfc" strokeWidth="3" />
          <path d="M24 45 a21 21 0 0 1 42 0 Z" fill="#1a2f52" />
          <ellipse cx="45" cy="34" rx="15" ry="9" fill="#8fd0ff" />
          <ellipse cx="40" cy="31" rx="4" ry="2.5" fill="#fff" opacity="0.7" />
          <rect x="41" y="14" width="8" height="8" rx="2" fill="#ff6ec7" />
        </svg>
      );
    }
    // art 0 — rocket
    return wrap(
      <svg width="120" height="100" viewBox="0 0 120 100" className="animate-float-slow" style={{ marginTop: -8 }}>
        <g transform="translate(60 50) rotate(45)">
          <path d="M0 -34 C14 -20 14 6 0 20 C-14 6 -14 -20 0 -34 Z" fill="#e6ecff" stroke="#6d5dfc" strokeWidth="2" />
          <circle cx="0" cy="-8" r="6" fill="#8fd0ff" stroke="#3a2f7a" strokeWidth="2" />
          <path d="M-12 12 L-4 6 L-4 20 Z" fill="#ff2e97" />
          <path d="M12 12 L4 6 L4 20 Z" fill="#ff2e97" />
          <path d="M-4 20 Q0 34 4 20" fill="#ffd23f" className="animate-pulse-glow" />
        </g>
      </svg>,
      "-mt-14"
    );
  }

  /* -------------------------------- ocean ------------------------------ */
  if (theme === "ocean") {
    if (art === 1) {
      return wrap(
        <svg width="130" height="80" viewBox="0 0 130 80" className="animate-float-slow">
          <path d="M20 44 Q20 20 58 22 Q96 24 100 44 Q100 64 58 64 Q30 64 20 44 Z" fill="#4a90c2" />
          <path d="M100 44 L124 30 L124 60 Z" fill="#4a90c2" />
          <path d="M20 44 Q40 54 62 50" fill="none" stroke="#013a63" strokeWidth="2" opacity="0.4" />
          <circle cx="40" cy="38" r="4" fill="#fff" />
          <circle cx="39" cy="38" r="2" fill="#013a63" />
          <path d="M52 20 q6 -10 14 -4" fill="none" stroke="#7fdbff" strokeWidth="4" strokeLinecap="round" />
          <circle cx="66" cy="12" r="3" fill="#bff0ff" />
        </svg>
      );
    }
    if (art === 2) {
      return wrap(
        <svg width="90" height="88" viewBox="0 0 90 88" className="animate-float-slow">
          <path d="M45 8 L55 34 L83 34 L61 52 L69 80 L45 62 L21 80 L29 52 L7 34 L35 34 Z" fill="#ff9a5b" stroke="#c65a1f" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="45" cy="46" r="4" fill="#c65a1f" />
          <circle cx="36" cy="40" r="2" fill="#c65a1f" />
          <circle cx="54" cy="40" r="2" fill="#c65a1f" />
        </svg>
      );
    }
    // art 0 — clownfish
    return wrap(
      <svg width="120" height="80" viewBox="0 0 120 80" className="animate-float-slow">
        <ellipse cx="55" cy="42" rx="34" ry="22" fill="#ff8c42" />
        <path d="M89 42 L112 26 L112 58 Z" fill="#ff8c42" />
        <rect x="40" y="20" width="8" height="44" rx="3" fill="#fff" />
        <rect x="60" y="20" width="8" height="44" rx="3" fill="#fff" />
        <path d="M32 20 L26 8 L40 18 Z" fill="#ff8c42" />
        <circle cx="30" cy="40" r="5" fill="#fff" />
        <circle cx="29" cy="40" r="2.5" fill="#013a63" />
        <ellipse cx="55" cy="42" rx="34" ry="22" fill="none" stroke="#c65a1f" strokeWidth="2" />
      </svg>
    );
  }

  /* -------------------------------- comic ------------------------------ */
  if (theme === "comic") {
    if (art === 1) return wrap(<Burst label="BOOM!" fill="#4d96ff" />, "-mt-14");
    if (art === 2) {
      return wrap(
        <svg width="140" height="86" viewBox="0 0 140 86" className="animate-comic-pop">
          <path d="M18 14 H122 A10 10 0 0 1 132 24 V54 A10 10 0 0 1 122 64 H60 L44 80 L46 64 H18 A10 10 0 0 1 8 54 V24 A10 10 0 0 1 18 14 Z" fill="#ffd23f" stroke="#000" strokeWidth="3.5" strokeLinejoin="round" />
          <text x="70" y="42" textAnchor="middle" dominantBaseline="central" fontFamily="var(--font-comic), cursive" fontSize="26" fill="#e5322d" stroke="#000" strokeWidth="0.8">WOW!</text>
        </svg>
      );
    }
    return wrap(<Burst label="KAPOW!" fill="#ffd23f" />, "-mt-14");
  }

  /* ------------------------------- winter ------------------------------ */
  if (theme === "winter") {
    if (art === 1) {
      return wrap(
        <svg width="90" height="96" viewBox="0 0 90 96" className="animate-float-slow">
          <circle cx="45" cy="66" r="24" fill="#eef6ff" />
          <circle cx="45" cy="34" r="17" fill="#eef6ff" />
          <circle cx="39" cy="31" r="2.5" fill="#16305c" />
          <circle cx="51" cy="31" r="2.5" fill="#16305c" />
          <path d="M45 36 L56 40 L45 42 Z" fill="#e8792f" />
          <circle cx="45" cy="58" r="2" fill="#16305c" />
          <circle cx="45" cy="66" r="2" fill="#16305c" />
          <path d="M22 60 L8 52 M68 60 L82 52" stroke="#7a4a22" strokeWidth="3" strokeLinecap="round" />
          <rect x="30" y="16" width="30" height="5" fill="#a63d1f" />
          <rect x="36" y="6" width="18" height="12" fill="#a63d1f" />
        </svg>
      );
    }
    if (art === 2) {
      return wrap(
        <svg width="90" height="96" viewBox="0 0 90 96" className="animate-float-slow">
          <rect x="41" y="72" width="8" height="14" fill="#5a3a1a" />
          <path d="M45 8 L64 40 L26 40 Z" fill="#2f6b4a" />
          <path d="M45 24 L70 60 L20 60 Z" fill="#2f6b4a" />
          <path d="M45 40 L76 78 L14 78 Z" fill="#2f6b4a" />
          <path d="M45 8 L64 40 L26 40 Z" fill="#eef6ff" opacity="0.35" />
          <circle cx="34" cy="52" r="3" fill="#eef6ff" />
          <circle cx="58" cy="66" r="3" fill="#eef6ff" />
          <circle cx="45" cy="6" r="4" fill="#ffd23f" />
        </svg>
      );
    }
    // art 0 — snowflake
    return wrap(
      <svg width="90" height="90" viewBox="0 0 90 90" className="animate-float-slow">
        <g stroke="#eaf4ff" strokeWidth="4" strokeLinecap="round">
          {[0, 60, 120].map((r) => (
            <g key={r} transform={`rotate(${r} 45 45)`}>
              <line x1="45" y1="10" x2="45" y2="80" />
              <line x1="45" y1="20" x2="34" y2="28" />
              <line x1="45" y1="20" x2="56" y2="28" />
              <line x1="45" y1="70" x2="34" y2="62" />
              <line x1="45" y1="70" x2="56" y2="62" />
            </g>
          ))}
        </g>
      </svg>
    );
  }

  /* ------------------------------ birthday ----------------------------- */
  if (theme === "birthday") {
    if (art === 1) {
      const balloons = [
        { x: 40, y: 40, c: "#ff6f91" },
        { x: 66, y: 34, c: "#ffd23f" },
        { x: 54, y: 52, c: "#4d96ff" },
      ];
      return wrap(
        <svg width="110" height="96" viewBox="0 0 110 96" className="animate-float-slow">
          {balloons.map((b, i) => (
            <g key={i}>
              <ellipse cx={b.x} cy={b.y} rx="16" ry="20" fill={b.c} />
              <ellipse cx={b.x - 5} cy={b.y - 6} rx="4" ry="6" fill="#fff" opacity="0.4" />
              <path d={`M${b.x} ${b.y + 20} Q${b.x + 4} ${b.y + 40} ${53} 82`} fill="none" stroke="#845ec2" strokeWidth="1.5" />
            </g>
          ))}
        </svg>
      );
    }
    if (art === 2) {
      return wrap(
        <svg width="100" height="96" viewBox="0 0 100 96" className="animate-float-slow">
          <rect x="24" y="44" width="52" height="40" rx="4" fill="#ff6f91" />
          <rect x="46" y="44" width="8" height="40" fill="#ffd23f" />
          <rect x="20" y="36" width="60" height="12" rx="3" fill="#e63a72" />
          <rect x="46" y="36" width="8" height="12" fill="#ffd23f" />
          <path d="M50 36 C40 24 34 30 40 20 C46 26 54 26 60 20 C66 30 60 24 50 36 Z" fill="#ffd23f" />
        </svg>
      );
    }
    // art 0 — cake
    return wrap(
      <svg width="130" height="90" viewBox="0 0 130 90" className="animate-float-slow" style={{ marginTop: -8 }}>
        <rect x="30" y="46" width="70" height="34" rx="4" fill="#ff9ecb" stroke="#e63a72" strokeWidth="2" />
        <path d="M30 58 q17 12 35 0 t35 0" fill="#fff" opacity="0.8" />
        <rect x="30" y="46" width="70" height="8" fill="#845ec2" opacity="0.7" />
        {[45, 65, 85].map((x, i) => (
          <g key={x}>
            <rect x={x - 2} y="30" width="4" height="16" fill="#ffd23f" />
            <ellipse cx={x} cy="26" rx="3" ry="6" fill="#ff6f91" className="animate-pulse-glow" style={{ animationDelay: `${i * 0.3}s` }} />
          </g>
        ))}
      </svg>,
      "-mt-14"
    );
  }

  /* ------------------------------- kawaii ------------------------------ */
  if (theme === "kawaii") {
    if (art === 1) {
      return wrap(
        <svg width="96" height="86" viewBox="0 0 96 86" className="animate-float-slow">
          <path d="M22 22 L30 44 L18 44 Z" fill="#ffd1ec" stroke="#ff9ecb" strokeWidth="2" />
          <path d="M74 22 L66 44 L78 44 Z" fill="#ffd1ec" stroke="#ff9ecb" strokeWidth="2" />
          <circle cx="48" cy="50" r="26" fill="#ffd1ec" stroke="#ff9ecb" strokeWidth="2" />
          <circle cx="38" cy="48" r="3.5" fill="#8a3b66" />
          <circle cx="58" cy="48" r="3.5" fill="#8a3b66" />
          <circle cx="30" cy="56" r="4" fill="#ff8fc7" opacity="0.7" />
          <circle cx="66" cy="56" r="4" fill="#ff8fc7" opacity="0.7" />
          <path d="M46 56 q2 3 4 0" fill="none" stroke="#8a3b66" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 60 L30 62 M40 63 L31 66 M56 60 L66 62 M56 63 L65 66" stroke="#8a3b66" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    }
    if (art === 2) {
      return wrap(
        <svg width="76" height="92" viewBox="0 0 76 92" className="animate-float-slow">
          <path d="M18 34 L58 34 L53 84 Q52 88 48 88 L28 88 Q24 88 23 84 Z" fill="#e7c9a0" stroke="#c99" strokeWidth="1.5" />
          <rect x="14" y="26" width="48" height="9" rx="4" fill="#ff9ecb" />
          <path d="M32 26 L44 12" stroke="#ff9ecb" strokeWidth="3" strokeLinecap="round" />
          <circle cx="30" cy="60" r="3.5" fill="#5a2d12" />
          <circle cx="44" cy="70" r="3.5" fill="#5a2d12" />
          <circle cx="38" cy="52" r="3.5" fill="#5a2d12" />
          <circle cx="46" cy="58" r="3.5" fill="#5a2d12" />
        </svg>
      );
    }
    // art 0 — blob face + bow
    return wrap(
      <svg width="96" height="80" viewBox="0 0 96 80" className="animate-float-slow">
        <circle cx="48" cy="42" r="30" fill="#ffd1ec" stroke="#ff9ecb" strokeWidth="2" />
        <circle cx="38" cy="40" r="4" fill="#8a3b66" />
        <circle cx="58" cy="40" r="4" fill="#8a3b66" />
        <circle cx="30" cy="48" r="5" fill="#ff8fc7" opacity="0.7" />
        <circle cx="66" cy="48" r="5" fill="#ff8fc7" opacity="0.7" />
        <path d="M42 52 q6 6 12 0" fill="none" stroke="#8a3b66" strokeWidth="2" strokeLinecap="round" />
        <path d="M48 14 L36 6 L40 20 Z" fill="#ff7ec0" />
        <path d="M48 14 L60 6 L56 20 Z" fill="#ff7ec0" />
        <circle cx="48" cy="14" r="4" fill="#ff5fa2" />
      </svg>
    );
  }

  /* ------------------------------- western ----------------------------- */
  if (theme === "western") {
    if (art === 1) {
      return wrap(
        <svg width="120" height="80" viewBox="0 0 120 80" className="animate-float-slow">
          <path d="M8 58 Q60 74 112 58 Q112 66 60 70 Q8 66 8 58 Z" fill="#5a3a1a" />
          <path d="M34 58 Q34 20 60 20 Q86 20 86 58 Q60 66 34 58 Z" fill="#7a4a22" />
          <path d="M34 52 Q60 60 86 52" fill="none" stroke="#3a2410" strokeWidth="5" />
        </svg>
      );
    }
    if (art === 2) {
      return wrap(
        <svg width="84" height="90" viewBox="0 0 84 90" className="animate-float-slow">
          <path d="M42 12 C18 12 14 42 22 66 L34 64 C28 44 30 26 42 26 C54 26 56 44 50 64 L62 66 C70 42 66 12 42 12 Z" fill="none" stroke="#c98a2a" strokeWidth="9" strokeLinecap="round" />
          {[[26, 60], [34, 66], [50, 66], [58, 60], [24, 46], [60, 46]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" fill="#3a2410" />
          ))}
        </svg>
      );
    }
    // art 0 — sheriff star
    return wrap(
      <svg width="90" height="90" viewBox="0 0 90 90" className="animate-float-slow">
        <g transform="translate(45 45)">
          {[0, 1, 2, 3, 4].map((i) => {
            const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
            return (
              <circle
                key={i}
                cx={Math.round(Math.cos(a) * 36)}
                cy={Math.round(Math.sin(a) * 36)}
                r="4"
                fill="#3a2410"
              />
            );
          })}
          <path d="M0 -36 L8 -12 L34 -11 L13 4 L21 30 L0 15 L-21 30 L-13 4 L-34 -11 L-8 -12 Z" fill="#c98a2a" stroke="#5a3a1a" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="0" cy="0" r="6" fill="#5a3a1a" />
        </g>
      </svg>
    );
  }

  /* -------------------------------- noir ------------------------------- */
  if (theme === "noir") {
    if (art === 1) {
      return wrap(
        <svg width="110" height="80" viewBox="0 0 110 80">
          <circle cx="44" cy="38" r="26" fill="#ded9cc" stroke="#111" strokeWidth="3" />
          <g stroke="#111" strokeWidth="1.6" fill="none">
            <path d="M32 44 q4 -18 24 -12" />
            <path d="M30 38 q6 -16 28 -10" />
            <path d="M32 32 q8 -12 26 -6" />
            <path d="M36 48 q2 -12 18 -10" />
          </g>
          <line x1="63" y1="57" x2="82" y2="76" stroke="#111" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    }
    if (art === 2) {
      return wrap(
        <svg width="86" height="90" viewBox="0 0 86 90">
          <path d="M43 8 L74 18 V44 C74 66 60 78 43 84 C26 78 12 66 12 44 V18 Z" fill="#1a1a1a" stroke="#000" strokeWidth="2" />
          <path d="M43 16 L66 24 V44 C66 60 56 70 43 75 C30 70 20 60 20 44 V24 Z" fill="#ded9cc" />
          <text x="43" y="46" textAnchor="middle" dominantBaseline="central" fontFamily="var(--font-type), monospace" fontSize="20" fill="#b0342b">P.I.</text>
        </svg>
      );
    }
    // art 0 — fedora + magnifier
    return wrap(
      <svg width="120" height="70" viewBox="0 0 120 70">
        <ellipse cx="52" cy="52" rx="46" ry="9" fill="#1a1a1a" />
        <path d="M22 52 Q24 20 52 20 Q80 20 82 52 Z" fill="#2a2a2a" stroke="#111" strokeWidth="1.5" />
        <path d="M22 50 Q52 60 82 50" fill="none" stroke="#000" strokeWidth="3" />
        <g transform="translate(84 30)" stroke="#111" strokeWidth="4" fill="none">
          <circle cx="10" cy="10" r="12" fill="#ded9cc" />
          <line x1="20" y1="20" x2="32" y2="32" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  return null;
}

/* ---------- comic burst helper ---------- */
function Burst({ label, fill }: { label: string; fill: string }) {
  return (
    <div className="animate-comic-pop">
      <svg width="150" height="90" viewBox="0 0 150 90">
        <path
          d="M75 5 L88 30 L118 20 L106 46 L140 52 L108 66 L120 88 L88 76 L75 90 L62 76 L30 88 L42 66 L10 52 L44 46 L32 20 L62 30 Z"
          fill={fill}
          stroke="#000"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <text
          x="75"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-comic), cursive"
          fontSize="26"
          fill="#e5322d"
          stroke="#000"
          strokeWidth="1"
        >
          {label}
        </text>
      </svg>
    </div>
  );
}

/* ---------- retro pixel characters ---------- */
function PixelKnight() {
  const P = (n: number) => n * 6;
  const px = (x: number, y: number, w: number, h: number, fill: string) => (
    <rect x={P(x)} y={P(y)} width={P(w)} height={P(h)} fill={fill} />
  );
  return (
    <svg width={110} height={110} viewBox="0 0 96 96" className="pixelated animate-sprite-bob" shapeRendering="crispEdges">
      {/* plume */}
      {px(7, 0, 2, 1, "#e5322d")}
      {px(7, 1, 1, 1, "#e5322d")}
      {/* helmet */}
      {px(5, 2, 6, 1, "#9aa4b2")}
      {px(4, 3, 8, 4, "#b8c0cc")}
      {px(5, 4, 6, 1, "#2a2f3a")}
      {px(4, 6, 8, 1, "#7d8894")}
      {/* body armor */}
      {px(4, 7, 8, 4, "#9aa4b2")}
      {px(5, 11, 6, 3, "#7d8894")}
      {/* shield */}
      {px(2, 7, 2, 5, "#3a7bd5")}
      {px(2, 9, 2, 1, "#ffd34d")}
      {px(2, 8, 1, 3, "#2f6bc0")}
      {/* sword arm */}
      <g className="animate-wand-wave" style={{ transformOrigin: `${P(12)}px ${P(8)}px`, transformBox: "fill-box" } as React.CSSProperties}>
        {px(12, 8, 1, 2, "#9aa4b2")}
        {px(13, 2, 1, 6, "#dfe4ff")}
        {px(12, 8, 3, 1, "#8a5a2b")}
        {px(13, 1, 1, 1, "#fff")}
      </g>
    </svg>
  );
}

function PixelSlime() {
  const P = (n: number) => n * 6;
  const px = (x: number, y: number, w: number, h: number, fill: string) => (
    <rect x={P(x)} y={P(y)} width={P(w)} height={P(h)} fill={fill} />
  );
  return (
    <svg width={104} height={104} viewBox="0 0 96 96" className="pixelated animate-sprite-bob" shapeRendering="crispEdges">
      {px(6, 6, 4, 1, "#9dffb0")}
      {px(4, 7, 8, 1, "#4be36b")}
      {px(3, 8, 10, 3, "#4be36b")}
      {px(3, 11, 10, 2, "#2fa84f")}
      {px(4, 13, 8, 1, "#2fa84f")}
      {/* eyes */}
      {px(5, 9, 1, 2, "#1a1030")}
      {px(10, 9, 1, 2, "#1a1030")}
      {px(5, 9, 1, 1, "#fff")}
      {px(10, 9, 1, 1, "#fff")}
      {/* mouth */}
      {px(6, 12, 4, 1, "#1a1030")}
    </svg>
  );
}

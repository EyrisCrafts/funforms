"use client";

/** Hand-drawn-style science doodles that float gently around the card. */
export default function NerdyDoodles() {
  const stroke = "#3a5a8a";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-70">
      {/* Atom, top-left */}
      <svg
        className="absolute left-2 top-4 animate-float-slow"
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
      >
        <circle cx="35" cy="35" r="4" fill={stroke} stroke="none" />
        <ellipse cx="35" cy="35" rx="28" ry="11" />
        <ellipse cx="35" cy="35" rx="28" ry="11" transform="rotate(60 35 35)" />
        <ellipse cx="35" cy="35" rx="28" ry="11" transform="rotate(120 35 35)" />
      </svg>

      {/* Flask, top-right */}
      <svg
        className="absolute right-3 top-6 animate-float-slow"
        style={{ animationDelay: "1.2s" }}
        width="54"
        height="60"
        viewBox="0 0 54 60"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      >
        <path d="M22 6 L22 24 L10 48 Q8 54 16 54 L38 54 Q46 54 44 48 L32 24 L32 6" />
        <line x1="19" y1="6" x2="35" y2="6" />
        <path d="M14 40 L40 40" stroke="#e0574a" />
        <circle cx="20" cy="46" r="2" fill="#e0574a" stroke="none" />
        <circle cx="30" cy="44" r="1.5" fill="#e0574a" stroke="none" />
      </svg>

      {/* Equation, bottom-left */}
      <div
        className="absolute left-4 bottom-6 font-hand text-2xl animate-float-slow"
        style={{ color: stroke, animationDelay: "0.6s" }}
      >
        E = mc²
      </div>

      {/* Pi + sigma, bottom-right */}
      <div
        className="absolute right-6 bottom-8 font-hand text-3xl animate-float-slow"
        style={{ color: "#e0574a", animationDelay: "1.8s" }}
      >
        π · Σ
      </div>
    </div>
  );
}

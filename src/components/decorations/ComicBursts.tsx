"use client";

/** Pulsing pop-art action bursts floating in the corners of the comic theme. */
function Burst({
  label,
  color,
  className,
  delay,
}: {
  label: string;
  color: string;
  className: string;
  delay: string;
}) {
  return (
    <div className={`absolute ${className} animate-comic-pop`} style={{ animationDelay: delay }}>
      <svg width="96" height="96" viewBox="0 0 100 100">
        <path
          d="M50 3 L60 24 L84 16 L74 40 L97 50 L74 60 L84 84 L60 76 L50 97 L40 76 L16 84 L26 60 L3 50 L26 40 L16 16 L40 24 Z"
          fill={color}
          stroke="#000"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-comic), cursive"
          fontSize="20"
          fill="#fff"
          stroke="#000"
          strokeWidth="0.6"
        >
          {label}
        </text>
      </svg>
    </div>
  );
}

export default function ComicBursts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      <Burst label="POW!" color="#e5322d" className="left-4 top-10" delay="0s" />
      <Burst label="ZAP!" color="#1d4ed8" className="right-6 top-24" delay="0.7s" />
      <Burst label="BAM!" color="#f59e0b" className="left-10 bottom-12" delay="1.3s" />
    </div>
  );
}

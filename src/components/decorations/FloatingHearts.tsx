"use client";

import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  color: string;
}

const COLORS = ["#ff7ec0", "#ff9ecb", "#ffb3d9", "#ff5fa2", "#ffc2e2"];

export default function FloatingHearts({ count = 18 }: { count?: number }) {
  const [hearts, setHearts] = useState<Heart[]>([]);
  useEffect(() => {
    setHearts(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 16,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 6,
        drift: (Math.random() - 0.5) * 80,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            animation: `heart-rise ${h.duration}s ease-in ${h.delay}s infinite`,
            // @ts-expect-error custom prop
            "--drift": `${h.drift}px`,
          }}
        >
          <svg width={h.size} height={h.size} viewBox="0 0 24 24" fill={h.color}>
            <path d="M12 21 C12 21 3 14 3 8.5 C3 5.4 5.4 3 8.5 3 C10.3 3 11.5 4 12 5 C12.5 4 13.7 3 15.5 3 C18.6 3 21 5.4 21 8.5 C21 14 12 21 12 21 Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

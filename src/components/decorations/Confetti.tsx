"use client";

import { useEffect, useState } from "react";

interface Piece {
  id: number;
  left: number;
  w: number;
  h: number;
  delay: number;
  duration: number;
  color: string;
  round: boolean;
}

const COLORS = ["#ff6f91", "#ffd23f", "#845ec2", "#2ec4b6", "#ff9a3c", "#4d96ff"];

export default function Confetti({ count = 45 }: { count?: number }) {
  const [pieces, setPieces] = useState<Piece[]>([]);
  useEffect(() => {
    setPieces(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        w: 6 + Math.random() * 8,
        h: 8 + Math.random() * 10,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        round: Math.random() > 0.6,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti"
          style={{
            left: `${p.left}%`,
            width: p.w,
            height: p.round ? p.w : p.h,
            background: p.color,
            borderRadius: p.round ? "9999px" : "2px",
            animation: `confetti-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

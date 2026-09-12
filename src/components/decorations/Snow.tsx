"use client";

import { useEffect, useState } from "react";

interface Flake {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
}

export default function Snow({ count = 40 }: { count?: number }) {
  const [flakes, setFlakes] = useState<Flake[]>([]);
  useEffect(() => {
    setFlakes(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 3 + Math.random() * 6,
        delay: Math.random() * 9,
        duration: 6 + Math.random() * 8,
        drift: (Math.random() - 0.5) * 120,
        opacity: 0.5 + Math.random() * 0.5,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snowflake"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            animation: `snow-fall ${f.duration}s linear ${f.delay}s infinite`,
            // @ts-expect-error custom prop
            "--drift": `${f.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

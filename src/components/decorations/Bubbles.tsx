"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
}

/** Bubbles rising through the underwater background. */
export default function Bubbles({ count = 22 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 6 + Math.random() * 20,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        drift: (Math.random() - 0.5) * 80,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            animation: `bubble-rise ${b.duration}s linear ${b.delay}s infinite`,
            // @ts-expect-error custom prop
            "--drift": `${b.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

interface Mote {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  dx: number;
  dy: number;
}

/** Slow desert dust drifting across the western scene. */
export default function DustMotes({ count = 26 }: { count?: number }) {
  const [motes, setMotes] = useState<Mote[]>([]);
  useEffect(() => {
    setMotes(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 7,
        dx: 80 + Math.random() * 160,
        dy: (Math.random() - 0.5) * 80,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {motes.map((m) => (
        <span
          key={m.id}
          className="dust"
          style={
            {
              left: `${m.left}%`,
              top: `${m.top}%`,
              width: m.size,
              height: m.size,
              animation: `dust-drift ${m.duration}s linear ${m.delay}s infinite`,
              "--dx": `${m.dx}px`,
              "--dy": `${m.dy}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

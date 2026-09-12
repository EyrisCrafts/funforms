"use client";

import { useEffect, useState } from "react";

interface Leaf {
  id: number;
  left: number;
  delay: number;
  duration: number;
  drift: number;
  scale: number;
  color: string;
}

const LEAF_COLORS = ["#e07a3c", "#c14a17", "#f0a04b", "#a63d1f", "#d4692a", "#b5651d"];

/** A single smooth (non-pixel) leaf drawn with curved SVG paths. */
function SmoothLeaf({ color, scale }: { color: string; scale: number }) {
  const size = 26 * scale;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
    >
      {/* leaf body */}
      <path
        d="M16 2 C24 8 28 16 16 30 C4 16 8 8 16 2 Z"
        fill={color}
      />
      {/* midrib */}
      <path d="M16 5 L16 28" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
      {/* veins */}
      <path d="M16 11 L11 9 M16 11 L21 9 M16 17 L10 15 M16 17 L22 15 M16 22 L12 21 M16 22 L20 21"
        stroke="rgba(0,0,0,0.18)" strokeWidth="0.9" />
    </svg>
  );
}

export default function FallingLeaves({ count = 18 }: { count?: number }) {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const generated: Leaf[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 7 + Math.random() * 7,
      drift: (Math.random() - 0.5) * 220,
      scale: 0.7 + Math.random() * 0.9,
      color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
    }));
    setLeaves(generated);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf"
          style={{
            left: `${leaf.left}%`,
            animation: `leaf-fall ${leaf.duration}s linear ${leaf.delay}s infinite`,
            // @ts-expect-error custom prop
            "--drift": `${leaf.drift}px`,
          }}
        >
          <SmoothLeaf color={leaf.color} scale={leaf.scale} />
        </div>
      ))}
    </div>
  );
}

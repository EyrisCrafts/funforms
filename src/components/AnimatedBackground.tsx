"use client";

import { useEffect, useState } from "react";

interface Dot {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

/**
 * A fixed, full-page ambient background for the dark marketing pages:
 * slow drifting gradient orbs + a faint field of twinkling dots.
 */
export default function AnimatedBackground() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: 44 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* drifting gradient orbs */}
      <div className="absolute -left-20 top-10 h-[26rem] w-[26rem] rounded-full bg-purple-600/20 blur-3xl animate-float-slow" />
      <div
        className="absolute right-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-pink-500/15 blur-3xl animate-float-slow"
        style={{ animationDelay: "1.4s" }}
      />
      <div
        className="absolute left-1/3 bottom-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl animate-float-slow"
        style={{ animationDelay: "2.6s" }}
      />
      <div
        className="absolute left-1/4 top-1/2 h-[20rem] w-[20rem] rounded-full bg-orange-500/10 blur-3xl animate-float-slow"
        style={{ animationDelay: "0.8s" }}
      />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* twinkling dots */}
      {dots.map((d) => (
        <span
          key={d.id}
          className="star"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animation: `twinkle ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

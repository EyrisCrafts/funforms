"use client";

/** The scrolling synthwave perspective grid at the bottom of the neon theme. */
export default function NeonGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      <div className="neon-grid" />
    </div>
  );
}

"use client";

/** Sweeping spotlight plus subtle film grain for the noir theme. */
export default function NoirAmbient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      <div className="noir-spot" />
      <div className="film-grain" />
    </div>
  );
}

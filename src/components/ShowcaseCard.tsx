"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FormTemplate } from "@/lib/types";
import { THEME_STYLES } from "@/lib/themes";
import { getVariants } from "@/lib/templates";
import ThemedForm from "./ThemedForm";
import ScaledPreview from "./ScaledPreview";

export default function ShowcaseCard({ template }: { template: FormTemplate }) {
  const s = THEME_STYLES[template.theme];
  const variants = getVariants(template.theme);
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const current = variants[idx] ?? template;

  function startCycling() {
    setHovered(true);
    if (variants.length < 2 || timer.current) return;
    timer.current = setInterval(() => {
      setIdx((i) => (i + 1) % variants.length);
    }, 1500);
  }

  function stopCycling() {
    setHovered(false);
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
    setIdx(0);
  }

  useEffect(() => {
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <Link
      href={`/view/${current.id}`}
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:border-white/30 hover:shadow-2xl"
    >
      {/* Fixed-size preview; cycles through variants on hover without resizing */}
      <ScaledPreview>
        <ThemedForm form={current} mode="preview" />
      </ScaledPreview>

      {/* subtle fade at the bottom where content is clipped */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Variant indicator (top-right) */}
      {variants.length > 1 && (
        <div
          className={`absolute right-3 top-3 z-20 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 backdrop-blur transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {variants.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-4 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* Details revealed on hover */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="p-4">
          <div className="mb-1 flex items-center gap-2">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: s.accent }}
            />
            <span className="text-[11px] uppercase tracking-widest text-white/70">
              {s.label}
              {variants.length > 1 && (
                <span className="text-white/45">
                  {" "}
                  · variant {idx + 1}/{variants.length}
                </span>
              )}
            </span>
          </div>
          <div className="flex items-end justify-between gap-2">
            <h3 className="text-lg font-semibold text-white">{current.name}</h3>
            <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black shadow">
              Check out →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

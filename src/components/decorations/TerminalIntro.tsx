"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "$ ssh operator@mainframe.io",
  "Establishing secure channel...",
  "[ OK ] handshake complete",
  "[ OK ] loading access form module",
  "auth required — please identify:",
];

/** Types out the boot lines one character at a time, then blinks a cursor. */
export default function TerminalIntro() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= BOOT_LINES.length) return;
    const current = BOOT_LINES[lineIdx];
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 220);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  return (
    <div className="font-mono text-xs md:text-sm text-[#33ff66] mb-4 min-h-[92px] leading-relaxed">
      {BOOT_LINES.slice(0, lineIdx).map((l, i) => (
        <div key={i} className="opacity-80">
          {l}
        </div>
      ))}
      {lineIdx < BOOT_LINES.length && (
        <div>
          {BOOT_LINES[lineIdx].slice(0, charIdx)}
          <span className="animate-blink">▋</span>
        </div>
      )}
    </div>
  );
}

"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * Fills its (fixed-size) parent and renders children at a fixed "design width"
 * scaled down to the parent's width. The parent controls height and clips
 * overflow — so every card is the same size regardless of the form's length,
 * and cycling variants never changes the card's dimensions.
 */
export default function ScaledPreview({
  designWidth = 820,
  children,
}: {
  designWidth?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.45);

  useLayoutEffect(() => {
    function update() {
      const w = ref.current?.clientWidth ?? designWidth;
      setScale(w / designWidth);
    }
    update();
    const ro = new ResizeObserver(update);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [designWidth]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div
        style={{
          width: designWidth,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        className="pointer-events-none"
      >
        {children}
      </div>
    </div>
  );
}

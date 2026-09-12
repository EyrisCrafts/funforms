"use client";

/**
 * A small pixel-art wizard built from SVG rects. The wand arm rotates
 * (wand-wave) and sparkles pop at the wand tip.
 */
export default function PixelWizard({ size = 96 }: { size?: number }) {
  // one pixel unit
  const P = (n: number) => n * 6;
  const px = (x: number, y: number, w: number, h: number, fill: string) => (
    <rect x={P(x)} y={P(y)} width={P(w)} height={P(h)} fill={fill} />
  );

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      className="pixelated animate-sprite-bob"
      shapeRendering="crispEdges"
    >
      {/* Hat */}
      {px(5, 1, 6, 1, "#6b3fa0")}
      {px(6, 2, 4, 1, "#7d4bc0")}
      {px(7, 3, 2, 1, "#7d4bc0")}
      {px(8, 3, 1, 1, "#ffd34d")}
      {/* Hat brim */}
      {px(3, 4, 10, 1, "#5a2f8a")}
      {/* Face */}
      {px(5, 5, 6, 3, "#f2c9a0")}
      {px(6, 6, 1, 1, "#1a1030")}
      {px(9, 6, 1, 1, "#1a1030")}
      {/* Beard */}
      {px(4, 8, 8, 3, "#e8e8f0")}
      {px(5, 11, 6, 1, "#e8e8f0")}
      {px(6, 12, 4, 1, "#e8e8f0")}
      {/* Robe */}
      {px(4, 8, 1, 5, "#3a7bd5")}
      {px(11, 8, 1, 5, "#3a7bd5")}
      {px(4, 11, 8, 3, "#2f6bc0")}
      {px(5, 14, 6, 1, "#2f6bc0")}
      {/* Left static arm */}
      {px(3, 9, 1, 2, "#3a7bd5")}

      {/* Wand arm group — rotates around shoulder pivot */}
      <g
        className="animate-wand-wave"
        style={{ transformOrigin: `${P(12)}px ${P(9)}px`, transformBox: "fill-box" } as React.CSSProperties}
      >
        {px(12, 9, 1, 2, "#3a7bd5")}
        {px(13, 8, 1, 1, "#f2c9a0")}
        {/* wand */}
        {px(14, 5, 1, 4, "#8a5a2b")}
        {px(13, 4, 1, 1, "#8a5a2b")}
        {/* star tip */}
        {px(13, 2, 1, 1, "#ffd34d")}
        {px(12, 3, 3, 1, "#ffd34d")}
        {px(13, 3, 1, 1, "#fff3b0")}
        {px(13, 4, 1, 0.5, "#ffd34d")}
      </g>

      {/* Sparkles near wand tip */}
      <g className="animate-sparkle" style={{ transformOrigin: "84px 18px" }}>
        {px(15, 1, 1, 1, "#fff3b0")}
      </g>
      <g
        className="animate-sparkle"
        style={{ transformOrigin: "90px 30px", animationDelay: "0.6s" }}
      >
        {px(16, 4, 1, 1, "#ffd34d")}
      </g>
    </svg>
  );
}

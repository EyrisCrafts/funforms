"use client";

import { ThemeId } from "@/lib/types";

/**
 * Decorative full-bleed SVG behind the form card. `art` (0/1/2) selects a
 * different background composition per variant.
 */
export default function SvgBackground({ theme, art = 0 }: { theme: ThemeId; art?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 600">
        {render(theme, art)}
      </svg>
    </div>
  );
}

function render(theme: ThemeId, art: number) {
  switch (theme) {
    /* ------------------------------ retro ------------------------------ */
    case "retro":
      if (art === 1)
        return (
          <>
            <Stars />
            <circle cx="620" cy="130" r="46" fill="#ffd34d" opacity="0.5" />
            {/* pixel castle */}
            <g fill="#2b1a55">
              <rect x="280" y="420" width="240" height="180" />
              <rect x="270" y="390" width="40" height="40" />
              <rect x="490" y="390" width="40" height="40" />
              <rect x="380" y="360" width="40" height="70" />
              <rect x="360" y="500" width="40" height="100" fill="#1a1030" />
            </g>
            <g fill="#3a2a66">
              <rect x="278" y="410" width="244" height="14" />
            </g>
          </>
        );
      if (art === 2)
        return (
          <>
            <Stars />
            <rect x="120" y="90" width="90" height="90" fill="#ffd34d" opacity="0.4" />
            {/* pixel forest */}
            {[80, 200, 560, 690].map((x, i) => (
              <g key={i} fill="#2b1a55">
                <rect x={x} y={470} width="20" height="70" />
                <rect x={x - 24} y={410} width="68" height="70" />
                <rect x={x - 14} y={360} width="48" height="60" />
              </g>
            ))}
            <rect x="0" y="540" width="800" height="60" fill="#1a1030" />
          </>
        );
      return (
        <>
          <Stars />
          <path d="M0 600 L0 460 L120 340 L240 460 L360 320 L520 480 L640 360 L800 480 L800 600 Z" fill="#3a2a66" opacity="0.6" />
          <path d="M0 600 L0 520 L160 440 L320 540 L480 440 L640 540 L800 460 L800 600 Z" fill="#2b1a55" />
        </>
      );

    /* ----------------------------- terminal ---------------------------- */
    case "terminal":
      if (art === 1)
        return (
          <>
            <Grid color="#33ff66" />
            {Array.from({ length: 16 }).map((_, i) => (
              <text key={i} x={20 + i * 50} y={((i * 90) % 480) + 30} fill="#33ff66" opacity="0.14" fontFamily="monospace" fontSize="12">
                {"01101001".slice(0, 4 + (i % 4))}
              </text>
            ))}
          </>
        );
      if (art === 2)
        return (
          <>
            <Grid color="#33ff66" />
            <g fill="none" stroke="#33ff66" strokeWidth="1" opacity="0.18">
              <circle cx="400" cy="300" r="90" />
              <circle cx="400" cy="300" r="170" />
              <circle cx="400" cy="300" r="250" />
              <line x1="400" y1="60" x2="400" y2="540" />
              <line x1="120" y1="300" x2="680" y2="300" />
            </g>
          </>
        );
      return (
        <>
          <Grid color="#33ff66" />
          {Array.from({ length: 14 }).map((_, i) => (
            <text key={i} x={(i * 61) % 800} y={((i * 137) % 560) + 20} fill="#33ff66" opacity="0.12" fontFamily="monospace" fontSize="13">
              {["0110", "1001", "root", "0xF3", "exec", "sudo", "1110"][i % 7]}
            </text>
          ))}
        </>
      );

    /* ------------------------------ autumn ----------------------------- */
    case "autumn":
      if (art === 1)
        return (
          <>
            <circle cx="150" cy="140" r="60" fill="#ffe0a3" opacity="0.6" />
            {[120, 330, 560, 700].map((x, i) => (
              <g key={i}>
                <rect x={x - 6} y={430} width="12" height="120" fill="#7a4a22" opacity="0.55" />
                <circle cx={x} cy={410} r="46" fill={["#c14a17", "#e8792f", "#a63d1f", "#d4692a"][i % 4]} opacity="0.5" />
              </g>
            ))}
            <path d="M0 600 L0 540 L800 540 L800 600 Z" fill="#7a2d13" opacity="0.6" />
          </>
        );
      if (art === 2)
        return (
          <>
            <path d="M0 600 L0 480 Q400 440 800 480 L800 600 Z" fill="#8a5a2a" opacity="0.5" />
            {/* barn */}
            <g opacity="0.55">
              <rect x="330" y="400" width="140" height="140" fill="#a63d1f" />
              <path d="M320 400 L400 350 L480 400 Z" fill="#7a2d13" />
              <rect x="385" y="470" width="30" height="70" fill="#5a2d12" />
              <path d="M330 435 L470 435 M400 400 L400 540" stroke="#e8d5a8" strokeWidth="3" opacity="0.5" />
            </g>
            <circle cx="640" cy="150" r="50" fill="#ffd089" opacity="0.7" />
          </>
        );
      return (
        <>
          <circle cx="640" cy="130" r="70" fill="#ffe0a3" opacity="0.7" />
          <circle cx="640" cy="130" r="48" fill="#ffd089" opacity="0.9" />
          <path d="M0 600 L0 470 Q200 400 400 470 T800 460 L800 600 Z" fill="#a63d1f" opacity="0.55" />
          <path d="M0 600 L0 520 Q200 470 400 520 T800 510 L800 600 Z" fill="#7a2d13" opacity="0.6" />
        </>
      );

    /* ------------------------------ nerdy ------------------------------ */
    case "nerdy":
      if (art === 1)
        return (
          <g fill="none" stroke="#5078c8" strokeWidth="1.5" opacity="0.25">
            {/* molecule graph */}
            {[[180, 180], [320, 120], [300, 300], [520, 220], [640, 380], [430, 420]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="10" fill="#5078c8" stroke="none" />
            ))}
            <path d="M180 180 L320 120 M180 180 L300 300 M320 120 L520 220 M300 300 L430 420 M520 220 L640 380 M430 420 L640 380" />
          </g>
        );
      if (art === 2)
        return (
          <g opacity="0.22">
            <g stroke="#5078c8" strokeWidth="1" opacity="0.6">
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`h${i}`} x1="60" y1={80 + i * 55} x2="740" y2={80 + i * 55} />
              ))}
              {Array.from({ length: 13 }).map((_, i) => (
                <line key={`v${i}`} x1={60 + i * 57} y1="80" x2={60 + i * 57} y2="520" />
              ))}
            </g>
            <path d="M60 460 Q220 120 400 300 T740 140" fill="none" stroke="#e0574a" strokeWidth="3" />
          </g>
        );
      return (
        <g fill="none" stroke="#5078c8" strokeWidth="1.5" opacity="0.25">
          <circle cx="150" cy="150" r="90" />
          <circle cx="150" cy="150" r="60" />
          <line x1="60" y1="150" x2="240" y2="150" />
          <line x1="150" y1="60" x2="150" y2="240" />
          <circle cx="640" cy="440" r="110" strokeDasharray="6 6" />
          <path d="M560 500 L720 380" />
          <rect x="600" y="120" width="120" height="120" strokeDasharray="4 4" />
        </g>
      );

    /* ------------------------------- neon ------------------------------ */
    case "neon":
      if (art === 1)
        return (
          <>
            {/* neon skyline */}
            <g fill="#2d1b4e" stroke="#ff2e97" strokeWidth="1.5" opacity="0.7">
              {[60, 150, 250, 360, 470, 560, 660].map((x, i) => (
                <rect key={i} x={x} y={300 + (i % 3) * 40} width="70" height={300} />
              ))}
            </g>
            <g stroke="#00e5ff" strokeWidth="1" opacity="0.5">
              <line x1="0" y1="440" x2="800" y2="440" />
              <line x1="0" y1="500" x2="800" y2="500" />
            </g>
          </>
        );
      if (art === 2)
        return (
          <>
            <path d="M0 600 L0 470 L180 360 L340 470 L500 340 L680 470 L800 400 L800 600 Z" fill="#2d1b4e" stroke="#ff2e97" strokeWidth="2" opacity="0.7" />
            <g stroke="#00e5ff" strokeWidth="1.5" opacity="0.35">
              {[420, 470, 530, 600].map((y) => (
                <line key={y} x1="0" y1={y} x2="800" y2={y} />
              ))}
              {[100, 250, 400, 550, 700].map((x) => (
                <line key={x} x1={x} y1="400" x2={400 + (x - 400) * 3} y2="600" />
              ))}
            </g>
          </>
        );
      return (
        <>
          <defs>
            <linearGradient id="neonSun" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffd23f" />
              <stop offset="55%" stopColor="#ff2e97" />
              <stop offset="100%" stopColor="#c159ff" />
            </linearGradient>
            <clipPath id="sunClip"><circle cx="400" cy="250" r="140" /></clipPath>
          </defs>
          <circle cx="400" cy="250" r="140" fill="url(#neonSun)" />
          <g clipPath="url(#sunClip)" stroke="#1a0b2e" strokeWidth="8">
            {[300, 320, 342, 366, 392].map((y) => (
              <line key={y} x1="250" y1={y} x2="550" y2={y} />
            ))}
          </g>
          <circle cx="400" cy="250" r="140" fill="none" stroke="#ff6ec7" strokeWidth="2" opacity="0.6" />
        </>
      );

    /* ------------------------------ cosmic ----------------------------- */
    case "cosmic":
      if (art === 1)
        return (
          <>
            <Nebula />
            {/* constellation */}
            <g stroke="#8fd0ff" strokeWidth="1" opacity="0.5">
              <path d="M120 140 L220 200 L300 160 L400 260 L520 220 L620 320" fill="none" />
            </g>
            {[[120, 140], [220, 200], [300, 160], [400, 260], [520, 220], [620, 320]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3.5" fill="#dfe4ff" />
            ))}
          </>
        );
      if (art === 2)
        return (
          <>
            <Nebula />
            <circle cx="180" cy="180" r="34" fill="#c159ff" opacity="0.55" />
            <circle cx="640" cy="150" r="20" fill="#8fd0ff" opacity="0.6" />
            <g>
              <circle cx="560" cy="450" r="70" fill="#6d5dfc" opacity="0.55" />
              <circle cx="540" cy="435" r="14" fill="#2a1f6a" opacity="0.6" />
              <circle cx="590" cy="470" r="9" fill="#2a1f6a" opacity="0.5" />
            </g>
          </>
        );
      return (
        <>
          <defs>
            <radialGradient id="nebula1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6d5dfc" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6d5dfc" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="nebula2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c159ff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c159ff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="planet" cx="35%" cy="30%" r="75%">
              <stop offset="0%" stopColor="#8fd0ff" />
              <stop offset="60%" stopColor="#3a6ea5" />
              <stop offset="100%" stopColor="#1a2f52" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="180" rx="320" ry="220" fill="url(#nebula1)" />
          <ellipse cx="620" cy="420" rx="300" ry="200" fill="url(#nebula2)" />
          <g transform="translate(650 470)">
            <ellipse cx="0" cy="0" rx="130" ry="34" fill="none" stroke="#b8a6ff" strokeWidth="6" opacity="0.7" transform="rotate(-18)" />
            <circle cx="0" cy="0" r="60" fill="url(#planet)" />
          </g>
        </>
      );

    /* ------------------------------- ocean ----------------------------- */
    case "ocean":
      if (art === 1)
        return (
          <>
            <Rays />
            {/* coral reef */}
            <g opacity="0.6">
              {[80, 180, 300, 500, 640, 720].map((x, i) => (
                <path key={i} d={`M${x} 600 q-10 -${50 + (i % 3) * 26} 4 -${70 + (i % 3) * 30} q14 ${20} 8 ${70}`} fill="none" stroke="#1b7f5c" strokeWidth="10" strokeLinecap="round" />
              ))}
              <path d="M0 600 L0 560 Q400 540 800 560 L800 600 Z" fill="#012a4a" />
            </g>
          </>
        );
      if (art === 2)
        return (
          <>
            <Rays />
            {/* big whale silhouette */}
            <g fill="#013a63" opacity="0.4">
              <path d="M180 430 Q300 360 470 400 Q560 420 560 450 Q560 490 460 500 Q300 520 200 490 Q150 470 180 430 Z" />
              <path d="M540 445 L600 410 L600 480 Z" />
              <path d="M300 380 Q340 350 380 380 Q340 372 300 380 Z" />
            </g>
            <circle cx="230" cy="450" r="4" fill="#bff0ff" opacity="0.6" />
          </>
        );
      return (
        <>
          <Rays />
          <path d="M0 600 L0 540 Q120 500 260 545 T540 540 T800 545 L800 600 Z" fill="#012a4a" opacity="0.7" />
          <path d="M180 560 q-16 -50 6 -90 q-22 -34 4 -70" fill="none" stroke="#1b7f5c" strokeWidth="9" strokeLinecap="round" className="animate-float-slow" />
          <path d="M620 560 q16 -46 -6 -84 q22 -30 -4 -64" fill="none" stroke="#1b7f5c" strokeWidth="9" strokeLinecap="round" className="animate-float-slow" />
        </>
      );

    /* ------------------------------- comic ----------------------------- */
    case "comic":
      if (art === 1)
        return (
          <g opacity="0.1">
            <circle cx="140" cy="140" r="150" fill="#000" />
            <circle cx="140" cy="140" r="150" fill="#ffe14d" />
            {/* halftone corners */}
            <g fill="#000">
              {Array.from({ length: 40 }).map((_, i) => {
                const cx = (i % 8) * 26 + 10;
                const cy = Math.floor(i / 8) * 26 + 10;
                return <circle key={i} cx={cx} cy={cy} r={5 - (i % 3)} />;
              })}
              {Array.from({ length: 40 }).map((_, i) => {
                const cx = 620 + (i % 8) * 26;
                const cy = 420 + Math.floor(i / 8) * 26;
                return <circle key={`b${i}`} cx={cx} cy={cy} r={5 - (i % 3)} />;
              })}
            </g>
          </g>
        );
      if (art === 2)
        return (
          <g opacity="0.09" stroke="#000" strokeWidth="12">
            {Array.from({ length: 18 }).map((_, i) => (
              <line key={i} x1={i * 46} y1="600" x2={i * 46 + 200} y2="0" />
            ))}
          </g>
        );
      return (
        <g stroke="#000" strokeWidth="10" opacity="0.08">
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={Math.round(400 + Math.cos(a) * 120)}
                y1={Math.round(300 + Math.sin(a) * 120)}
                x2={Math.round(400 + Math.cos(a) * 900)}
                y2={Math.round(300 + Math.sin(a) * 900)}
              />
            );
          })}
        </g>
      );

    /* ------------------------------ winter ----------------------------- */
    case "winter":
      if (art === 1)
        return (
          <>
            {/* village */}
            <path d="M0 600 L0 500 Q400 470 800 500 L800 600 Z" fill="#e8f2ff" opacity="0.18" />
            {[120, 320, 560].map((x, i) => (
              <g key={i} opacity="0.25">
                <rect x={x} y={440} width="80" height="70" fill="#e8f2ff" />
                <path d={`M${x - 8} 440 L${x + 40} 405 L${x + 88} 440 Z`} fill="#cfe4ff" />
                <rect x={x + 30} y={470} width="20" height="40" fill="#16305c" opacity="0.5" />
              </g>
            ))}
            <circle cx="650" cy="120" r="44" fill="#eaf4ff" opacity="0.8" />
          </>
        );
      if (art === 2)
        return (
          <>
            {/* aurora */}
            <g opacity="0.3">
              <path d="M0 180 Q200 100 400 180 T800 160" fill="none" stroke="#8fe3a0" strokeWidth="26" strokeLinecap="round" opacity="0.5" />
              <path d="M0 240 Q220 160 440 240 T800 220" fill="none" stroke="#7fdbff" strokeWidth="20" strokeLinecap="round" opacity="0.5" />
            </g>
            <path d="M0 600 L0 470 L220 360 L420 480 L620 360 L800 470 L800 600 Z" fill="#16305c" opacity="0.5" />
          </>
        );
      return (
        <>
          <circle cx="640" cy="120" r="60" fill="#eaf4ff" opacity="0.85" />
          <circle cx="620" cy="110" r="60" fill="#16305c" />
          <path d="M0 600 L0 470 Q200 410 400 460 T800 450 L800 600 Z" fill="#e8f2ff" opacity="0.16" />
          <path d="M0 600 L0 520 Q220 470 440 515 T800 505 L800 600 Z" fill="#e8f2ff" opacity="0.22" />
          {[100, 180, 700].map((x, i) => (
            <g key={i} transform={`translate(${x} 470)`} fill="#dff0ff" opacity="0.2">
              <path d="M0 0 L-22 60 L22 60 Z" />
              <path d="M0 -25 L-18 30 L18 30 Z" />
            </g>
          ))}
        </>
      );

    /* ----------------------------- birthday ---------------------------- */
    case "birthday":
      if (art === 1)
        return (
          <>
            <Dots color="#ffffff" />
            {/* bunting */}
            <path d="M0 90 Q400 150 800 90" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
            {Array.from({ length: 12 }).map((_, i) => {
              const x = 40 + i * 65;
              return <path key={i} d={`M${x} 100 L${x + 30} 100 L${x + 15} 132 Z`} fill={["#ff6f91", "#ffd23f", "#4d96ff", "#2ec4b6"][i % 4]} opacity="0.5" />;
            })}
          </>
        );
      if (art === 2)
        return (
          <>
            <Dots color="#ffffff" />
            {[[130, 150], [660, 200], [700, 430], [110, 420], [400, 120]].map(([x, y], i) => (
              <g key={i} opacity="0.5">
                <path d={`M${x} ${y} l14 8 l-14 8 l-14 -8 Z`} fill={["#ff6f91", "#ffd23f", "#4d96ff", "#2ec4b6", "#845ec2"][i % 5]} />
                <circle cx={x + 30} cy={y + 20} r="4" fill="#fff" />
              </g>
            ))}
          </>
        );
      return (
        <>
          <Dots color="#ffffff" />
          {[
            { x: 120, y: 150, c: "#ff6f91" },
            { x: 680, y: 120, c: "#ffd23f" },
            { x: 720, y: 380, c: "#4d96ff" },
            { x: 90, y: 420, c: "#2ec4b6" },
          ].map((b, i) => (
            <g key={i} className="animate-float-slow" style={{ animationDelay: `${i * 0.6}s` }}>
              <ellipse cx={b.x} cy={b.y} rx="34" ry="42" fill={b.c} opacity="0.55" />
              <path d={`M${b.x} ${b.y + 42} q6 30 0 70`} stroke={b.c} strokeWidth="2" fill="none" opacity="0.5" />
            </g>
          ))}
        </>
      );

    /* ------------------------------ kawaii ----------------------------- */
    case "kawaii":
      if (art === 1)
        return (
          <>
            {/* sparkles + hearts */}
            {[[120, 130], [660, 160], [300, 90], [700, 420], [90, 440], [430, 500]].map(([x, y], i) => (
              <g key={i} opacity="0.5">
                {i % 2 === 0 ? (
                  <path d={`M${x} ${y - 12} L${x + 4} ${y - 4} L${x + 12} ${y} L${x + 4} ${y + 4} L${x} ${y + 12} L${x - 4} ${y + 4} L${x - 12} ${y} L${x - 4} ${y - 4} Z`} fill="#fff" />
                ) : (
                  <path d={`M${x} ${y + 10} q-10 -10 0 -16 q10 -6 0 6 q10 -12 0 16 Z`} fill="#ff9ecb" />
                )}
              </g>
            ))}
          </>
        );
      if (art === 2)
        return (
          <>
            <Dots color="#ff9ecb" />
            <g className="animate-float-slow">
              <circle cx="640" cy="150" r="60" fill="#fff" opacity="0.6" />
              <circle cx="626" cy="142" r="5" fill="#ff9ecb" />
              <circle cx="654" cy="142" r="5" fill="#ff9ecb" />
              <path d="M632 158 q8 8 16 0" fill="none" stroke="#ff5fa2" strokeWidth="3" strokeLinecap="round" />
            </g>
          </>
        );
      return (
        <>
          {[
            { x: 150, y: 130, s: 1 },
            { x: 650, y: 200, s: 1.3 },
            { x: 500, y: 90, s: 0.8 },
          ].map((c, i) => (
            <g key={i} transform={`translate(${c.x} ${c.y}) scale(${c.s})`} fill="#ffffff" opacity="0.55" className="animate-float-slow" style={{ animationDelay: `${i * 0.7}s` }}>
              <ellipse cx="0" cy="0" rx="46" ry="28" />
              <circle cx="-26" cy="2" r="20" />
              <circle cx="26" cy="2" r="22" />
            </g>
          ))}
          <g fill="none" strokeWidth="10" opacity="0.4">
            <path d="M540 600 A210 210 0 0 1 760 600" stroke="#ff9ecb" />
            <path d="M560 600 A190 190 0 0 1 740 600" stroke="#ffd23f" />
            <path d="M580 600 A170 170 0 0 1 720 600" stroke="#8fd0ff" />
          </g>
        </>
      );

    /* ------------------------------ western ---------------------------- */
    case "western":
      if (art === 1)
        return (
          <>
            {/* wooden planks */}
            <rect width="800" height="600" fill="#5a3a1a" opacity="0.25" />
            <g stroke="#3a2410" strokeWidth="3" opacity="0.4">
              {[120, 240, 360, 480].map((y) => (
                <line key={y} x1="0" y1={y} x2="800" y2={y} />
              ))}
            </g>
            <g fill="#3a2410" opacity="0.4">
              {[80, 720].map((x) => [70, 190, 310, 430].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />))}
            </g>
          </>
        );
      if (art === 2)
        return (
          <>
            <rect width="800" height="600" fill="#c98a4a" opacity="0.3" />
            {/* mesas */}
            <g fill="#7a3b12" opacity="0.5">
              <path d="M40 520 L40 380 L60 360 L180 360 L200 380 L200 520 Z" />
              <path d="M560 540 L560 340 L580 320 L740 320 L760 340 L760 540 Z" />
            </g>
            <path d="M0 600 L0 520 Q400 500 800 520 L800 600 Z" fill="#6b3f1a" opacity="0.6" />
            <circle cx="400" cy="200" r="90" fill="#e8b04a" opacity="0.4" />
          </>
        );
      return (
        <>
          <rect width="800" height="600" fill="#c98a4a" opacity="0.35" />
          <circle cx="400" cy="230" r="110" fill="#e8b04a" opacity="0.5" />
          <path d="M0 600 L0 470 Q200 430 400 470 T800 460 L800 600 Z" fill="#8a5a2a" opacity="0.5" />
          <path d="M0 600 L0 520 Q220 490 440 520 T800 515 L800 600 Z" fill="#6b3f1a" opacity="0.6" />
          {[110, 690].map((x, i) => (
            <g key={i} transform={`translate(${x} 470)`} fill="#4a6b2a" opacity="0.6">
              <rect x="-8" y="-70" width="16" height="90" rx="6" />
              <rect x="-30" y="-45" width="14" height="30" rx="6" />
              <rect x="-30" y="-45" width="30" height="14" rx="6" />
              <rect x="16" y="-55" width="14" height="34" rx="6" />
              <rect x="2" y="-55" width="28" height="14" rx="6" />
            </g>
          ))}
        </>
      );

    /* ------------------------------- noir ------------------------------ */
    case "noir":
      if (art === 1)
        return (
          <>
            {/* skyline + rain */}
            <g fill="#000" opacity="0.55">
              {[40, 130, 220, 330, 440, 540, 650, 740].map((x, i) => (
                <rect key={i} x={x} y={280 + (i % 4) * 40} width="70" height="320" />
              ))}
            </g>
            <g stroke="#ffffff" strokeWidth="1" opacity="0.08">
              {Array.from({ length: 26 }).map((_, i) => (
                <line key={i} x1={i * 32} y1="0" x2={i * 32 - 40} y2="600" />
              ))}
            </g>
          </>
        );
      if (art === 2)
        return (
          <>
            {/* venetian blind shadows */}
            <g fill="#ffffff" opacity="0.05">
              {Array.from({ length: 22 }).map((_, i) => (
                <rect key={i} x="0" y={i * 28} width="800" height="10" />
              ))}
            </g>
            {/* smoke swirl */}
            <path d="M560 560 Q600 440 540 360 Q480 300 560 220 Q620 160 560 100" fill="none" stroke="#ffffff" strokeWidth="10" opacity="0.06" strokeLinecap="round" />
          </>
        );
      return (
        <>
          <defs>
            <linearGradient id="cone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="360,0 440,0 620,600 140,600" fill="url(#cone)" />
        </>
      );
  }
}

/* ---------- small shared background helpers ---------- */
function Stars() {
  return (
    <>
      <defs>
        <pattern id="stars" width="80" height="80" patternUnits="userSpaceOnUse">
          <rect x="10" y="14" width="4" height="4" fill="#ffd34d" opacity="0.7" />
          <rect x="52" y="40" width="4" height="4" fill="#b7a6ff" opacity="0.6" />
          <rect x="30" y="64" width="4" height="4" fill="#8fe3a0" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#stars)" />
    </>
  );
}

function Grid({ color }: { color: string }) {
  return (
    <>
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0 L0 0 0 40" fill="none" stroke={color} strokeWidth="0.5" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#grid)" />
    </>
  );
}

function Dots({ color }: { color: string }) {
  const id = `bdots-${color.replace("#", "")}`;
  return (
    <>
      <defs>
        <pattern id={id} width="46" height="46" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="5" fill={color} opacity="0.18" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill={`url(#${id})`} />
    </>
  );
}

function Rays() {
  return (
    <>
      <defs>
        <linearGradient id="ray" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bff0ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#bff0ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points="120,0 200,0 150,600 60,600" fill="url(#ray)" />
      <polygon points="360,0 430,0 470,600 320,600" fill="url(#ray)" />
      <polygon points="640,0 700,0 660,600 560,600" fill="url(#ray)" />
    </>
  );
}

function Nebula() {
  return (
    <>
      <defs>
        <radialGradient id="cn1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6d5dfc" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6d5dfc" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="300" cy="240" rx="360" ry="240" fill="url(#cn1)" />
    </>
  );
}

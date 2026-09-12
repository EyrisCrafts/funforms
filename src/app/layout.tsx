import type { Metadata } from "next";
import {
  Press_Start_2P,
  JetBrains_Mono,
  Caveat,
  Orbitron,
  Bangers,
  Fredoka,
  Rye,
  Special_Elite,
} from "next/font/google";
import "./globals.css";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const neon = Orbitron({
  subsets: ["latin"],
  variable: "--font-neon",
  display: "swap",
});

const comic = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-comic",
  display: "swap",
});

const rounded = Fredoka({
  subsets: ["latin"],
  variable: "--font-rounded",
  display: "swap",
});

const western = Rye({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-western",
  display: "swap",
});

const typewriter = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-type",
  display: "swap",
});

export const metadata: Metadata = {
  title: "funForms — no more boring forms",
  description: "A form builder with themed, animated templates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pixel.variable} ${mono.variable} ${hand.variable} ${neon.variable} ${comic.variable} ${rounded.variable} ${western.variable} ${typewriter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

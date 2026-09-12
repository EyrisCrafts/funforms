"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0e14]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-purple-500 to-orange-400 text-sm font-black text-white">
            F
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            fun<span className="text-white/70">Forms</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/#templates"
            className="rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            Templates
          </Link>
          <Link
            href="/#how"
            className="hidden rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white sm:block"
          >
            How it works
          </Link>
          <Link
            href="/create"
            className="whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            ✨ Create your own
          </Link>
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";
import { TEMPLATES } from "@/lib/templates";
import ShowcaseCard from "@/components/ShowcaseCard";
import NavBar from "@/components/NavBar";
import AnimatedBackground from "@/components/AnimatedBackground";

const STEPS = [
  {
    n: "01",
    title: "Pick a theme",
    body: "Start from a template that already looks alive — pixel wizards, terminals, falling leaves and more.",
    icon: "🎨",
  },
  {
    n: "02",
    title: "Customize the fields",
    body: "Edit the copy, add or reorder fields, toggle the animated background — all with a live preview.",
    icon: "🛠️",
  },
  {
    n: "03",
    title: "Share the live form",
    body: "Open the live view and fill it out. Every theme has its own delightful little details.",
    icon: "🚀",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0b0e14] text-white">
      <AnimatedBackground />

      <div className="relative z-10">
        <NavBar />

        {/* Hero */}
        <section className="px-6 pt-20 pb-10 text-center">
          <div className="mx-auto max-w-3xl">
            <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60">
              Forms, but make them fun
            </span>
            <h1 className="mb-4 text-6xl font-black leading-none md:text-8xl">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                funForms
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-2xl font-semibold text-white/80 md:text-3xl">
              No more boring forms.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/create"
                className="rounded-xl bg-gradient-to-r from-purple-500 to-orange-400 px-7 py-3 font-semibold text-white transition-transform hover:scale-105"
              >
                ✨ Create your own
              </Link>
              <Link
                href="#templates"
                className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Browse templates
              </Link>
            </div>
          </div>
        </section>

        {/* Templates gallery */}
        <section id="templates" className="mx-auto max-w-7xl px-4 pt-6 pb-8">
          <div className="mb-6 flex items-end justify-between px-1">
            <h2 className="text-2xl font-bold md:text-3xl">Themed templates</h2>
            <span className="text-sm text-white/40">
              {TEMPLATES.length} to choose from
            </span>
          </div>
          <p className="mb-8 px-1 text-sm text-white/50">
            Hover a card to cycle through its variants.
          </p>
          <div className="gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
            {TEMPLATES.map((t, i) => (
              <div
                key={t.id}
                className={`mb-6 break-inside-avoid ${
                  i % 3 === 1 ? "lg:mt-10" : i % 3 === 2 ? "lg:mt-5" : ""
                }`}
              >
                <ShowcaseCard template={t} />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="#how"
              className="inline-block rounded-xl border border-white/20 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore templates
            </a>
          </div>
        </section>

        {/* AI create band */}
        <section className="mx-auto max-w-7xl px-4 py-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-orange-500/20 p-8 md:p-12">
            <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
                  ✨ Powered by Claude
                </span>
                <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                  Don&apos;t see the perfect fit?
                </h2>
                <p className="text-white/70">
                  Describe your event or survey in a sentence and let Claude
                  generate a themed form — fields, copy, and all.
                </p>
              </div>
              <Link
                href="/create"
                className="shrink-0 rounded-xl bg-white px-8 py-4 font-semibold text-black transition-transform hover:scale-105"
              >
                Create your own →
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">How it works</h2>
            <p className="text-white/50">Three steps from boring to brilliant.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-sm font-bold text-white/25">{s.n}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-white/60">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature strip */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
            {[
              { k: "13+", v: "animated themes" },
              { k: "Live", v: "editable preview" },
              { k: "AI", v: "form generation" },
            ].map((f) => (
              <div key={f.v} className="text-center">
                <div className="text-3xl font-black text-white">{f.k}</div>
                <div className="text-sm text-white/50">{f.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-purple-500 to-orange-400 text-xs font-black text-white">
                F
              </span>
              <span className="font-semibold">funForms</span>
            </div>
            <div className="flex gap-6 text-sm text-white/50">
              <Link href="#templates" className="hover:text-white">
                Templates
              </Link>
              <Link href="/create" className="hover:text-white">
                Create
              </Link>
              <Link href="#how" className="hover:text-white">
                How it works
              </Link>
            </div>
            <p className="text-sm text-white/40">Built with Next.js · Demo</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

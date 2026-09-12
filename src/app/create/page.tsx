"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormStore } from "@/lib/store";
import { FormTemplate } from "@/lib/types";
import NavBar from "@/components/NavBar";
import AnimatedBackground from "@/components/AnimatedBackground";

const FORM_TYPES = [
  { id: "event", label: "Event", icon: "🎪" },
  { id: "rsvp", label: "RSVP", icon: "✉️" },
  { id: "survey", label: "Survey", icon: "📊" },
  { id: "registration", label: "Sign-up", icon: "📝" },
  { id: "feedback", label: "Feedback", icon: "💬" },
  { id: "contact", label: "Contact", icon: "📮" },
  { id: "application", label: "Application", icon: "🧾" },
  { id: "quiz", label: "Quiz", icon: "❓" },
];

export default function CreatePage() {
  const router = useRouter();
  const setForm = useFormStore((s) => s.setForm);

  const [formType, setFormType] = useState("event");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Whether the server already has an ANTHROPIC_API_KEY. null = still checking.
  const [hasEnvKey, setHasEnvKey] = useState<boolean | null>(null);
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    fetch("/api/generate")
      .then((r) => r.json())
      .then((d) => setHasEnvKey(Boolean(d.hasKey)))
      .catch(() => setHasEnvKey(false));
    try {
      const saved = sessionStorage.getItem("funforms:key");
      if (saved) setApiKey(saved);
    } catch {
      /* ignore */
    }
  }, []);

  function onApiKeyChange(v: string) {
    setApiKey(v);
    try {
      if (v) sessionStorage.setItem("funforms:key", v);
      else sessionStorage.removeItem("funforms:key");
    } catch {
      /* ignore */
    }
  }

  async function generate() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, details, apiKey }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Generation failed");

      const form = data.form as FormTemplate;
      setForm(form.id, form);
      // Carry a fallback note through to the view via sessionStorage (optional).
      if (data.note) {
        try {
          sessionStorage.setItem("formify:note", data.note);
        } catch {
          /* ignore */
        }
      }
      router.push(`/view/${form.id}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen bg-[#0b0e14] text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <NavBar />

        <div className="mx-auto max-w-2xl px-5 py-12">
          <div className="mb-8 text-center">
            <span className="mb-3 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60">
              ✨ AI-powered
            </span>
            <h1 className="mb-2 text-4xl font-black md:text-5xl">
              Create your own
            </h1>
            <p className="text-white/60">
              Pick a form type, add a few details, and Claude builds a themed
              template for you.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            {/* Step 1: type switcher */}
            <label className="mb-2 block text-sm font-semibold text-white/80">
              1. What kind of form?
            </label>
            <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {FORM_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setFormType(t.id)}
                  className={`flex flex-col items-center gap-1 rounded-xl border px-3 py-3 text-sm transition-all ${
                    formType === t.id
                      ? "border-white bg-white text-black"
                      : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  <span className="text-xl">{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Step 2: details */}
            <label className="mb-2 block text-sm font-semibold text-white/80">
              2. Describe it
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="e.g. A sign-up for a weekend rock climbing trip — need name, experience level, and gear they'll bring."
              className="mb-4 min-h-[110px] w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/40"
            />
            <p className="mb-6 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/50">
              🎨 Claude invents a one-of-a-kind theme for your form based on what
              you describe — colors, style, and all. No two are alike.
            </p>

            {/* API key field — only when the server has no key configured */}
            {hasEnvKey === false && (
              <div className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
                <label className="mb-1 block text-sm font-semibold text-amber-200">
                  🔑 Anthropic API key
                </label>
                <p className="mb-3 text-xs text-amber-200/70">
                  No server key detected. Paste your key to generate with Claude —
                  it&apos;s sent only with this request and kept in your browser
                  session, never stored on the server. Leave blank for a basic
                  template.
                </p>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => onApiKeyChange(e.target.value)}
                  placeholder="sk-ant-..."
                  autoComplete="off"
                  spellCheck={false}
                  className="w-full rounded-lg border border-white/15 bg-[#0b0e14] px-4 py-2.5 font-mono text-sm text-white placeholder-white/30 outline-none focus:border-amber-400/60"
                />
                <a
                  href="https://console.anthropic.com/settings/keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-amber-300/80 underline hover:text-amber-200"
                >
                  Get an API key ↗
                </a>
              </div>
            )}

            {error && (
              <p className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm text-red-300">
                {error}
              </p>
            )}

            <button
              onClick={generate}
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-orange-400 px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Generating your form…
                </>
              ) : (
                <>✨ Generate my form</>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-white/40">
              Claude picks the fields, copy, and (optionally) the theme. You can
              tweak everything after.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

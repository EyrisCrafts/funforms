"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormStore } from "@/lib/store";
import { getTemplate } from "@/lib/templates";
import FormRenderer from "@/components/FormRenderer";

export default function ViewClient({ id }: { id: string }) {
  const ensure = useFormStore((s) => s.ensure);
  const stored = useFormStore((s) => s.forms[id]);
  const [note, setNote] = useState<string | null>(null);

  const [bare, setBare] = useState(false);

  useEffect(() => {
    ensure(id);
    try {
      if (new URLSearchParams(location.search).get("bare") === "1") setBare(true);
      const n = sessionStorage.getItem("formify:note");
      if (n) {
        setNote(n);
        sessionStorage.removeItem("formify:note");
      }
    } catch {
      /* ignore */
    }
  }, [id, ensure]);

  // Fall back to the shipped default if the store hasn't hydrated yet.
  const form = stored ?? getTemplate(id);

  // A custom (AI-generated) form only lives in memory — if it isn't in the
  // store (e.g. after a hard refresh) there's nothing to show.
  if (!form) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0b0e14] px-6 text-center text-white">
        <p className="text-2xl font-semibold">This form isn&apos;t available</p>
        <p className="max-w-md text-white/60">
          Custom forms are generated in your browser session and aren&apos;t
          saved. Generate a fresh one to try it out.
        </p>
        <Link
          href="/create"
          className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition-transform hover:scale-105"
        >
          ✨ Create a new form
        </Link>
      </div>
    );
  }

  // Bare mode (?bare=1): just the form, no chrome — used for clean captures.
  if (bare) {
    return (
      <div className="min-h-screen">
        <FormRenderer form={form} mode="fill" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0e14]">
      <header className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <Link href="/" className="text-sm text-white/60 hover:text-white">
          ← Home
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm text-white/50">Live form</span>
          <Link
            href={`/builder/${id}`}
            className="flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            ✎ Edit
          </Link>
        </div>
      </header>
      {note && (
        <p className="bg-amber-500/15 px-5 py-2 text-center text-sm text-amber-200">
          {note}
        </p>
      )}
      <FormRenderer form={form} mode="fill" />
    </div>
  );
}

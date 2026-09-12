"use client";

import { useState } from "react";
import { FormField, FormTemplate } from "@/lib/types";
import { THEME_STYLES } from "@/lib/themes";
import SvgBackground from "./decorations/SvgBackground";
import HeaderGraphic from "./decorations/HeaderGraphic";
import FallingLeaves from "./decorations/FallingLeaves";
import NerdyDoodles from "./decorations/NerdyDoodles";
import TerminalIntro from "./decorations/TerminalIntro";
import Starfield from "./decorations/Starfield";
import Bubbles from "./decorations/Bubbles";
import NeonGrid from "./decorations/NeonGrid";
import ComicBursts from "./decorations/ComicBursts";
import Snow from "./decorations/Snow";
import Confetti from "./decorations/Confetti";
import FloatingHearts from "./decorations/FloatingHearts";
import DustMotes from "./decorations/DustMotes";
import NoirAmbient from "./decorations/NoirAmbient";

interface Props {
  form: FormTemplate;
  /** "fill" makes inputs interactive & submit works; "preview" is display-only. */
  mode: "fill" | "preview";
}

export default function ThemedForm({ form, mode }: Props) {
  const s = THEME_STYLES[form.theme];
  const [values, setValues] = useState<Record<string, string | boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const sharp =
    form.theme === "retro" || form.theme === "western" || form.theme === "noir";
  const inputRounding = sharp ? "rounded-none" : "rounded-md";
  const cardRounding = sharp ? "rounded-none" : "rounded-2xl";

  function set(id: string, v: string | boolean) {
    setValues((prev) => ({ ...prev, [id]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (mode === "fill") setSubmitted(true);
  }

  // Variant art index derived from the id suffix (base=0, `-2`=1, `-3`=2).
  const art = form.id.endsWith("-2") ? 1 : form.id.endsWith("-3") ? 2 : 0;

  return (
    <div
      className={`relative w-full overflow-hidden ${s.pageBg} px-4 py-14 ${
        mode === "preview" ? "min-h-[1100px]" : "min-h-screen"
      }`}
    >
      {/* Toggleable decorative SVG background (varies per variant) */}
      {form.showSvgBackground && <SvgBackground theme={form.theme} art={art} />}
      {/* Theme ambient animations */}
      {form.theme === "autumn" && <FallingLeaves />}
      {form.theme === "nerdy" && <NerdyDoodles />}
      {form.theme === "cosmic" && <Starfield />}
      {form.theme === "ocean" && <Bubbles />}
      {form.theme === "neon" && <NeonGrid />}
      {form.theme === "comic" && <ComicBursts />}
      {form.theme === "winter" && <Snow />}
      {form.theme === "birthday" && <Confetti />}
      {form.theme === "kawaii" && <FloatingHearts />}
      {form.theme === "western" && <DustMotes />}
      {form.theme === "noir" && <NoirAmbient />}

      <div className="relative z-10 mx-auto max-w-xl">
        {/* Toggleable header graphic on top of the card */}
        {form.showHeaderGraphic && form.theme === "retro" && (
          <HeaderGraphic theme={form.theme} art={art} />
        )}

        <form
          onSubmit={onSubmit}
          className={`theme-scroll relative ${cardRounding} ${s.card} px-6 py-8 md:px-10`}
        >
          {form.showHeaderGraphic && form.theme !== "retro" && (
            <HeaderGraphic theme={form.theme} art={art} />
          )}

          {form.theme === "terminal" && <TerminalIntro />}

          <h1 className={`${s.title} mb-2 text-center`}>{form.title}</h1>
          <p className={`${s.description} mb-8 text-center`}>{form.description}</p>

          {submitted ? (
            <SuccessMessage form={form} onReset={() => setSubmitted(false)} />
          ) : (
            <div className="space-y-6">
              {form.fields.map((field) => (
                <Field
                  key={field.id}
                  field={field}
                  theme={form.theme}
                  inputClass={`${s.input} ${inputRounding} w-full px-3 py-2`}
                  labelClass={s.fieldLabel}
                  value={values[field.id]}
                  disabled={mode === "preview"}
                  onChange={(v) => set(field.id, v)}
                />
              ))}

              <button
                type="submit"
                className={`${s.button} ${inputRounding} mt-2 w-full px-6 py-3`}
              >
                {form.submitLabel}
              </button>

              {mode === "preview" && (
                <p className="text-center text-xs opacity-60">
                  Preview only — try the live version from the “Fill out” view.
                </p>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function SuccessMessage({
  form,
  onReset,
}: {
  form: FormTemplate;
  onReset: () => void;
}) {
  const s = THEME_STYLES[form.theme];
  const msg: Record<string, string> = {
    retro: "★ QUEST ACCEPTED ★",
    terminal: "[ OK ] access_granted — welcome, operator.",
    autumn: "See you at the gathering! 🍂",
    nerdy: "Hypothesis received. Peer review pending ✎",
    neon: "YOU'RE ON THE LIST ✦",
    cosmic: "Application launched 🚀 — see you at the stars.",
    ocean: "Dive booked! 🐠 Gear up.",
    comic: "KABOOM! You're registered, hero!",
    winter: "You're on the list! ❄ Stay warm.",
    birthday: "Woohoo! 🎉 See you at the party!",
    kawaii: "Yay! ♡ Welcome to the cute club~",
    western: "Yeehaw! You're in the posse, partner.",
    noir: "Report filed. We'll be in touch, kid.",
  };
  return (
    <div className="animate-float-up py-10 text-center">
      <p className={`${s.title} mb-4`}>{msg[form.theme]}</p>
      <p className={`${s.description} mb-8`}>Your response was captured (in memory).</p>
      <button
        onClick={onReset}
        className={`${s.button} ${form.theme === "retro" ? "rounded-none" : "rounded-md"} px-6 py-2`}
      >
        Fill again
      </button>
    </div>
  );
}

function Field({
  field,
  theme,
  inputClass,
  labelClass,
  value,
  disabled,
  onChange,
}: {
  field: FormField;
  theme: string;
  inputClass: string;
  labelClass: string;
  value: string | boolean | undefined;
  disabled: boolean;
  onChange: (v: string | boolean) => void;
}) {
  const req = field.required ? <span className="text-red-400"> *</span> : null;

  const labelPrefix = theme === "terminal" ? "> " : "";

  if (field.type === "checkbox") {
    return (
      <label className={`flex cursor-pointer items-center gap-3 ${labelClass}`}>
        <input
          type="checkbox"
          checked={Boolean(value)}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className="h-5 w-5 accent-current"
        />
        {labelPrefix}
        {field.label}
        {req}
      </label>
    );
  }

  return (
    <div>
      <label className={`mb-2 block ${labelClass}`}>
        {labelPrefix}
        {field.label}
        {req}
      </label>

      {field.type === "textarea" && (
        <textarea
          className={`${inputClass} min-h-[96px] resize-y`}
          placeholder={field.placeholder}
          required={field.required}
          disabled={disabled}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {field.type === "select" && (
        <select
          className={inputClass}
          required={field.required}
          disabled={disabled}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">— choose —</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      )}

      {field.type === "radio" && (
        <div className="space-y-2">
          {field.options?.map((o) => (
            <label key={o} className={`flex cursor-pointer items-center gap-2 ${labelClass}`}>
              <input
                type="radio"
                name={field.id}
                value={o}
                disabled={disabled}
                checked={value === o}
                onChange={() => onChange(o)}
                className="h-4 w-4 accent-current"
              />
              {o}
            </label>
          ))}
        </div>
      )}

      {["text", "email", "number", "date"].includes(field.type) && (
        <input
          type={field.type}
          className={inputClass}
          placeholder={field.placeholder}
          required={field.required}
          disabled={disabled}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}

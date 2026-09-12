"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useFormStore } from "@/lib/store";
import { FieldType, FormField } from "@/lib/types";
import { THEME_STYLES } from "@/lib/themes";
import FormRenderer from "@/components/FormRenderer";

const FIELD_TYPES: FieldType[] = [
  "text",
  "email",
  "number",
  "textarea",
  "select",
  "radio",
  "checkbox",
  "date",
];

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export default function BuilderClient({ id }: { id: string }) {
  const ensure = useFormStore((s) => s.ensure);
  const reset = useFormStore((s) => s.reset);
  const setForm = useFormStore((s) => s.setForm);
  const form = useFormStore((s) => s.forms[id]);

  useEffect(() => {
    ensure(id);
  }, [id, ensure]);

  if (!form) {
    // A custom form that isn't in the in-memory store (e.g. after a refresh)
    // can't be recovered — send the user to generate a new one.
    if (id.startsWith("custom-")) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0b0e14] px-6 text-center text-white">
          <p className="text-2xl font-semibold">This form isn&apos;t available</p>
          <p className="max-w-md text-white/60">
            Custom forms live in your browser session and aren&apos;t saved.
            Generate a fresh one to keep editing.
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
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b0e14] text-white">
        Loading builder…
      </div>
    );
  }

  const isCustom = Boolean(form.customTheme);
  const accent = isCustom ? form.customTheme!.accent : THEME_STYLES[form.theme].accent;
  const themeLabel = isCustom
    ? `✨ ${form.customTheme!.name}`
    : THEME_STYLES[form.theme].label;
  const hasHeaderGraphic = isCustom || form.theme !== "terminal";

  const patch = (partial: Partial<typeof form>) =>
    setForm(id, { ...form, ...partial });

  const patchField = (fieldId: string, partial: Partial<FormField>) =>
    patch({
      fields: form.fields.map((f) =>
        f.id === fieldId ? { ...f, ...partial } : f
      ),
    });

  const addField = () =>
    patch({
      fields: [
        ...form.fields,
        { id: uid(), type: "text", label: "New field", placeholder: "" },
      ],
    });

  const removeField = (fieldId: string) =>
    patch({ fields: form.fields.filter((f) => f.id !== fieldId) });

  const moveField = (index: number, dir: -1 | 1) => {
    const next = [...form.fields];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    patch({ fields: next });
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#0b0e14]/90 px-5 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm text-white/60 hover:text-white">
            ← Home
          </Link>
          <span className="text-white/20">/</span>
          <span className="flex items-center gap-2 text-sm">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: accent }}
            />
            Editing <strong>{form.name}</strong>
            <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-white/60">
              {themeLabel}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => reset(id)}
            className="rounded-lg border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10"
          >
            Reset
          </button>
          <Link
            href={`/view/${id}`}
            className="rounded-lg bg-white px-4 py-1.5 text-sm font-medium text-black hover:bg-white/90"
          >
            Fill out →
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
        {/* Editor panel */}
        <aside className="max-h-[calc(100vh-57px)] overflow-y-auto border-r border-white/10 p-5 lg:sticky lg:top-[57px]">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
            Theme is fixed — edit the content
          </p>

          {/* Form meta */}
          <Section title="Form details">
            <TextInput
              label="Title"
              value={form.title}
              onChange={(v) => patch({ title: v })}
            />
            <TextInput
              label="Description"
              value={form.description}
              onChange={(v) => patch({ description: v })}
            />
            <TextInput
              label="Submit button label"
              value={form.submitLabel}
              onChange={(v) => patch({ submitLabel: v })}
            />
          </Section>

          {/* Decoration toggles */}
          <Section title="Decorations">
            <Toggle
              label="SVG background behind form"
              checked={form.showSvgBackground}
              onChange={(v) => patch({ showSvgBackground: v })}
            />
            <Toggle
              label={
                hasHeaderGraphic
                  ? "Header graphic on top of form"
                  : "Header graphic (n/a for terminal)"
              }
              checked={form.showHeaderGraphic && hasHeaderGraphic}
              disabled={!hasHeaderGraphic}
              onChange={(v) => patch({ showHeaderGraphic: v })}
            />
          </Section>

          {/* Fields */}
          <Section title={`Fields (${form.fields.length})`}>
            <div className="space-y-3">
              {form.fields.map((field, i) => (
                <FieldEditor
                  key={field.id}
                  field={field}
                  index={i}
                  total={form.fields.length}
                  onChange={(p) => patchField(field.id, p)}
                  onRemove={() => removeField(field.id)}
                  onMove={(dir) => moveField(i, dir)}
                />
              ))}
            </div>
            <button
              onClick={addField}
              className="mt-3 w-full rounded-lg border border-dashed border-white/25 py-2 text-sm text-white/70 hover:bg-white/5"
            >
              + Add field
            </button>
          </Section>
        </aside>

        {/* Live preview */}
        <div className="overflow-hidden">
          <FormRenderer form={form} mode="preview" />
        </div>
      </div>
    </div>
  );
}

/* ---------- small editor primitives ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 text-sm font-semibold text-white/80">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-white/50">{label}</span>
      <input
        className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function Toggle({
  label,
  checked,
  onChange,
  disabled,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <label
      className={`flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm ${
        disabled ? "opacity-40" : "cursor-pointer"
      }`}
    >
      <span className="text-white/80">{label}</span>
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-emerald-500" : "bg-white/20"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
    </label>
  );
}

function FieldEditor({
  field,
  index,
  total,
  onChange,
  onRemove,
  onMove,
}: {
  field: FormField;
  index: number;
  total: number;
  onChange: (p: Partial<FormField>) => void;
  onRemove: () => void;
  onMove: (dir: -1 | 1) => void;
}) {
  const needsOptions = field.type === "select" || field.type === "radio";
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs text-white/40">#{index + 1}</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onMove(-1)}
            disabled={index === 0}
            className="rounded px-1.5 text-white/50 hover:bg-white/10 disabled:opacity-20"
            title="Move up"
          >
            ↑
          </button>
          <button
            onClick={() => onMove(1)}
            disabled={index === total - 1}
            className="rounded px-1.5 text-white/50 hover:bg-white/10 disabled:opacity-20"
            title="Move down"
          >
            ↓
          </button>
          <button
            onClick={onRemove}
            className="rounded px-1.5 text-red-400 hover:bg-red-500/10"
            title="Remove"
          >
            ✕
          </button>
        </div>
      </div>

      <input
        className="mb-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
        value={field.label}
        placeholder="Label"
        onChange={(e) => onChange({ label: e.target.value })}
      />

      <div className="mb-2 flex gap-2">
        <select
          className="flex-1 rounded-lg border border-white/15 bg-[#0b0e14] px-2 py-2 text-sm text-white outline-none focus:border-white/40"
          value={field.type}
          onChange={(e) => onChange({ type: e.target.value as FieldType })}
        >
          {FIELD_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <label className="flex items-center gap-1.5 text-xs text-white/60">
          <input
            type="checkbox"
            checked={Boolean(field.required)}
            onChange={(e) => onChange({ required: e.target.checked })}
          />
          required
        </label>
      </div>

      {(field.type === "text" ||
        field.type === "email" ||
        field.type === "number" ||
        field.type === "textarea") && (
        <input
          className="mb-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
          value={field.placeholder ?? ""}
          placeholder="Placeholder text"
          onChange={(e) => onChange({ placeholder: e.target.value })}
        />
      )}

      {needsOptions && (
        <input
          className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-white/40"
          value={(field.options ?? []).join(", ")}
          placeholder="Options, comma separated"
          onChange={(e) =>
            onChange({
              options: e.target.value
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean),
            })
          }
        />
      )}
    </div>
  );
}

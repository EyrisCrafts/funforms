"use client";

import { create } from "zustand";
import { FormTemplate } from "./types";
import { getTemplate } from "./templates";

interface FormStore {
  /** Working copies of each template, keyed by id. Edits live here only in memory. */
  forms: Record<string, FormTemplate>;
  /** Ensure a working copy exists (seeded from the default template). */
  ensure: (id: string) => void;
  /** Replace the whole working copy for an id. */
  setForm: (id: string, form: FormTemplate) => void;
  /** Reset a form back to its shipped default. */
  reset: (id: string) => void;
}

function clone(t: FormTemplate): FormTemplate {
  return JSON.parse(JSON.stringify(t));
}

export const useFormStore = create<FormStore>((set, get) => ({
  forms: {},
  ensure: (id) => {
    if (get().forms[id]) return;
    const base = getTemplate(id);
    if (!base) return;
    set((s) => ({ forms: { ...s.forms, [id]: clone(base) } }));
  },
  setForm: (id, form) =>
    set((s) => ({ forms: { ...s.forms, [id]: form } })),
  reset: (id) => {
    const base = getTemplate(id);
    if (!base) return;
    set((s) => ({ forms: { ...s.forms, [id]: clone(base) } }));
  },
}));

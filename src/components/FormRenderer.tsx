"use client";

import { FormTemplate } from "@/lib/types";
import ThemedForm from "./ThemedForm";
import CustomThemedForm from "./CustomThemedForm";

/** Chooses the built-in themed renderer or the Claude-generated theme renderer. */
export default function FormRenderer({
  form,
  mode,
}: {
  form: FormTemplate;
  mode: "fill" | "preview";
}) {
  if (form.customTheme) return <CustomThemedForm form={form} mode={mode} />;
  return <ThemedForm form={form} mode={mode} />;
}

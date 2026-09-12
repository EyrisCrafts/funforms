import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { FieldType, FormField, FormTemplate, GeneratedTheme } from "@/lib/types";

export const runtime = "nodejs";

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

const FONTS: GeneratedTheme["font"][] = ["sans", "serif", "mono", "rounded"];
const RADII: GeneratedTheme["radius"][] = ["sharp", "soft", "round"];
const BACKDROPS: GeneratedTheme["backdrop"][] = [
  "dots",
  "grid",
  "waves",
  "rays",
  "stars",
  "confetti",
  "none",
];

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

/** Accept a hex/rgb/hsl color string, else fall back. */
function color(v: unknown, fallback: string): string {
  if (typeof v === "string") {
    const s = v.trim();
    if (/^#([0-9a-fA-F]{3,8})$/.test(s) || /^(rgb|hsl)a?\(/i.test(s)) return s;
  }
  return fallback;
}

function str(v: unknown, fallback: string, max = 80): string {
  return typeof v === "string" && v.trim() ? v.trim().slice(0, max) : fallback;
}

const DEFAULT_THEME: GeneratedTheme = {
  name: "Fresh",
  emoji: "📝",
  font: "sans",
  radius: "soft",
  backdrop: "dots",
  pageFrom: "#6366f1",
  pageTo: "#8b5cf6",
  cardBg: "#ffffff",
  cardBorder: "#e5e7eb",
  text: "#1f2937",
  title: "#4f46e5",
  muted: "#6b7280",
  accent: "#6366f1",
  accentText: "#ffffff",
  inputBg: "#f9fafb",
  inputBorder: "#d1d5db",
};

interface GenBody {
  formType?: string;
  details?: string;
  apiKey?: string;
}

interface GeneratedForm {
  theme?: Partial<GeneratedTheme>;
  title?: string;
  description?: string;
  submitLabel?: string;
  fields?: Array<{
    type: FieldType;
    label: string;
    placeholder?: string;
    required?: boolean;
    options?: string[];
  }>;
}

function sanitizeTheme(th: Partial<GeneratedTheme> = {}): GeneratedTheme {
  const d = DEFAULT_THEME;
  return {
    name: str(th.name, d.name, 40),
    emoji: str(th.emoji, d.emoji, 8),
    font: FONTS.includes(th.font as GeneratedTheme["font"])
      ? (th.font as GeneratedTheme["font"])
      : d.font,
    radius: RADII.includes(th.radius as GeneratedTheme["radius"])
      ? (th.radius as GeneratedTheme["radius"])
      : d.radius,
    backdrop: BACKDROPS.includes(th.backdrop as GeneratedTheme["backdrop"])
      ? (th.backdrop as GeneratedTheme["backdrop"])
      : d.backdrop,
    pageFrom: color(th.pageFrom, d.pageFrom),
    pageTo: color(th.pageTo, d.pageTo),
    cardBg: color(th.cardBg, d.cardBg),
    cardBorder: color(th.cardBorder, d.cardBorder),
    text: color(th.text, d.text),
    title: color(th.title, d.title),
    muted: color(th.muted, d.muted),
    accent: color(th.accent, d.accent),
    accentText: color(th.accentText, d.accentText),
    inputBg: color(th.inputBg, d.inputBg),
    inputBorder: color(th.inputBorder, d.inputBorder),
  };
}

function fallbackFields(formType: string): FormField[] {
  return [
    { id: uid(), type: "text", label: "Your name", placeholder: "Jane Doe", required: true },
    { id: uid(), type: "email", label: "Email", placeholder: "jane@example.com", required: true },
    {
      id: uid(),
      type: "textarea",
      label: formType === "survey" ? "Your feedback" : "Additional details",
      placeholder: "Tell us more...",
    },
  ];
}

function assemble(gen: GeneratedForm, formType: string): FormTemplate {
  const customTheme = sanitizeTheme(gen.theme);
  const fields: FormField[] = (gen.fields || [])
    .slice(0, 10)
    .map((f) => {
      const type: FieldType = FIELD_TYPES.includes(f.type) ? f.type : "text";
      const field: FormField = {
        id: uid(),
        type,
        label: f.label?.slice(0, 80) || "Field",
      };
      if (f.placeholder) field.placeholder = f.placeholder.slice(0, 80);
      if (f.required) field.required = true;
      if ((type === "select" || type === "radio") && Array.isArray(f.options)) {
        field.options = f.options.slice(0, 8).map((o) => String(o).slice(0, 60));
      }
      return field;
    });

  return {
    id: `custom-${Date.now().toString(36)}-${uid()}`,
    theme: "nerdy", // placeholder; ignored because customTheme is set
    customTheme,
    name: str(gen.title, customTheme.name, 40),
    tagline: `AI-generated ${formType} form`,
    title: str(gen.title, "Untitled form"),
    description: str(gen.description, "", 160),
    submitLabel: str(gen.submitLabel, "Submit", 40),
    fields: fields.length ? fields : fallbackFields(formType),
    showSvgBackground: true,
    showHeaderGraphic: true,
  };
}

/** Used when no API key is configured. */
function fallbackTemplate(body: GenBody): FormTemplate {
  const formType = body.formType || "event";
  const details = (body.details || "").trim();
  return {
    id: `custom-${Date.now().toString(36)}-${uid()}`,
    theme: "nerdy",
    customTheme: { ...DEFAULT_THEME },
    name: details ? details.slice(0, 40) : `New ${formType}`,
    tagline: `A ${formType} form`,
    title: details ? details.slice(0, 60) : `New ${formType}`,
    description: `Fill out this ${formType} form.`,
    submitLabel: "Submit",
    fields: fallbackFields(formType),
    showSvgBackground: true,
    showHeaderGraphic: true,
  };
}

/** Lets the client know whether a server key is configured. */
export async function GET() {
  return NextResponse.json({ hasKey: Boolean(process.env.ANTHROPIC_API_KEY) });
}

export async function POST(request: Request) {
  let body: GenBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const formType = (body.formType || "event").toString();
  const details = (body.details || "").toString().slice(0, 800);

  const apiKey =
    process.env.ANTHROPIC_API_KEY || body.apiKey?.trim() || undefined;

  if (!apiKey) {
    return NextResponse.json({
      form: fallbackTemplate(body),
      generatedBy: "fallback",
      note: "No API key provided — showing a basic template. Add your Anthropic API key to generate with Claude.",
    });
  }

  const client = new Anthropic({ apiKey });

  try {
    const response = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 1600,
      thinking: { type: "disabled" },
      output_config: { effort: "low" },
      system:
        "You design short, delightful web forms AND invent a unique visual theme for each one, inspired by the described event. Never reuse a generic or well-known named theme — create a fresh palette that fits the specific vibe. For the form: a punchy title, a one-line description, a fun submit-button label, and 3–6 well-chosen fields (short labels; only use select/radio options when they make sense). For the theme: pick a cohesive color palette as hex values with STRONG contrast — the card text/title/muted colors must be clearly readable on the card background (dark text on a light card, or light text on a dark card). Choose a font style, corner radius, a decorative backdrop, and a single emoji that represents the event.",
      tools: [
        {
          name: "build_form",
          description: "Return the generated form and its invented theme.",
          strict: true,
          input_schema: {
            type: "object",
            additionalProperties: false,
            required: ["theme", "title", "description", "submitLabel", "fields"],
            properties: {
              theme: {
                type: "object",
                additionalProperties: false,
                required: [
                  "name",
                  "emoji",
                  "font",
                  "radius",
                  "backdrop",
                  "pageFrom",
                  "pageTo",
                  "cardBg",
                  "cardBorder",
                  "text",
                  "title",
                  "muted",
                  "accent",
                  "accentText",
                  "inputBg",
                  "inputBorder",
                ],
                properties: {
                  name: { type: "string", description: "Invented theme name" },
                  emoji: { type: "string" },
                  font: { type: "string", enum: FONTS },
                  radius: { type: "string", enum: RADII },
                  backdrop: { type: "string", enum: BACKDROPS },
                  pageFrom: { type: "string", description: "Hex, page gradient start" },
                  pageTo: { type: "string", description: "Hex, page gradient end" },
                  cardBg: { type: "string", description: "Hex, form card background" },
                  cardBorder: { type: "string" },
                  text: { type: "string", description: "Hex, main text on card" },
                  title: { type: "string", description: "Hex, title text" },
                  muted: { type: "string", description: "Hex, labels/description" },
                  accent: { type: "string", description: "Hex, buttons & highlights" },
                  accentText: { type: "string", description: "Hex, text on accent button" },
                  inputBg: { type: "string" },
                  inputBorder: { type: "string" },
                },
              },
              title: { type: "string" },
              description: { type: "string" },
              submitLabel: { type: "string" },
              fields: {
                type: "array",
                items: {
                  type: "object",
                  additionalProperties: false,
                  required: ["type", "label"],
                  properties: {
                    type: { type: "string", enum: FIELD_TYPES },
                    label: { type: "string" },
                    placeholder: { type: "string" },
                    required: { type: "boolean" },
                    options: { type: "array", items: { type: "string" } },
                  },
                },
              },
            },
          },
        },
      ],
      tool_choice: { type: "tool", name: "build_form" },
      messages: [
        {
          role: "user",
          content: `Form type: ${formType}\nWhat it's for: ${details || "(no extra details provided)"}\n\nInvent a fresh theme that fits this and design the form.`,
        },
      ],
    });

    const toolUse = response.content.find((b) => b.type === "tool_use");
    if (!toolUse || toolUse.type !== "tool_use") {
      throw new Error("Model did not return a form");
    }

    const gen = toolUse.input as GeneratedForm;
    return NextResponse.json({
      form: assemble(gen, formType),
      generatedBy: "claude",
    });
  } catch (err) {
    const message =
      err instanceof Anthropic.APIError
        ? `Claude API error (${err.status}): ${err.message}`
        : err instanceof Error
          ? err.message
          : "Unknown error";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

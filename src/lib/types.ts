export type ThemeId =
  | "retro"
  | "terminal"
  | "autumn"
  | "nerdy"
  | "neon"
  | "cosmic"
  | "ocean"
  | "comic"
  | "winter"
  | "birthday"
  | "kawaii"
  | "western"
  | "noir";

export type FieldType =
  | "text"
  | "email"
  | "number"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox"
  | "date";

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  /** For select / radio */
  options?: string[];
}

/**
 * A theme invented by Claude for a custom form — design tokens rendered with
 * inline CSS variables (not one of the built-in ThemeIds).
 */
export interface GeneratedTheme {
  /** A short invented name for the theme, e.g. "Midnight Jazz". */
  name: string;
  /** A single emoji that represents the event. */
  emoji: string;
  font: "sans" | "serif" | "mono" | "rounded";
  radius: "sharp" | "soft" | "round";
  backdrop: "dots" | "grid" | "waves" | "rays" | "stars" | "confetti" | "none";
  /** Hex colors. */
  pageFrom: string;
  pageTo: string;
  cardBg: string;
  cardBorder: string;
  text: string;
  title: string;
  muted: string;
  accent: string;
  accentText: string;
  inputBg: string;
  inputBorder: string;
}

export interface FormTemplate {
  id: string;
  /** Built-in theme id. Ignored when `customTheme` is present. */
  theme: ThemeId;
  /** When set, this form uses a Claude-generated theme instead of a built-in. */
  customTheme?: GeneratedTheme;
  /** Short name shown on the home page card */
  name: string;
  /** One-line pitch for the home page */
  tagline: string;
  /** Title rendered at the top of the actual form */
  title: string;
  /** Sub-title / description rendered under the form title */
  description: string;
  /** Text on the submit button */
  submitLabel: string;
  fields: FormField[];
  /** Whether the decorative SVG background sits behind the form card */
  showSvgBackground: boolean;
  /** Whether the header graphic sits on top of the form card */
  showHeaderGraphic: boolean;
}

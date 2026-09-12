import { notFound } from "next/navigation";
import { getTemplate } from "@/lib/templates";
import ViewClient from "./ViewClient";

export default async function ViewPage({
  params,
}: {
  params: Promise<{ templateId: string }>;
}) {
  const { templateId } = await params;
  // Custom (AI-generated) forms live in the in-memory store, not in TEMPLATES.
  if (!getTemplate(templateId) && !templateId.startsWith("custom-")) notFound();
  return <ViewClient id={templateId} />;
}

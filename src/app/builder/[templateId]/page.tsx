import { notFound } from "next/navigation";
import { getTemplate } from "@/lib/templates";
import BuilderClient from "./BuilderClient";

export default async function BuilderPage({
  params,
}: {
  params: Promise<{ templateId: string }>;
}) {
  const { templateId } = await params;
  if (!getTemplate(templateId) && !templateId.startsWith("custom-")) notFound();
  return <BuilderClient id={templateId} />;
}

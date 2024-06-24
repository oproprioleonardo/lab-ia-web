"use server";

import { AssistantServiceFactory } from "@/services/assistant.service";

export async function createDAI(
  formData: FormData
): Promise<{ error: string } | { apiKey: string }> {
  const assistantService = AssistantServiceFactory.create();
  const assistantResp = await assistantService.create({
    rag: formData.get("behavior_file") as File,
    prompt: formData.get("knowledge_file") as File,
  });

  if ("error" in assistantResp) return assistantResp;
  const apiKey = assistantResp.api_key;
  return { apiKey };
}

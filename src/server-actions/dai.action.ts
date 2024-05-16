"use server";

import { AssistantServiceFactory } from "@/services/assistant.service";

export async function createDAI(
  formData: FormData
): Promise<{ error: string } | { apiKey: string }> {
  const assistantService = AssistantServiceFactory.create();
  const assistantResp = await assistantService.create({});

  if ("error" in assistantResp) return assistantResp;

  const assistantId = assistantResp.id;
  const apiKey = assistantResp.token;
  const behaviorDocumentResp = await assistantService.attachDocument({
    assistantId,
    file: formData.get("behavior_file") as File,
    type: "RAG",
  });

  if ("error" in behaviorDocumentResp) return behaviorDocumentResp;

  const knowledgeDocumentResp = await assistantService.attachDocument({
    assistantId,
    file: formData.get("knowledge_file") as File,
    type: "PROMPT",
  });

  if ("error" in knowledgeDocumentResp) return knowledgeDocumentResp;
  return { apiKey };
}

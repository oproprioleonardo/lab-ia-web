import { Assistant } from "@/models";
import { AuthService } from "./auth.service";

export class AssistantService {
  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async create(data: {
    name?: string;
    owner_id?: string;
  }): Promise<{ error: string } | { id: string; token: string }> {
    const session = await this.authService.getSession();
    if (!session) return { error: "Você não está autenticado" };
    if (!data.owner_id) data.owner_id = session.user.id;
    if (!data.name) data.name = "Assistente de " + session.user.name;

    const response = await fetch(`${process.env.API_BASE_URL}/assistants/add`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await this.authService.getToken()}`,
      },
    });

    if (response.status === 401) return { error: "Você não está autenticado" };
    if (response.status === 403) return { error: "Você não tem permissão" };
    if (response.status !== 201) return { error: "Erro ao criar o assistente" };

    return await response.json();
  }

  async attachDocument(data: {
    file: File;
    assistantId: string;
    type: string;
    createdAt?: string;
  }) {
    data.createdAt = new Date().toISOString();
    const formData = new FormData();

    formData.append("assistant_id", data.assistantId);
    formData.append("file", data.file);
    formData.append("type", data.type);
    formData.append("createdAt", data.createdAt);

    const response = await fetch(`${process.env.API_BASE_URL}/documents/add`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${await this.authService.getToken()}`,
      },
    });

    if (response.status === 401) return { error: "Você não está autenticado" };
    if (response.status === 403) return { error: "Você não tem permissão" };
    if (response.status !== 201) return { error: "Erro ao enviar o documento" };

    return await response.json();
  }

  async get(id: string): Promise<{ error: string } | Assistant> {
    const response = await fetch(
      `${process.env.API_BASE_URL}/assistants/${id}`,
      {
        headers: {
          Authorization: `Bearer ${await this.authService.getToken()}`,
        },
      }
    );

    if (response.status === 401) return { error: "Você não está autenticado" };
    if (response.status === 403) return { error: "Você não tem permissão" };
    if (response.status !== 200)
      return { error: "Erro ao buscar o assistente" };

    const data = await response.json();
    return {
      id: data._id,
      name: data.name,
      company: data.company,
      createdAt: new Date(data.createdAt),
    };
  }
}

export class AssistantServiceFactory {
  private static assistantService: AssistantService;

  static create() {
    if (!this.assistantService) {
      this.assistantService = new AssistantService(new AuthService());
    }
    return this.assistantService;
  }
}

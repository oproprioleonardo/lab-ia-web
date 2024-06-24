import { Assistant } from "@/models";
import { AuthService } from "./auth.service";

export class AssistantService {
  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async create(data: {
    name?: string;
    rag: File;
    prompt: File;
  }): Promise<{ error: string } | { id: string; api_key: string }> {
    const session = await this.authService.getSession();
    if (!session) return { error: "Você não está autenticado" };
    if (!data.name) data.name = "Assistente de " + session.user.name;

    const ragBlob = new Blob([data.rag], { type: "application/pdf" });
    const promptBlob = new Blob([data.prompt], { type: "application/pdf" });

    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("rag", ragBlob, "file");
    formdata.append("prompt", promptBlob, "file");

    const response = await fetch(`${process.env.API_BASE_URL}/assistants`, {
      method: "POST",
      body: formdata,
      headers: {
        Authorization: `Bearer ${await this.authService.getToken()}`,
      },
    });

    const json = await response.json();

    if (response.status === 401) return { error: "Você não está autenticado" };
    if (response.status === 403) return { error: "Você não tem permissão" };
    if (response.status !== 200) return { error: json.error.message };

    return json;
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

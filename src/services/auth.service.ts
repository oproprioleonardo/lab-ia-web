import { SessionData } from "@/models";
import { atob } from "buffer";
import { sealData, unsealData } from "iron-session";
import { cookies } from "next/headers";

export class AuthService {
  pass: string;

  constructor() {
    this.pass = process.env.IRON_SESSION_PASSWORD as string;
  }

  async login(input: { email: string; password: string }) {
    const response = await fetch(`${process.env.API_BASE_URL}/auth`, {
      method: "POST",
      body: JSON.stringify({
        email: input.email,
        password: input.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 401) return { error: "Credenciais inválidas" };
    if (response.status === 404) return { error: "Usuário não encontrado" };
    if (!response.ok) return { error: "Ocorre um erro interno" };

    const data = await response.json();
    const session: SessionData = {
      access_token: data.token,
      user: {
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
      },
    };
    await this.setSession(session);
  }

  async getSession() {
    const encryptedSession = cookies().get("auth_session")?.value;
    const session = encryptedSession
      ? ((await unsealData(encryptedSession, {
          password: this.pass,
        })) as string)
      : null;

    return session ? (JSON.parse(session) as SessionData) : null;
  }

  async setSession(session: SessionData) {
    const encryptedSession = await sealData(JSON.stringify(session), {
      password: this.pass,
    });

    cookies().set("auth_session", encryptedSession, {
      sameSite: "strict",
      httpOnly: true,
      expires: new Date(this.getExpiration(session.access_token)),
      // secure: true,
    });
  }

  async getToken() {
    const session = await this.getSession();
    return session?.access_token;
  }

  getExpiration(token: string | null = null) {
    if (!token) return 0;
    const [, payload] = token.split(".");
    const data = JSON.parse(atob(payload));
    return data.exp * 1000;
  }

  async logout() {
    cookies().delete("auth_session");
  }
}

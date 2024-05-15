"use server";

import { AuthService } from "@/services/auth.service";
import { redirect } from "next/navigation";

const pass = process.env.IRON_SESSION_PASSWORD as string;

export async function login(data: {
  email: string;
  password: string;
  redirect_to?: string;
}) {
  const email = data.email;
  const password = data.password;
  const redirect_to = data.redirect_to;
  const authService = new AuthService();
  const error = await authService.login({ email, password });
  if (error) {
    return error;
  }
  redirect(redirect_to || "/dai");
}

export async function logout() {
  const authService = new AuthService();
  await authService.logout();
  redirect("/sign-in");
}

"use server";

import { AuthService } from "@/services/auth.service";
import { redirect } from "next/navigation";

export async function login(data: { email: string; password: string; redirect_to?: string}) {
  const email = data.email;
  const password = data.password;
  const redirect_to = data.redirect_to;
  const authService = new AuthService();
  const error = await authService.login({ email, password });
  /*if (error) {
    return error;
  }*/
  redirect(redirect_to || "/dai");
}

export async function logoutAction() {
  const authService = new AuthService();
  authService.logout();
  redirect("/sign-in");
}

import { authRoutes, protectedRoutes } from "./router/routes";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentToken = request.cookies.get("token")?.value;
  const getExpiredAt = (token: string) => {
    const payloadBase64 = token.split(".")[1];
    const payloadDecoded = atob(payloadBase64);
    return JSON.parse(payloadDecoded).exp * 1000;
  };
  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    (!currentToken || Date.now() > getExpiredAt(currentToken))
  ) {
    request.cookies.delete("token");
    const response = NextResponse.redirect(new URL("/sign-in", request.url));
    response.cookies.delete("token");

    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && currentToken) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }
}

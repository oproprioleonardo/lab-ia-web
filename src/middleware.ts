import { authRoutes, protectedRoutes } from "./routes";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SessionData } from "./models";
import { unsealData } from "iron-session";

const getExpiration = (token: string | null = null) => {
  if (!token) return 0;
  const [, payload] = token.split(".");
  const data = JSON.parse(atob(payload));
  return data.exp * 1000;
}

const getSessionData = async (request: NextRequest) => {
  const encryptedSession = request.cookies.get("auth_session")?.value;
    const session = encryptedSession
    ? ((await unsealData(encryptedSession, {
        password: pass,
      })) as string)
    : null;

    return  session ? (JSON.parse(session) as SessionData) : null;
}

const pass = process.env.IRON_SESSION_PASSWORD as string;

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();

  const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(request.nextUrl.pathname);

  if (isProtectedRoute) {
    const sessionData = await getSessionData(request);
    sessionData?.access_token;
    const exp = getExpiration(sessionData?.access_token);
    const now = new Date().getTime();
    if (now > exp) {
      const resp = NextResponse.redirect(new URL("/auth/sign-in", request.nextUrl));
      resp.cookies.delete("auth_session");
      return resp;
    }
  }

  if (isAuthRoute) {
    if (request.cookies.has("auth_session")) {
      return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    }
  }

  return res;
}

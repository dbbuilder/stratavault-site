import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";
  // Extract subdomain: handles "app.stratavault.ai" → "app"
  // Also handles local dev "app.localhost:3000" → "app"
  const parts = hostname.split(".");
  const subdomain = parts.length >= 2 ? parts[0] : null;

  if (subdomain === "app") {
    const url = request.nextUrl.clone();
    const originalPath = url.pathname;
    url.pathname = originalPath === "/" ? "/app" : `/app${originalPath}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};

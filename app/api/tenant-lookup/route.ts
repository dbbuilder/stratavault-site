import { NextRequest, NextResponse } from "next/server";
import { resolveTenant } from "@/lib/tenants";

export async function POST(request: NextRequest) {
  let body: { identifier?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const identifier = typeof body.identifier === "string" ? body.identifier : "";
  if (!identifier.trim()) {
    return NextResponse.json({ error: "identifier required" }, { status: 400 });
  }

  const tenant = resolveTenant(identifier);
  if (!tenant) {
    return NextResponse.json({ error: "Tenant not found" }, { status: 404 });
  }

  return NextResponse.json({ tenantDomain: tenant.domain, displayName: tenant.displayName });
}

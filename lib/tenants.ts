export interface TenantEntry {
  slug: string;
  displayName: string;
  domain: string;
  emailDomains: string[];
  usernames?: string[];
}

export const TENANT_REGISTRY: TenantEntry[] = [
  {
    slug: "servicevision",
    displayName: "ServiceVision",
    domain: "servicevision.stratavault.ai",
    emailDomains: ["servicevision.net"],
    usernames: ["chris", "admin"],
  },
  {
    slug: "apex",
    displayName: "Apex Field Services",
    domain: "apex.stratavault.ai",
    emailDomains: ["apexfieldsvc.com"],
  },
  {
    slug: "capitalimpact",
    displayName: "Capital Impact",
    domain: "capitalimpact.stratavault.ai",
    emailDomains: ["capitalimpact.org"],
  },
];

/**
 * Resolve a tenant from an email address or username.
 * Returns the tenant entry or null if not found.
 */
export function resolveTenant(identifier: string): TenantEntry | null {
  const normalized = identifier.trim().toLowerCase();

  // Email-based lookup
  if (normalized.includes("@")) {
    const domain = normalized.split("@")[1];
    return (
      TENANT_REGISTRY.find((t) => t.emailDomains.includes(domain)) ?? null
    );
  }

  // Username-based lookup
  return (
    TENANT_REGISTRY.find((t) => t.usernames?.includes(normalized)) ?? null
  );
}

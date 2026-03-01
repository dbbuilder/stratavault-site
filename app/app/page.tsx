"use client";

import { useState, FormEvent } from "react";

export default function AppLoginHub() {
  const [identifier, setIdentifier] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/tenant-lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier }),
      });

      if (!res.ok) {
        setError(
          "We couldn't find your account. Contact your administrator at support@stratavault.ai"
        );
        return;
      }

      const data = await res.json();
      window.location.href = `https://${data.tenantDomain}`;
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#6366f1] text-3xl font-bold">⬡</span>
            <span className="text-xl font-semibold text-[#f8fafc] tracking-tight">
              Strata Vault
            </span>
          </div>
          <p className="text-[#94a3b8] text-sm">
            Enter your email or username to continue to your workspace.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-[#1e293b] bg-[#1e293b]/40 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="identifier"
                className="block text-sm font-medium text-[#cbd5e1] mb-2"
              >
                Email or username
              </label>
              <input
                id="identifier"
                type="text"
                autoComplete="email username"
                autoFocus
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="you@yourfirm.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0f172a] border border-[#334155] text-[#f8fafc] placeholder-[#475569] text-sm focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-colors"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !identifier.trim()}
              className="w-full py-3 rounded-lg bg-[#6366f1] text-white font-medium text-sm hover:bg-[#818cf8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Looking up your workspace…" : "Continue →"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-[#334155] mt-6">
          Need access?{" "}
          <a
            href="mailto:support@stratavault.ai"
            className="text-[#475569] hover:text-[#94a3b8] transition-colors"
          >
            Contact support@stratavault.ai
          </a>
        </p>
      </div>
    </div>
  );
}

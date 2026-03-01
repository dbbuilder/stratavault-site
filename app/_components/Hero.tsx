export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 overflow-hidden">
      {/* Engineering dot-grid background — fades toward edges */}
      <div className="absolute inset-0 bg-dot-grid-fade opacity-60 pointer-events-none" />

      {/* Faint horizontal scan-line texture */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      {/* Vertical accent line — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#6366f1]/20 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Eyebrow + badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 bg-[#6366f1]/40" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#6366f1]/40 bg-[#6366f1]/10 text-[#818cf8] text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse" />
            Now accepting direct clients &amp; consultant partners
          </div>
          <div className="h-px w-8 bg-[#6366f1]/40" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#f8fafc] leading-tight tracking-tight mb-6">
          Private AI for{" "}
          <span className="text-[#6366f1]">Every Organization</span>
        </h1>

        {/* Primary descriptor */}
        <p className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-4 leading-relaxed">
          Strata Vault gives every organization a secure, isolated AI knowledge base built
          from its own documents — with every answer traceable to a source.
        </p>

        {/* Trust tagline */}
        <p className="text-sm text-[#475569] max-w-xl mx-auto mb-3 font-mono tracking-wide">
          agents · vectordb · pii-obfuscation · conversational-llm · code-token-protection
        </p>

        {/* Consultant hook */}
        <p className="text-base text-[#64748b] max-w-xl mx-auto mb-10 leading-relaxed">
          If you&apos;re a consultant, MSP, or vCIO — we&apos;re actively looking for partners who
          want to bring Strata Vault to their clients and earn recurring revenue doing it.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:support@stratavault.ai?subject=Early Access Request"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#6366f1] text-white font-medium hover:bg-[#818cf8] transition-colors"
          >
            Get Early Access
          </a>
          <a
            href="#partners"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-[#1e293b] text-[#94a3b8] font-medium hover:border-[#6366f1]/50 hover:text-[#f8fafc] transition-colors"
          >
            Become a Partner
          </a>
        </div>

        {/* Visual proof strip — mini query/answer diagram */}
        <div className="max-w-2xl mx-auto rounded-xl border border-[#1e293b] bg-[#1e293b]/40 p-5">
          <div className="eyebrow text-center mb-4">Live example — Capital Impact Knowledge Base</div>
          <div className="flex flex-col gap-2 text-left">
            {/* Query */}
            <div className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#6366f1]/20 border border-[#6366f1]/40 flex items-center justify-center">
                <span className="text-[#818cf8] text-xs font-mono">Q</span>
              </span>
              <p className="text-sm text-[#94a3b8] font-mono leading-relaxed">
                &ldquo;What firewall rules govern remote access to the accounting system?&rdquo;
              </p>
            </div>
            {/* Divider */}
            <div className="ml-8 border-l border-[#1e293b] pl-3 py-1">
              <span className="eyebrow">Vector search → 12 passages retrieved · PII redacted · Claude reasoning</span>
            </div>
            {/* Answer */}
            <div className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-emerald-400 text-xs font-mono">A</span>
              </span>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                Remote access to the accounting system is governed by Policy NET-114, requiring
                MFA on all connections and restricting source IPs to the approved VPN range
                10.8.0.0/16. Last updated March 2025.{" "}
                <span className="text-[#6366f1] text-xs">— Source: Network Security Policy v4.2</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

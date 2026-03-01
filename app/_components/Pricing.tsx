const tiers = [
  {
    name: "Standard",
    price: "$499",
    period: "/mo",
    description: "For growing organizations deploying their first AI knowledge base.",
    limits: ["50,000 documents", "5 users", "3 isolated vaults", "Email support"],
    cta: "Get Early Access",
    href: "mailto:support@stratavault.ai?subject=Early Access Request",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$999",
    period: "/mo",
    description: "For organizations with multiple active engagements or departments.",
    limits: ["250,000 documents", "25 users", "Unlimited vaults", "Priority support"],
    cta: "Get Early Access",
    href: "mailto:support@stratavault.ai?subject=Early Access Request",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations requiring maximum control and compliance.",
    limits: ["Unlimited documents", "Unlimited users", "Dedicated region", "Dedicated CSM"],
    cta: "Contact Us",
    href: "mailto:support@stratavault.ai?subject=Enterprise Inquiry",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#f8fafc] mb-4">
            Transparent pricing
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            One flat monthly fee per organization. No per-seat surprises. No usage overages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-8 flex flex-col ${
                tier.highlight
                  ? "border-[#6366f1] bg-[#6366f1]/5"
                  : "border-[#1e293b] bg-[#1e293b]/30"
              }`}
            >
              {tier.highlight && (
                <div className="text-xs font-medium text-[#6366f1] mb-3 uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-[#f8fafc] mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-0.5 mb-2">
                <span className="text-4xl font-bold text-[#f8fafc]">{tier.price}</span>
                <span className="text-[#94a3b8] text-sm">{tier.period}</span>
              </div>
              <p className="text-sm text-[#94a3b8] mb-6">{tier.description}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.limits.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#cbd5e1]">
                    <span className="text-[#6366f1]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={`block text-center py-3 rounded-lg font-medium text-sm transition-colors ${
                  tier.highlight
                    ? "bg-[#6366f1] text-white hover:bg-[#818cf8]"
                    : "border border-[#334155] text-[#94a3b8] hover:border-[#6366f1]/50 hover:text-[#f8fafc]"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Consultant partner callout */}
        <div className="rounded-xl border border-[#1e293b] bg-[#1e293b]/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-medium text-[#6366f1] mb-1 uppercase tracking-wider">
              Consultant &amp; Partner Program
            </div>
            <h3 className="text-lg font-semibold text-[#f8fafc] mb-1">
              Are you a consultant or MSP?
            </h3>
            <p className="text-sm text-[#94a3b8] max-w-xl">
              Bring Strata Vault to your clients and earn recurring revenue on every deployment.
              Partner pricing, co-selling support, and priority onboarding — reach out to
              discuss a partner arrangement.
            </p>
          </div>
          <a
            href="mailto:partners@stratavault.ai?subject=Consultant Partner Inquiry"
            className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#6366f1]/50 text-[#818cf8] font-medium text-sm hover:bg-[#6366f1] hover:text-white transition-colors whitespace-nowrap"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}

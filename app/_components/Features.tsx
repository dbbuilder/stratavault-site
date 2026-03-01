// SVG icons — 24×24 viewbox, 1.5px stroke, no fills except where noted.
// Designed to match the engineering precision of the site's visual language.

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" strokeLinecap="round" />
    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

const TaxonomyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path d="M4 6h16M4 10h10M4 14h12M4 18h8" strokeLinecap="round" />
    <path d="M18 13l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EngineIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" strokeLinecap="round" />
  </svg>
);

const AudienceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <circle cx="9" cy="7" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
    <path d="M19 20c0-2.2-1.3-4-3-5" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L12 3Z" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AgentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <circle cx="5"  cy="5"  r="1.5" />
    <circle cx="19" cy="5"  r="1.5" />
    <circle cx="5"  cy="19" r="1.5" />
    <circle cx="19" cy="19" r="1.5" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M6.5 5H17.5M5 6.5V17.5M19 6.5V17.5M6.5 19H17.5" />
    <path d="M9.8 9.8L7 7M14.2 9.8L17 7M9.8 14.2L7 17M14.2 14.2L17 17" strokeLinecap="round" />
  </svg>
);

const features = [
  {
    icon: <LockIcon />,
    title: "The Vault",
    tag: "Isolation",
    description:
      "Per-organization isolated deployment. Your data never touches another organization's instance. Each engagement, department, or client runs in its own dedicated environment on its own subdomain.",
  },
  {
    icon: <TaxonomyIcon />,
    title: "The Taxonomy",
    tag: "Precision",
    description:
      "Documents organized by domain, class, and time period. Filtered retrieval, not guessing. Ask about Q3 2024 financials and get Q3 2024 financials — not unrelated noise.",
  },
  {
    icon: <EngineIcon />,
    title: "The Knowledge Engine",
    tag: "Self-Improving",
    description:
      "Detects knowledge gaps, proposes document improvements, and enriches your corpus automatically. Your AI gets smarter as your organization grows.",
  },
  {
    icon: <AudienceIcon />,
    title: "Multi-Audience Access",
    tag: "Access Control",
    description:
      "Internal staff get full access to every corpus. Vendors, partners, and clients get a constrained, branded portal — scoped to exactly what they need, nothing more.",
  },
  {
    icon: <ShieldIcon />,
    title: "Zero-PII API Calls",
    tag: "Privacy",
    description:
      "Personally identifiable information is stripped from every query before it reaches the AI model — and restored in your answer. Names, emails, record numbers, and credentials never cross the API boundary. Your data never trains anyone's model.",
  },
  {
    icon: <AgentIcon />,
    title: "Discovery Agents",
    tag: "Always Current",
    description:
      "Automated agents pull live data from Azure, Meraki, GitHub, and your file shares on a schedule. Your knowledge base reflects today's network and code — not last year's diagram.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <div className="eyebrow mb-3">Capabilities</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl font-bold text-[#f8fafc] max-w-lg leading-snug">
              Built for the way organizations actually work
            </h2>
            <p className="text-sm text-[#64748b] max-w-xs leading-relaxed text-left md:text-right">
              Purpose-built for real organizational knowledge — not adapted from a generic AI
              product designed for everyone and no one.
            </p>
          </div>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-[#1e293b] bg-[#1e293b]/20 p-7
                         hover:border-[#6366f1]/40 hover:bg-[#1e293b]/40 transition-all duration-200"
            >
              {/* Icon row */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/20
                                flex items-center justify-center text-[#818cf8]
                                group-hover:bg-[#6366f1]/15 transition-colors">
                  {feature.icon}
                </div>
                <span className="eyebrow text-[#334155] group-hover:text-[#6366f1] transition-colors">
                  {feature.tag}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-base font-semibold text-[#f8fafc] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed group-hover:text-[#94a3b8] transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

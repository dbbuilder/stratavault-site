// The StrataVault Stack — reflexive equation section.
// Shows the four-layer architecture that StrataVault itself runs on,
// framed as a visual formula. Self-referential: this page is built on the same stack.

const inputs = [
  {
    operator: null,
    label: "AI Agents",
    sublabel: "Discovery",
    items: ["Network topology", "Source code", "Documents", "Live data feeds"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <circle cx="5"  cy="12" r="2" />
        <circle cx="19" cy="5"  r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M7 12h5M14 6.5l-2 4M14 17.5l-2-4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    operator: "×",
    label: "Vector DB",
    sublabel: "+ PII Obfuscation",
    items: ["Semantic embeddings", "HNSW index search", "Name → token swap", "Codebook on-premise"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <ellipse cx="12" cy="6"  rx="7" ry="2.5" />
        <ellipse cx="12" cy="12" rx="7" ry="2.5" />
        <ellipse cx="12" cy="18" rx="7" ry="2.5" />
        <path d="M5 6v6M19 6v6M5 12v6M19 12v6" />
      </svg>
    ),
  },
  {
    operator: "×",
    label: "Conversational LLM",
    sublabel: "Grounded Reasoning",
    items: ["Context assembly", "Source-only reasoning", "Claude / GPT-4o", "Answer with citations"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path d="M8 10h8M8 14h5" strokeLinecap="round" />
        <path d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8l-4 4V5a1 1 0 0 1 1-1Z" />
      </svg>
    ),
  },
  {
    operator: "×",
    label: "Code-Token Protection",
    sublabel: "Zero Plaintext Leakage",
    items: ["API keys → tokens", "Secrets never transmitted", "Credential scrubbing", "Audit every access"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

const outputs = [
  {
    label: "Maximum Security",
    caption: "Isolated per org. PII never crosses the API boundary. Code tokens stay on-prem.",
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
  },
  {
    label: "Maximum Intelligence",
    caption: "Answers grounded in your actual documents. Every response cites its source.",
    color: "text-[#818cf8]",
    border: "border-[#6366f1]/40",
    bg: "bg-[#6366f1]/5",
  },
  {
    label: "Maximum ROI",
    caption: "Hours of search time eliminated. Knowledge that compound as the corpus grows.",
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
  },
];

export default function Formula() {
  return (
    <section id="stack" className="py-24 px-6 border-t border-[#1e293b] relative overflow-hidden">

      {/* Subtle left-edge rule */}
      <div className="absolute left-0 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-[#6366f1]/15 to-transparent" />

      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-14">
          <div className="eyebrow mb-3">The StrataVault Stack</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl font-bold text-[#f8fafc] max-w-xl leading-snug">
              Four layers. One architecture.<br />
              <span className="text-[#6366f1]">Built on itself.</span>
            </h2>
            <p className="text-sm text-[#475569] max-w-xs leading-relaxed text-right hidden md:block font-mono">
              This page, this knowledge base,<br />
              this conversation —<br />
              powered by the stack below.
            </p>
          </div>
        </div>

        {/* Input nodes — horizontal equation */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 mb-8">
          {inputs.map((node) => (
            <div key={node.label} className="flex lg:flex-row items-center flex-1">

              {/* Operator between nodes */}
              {node.operator && (
                <div className="operator px-3 py-6 shrink-0 flex items-center justify-center text-2xl select-none">
                  {node.operator}
                </div>
              )}

              {/* Node card */}
              <div className="formula-node flex-1 rounded-xl border border-[#1e293b] bg-[#1e293b]/30 p-6 h-full">
                {/* Icon + label */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-[#818cf8]">
                    {node.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#f8fafc] leading-tight">{node.label}</div>
                    <div className="text-xs text-[#6366f1] font-mono mt-0.5">{node.sublabel}</div>
                  </div>
                </div>
                {/* Sub-items */}
                <ul className="space-y-1.5">
                  {node.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#64748b] font-mono">
                      <span className="w-1 h-1 rounded-full bg-[#334155] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Equals arrow */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent" />
          <div className="flex items-center gap-3">
            <span className="operator text-3xl">=</span>
            <span className="text-xs text-[#475569] font-mono tracking-wide">every deployment</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent" />
        </div>

        {/* Output nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {outputs.map((out) => (
            <div
              key={out.label}
              className={`rounded-xl border ${out.border} ${out.bg} p-6`}
            >
              <div className={`text-lg font-bold mb-2 ${out.color}`}>{out.label}</div>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{out.caption}</p>
            </div>
          ))}
        </div>

        {/* Reflexive footnote */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-[#1e293b]" />
          <p className="text-xs text-[#334155] font-mono text-center px-4">
            StrataVault is deployed on StrataVault.&nbsp;&nbsp;
            Network maps, codebase, policy documents — all ingested, PII-obfuscated, vector-indexed, and queryable.&nbsp;&nbsp;
            The documentation you read is live inside the system.
          </p>
          <div className="h-px flex-1 bg-[#1e293b]" />
        </div>

      </div>
    </section>
  );
}

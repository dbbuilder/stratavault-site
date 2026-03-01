const clientBenefits = [
  "Private AI trained on your documents, not the public internet",
  "Data isolation — your knowledge never touches another org's instance",
  "Every answer is traceable to a specific source document",
  "Role-based access: staff, partners, and vendors see only what they should",
  "Deploy in hours, not months — no infrastructure to manage",
];

const consultantBenefits = [
  "Bring Strata Vault to your clients and earn recurring revenue",
  "Help clients ingest, organize, and query their knowledge base",
  "You own the client relationship — we provide the platform",
  "White-labeled subdomains for each client you onboard",
  "Priority onboarding support and partner-level SLA",
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 px-6 border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#f8fafc] mb-4">
            Two paths to Strata Vault
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Whether you&apos;re an organization ready to put your knowledge to work, or a
            consultant who wants to bring a better AI platform to your clients — we&apos;re
            actively looking for both.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Organizations */}
          <div className="rounded-xl border border-[#1e293b] bg-[#1e293b]/30 p-8 flex flex-col">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-[#f8fafc] mb-2">For Organizations</h3>
            <p className="text-[#94a3b8] text-sm mb-6 leading-relaxed">
              Any organization with internal knowledge worth protecting — healthcare, finance,
              legal, nonprofits, field services — gets a private, secure AI built from its
              own documents.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {clientBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#cbd5e1]">
                  <span className="text-[#6366f1] mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:support@stratavault.ai?subject=Early Access Request"
              className="block text-center py-3 rounded-lg font-medium text-sm bg-[#6366f1] text-white hover:bg-[#818cf8] transition-colors"
            >
              Get Early Access
            </a>
          </div>

          {/* For Consultant Partners */}
          <div className="rounded-xl border border-[#6366f1]/50 bg-[#6366f1]/5 p-8 flex flex-col">
            <div className="text-3xl mb-4">🤝</div>
            <div className="text-xs font-medium text-[#6366f1] mb-2 uppercase tracking-wider">
              Consultant &amp; Partner Program
            </div>
            <h3 className="text-xl font-bold text-[#f8fafc] mb-2">For Consultants &amp; MSPs</h3>
            <p className="text-[#94a3b8] text-sm mb-6 leading-relaxed">
              IT consultants, MSPs, vCIOs, and fractional CTOs can bring Strata Vault to
              their clients or help existing clients get more out of their deployment — and
              earn recurring revenue on every engagement.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {consultantBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#cbd5e1]">
                  <span className="text-[#6366f1] mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:partners@stratavault.ai?subject=Consultant Partner Inquiry"
              className="block text-center py-3 rounded-lg font-medium text-sm border border-[#6366f1] text-[#818cf8] hover:bg-[#6366f1] hover:text-white transition-colors"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

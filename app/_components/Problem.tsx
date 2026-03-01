const stats = [
  {
    value: "1.8h",
    label: "lost per employee per day",
    source: "searching for information across disconnected tools",
    cite: "McKinsey Global Institute",
  },
  {
    value: "$67.4B",
    label: "annual cost of AI hallucinations",
    source: "incorrect or unverifiable AI outputs in the enterprise",
    cite: "Gartner, 2024",
  },
  {
    value: "0",
    label: "organizational context in generic AI",
    source: "ChatGPT has no idea who your clients, projects, or people are",
    cite: "By design",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6 border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#f8fafc] mb-4">
            Generic AI wasn&apos;t built for your organization
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            Your team loses hours every day to tools that don&apos;t know your clients,
            your documents, or your history. And neither does ChatGPT.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-xl border border-[#1e293b] bg-[#1e293b]/40 p-8"
            >
              <div className="text-4xl font-bold text-[#6366f1] mb-2">{stat.value}</div>
              <div className="text-[#f8fafc] font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-[#94a3b8] mb-3">{stat.source}</div>
              <div className="text-xs text-[#475569]">{stat.cite}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

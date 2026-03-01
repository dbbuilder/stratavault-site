export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e293b] bg-[#0f172a]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-[#6366f1] text-xl font-bold tracking-tight">⬡</span>
          <span className="font-semibold text-[#f8fafc] tracking-tight">Strata Vault</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#stack" className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors hidden md:block">
            The Stack
          </a>
          <a href="#features" className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            Features
          </a>
          <a href="#partners" className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            Partners
          </a>
          <a href="#pricing" className="text-sm text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            Pricing
          </a>
          <a
            href="https://app.stratavault.ai"
            className="text-sm font-medium px-4 py-2 rounded-md bg-[#6366f1] text-white hover:bg-[#818cf8] transition-colors"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}

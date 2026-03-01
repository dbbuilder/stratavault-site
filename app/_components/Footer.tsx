export default function Footer() {
  return (
    <footer className="border-t border-[#1e293b] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[#6366f1] font-bold">⬡</span>
            <span className="font-semibold text-[#f8fafc]">Strata Vault</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#475569]">
            <a href="mailto:support@stratavault.ai" className="hover:text-[#94a3b8] transition-colors">
              Contact
            </a>
            <a href="mailto:partners@stratavault.ai" className="hover:text-[#94a3b8] transition-colors">
              Partners
            </a>
            <a href="/privacy" className="hover:text-[#94a3b8] transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-[#94a3b8] transition-colors">
              Terms
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#1e293b] text-center text-xs text-[#334155]">
          © 2026 ServiceVision · Operated by ServiceVision ·{" "}
          <a
            href="https://servicevision.net"
            className="hover:text-[#475569] transition-colors"
          >
            servicevision.net
          </a>
        </div>
      </div>
    </footer>
  );
}

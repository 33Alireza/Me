import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center p-4">
      <div className="terminal max-w-xl w-full p-6 sm:p-8 font-['Space_Mono',monospace]">
        <div className="term-bar mb-6 flex items-center justify-between">
          <div className="term-dots">
            <span className="term-dot bg-red-500/85"></span>
            <span className="term-dot bg-yellow-500/85"></span>
            <span className="term-dot bg-green-500/85"></span>
          </div>
          <span className="term-title text-xs text-[var(--text-muted)]">bash — 80x24</span>
          <div className="w-12"></div>
        </div>
        <div className="text-red-400 text-sm sm:text-base mb-4">
          bash: this-page: command not found
        </div>
        <div className="text-[var(--text-muted)] text-xs sm:text-sm mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved to a different directory. Type <code className="text-[var(--code-blue-light)]">help</code> or return home.
        </div>
        <Link href="/" className="btn-primary inline-flex items-center gap-2 text-xs sm:text-sm">
          <i className="fa-solid fa-arrow-left"></i> Return Home
        </Link>
      </div>
    </div>
  );
}
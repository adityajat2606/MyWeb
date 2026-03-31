"use client";
export default function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="font-display text-lg font-bold" style={{ color: "var(--ink)" }}>
          AC<span style={{ color: "var(--gold)" }}>.</span>
        </div>
        <div className="font-mono text-xs" style={{ color: "var(--muted)" }}>
          © 2026 Aditya Choudhary
        </div>
        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/adityajat2606" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-choudhary-57a986229/" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              className="font-mono text-xs uppercase tracking-widest link-underline transition-colors"
              style={{ color: "var(--muted)" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--gold)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

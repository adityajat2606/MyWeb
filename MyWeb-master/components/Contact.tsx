"use client";
export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center reveal">
        <div className="font-mono text-xs uppercase tracking-widest mb-6 flex items-center justify-center gap-3" style={{ color: "var(--brand)" }}>
          <span className="w-8 h-px inline-block" style={{ background: "var(--brand)" }} />
          Contact
          <span className="w-8 h-px inline-block" style={{ background: "var(--brand)" }} />
        </div>

        <h2
          className="font-display font-bold mb-6 gold-glow"
          style={{ fontSize: "clamp(40px, 8vw, 96px)", lineHeight: 0.9, color: "var(--ink)" }}
        >
          Let's Build<br />
          <em style={{ color: "var(--gold)" }}>Something</em><br />
          Together
        </h2>

        <p className="max-w-md mx-auto mb-12 text-base leading-relaxed" style={{ color: "var(--ink-muted)" }}>
          Open to full-time roles, freelance projects, and interesting collaborations. Let's talk.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="mailto:adityac2606@gmail.com"
            className="magnetic group flex items-center gap-3 px-8 py-4 font-mono text-sm uppercase tracking-widest transition-all duration-300"
            style={{ background: "var(--gold)", color: "var(--ink)", fontWeight: 500 }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--amber)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--gold)"; }}
          >
            adityac2606@gmail.com
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href="tel:8003366240"
            className="magnetic flex items-center gap-2 px-8 py-4 font-mono text-sm uppercase tracking-widest border transition-all duration-300"
            style={{ color: "var(--ink)", borderColor: "var(--line-strong)" }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "var(--gold)"; el.style.color = "var(--gold)"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "var(--line-strong)"; el.style.color = "var(--ink)"; }}
          >
            +91 8003366240
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5C2.5 7.5 6 11 6 11C6 11 9.5 7.5 9.5 4.5C9.5 2.57 7.93 1 6 1ZM6 6C5.17 6 4.5 5.33 4.5 4.5C4.5 3.67 5.17 3 6 3C6.83 3 7.5 3.67 7.5 4.5C7.5 5.33 6.83 6 6 6Z" fill="currentColor"/>
          </svg>
          Alwar, Rajasthan, India
        </div>
      </div>
    </section>
  );
}

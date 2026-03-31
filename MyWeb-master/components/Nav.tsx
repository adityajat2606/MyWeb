"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Constellation", href: "#constellation" },
    { label: "Open Source", href: "#open-source" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "var(--glass)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold text-paper tracking-tight" style={{ color: "var(--ink)" }}>
          AC<span style={{ color: "var(--gold)" }}>.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-widest uppercase text-muted hover:text-gold link-underline transition-colors"
              style={{ color: "var(--muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggle}
            className="magnetic flex items-center gap-2 px-3 py-2 font-mono text-xs uppercase tracking-widest border transition-all duration-200"
            style={{ color: "var(--ink)", borderColor: "var(--line-strong)" }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "var(--gold)"; el.style.color = "var(--gold)"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "var(--line-strong)"; el.style.color = "var(--ink)"; }}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <a
            href="mailto:adityac2606@gmail.com"
            className="magnetic font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200"
            style={{
              color: "var(--gold)", borderColor: "rgba(201,168,76,0.4)",
              background: "transparent",
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = "var(--gold)"; el.style.color = "var(--ink)"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "var(--gold)"; }}
          >
            Hire Me
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-px transition-all duration-300" style={{ background: "var(--gold)", transform: menuOpen ? "rotate(45deg) translateY(5px)" : "none" }} />
          <span className="block h-px transition-all duration-300" style={{ background: "var(--gold)", width: menuOpen ? "24px" : "16px", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ background: "var(--gold)", transform: menuOpen ? "rotate(-45deg) translateY(-5px)" : "none" }} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "var(--ink)" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-sm uppercase tracking-widest py-2 border-b"
              style={{ color: "var(--paper)", borderColor: "rgba(245,240,232,0.12)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggle}
            className="magnetic flex items-center justify-between gap-2 px-4 py-3 font-mono text-xs uppercase tracking-widest border"
            style={{ color: "var(--paper)", borderColor: "rgba(245,240,232,0.2)" }}
          >
            Theme
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <a
            href="mailto:adityac2606@gmail.com"
            className="magnetic font-mono text-xs tracking-widest uppercase px-4 py-3 border"
            style={{ color: "var(--gold)", borderColor: "rgba(201,168,76,0.5)" }}
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}

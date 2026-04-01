"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import TerminalIntro from "./TerminalIntro";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const largeScreen = window.matchMedia("(min-width: 1024px)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (prefersReduced || !finePointer || !largeScreen || saveData) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let rafId: number;
    let last = 0;
    const draw = (time: number) => {
      if (time - last < 33) {
        rafId = requestAnimationFrame(draw);
        return;
      }
      last = time;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201,168,76,${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden">
        <div className="number-large" style={{ paddingRight: "2vw", paddingTop: "6vh" }}>01</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="reveal">
            <div
              className="animate-fade-up animate-delayed-1 font-mono text-xs tracking-widest uppercase mb-8 flex items-center gap-3"
              style={{ color: "var(--gold)" }}
            >
              <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
              Developer
              <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
            </div>

            <h1 className="hero-title animate-fade-up animate-delayed-2 mb-2" style={{ color: "var(--ink)" }}>
              Aditya
            </h1>
            <h1 className="hero-title animate-fade-up animate-delayed-3 mb-10 italic" style={{ color: "var(--gold)", WebkitTextStroke: "0px" }}>
              Choudhary
            </h1>

            <p
              className="animate-fade-up animate-delayed-4 max-w-xl text-base leading-relaxed mb-12"
              style={{ color: "var(--ink-muted)", fontWeight: 300 }}
            >
              Building performant web applications and extracting meaningful insights from data.
              Based in Alwar, Rajasthan — currently at{" "}
              <span style={{ color: "var(--ink)", fontWeight: 400 }}>Satnam Webtech</span>.
            </p>

            <div className="animate-fade-up animate-delayed-5 flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                className="magnetic group flex items-center gap-3 px-7 py-3.5 font-mono text-sm uppercase tracking-widest transition-all duration-300"
                style={{ background: "var(--gold)", color: "var(--ink)", fontWeight: 500 }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--amber)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--gold)"; }}
              >
                View Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href="/Aditya_Choudhary_2026.pdf"
                download="Aditya_Choudhary_2026.pdf"
                className="magnetic flex items-center gap-2 px-7 py-3.5 font-mono text-sm uppercase tracking-widest border transition-all duration-300"
                style={{ color: "var(--ink)", borderColor: "var(--line-strong)" }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "var(--gold)"; el.style.color = "var(--gold)"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "var(--line-strong)"; el.style.color = "var(--ink)"; }}
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-choudhary-57a986229/"
                target="_blank"
                rel="noreferrer"
                className="magnetic flex items-center gap-2 px-7 py-3.5 font-mono text-sm uppercase tracking-widest border transition-all duration-300"
                style={{ color: "var(--ink)", borderColor: "var(--line-strong)" }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "var(--gold)"; el.style.color = "var(--gold)"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "var(--line-strong)"; el.style.color = "var(--ink)"; }}
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/adityajat2606"
                target="_blank"
                rel="noreferrer"
                className="magnetic flex items-center gap-2 px-7 py-3.5 font-mono text-sm uppercase tracking-widest border transition-all duration-300"
                style={{ color: "var(--ink)", borderColor: "var(--line-strong)" }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "var(--gold)"; el.style.color = "var(--gold)"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "var(--line-strong)"; el.style.color = "var(--ink)"; }}
              >
                GitHub
              </a>
            </div>

            <div className="mt-10 max-w-xl">
              <TerminalIntro />
            </div>
          </div>

          <div className="reveal flex flex-col gap-6">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[32px] opacity-60"
                style={{ background: "radial-gradient(circle at 30% 20%, rgba(201,168,76,0.2), transparent 60%)" }}
              />
              <div className="relative overflow-hidden rounded-[28px] border" style={{ borderColor: "var(--line)" }}>
                <Image
                  src="/21BCE11275.jpg"
                  alt="Aditya Choudhary"
                  width={480}
                  height={520}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="animate-fade-up animate-delayed-5 mt-20 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          {[
            { num: "8.67", label: "CGPA at VIT" },
            { num: "200+", label: "Problems Solved" },
            { num: "AIR 222", label: "CodeKaze Rank" },
            { num: "40%", label: "Page Speed Gain" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-display text-3xl font-bold mb-1" style={{ color: "var(--gold)" }}>
                {s.num}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator removed */}
    </section>
  );
}

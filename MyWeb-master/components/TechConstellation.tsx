"use client";
const nodes = [
  { label: "Next.js", x: 18, y: 25 },
  { label: "React", x: 50, y: 12 },
  { label: "TypeScript", x: 82, y: 24 },
  { label: "Node.js", x: 12, y: 62 },
  { label: "PostgreSQL", x: 48, y: 58 },
  { label: "Python", x: 86, y: 56 },
  { label: "AWS", x: 30, y: 86 },
  { label: "Firebase", x: 70, y: 86 },
];

export default function TechConstellation() {
  return (
    <section id="constellation" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 20%, rgba(201,168,76,0.08), transparent 55%)" }} />
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 reveal">
          <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: "var(--accent-3)" }}>
            <span className="w-8 h-px inline-block" style={{ background: "var(--accent-3)" }} />
            Tech Constellation
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: "var(--ink)" }}>
            A Living <em>Skill Graph</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--ink-muted)" }}>
              Core technologies orbit around the projects that shaped my career. This constellation evolves
              as I ship new products and deepen expertise.
            </p>
            <div className="flex flex-wrap gap-3">
              {nodes.map((node) => (
                <span key={node.label} className="tag" style={{ fontSize: "12px", padding: "6px 12px" }}>
                  {node.label}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal relative">
            <div className="rounded-3xl border p-6 tilt-card" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
              <svg viewBox="0 0 100 100" className="w-full h-[320px]">
                <defs>
                  <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(201,168,76,0.4)" />
                    <stop offset="100%" stopColor="rgba(201,168,76,0.05)" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="4" fill="var(--gold)" />
                {nodes.map((node) => (
                  <line key={`${node.label}-line`} x1="50" y1="50" x2={node.x} y2={node.y} stroke="url(#line)" strokeWidth="0.5" />
                ))}
                {nodes.map((node, index) => (
                  <g key={node.label} style={{ transformOrigin: `${node.x}px ${node.y}px` }}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="3.5"
                      className="node-pulse"
                      style={{ animationDelay: `${index * 0.2}s` }}
                      fill="var(--gold)"
                    />
                    <text
                      x={node.x}
                      y={node.y + 6}
                      textAnchor="middle"
                      fontSize="3.6"
                      fill="var(--ink)"
                      style={{ letterSpacing: "0.3px" }}
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

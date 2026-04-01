"use client";
export default function Skills() {
  const categories = [
    {
      label: "Programming & Web",
      items: ["Python", "TypeScript", "SQL", "React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      label: "Data & AI",
      items: ["Pandas", "NumPy", "Scikit-learn", "Data Analysis", "Data Visualization", "ETL", "Generative AI", "Computer Vision"],
    },
    {
      label: "Cloud & Databases",
      items: ["AWS EC2", "AWS S3", "AWS Lambda", "Firebase", "MySQL", "PostgreSQL"],
    },
  ];

  const proficiency = [
    { name: "React / Next.js", pct: 90 },
    { name: "Python / Data Analysis", pct: 82 },
    { name: "SQL & Databases", pct: 85 },
    { name: "TypeScript", pct: 78 },
    { name: "Cloud (AWS / Firebase)", pct: 70 },
  ];

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 right-0 number-large opacity-30 pointer-events-none" style={{ paddingRight: "4vw" }}>04</div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 reveal">
          <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: "var(--accent-5)" }}>
            <span className="w-8 h-px inline-block" style={{ background: "var(--accent-5)" }} />
            Technical Skills
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: "var(--ink)" }}>
            Tools &amp; <em>Expertise</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Categories / tags */}
          <div className="space-y-10 reveal">
            {categories.map((cat) => (
              <div key={cat.label}>
                <div className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
                  {cat.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="tag"
                      style={{ fontSize: "12px", padding: "5px 12px" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency bars */}
          <div className="space-y-6 reveal">
            <div className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: "var(--muted)" }}>
              Proficiency
            </div>
            {proficiency.map((s) => (
              <div key={s.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm" style={{ color: "var(--ink)" }}>{s.name}</span>
                  <span className="font-mono text-xs" style={{ color: "var(--gold)" }}>{s.pct}%</span>
                </div>
                <div className="h-px w-full" style={{ background: "var(--line)" }}>
                  <div
                    className="h-px"
                    style={{
                      width: `${s.pct}%`,
                      background: "linear-gradient(90deg, var(--accent-2), var(--accent-5))",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership callout */}
        <div
          className="mt-16 p-8 grid md:grid-cols-12 gap-6 items-center reveal"
          style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}
        >
          <div className="md:col-span-2 font-display text-5xl font-bold italic" style={{ color: "var(--gold)" }}>
            Lead
          </div>
          <div className="md:col-span-10">
            <div className="font-display text-lg font-bold mb-1" style={{ color: "var(--ink)" }}>
              Blockchain Club — Financial Head
            </div>
            <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>
              VIT Bhopal · July 2023 – June 2024
            </div>
            <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
              Directed budgeting, sponsorships, and resource allocation — increased club funds by 15% and improved financial transparency by 20% through structured reporting and audits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
export default function Experience() {
  const jobs = [
    {
      role: "Software Developer",
      company: "Satnam Webtech",
      period: "March 2026 – Present",
      type: "Full-time",
      link: "https://github.com/adityajat2606/Satnam_offer_letter/blob/main/Satnam_Offer_letter.png",
      bullets: [
        "Engineered responsive web applications using React.js and Next.js, decreasing average page load time by 40% through strategic image optimization.",
        "Built reusable UI components and implemented SSR/SSG in Next.js, enhancing scalability, SEO, and load speed.",
      ],
      tags: ["React.js", "Next.js", "SSR", "SSG"],
    },
    {
      role: "Business Development Intern",
      company: "Pawzzitive Welfare Foundation",
      period: "Dec 2024 – May 2025",
      type: "Internship",
      link: "https://github.com/adityajat2606/Pawzz_Certificate/blob/main/Certificate%20%26%20Lor%20-%20Aditya%20Choudhary.pdf",
      bullets: [
        "Analyzed adoption trends and campaign performance using Python and Excel, improving targeting strategies by 25%.",
        "Automated data collection using Python scripts and Excel macros, reducing processing time by 7 hours/week.",
      ],
      tags: ["Python", "Excel", "Data Analysis", "Automation"],
    },
    {
      role: "Remote Tutor",
      company: "Chegg India",
      period: "April 2022 – April 2025",
      type: "Freelance",
      link: "https://github.com/adityajat2606/Tutor_Chegg/blob/main/Remote_tutor_Chegg.png",
      bullets: [
        "Solved 200+ programming problems with an 85% student satisfaction rate.",
        "Managed 300+ student queries, delivering clear and structured solutions.",
      ],
      tags: ["Programming", "Mentoring", "Problem Solving"],
    },
  ];

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 right-0 number-large opacity-30 pointer-events-none" style={{ paddingRight: "4vw" }}>02</div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: "var(--accent-2)" }}>
            <span className="w-8 h-px inline-block" style={{ background: "var(--accent-2)" }} />
            Experience
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: "var(--ink)" }}>
            Where I've <em>Worked</em>
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-px">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="group relative card-hover reveal"
              style={{
                borderTop: "1px solid var(--line)",
                borderBottom: i === jobs.length - 1 ? "1px solid var(--line)" : "none",
              }}
            >
              <div className="py-10 grid md:grid-cols-12 gap-6 md:gap-10">
                {/* Left column */}
                <div className="md:col-span-3">
                  <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
                    {job.period}
                  </div>
                  <span
                    className="font-mono text-xs px-2 py-1 border"
                    style={{
                      color: job.type === "Full-time" ? "var(--gold)" : "var(--muted)",
                      borderColor: job.type === "Full-time" ? "rgba(201,168,76,0.3)" : "rgba(155,150,144,0.2)",
                    }}
                  >
                    {job.type}
                  </span>
                </div>

                {/* Right column */}
                <div className="md:col-span-9">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold mb-1" style={{ color: "var(--ink)" }}>
                        {job.role}
                      </h3>
                      <div className="font-mono text-sm" style={{ color: "var(--gold)" }}>
                        {job.company}
                      </div>
                    </div>
                    {job.link ? (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                        style={{ border: "1px solid rgba(201,168,76,0.3)" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1 11L11 1M11 1H3M11 1V9" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </a>
                    ) : (
                      <div
                        className="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                        style={{ border: "1px solid rgba(201,168,76,0.3)" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1 11L11 1M11 1H3M11 1V9" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                        <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: "var(--gold)" }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education card */}
        <div
          className="mt-12 p-8 card-hover"
          style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
                Education
              </div>
              <h3 className="font-display text-2xl font-bold mb-1" style={{ color: "var(--ink)" }}>
                B.Tech — Computer Science & Engineering
              </h3>
              <div className="font-mono text-sm mb-3" style={{ color: "var(--gold)" }}>
                Vellore Institute of Technology, Bhopal
              </div>
              <div className="text-sm" style={{ color: "var(--muted)" }}>Graduated October 2025</div>
            </div>
            <div className="text-right">
              <div className="font-display text-5xl font-bold" style={{ color: "var(--gold)" }}>8.67</div>
              <div className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--muted)" }}>CGPA / 10</div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
              <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
                12th Class • 2021
              </div>
              <div className="font-display text-lg font-bold" style={{ color: "var(--ink)" }}>
                KVM Sr. Sec. School, Alwar
              </div>
              <div className="text-sm mt-1" style={{ color: "var(--ink-muted)" }}>
                Percentage: 92.20%
              </div>
            </div>
            <div className="p-5 rounded-2xl border" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
              <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>
                10th Class • 2019
              </div>
              <div className="font-display text-lg font-bold" style={{ color: "var(--ink)" }}>
                St. Anselm's Sr. Sec. School, Alwar
              </div>
              <div className="text-sm mt-1" style={{ color: "var(--ink-muted)" }}>
                Percentage: 82%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
export default function Projects() {
  const projects = [
    {
      num: "01",
      title: "Frontend Websites Suite",
      description: "Collection of responsive frontend sites built with modern UI patterns, API-driven content, and performance optimization.",
      stack: ["Next.js", "ReactJS", "Tailwind CSS"],
      year: "2026",
      links: [
        { label: "Web UI-s", url: "https://github.com/adityajat2606/Web_UI-s" },
        { label: "Websites UI", url: "https://github.com/adityajat2606/Websites_UI" },
      ],
      highlight: "Fast, responsive UI",
      snippet: "fetch(\"/api/content\").then(render)",
    },
    {
      num: "02",
      title: "Online Appointment Booking System",
      description: "Full-stack hospital website with real-time appointment booking using React.js, Node.js, and Firebase. Enhanced SEO and responsive UI increased online visibility by 35%.",
      stack: ["ReactJS", "Tailwind CSS", "Node.js", "Firebase"],
      year: "2025",
      link: "https://kalpeshhospital.com",
      highlight: "35% visibility boost",
      snippet: "POST /api/appointments\\n{ date, doctorId, patientId }",
    },
    {
      num: "03",
      title: "Zepto E-commerce SQL Analysis",
      description: "Data analysis on e-commerce datasets extracting insights on pricing, discounts, and inventory trends. Complex SQL queries to calculate revenue and identify high-value products.",
      stack: ["SQL", "PostgreSQL", "Excel"],
      year: "2025",
      link: "https://github.com/adityajat2606/Zepto-E-commerce-SQL-Data-Analysis",
      highlight: "Revenue insights extracted",
      snippet: "SELECT category, SUM(revenue) AS total\\nFROM sales\\nGROUP BY category\\nORDER BY total DESC;",
    },
    {
      num: "04",
      title: "Retail Sales Analysis",
      description: "Designed and queried a retail sales database to uncover key business insights including top customers, peak sales months, and category performance.",
      stack: ["SQL", "PostgreSQL"],
      year: "2025",
      link: "https://github.com/adityajat2606/Retail_Sales_Analysis",
      highlight: "Strategic decision support",
      snippet: "WITH top_customers AS (\\n  SELECT customer_id, SUM(amount) total\\n  FROM orders\\n  GROUP BY customer_id\\n)\\nSELECT * FROM top_customers;",
    },
    {
      num: "05",
      title: "Drug De-Addiction System",
      description: "Full-stack platform helping individuals find rehabilitation centers and emergency support with location-based search, categorized resources, and real-time assistance.",
      stack: ["ReactJS", "Node.js", "MongoDB"],
      year: "2025",
      link: "https://github.com/adityajat2606/Drug-De-Addiction-System",
      highlight: "30% better access to resources",
      snippet: "GET /api/centers?city=alwar&type=emergency",
    },
    {
      num: "06",
      title: "HealthKart Influencer Marketing Dashboard",
      description: "Analytics dashboard to track influencer campaign performance with ROAS, payout tracking, and engagement KPIs.",
      stack: ["Analytics", "Dashboards"],
      year: "2025",
      link: "https://github.com/adityajat2606/HealthKart_Dashboard",
      highlight: "KPI visibility uplift",
      snippet: "ROAS = revenue / spend",
    },
    {
      num: "07",
      title: "ASC-360 Analytics Dashboard",
      description: "Interactive analytics dashboard with charts, filtering, and real-time updates to track performance KPIs.",
      stack: ["ReactJS", "Charts", "UI/UX"],
      year: "2025",
      link: "https://github.com/adityajat2606/ASC-360-Dashboard",
      highlight: "KPI decision support",
      snippet: "filters.apply({ range: \"30d\", segment: \"enterprise\" })",
    },
    {
      num: "08",
      title: "JSON Schema Builder",
      description: "Dynamic schema builder with nested fields, live JSON preview, and reusable UI components for validation workflows.",
      stack: ["ReactJS", "ShadCN", "Ant Design"],
      year: "2025",
      link: "https://github.com/adityajat2606/Json-Schema-Builder",
      highlight: "Instant schema preview",
      snippet: "schema.addField({ type: \"string\", name: \"title\" })",
    },
    {
      num: "09",
      title: "Home Security System with Facial Recognition",
      description: "AI-driven security system that detects unauthorized access with facial recognition, sending real-time alerts within 2 seconds.",
      stack: ["Python", "ML", "Firebase"],
      year: "2024",
      link: "https://github.com/adityajat2606/StarSecure",
      highlight: "85% fewer intrusion attempts",
      snippet: "if confidence > 0.92: send_alert(user_id)",
    },
    {
      num: "10",
      title: "Resource Tracker (AWS Monitoring)",
      description: "Cloud-based monitoring tool that automates real-time tracking and reporting of system and cloud resources.",
      stack: ["AWS", "Linux", "Python"],
      year: "2024",
      link: "https://github.com/adityajat2606/Resource-Tracker",
      highlight: "Reduced manual monitoring",
      snippet: "aws cloudwatch get-metric-data --metric CPUUtilization",
    },
    {
      num: "11",
      title: "Virtual Mouse System",
      description: "Gesture-controlled virtual mouse using computer vision and hand tracking for real-time cursor control.",
      stack: ["OpenCV", "Python"],
      year: "2024",
      link: "https://github.com/adityajat2606/Virtual-Mouse",
      highlight: "Hands-free interaction",
      snippet: "cursor.move_to(hand.x, hand.y)",
    },
  ];

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.03) 0%, transparent 50%)" }}
      />
      <div className="absolute top-0 right-0 number-large opacity-30 pointer-events-none" style={{ paddingRight: "4vw" }}>03</div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 reveal">
          <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: "var(--accent-1)" }}>
            <span className="w-8 h-px inline-block" style={{ background: "var(--accent-1)" }} />
            Projects
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: "var(--ink)" }}>
            Selected <em>Work</em>
          </h2>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative p-8 card-hover cursor-pointer tilt-card reveal"
              style={{
                border: "1px solid var(--line)",
                background: "var(--surface)",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(228,87,46,0.35)"; e.currentTarget.style.background = "rgba(228,87,46,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.background = "var(--surface)"; }}
            >
              <div className="flex items-start justify-between gap-6 mb-5">
                <div className="flex items-center gap-5">
                  <span
                    className="font-display text-sm font-bold"
                    style={{ color: "var(--accent-1)", opacity: 0.4, letterSpacing: "0.05em" }}
                  >
                    {p.num}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold" style={{ color: "var(--ink)" }}>
                    {p.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>{p.year}</span>
                  {p.links?.length ? (
                    <div className="flex items-center gap-2">
                      {p.links.map((item) => (
                        <a
                          key={item.url}
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{ borderColor: "rgba(201,168,76,0.3)" }}
                          title={item.label}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </a>
                      ))}
                    </div>
                  ) : p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ borderColor: "rgba(201,168,76,0.3)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 11L11 1M11 1H3M11 1V9" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5 max-w-2xl" style={{ color: "var(--ink-muted)" }}>
                {p.description}
              </p>

              <pre
                className="text-xs font-mono rounded-xl p-4 mb-6 overflow-x-auto"
                style={{ background: "var(--surface-2)", border: "1px solid var(--line)", color: "var(--ink)" }}
              >
                <code>{p.snippet}</code>
              </pre>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
                <div
                  className="font-mono text-xs px-3 py-1"
                  style={{ color: "var(--accent-1)", background: "rgba(228,87,46,0.1)", border: "1px solid rgba(228,87,46,0.3)" }}
                >
                  ↗ {p.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

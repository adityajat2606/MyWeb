"use client";
export default function Achievements() {
  const achievements = [
    {
      icon: "🏆",
      title: "All India Rank 222",
      subtitle: "CodeKaze — Coding Ninjas",
      year: "March 2022",
      description: "Ranked 222nd nationally in a competitive programming contest among thousands of participants.",
      link: "https://github.com/adityajat2606/CodeKaze_CodingNinja_certificate/blob/main/CodeKaze_222_certificate.png",
    },
    {
      icon: "🤖",
      title: "Applied ML in Python",
      subtitle: "Certified",
      year: "Certification",
      description: "Certified in Applied Machine Learning with Python, covering data preprocessing, model building, and evaluation.",
      link: "https://github.com/adityajat2606/Applied_ML_in_python_Coursera/blob/main/Applied%20Machine%20learning%20in%20python%20Coursera.pdf",
    },
    {
      icon: "☁️",
      title: "Salesforce Certified AI Associate",
      subtitle: "Salesforce",
      year: "Certification",
      description: "Official Salesforce AI Associate certification demonstrating knowledge of AI fundamentals and Salesforce AI tools.",
      link: "https://github.com/adityajat2606/Salesforce/blob/main/Salesforce%20AI%20Associate.pdf",
    },
    {
      icon: "Cloud",
      title: "Cloud Computing",
      subtitle: "NPTEL - IIT Kharagpur",
      year: "Certification",
      description: "Completed NPTEL Cloud Computing certification from IIT Kharagpur, covering cloud architecture, virtualization, and scalable services.",
      link: "https://github.com/adityajat2606/NPTEL_Cloud_Computing/blob/main/NPTEL%20Cloud%20Computing%20.pdf",
    },
  ];

  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)" }}
      />
      <div className="absolute top-0 right-0 number-large opacity-30 pointer-events-none" style={{ paddingRight: "4vw" }}>05</div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 reveal">
          <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: "var(--accent-4)" }}>
            <span className="w-8 h-px inline-block" style={{ background: "var(--accent-4)" }} />
            Achievements & Certifications
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: "var(--ink)" }}>
            Recognition &amp; <em>Growth</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="group p-8 card-hover flex flex-col tilt-card reveal"
              style={{
                border: "1px solid var(--line)",
                background: "var(--surface)",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(239,93,168,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)"; }}
            >
              <div className="text-3xl mb-5">{a.icon}</div>
              <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent-4)" }}>
                {a.year}
              </div>
              <h3 className="font-display text-xl font-bold mb-1" style={{ color: "var(--ink)" }}>
                {a.title}
              </h3>
              <div className="font-mono text-xs mb-4" style={{ color: "var(--muted)" }}>
                {a.subtitle}
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--ink-muted)" }}>
                {a.description}
              </p>

              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
                  style={{ color: "var(--accent-4)" }}
                >
                  View Certificate
                </a>
              )}

              <div
                className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "var(--gold)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

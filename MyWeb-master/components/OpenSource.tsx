"use client";
import { useEffect, useState } from "react";

type GitHubStats = {
  public_repos: number;
  followers: number;
  following: number;
};

export default function OpenSource() {
  const user = "adityajat2606";
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [activity, setActivity] = useState<number[]>([]);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${user}`);
        if (!res.ok) return;
        const data = await res.json();
        if (!active) return;
        setStats({
          public_repos: data.public_repos ?? 0,
          followers: data.followers ?? 0,
          following: data.following ?? 0,
        });
        const eventsRes = await fetch(`https://api.github.com/users/${user}/events/public?per_page=100`);
        if (eventsRes.ok) {
          const events = await eventsRes.json();
          const days = 30;
          const buckets = Array.from({ length: days }, () => 0);
          const now = new Date();
          events.forEach((event: { created_at?: string }) => {
            if (!event.created_at) return;
            const date = new Date(event.created_at);
            const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
            if (diffDays >= 0 && diffDays < days) {
              buckets[days - 1 - diffDays] += 1;
            }
          });
          setActivity(buckets);
        }
      } catch {
        if (!active) return;
        setStats(null);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [user]);

  return (
    <section id="open-source" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 70% 10%, rgba(201,168,76,0.07), transparent 50%)" }} />
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 reveal">
          <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: "var(--accent-6)" }}>
            <span className="w-8 h-px inline-block" style={{ background: "var(--accent-6)" }} />
            Open Source
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold" style={{ color: "var(--ink)" }}>
            Live <em>GitHub</em> Pulse
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 items-start">
          <div className="space-y-6 reveal">
            <div className="p-6 rounded-2xl border tilt-card" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
              <h3 className="font-display text-xl font-bold mb-3" style={{ color: "var(--ink)" }}>Live GitHub Stats</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--ink-muted)" }}>
                Pulled directly from GitHub in real-time.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Repos", value: stats?.public_repos ?? "—" },
                  { label: "Followers", value: stats?.followers ?? "—" },
                  { label: "Following", value: stats?.following ?? "—" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border p-3" style={{ borderColor: "var(--line)", background: "var(--surface-2)" }}>
                    <div className="font-display text-2xl font-bold" style={{ color: "var(--ink)" }}>{item.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--muted)" }}>{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--surface-2)" }}>
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>
                    Activity Pulse (Last 30 Days)
                  </div>
                  <svg viewBox="0 0 300 120" className="w-full h-24">
                    <defs>
                      <linearGradient id="pulse" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="var(--accent-6)" />
                        <stop offset="50%" stopColor="var(--accent-5)" />
                        <stop offset="100%" stopColor="var(--accent-3)" />
                      </linearGradient>
                      <linearGradient id="pulseFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(124,179,66,0.45)" />
                        <stop offset="100%" stopColor="rgba(124,179,66,0.02)" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    {(() => {
                      const data = activity.length ? activity : Array.from({ length: 30 }, () => 0);
                      const max = Math.max(1, ...data);
                      const points = data.map((val, idx) => {
                        const x = (idx / (data.length - 1)) * 300;
                        const y = 100 - (val / max) * 80;
                        return `${x},${y}`;
                      });
                      const linePath = `M ${points[0]} L ${points.slice(1).join(" ")}`;
                      const fillPath = `${linePath} L 300,100 L 0,100 Z`;
                      return (
                        <>
                          <path d={fillPath} fill="url(#pulseFill)" />
                          <path d={linePath} stroke="url(#pulse)" strokeWidth="3" fill="none" filter="url(#glow)" />
                        </>
                      );
                    })()}
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="p-8 rounded-3xl border tilt-card" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
              <div className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>
                Open Source Snapshot
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "12+ repos",
                  "4 dashboards",
                  "3 data tools",
                  "2 AI systems",
                ].map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs uppercase tracking-widest px-3 py-1 border rounded-full"
                    style={{ color: "var(--ink)", borderColor: "var(--line)", background: "var(--surface-2)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="space-y-3 text-sm mb-6" style={{ color: "var(--ink-muted)" }}>
                <div>StarSecure — AI home security with facial recognition.</div>
                <div>ASC-360 — KPI analytics dashboard with live filters.</div>
                <div>JSON Schema Builder — instant schema preview + validation.</div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/adityajat2606"
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-widest border"
                  style={{ color: "var(--ink)", borderColor: "var(--line-strong)" }}
                >
                  Visit GitHub
                </a>
                <a
                  href="#projects"
                  className="magnetic inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-widest border"
                  style={{ color: "var(--accent-6)", borderColor: "rgba(124,179,66,0.35)" }}
                >
                  See Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

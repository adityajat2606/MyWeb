"use client";
import { useEffect, useMemo, useState } from "react";

const lines = [
  "$ whoami",
  "Aditya Choudhary",
  "$ domain",
  "Web development and data analysis",
  "$ currently working",
  "Satnam Webtech",
  "$ role",
  "Software developer",
];

export default function TerminalIntro() {
  const [output, setOutput] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const content = useMemo(() => lines, []);

  useEffect(() => {
    let lineIndex = 0;
    let wordIndex = 0;
    let active = true;
    const fullLines = content.map((line) => (line.startsWith("$") ? line.replace("$ ", "") : line));

    const type = () => {
      if (!active) return;
      if (lineIndex >= content.length) {
        setOutput(fullLines);
        return;
      }
      const current = content[lineIndex];
      const isCommand = current.startsWith("$");
      const clean = isCommand ? current.replace("$ ", "") : current;
      const words = clean.split(" ");

      const next = words.slice(0, wordIndex + 1).join(" ");
      setOutput((prev) => {
        const updated = [...prev];
        updated[lineIndex] = next;
        return updated;
      });

      wordIndex += 1;
      if (wordIndex >= words.length) {
        lineIndex += 1;
        wordIndex = 0;
        setTimeout(type, 300);
        return;
      }
      setTimeout(type, isCommand ? 120 : 90);
    };

    type();

    const cursor = setInterval(() => setCursorVisible((prev) => !prev), 500);

    return () => {
      active = false;
      clearInterval(cursor);
    };
  }, [content]);

  return (
    <div
      className="rounded-2xl p-5 font-mono text-xs leading-relaxed shadow-xl border"
      style={{
        background: "linear-gradient(180deg, rgba(10,10,15,0.08), rgba(10,10,15,0.02))",
        borderColor: "var(--line)",
        color: "var(--ink)",
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-1)" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-3)" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-2)" }} />
        <span className="ml-2 uppercase tracking-[0.3em]" style={{ color: "var(--muted)" }}>terminal</span>
      </div>
      <div className="space-y-2">
        {content.map((line, i) => {
          const isCommand = line.startsWith("$");
          return (
            <div key={`${line}-${i}`} className="min-h-[14px] flex items-start gap-2">
              {isCommand ? (
                <span style={{ color: "var(--accent-5)" }}>$</span>
              ) : (
                <span className="opacity-0">$</span>
              )}
              <span style={{ color: isCommand ? "var(--ink)" : "var(--ink-muted)" }}>
                {output[i] ?? ""}
              </span>
              {i === output.length - 1 && cursorVisible ? <span style={{ color: "var(--accent-1)" }}>▍</span> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

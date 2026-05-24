"use client";

import { useEffect, useState } from "react";

type Snippet = {
  filename: string;
  // Each line is an array of (className?, text) pairs.
  lines: { cls?: string; text: string }[][];
};

const SNIPPETS: Snippet[] = [
  {
    filename: "agents/orchestrator.ts",
    lines: [
      [
        { cls: "text-violet-300", text: "const" },
        { text: " " },
        { cls: "text-cyan-300", text: "pipeline" },
        { cls: "text-white/40", text: " = " },
        { cls: "text-violet-300", text: "await" },
        { text: " " },
        { cls: "text-cyan-300", text: "orchestrate" },
        { cls: "text-white/40", text: "({" },
      ],
      [
        { text: "  " },
        { cls: "text-sky-300", text: "model" },
        { cls: "text-white/40", text: ": " },
        { cls: "text-emerald-300", text: '"claude-4"' },
        { cls: "text-white/40", text: "," },
      ],
      [
        { text: "  " },
        { cls: "text-sky-300", text: "tools" },
        { cls: "text-white/40", text: ": [" },
        { cls: "text-emerald-300", text: '"crm"' },
        { cls: "text-white/40", text: ", " },
        { cls: "text-emerald-300", text: '"db"' },
        { cls: "text-white/40", text: "]," },
      ],
      [
        { text: "  " },
        { cls: "text-sky-300", text: "guardrails" },
        { cls: "text-white/40", text: ": " },
        { cls: "text-cyan-300", text: "strict" },
      ],
      [{ cls: "text-white/40", text: "});" }],
    ],
  },
  {
    filename: "shopify/upsell.ts",
    lines: [
      [
        { cls: "text-violet-300", text: "export" },
        { text: " " },
        { cls: "text-violet-300", text: "const" },
        { text: " " },
        { cls: "text-cyan-300", text: "offer" },
        { cls: "text-white/40", text: " = " },
        { cls: "text-cyan-300", text: "buildUpsell" },
        { cls: "text-white/40", text: "({" },
      ],
      [
        { text: "  " },
        { cls: "text-sky-300", text: "trigger" },
        { cls: "text-white/40", text: ": " },
        { cls: "text-emerald-300", text: '"post_purchase"' },
        { cls: "text-white/40", text: "," },
      ],
      [
        { text: "  " },
        { cls: "text-sky-300", text: "rule" },
        { cls: "text-white/40", text: ": " },
        { cls: "text-cyan-300", text: "cart" },
        { cls: "text-white/40", text: "." },
        { cls: "text-cyan-300", text: "subtotal" },
        { cls: "text-white/40", text: " > " },
        { cls: "text-orange-300", text: "80" },
        { cls: "text-white/40", text: "," },
      ],
      [
        { text: "  " },
        { cls: "text-sky-300", text: "lift" },
        { cls: "text-white/40", text: ": " },
        { cls: "text-emerald-300", text: '"+$8.12 AOV"' },
        { cls: "text-white/40", text: "," },
      ],
      [{ cls: "text-white/40", text: "});" }],
    ],
  },
  {
    filename: "infra/scale.tf",
    lines: [
      [
        { cls: "text-violet-300", text: "module" },
        { text: " " },
        { cls: "text-emerald-300", text: '"api"' },
        { text: " " },
        { cls: "text-white/40", text: "{" },
      ],
      [
        { text: "  " },
        { cls: "text-sky-300", text: "source" },
        { text: "  " },
        { cls: "text-white/40", text: "= " },
        { cls: "text-emerald-300", text: '"./modules/api"' },
      ],
      [
        { text: "  " },
        { cls: "text-sky-300", text: "replicas" },
        { cls: "text-white/40", text: " = " },
        { cls: "text-orange-300", text: "auto" },
      ],
      [
        { text: "  " },
        { cls: "text-sky-300", text: "p95_ms" },
        { text: "   " },
        { cls: "text-white/40", text: "= " },
        { cls: "text-orange-300", text: "120" },
      ],
      [{ cls: "text-white/40", text: "}" }],
    ],
  },
];

// Compute the total visible characters in a snippet's lines.
function countChars(s: Snippet) {
  let n = 0;
  for (const line of s.lines) for (const seg of line) n += seg.text.length;
  return n;
}

// Render the snippet up to `cursor` characters.
function renderUpTo(s: Snippet, cursor: number) {
  let remaining = cursor;
  const out: JSX.Element[] = [];
  s.lines.forEach((line, li) => {
    const segs: JSX.Element[] = [];
    for (let i = 0; i < line.length; i++) {
      const seg = line[i];
      if (remaining <= 0) break;
      const take = Math.min(seg.text.length, remaining);
      remaining -= take;
      segs.push(
        <span key={i} className={seg.cls}>
          {seg.text.slice(0, take)}
        </span>
      );
    }
    out.push(
      <div key={li} className="whitespace-pre">
        {segs.length ? segs : " "}
      </div>
    );
  });
  return out;
}

export default function TypingCode() {
  const [snipIdx, setSnipIdx] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [phase, setPhase] = useState<"typing" | "hold" | "erasing">("typing");

  const snippet = SNIPPETS[snipIdx];
  const totalChars = countChars(snippet);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (cursor < totalChars) {
        t = setTimeout(() => setCursor((c) => c + 1), 18);
      } else {
        t = setTimeout(() => setPhase("hold"), 1800);
      }
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("erasing"), 100);
    } else if (phase === "erasing") {
      if (cursor > 0) {
        t = setTimeout(() => setCursor((c) => Math.max(0, c - 6)), 12);
      } else {
        setSnipIdx((i) => (i + 1) % SNIPPETS.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [phase, cursor, totalChars]);

  return (
    <>
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] pb-2">
        <span className="h-2 w-2 rounded-full bg-rose-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <span className="ml-2 font-mono text-[10px] text-white/40">
          {snippet.filename}
        </span>
      </div>
      <pre className="mt-2 min-h-[100px] overflow-hidden font-mono text-[11px] leading-relaxed">
        <code>
          {renderUpTo(snippet, cursor)}
          <span className="inline-block w-1.5 h-3 bg-white/70 align-middle animate-pulse-glow" />
        </code>
      </pre>
    </>
  );
}

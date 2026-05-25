"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

type CaseStudy = {
  client: string;
  industry: string;
  title: string;
  blurb: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  accent: string;
  visual: "data" | "ai" | "ops";
};

const CASES: CaseStudy[] = [
  {
    client: "Polaris EdTech",
    industry: "Education · K12",
    title: "Re-architecting an LMS to scale through enrollment surges",
    blurb:
      "Migrated a monolithic platform to event-driven services, cutting peak latency by 71% and unlocking district-wide rollouts without infra panic.",
    metrics: [
      { label: "p95 latency", value: "−71%" },
      { label: "Concurrent users", value: "120k" },
      { label: "Deploy frequency", value: "12×" },
    ],
    tags: ["ASP.NET Core", "Azure", "Kafka", "Postgres"],
    accent: "from-accent-blue to-accent-violet",
    visual: "data",
  },
  {
    client: "Stratos Health",
    industry: "Healthcare · Workflow",
    title: "AI triage that routes 38% of intake without a human",
    blurb:
      "Designed a HIPAA-compliant LLM workflow with guardrails, audit trails and clinician review — embedded in the existing EHR.",
    metrics: [
      { label: "Auto-routed", value: "38%" },
      { label: "Time to triage", value: "−54%" },
      { label: "Clinician hours saved", value: "1,400/mo" },
    ],
    tags: ["LLM Orchestration", "FHIR", "Audit Logs", "Next.js"],
    accent: "from-accent-violet to-accent-cyan",
    visual: "ai",
  },
  {
    client: "Quanton",
    industry: "FinTech · SaaS",
    title: "Lead enrichment platform powering an ABM rollout",
    blurb:
      "Built a data engineering and enrichment pipeline that consolidates 14 vendor sources into a single, scored, attributable lead record.",
    metrics: [
      { label: "Sources unified", value: "14" },
      { label: "Match rate", value: "+46%" },
      { label: "SQL → SQL handoff", value: "−3.2 days" },
    ],
    tags: ["Snowflake", "dbt", "Python", "Reverse ETL"],
    accent: "from-accent-cyan to-accent-teal",
    visual: "ops",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Selected work"
          title={
            <>
              Real systems.{" "}
              <span className="text-accent-gradient">Real outcomes.</span>
            </>
          }
          description="A snapshot of recent engagements across our consulting practice — names anonymized where required. Full case studies available on request."
        />

        <div className="mt-14 space-y-6">
          {CASES.map((c, idx) => (
            <motion.article
              key={c.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 md:p-10"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.accent} opacity-[0.06]`}
              />
              <div className="relative grid items-start gap-10 md:grid-cols-[1.2fr_1fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider text-white/45">
                    <span>{c.client}</span>
                    <span className="text-white/20">·</span>
                    <span>{c.industry}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl md:leading-[1.15]">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-white/60">{c.blurb}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-accent-cyan"
                  >
                    Read the full case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                <div>
                  <CaseVisual variant={c.visual} accent={c.accent} />
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                      >
                        <div className="number-mono font-display text-xl font-semibold text-white">
                          {m.value}
                        </div>
                        <div className="mt-1 text-[10px] uppercase tracking-wider text-white/45">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseVisual({
  variant,
  accent,
}: {
  variant: "data" | "ai" | "ops";
  accent: string;
}) {
  if (variant === "data") {
    return (
      <div className="relative h-44 overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900/60 p-4">
        <div className="flex items-center justify-between">
          <div className="text-xs text-white/50">Throughput (req/s)</div>
          <div className="text-xs text-emerald-300 number-mono">+71%</div>
        </div>
        <svg viewBox="0 0 320 110" className="mt-2 h-28 w-full" aria-hidden>
          <defs>
            <linearGradient id="csv1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[20, 40, 60, 80, 100].map((y) => (
            <line
              key={y}
              x1="0"
              x2="320"
              y1={y}
              y2={y}
              stroke="rgba(148,163,184,0.06)"
            />
          ))}
          <path
            d="M0,90 L40,80 L80,70 L120,76 L160,55 L200,45 L240,30 L280,22 L320,16 L320,110 L0,110 Z"
            fill="url(#csv1)"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            d="M0,90 L40,80 L80,70 L120,76 L160,55 L200,45 L240,30 L280,22 L320,16"
            stroke="#60A5FA"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    );
  }
  if (variant === "ai") {
    return (
      <div className="relative h-44 overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900/60 p-4">
        <div className="flex items-center justify-between">
          <div className="text-xs text-white/50">Triage routing</div>
          <span className="chip !text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
            LLM workflow
          </span>
        </div>
        <div className="mt-3 space-y-2">
          {[
            { label: "Self-service path", v: 38 },
            { label: "Nurse triage queue", v: 27 },
            { label: "MD direct routing", v: 22 },
            { label: "Manual review", v: 13 },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3">
              <span className="w-36 truncate text-[11px] text-white/60">
                {row.label}
              </span>
              <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                <span
                  className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${accent}`}
                  style={{ width: `${row.v * 2}%` }}
                />
              </span>
              <span className="number-mono w-8 text-right text-[11px] text-white/60">
                {row.v}%
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900/60 p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs text-white/50">Data sources unified</div>
        <div className="text-xs text-cyan-300 number-mono">14 → 1</div>
      </div>
      <div className="relative mt-4 h-24">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-1.5">
          {["Salesforce", "ZoomInfo", "Apollo", "Webhooks", "Mongo"].map(
            (s) => (
              <div
                key={s}
                className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1 text-[10px] text-white/65"
              >
                {s}
              </div>
            )
          )}
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="rounded-xl border border-white/10 bg-accent-gradient p-3 text-xs font-medium text-white shadow-glow-sm">
            Unified Lead
          </div>
        </div>
        <svg
          aria-hidden
          viewBox="0 0 240 100"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          {[12, 30, 50, 70, 88].map((y, i) => (
            <path
              key={i}
              d={`M70,${y} C130,${y} 130,50 170,50`}
              fill="none"
              stroke="url(#csOpsLine)"
              strokeWidth="1"
              opacity="0.7"
            />
          ))}
          <defs>
            <linearGradient id="csOpsLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.0" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

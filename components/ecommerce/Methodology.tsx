"use client";

import { motion } from "framer-motion";
import { Search, FlaskConical, Hammer, BarChart3 } from "lucide-react";
import SectionHeader from "../SectionHeader";

const STEPS = [
  {
    icon: Search,
    label: "01 · Audit",
    title: "Find the leaks",
    blurb:
      "Funnel analytics, heatmaps, session replays, checkout friction map. We start with evidence, not opinions.",
  },
  {
    icon: FlaskConical,
    label: "02 · Hypothesize",
    title: "Prioritize tests",
    blurb:
      "Every idea is scored by impact, confidence, and ease. We work the highest-leverage tests first.",
  },
  {
    icon: Hammer,
    label: "03 · Build & ship",
    title: "Design + dev in one team",
    blurb:
      "Variant design, Liquid/Shopify development, and QA — handled by the same senior team that audited the funnel.",
  },
  {
    icon: BarChart3,
    label: "04 · Learn & compound",
    title: "Measure, then keep what wins",
    blurb:
      "Statistical significance gates every result. Winners ship to 100%. Losers feed the next round of hypotheses.",
  },
];

export default function Methodology() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="How we work"
          title={
            <>
              A repeatable system —{" "}
              <span className="text-accent-gradient">not a one-off audit.</span>
            </>
          }
          description="Growth is a process. We run it as one: weekly stand-ups, biweekly experiment reviews, a shared dashboard, and a roadmap you actually believe in."
        />

        <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(148,163,184,0.15) 10%, rgba(148,163,184,0.15) 90%, transparent)",
            }}
          />
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6"
            >
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 ring-1 ring-white/10">
                <s.icon className="h-5 w-5 text-white" />
                <span className="absolute -inset-1 -z-10 rounded-xl bg-accent-gradient opacity-25 blur-md" />
              </div>
              <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-white/40">
                {s.label}
              </div>
              <h3 className="mt-2 font-display text-base font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {s.blurb}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

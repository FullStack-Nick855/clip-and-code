"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const TESTIMONIALS = [
  {
    quote:
      "Clip & Code became the de-facto engineering arm for our platform launch. They moved like a senior in-house team and the architecture decisions still hold up two years later.",
    name: "Director of Product",
    company: "Healthcare SaaS · Series B",
    accent: "from-accent-blue to-accent-violet",
  },
  {
    quote:
      "We had a year of scaling pain in front of us. Nick's team triaged the system, rebuilt the hot paths and gave us a roadmap we could actually execute against. Latency dropped overnight.",
    name: "CTO",
    company: "FinTech · Growth-stage",
    accent: "from-accent-cyan to-accent-teal",
  },
  {
    quote:
      "The rare consultancy that gets both the AI workflow and the production constraints right. They wired in guardrails, observability and human review without slowing the team down.",
    name: "VP Engineering",
    company: "EdTech Platform",
    accent: "from-accent-violet to-accent-cyan",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="What partners say"
          title={
            <>
              Trusted by{" "}
              <span className="text-accent-gradient">operators and founders</span>{" "}
              under real pressure.
            </>
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <motion.figure
              key={t.name + idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="relative flex flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br ${t.accent} opacity-[0.07] blur-2xl`}
              />
              <div className="flex items-center justify-between">
                <Quote className="h-6 w-6 text-white/30" />
                <div className="flex gap-0.5 text-accent-cyan">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-current"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/[0.06] pt-4">
                <div className="text-sm font-medium text-white">{t.name}</div>
                <div className="text-xs text-white/45">{t.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          Names anonymized on request. Full references available during the
          discovery call.
        </p>
      </div>
    </section>
  );
}

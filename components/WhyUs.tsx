"use client";

import { motion } from "framer-motion";
import {
  Hammer,
  Compass,
  Network,
  Handshake,
  BrainCircuit,
  Scaling,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const PILLARS = [
  {
    icon: Hammer,
    title: "Engineering-first, not slide-first",
    blurb:
      "We write the code, run it in production, and stand behind the system long after the kickoff deck is closed.",
  },
  {
    icon: Compass,
    title: "Design + engineering in one room",
    blurb:
      "UI/UX and architecture decisions happen in the same review cycle. Fewer handoffs, fewer surprises.",
  },
  {
    icon: Network,
    title: "Enterprise architecture experience",
    blurb:
      "Distributed systems, compliance, identity, observability — patterns chosen for the next 5 years, not the next sprint.",
  },
  {
    icon: Handshake,
    title: "Long-term consulting mindset",
    blurb:
      "We optimize for the partnership compounding over years — not for billing the next milestone.",
  },
  {
    icon: BrainCircuit,
    title: "Pragmatic AI integration",
    blurb:
      "AI where it moves a real metric — not buzzwords stapled onto a product roadmap.",
  },
  {
    icon: Scaling,
    title: "Built to scale from day one",
    blurb:
      "Capacity, data growth, and team scale are first-class design constraints — not regrets we revisit in year two.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Why Clip & Code"
          title={
            <>
              The technical partner you{" "}
              <span className="text-accent-gradient">actually wanted</span> the
              first time.
            </>
          }
          description="Founded by Gourav (Nick) — 15+ years building enterprise software, leading product engineering teams, and shipping under real regulatory and scale pressure."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="card-elev p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {p.blurb}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founder card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-8 md:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-violet/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent-cyan/15 blur-3xl"
          />
          <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <FounderAvatar />
            <div>
              <div className="chip">Founder</div>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">
                Gourav{" "}
                <span className="text-white/45">(Nick)</span> — Senior Software
                Consultant
              </h3>
              <p className="mt-2 text-[13px] text-white/45">
                You may know him as{" "}
                <span className="text-white/70">Nick</span> from earlier
                collaborations — same engineer, same standards, now building
                Clip &amp; Code.
              </p>
              <p className="mt-4 max-w-2xl text-white/65">
                <strong className="text-white">Clip &amp; Code</strong> is a
                senior consultancy focused on enterprise software, AI systems,
                e&#8209;commerce growth, and modern product engineering. 15+
                years across healthcare, FinTech, EdTech, SaaS, and Shopify —
                combining deep full-stack expertise with a serious eye for
                product, conversion, and interface.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "ASP.NET / .NET Core",
                  "Next.js / TypeScript",
                  "AI Orchestration",
                  "Data Engineering",
                  "Enterprise Architecture",
                  "Product & UI/UX",
                ].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FounderAvatar() {
  return (
    <div className="relative mx-auto h-32 w-32 md:h-40 md:w-40">
      <div className="absolute inset-0 rounded-full bg-accent-gradient opacity-30 blur-2xl" />
      <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-ink-700 to-ink-900 shadow-glow-md">
        <svg
          viewBox="0 0 64 64"
          className="h-20 w-20 md:h-24 md:w-24 text-white/85"
          aria-hidden
        >
          <defs>
            <linearGradient id="avatarG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="22" r="11" fill="url(#avatarG)" opacity="0.85" />
          <path
            d="M10 56 C10 42, 22 36, 32 36 C42 36, 54 42, 54 56 Z"
            fill="url(#avatarG)"
            opacity="0.85"
          />
        </svg>
      </div>
    </div>
  );
}

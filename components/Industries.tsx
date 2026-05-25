"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  HeartPulse,
  GraduationCap,
  Landmark,
  LineChart,
  Factory,
  ShoppingBag,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

type Industry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  blurb: string;
  tag: string;
  href?: string;
  featured?: boolean;
};

const INDUSTRIES: Industry[] = [
  {
    icon: ShoppingBag,
    title: "E-commerce & Shopify",
    blurb:
      "CRO, AOV growth, abandoned-cart recovery, checkout optimization and custom Shopify apps.",
    tag: "Shopify · CRO · AOV",
    href: "/ecommerce",
    featured: true,
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    blurb:
      "HIPAA-aware platforms, clinical workflows and patient-facing experiences.",
    tag: "HIPAA · HL7 / FHIR",
  },
  {
    icon: GraduationCap,
    title: "Education",
    blurb:
      "LMS, assessment and student data platforms that scale through enrollment surges.",
    tag: "LMS · LTI · K12 / Higher Ed",
  },
  {
    icon: Landmark,
    title: "FinTech",
    blurb:
      "Ledger systems, KYC, payments and risk dashboards built for regulator scrutiny.",
    tag: "PCI · SOC 2 · KYC",
  },
  {
    icon: LineChart,
    title: "SaaS & MarTech",
    blurb:
      "Multi-tenant platforms, billing, identity, observability and AI revenue workflows.",
    tag: "Multi-tenant · MarTech · B2B",
  },
  {
    icon: Factory,
    title: "Enterprise Operations",
    blurb:
      "Internal tooling, automation and reporting layers that compound across the org.",
    tag: "ERP · BPM · BI",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Where we work"
          title={
            <>
              Domain depth across{" "}
              <span className="text-accent-gradient">regulated, complex industries.</span>
            </>
          }
          description="We don't just write code in your domain — we learn it. Compliance constraints, integration partners and how operators actually use the system."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, idx) => {
            const Wrapper: React.ElementType = ind.href ? Link : "div";
            const wrapperProps = ind.href ? { href: ind.href } : {};
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="group relative"
              >
                <Wrapper
                  {...wrapperProps}
                  onMouseMove={(e: React.MouseEvent<HTMLElement>) => {
                    const el = e.currentTarget;
                    const rect = el.getBoundingClientRect();
                    el.style.setProperty(
                      "--mx",
                      `${e.clientX - rect.left}px`
                    );
                    el.style.setProperty(
                      "--my",
                      `${e.clientY - rect.top}px`
                    );
                  }}
                  className={`relative block overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                    ind.featured
                      ? "border-white/[0.16] bg-gradient-to-br from-accent-violet/[0.12] via-white/[0.04] to-accent-cyan/[0.08] hover:border-white/[0.28]"
                      : "border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:border-white/[0.16]"
                  }`}
                >
                  {/* Cursor-tracked spotlight */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(139,92,246,0.18), transparent 70%)",
                    }}
                  />
                  {/* Decorative gradient corner */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-white ${
                          ind.featured
                            ? "bg-accent-gradient shadow-glow-sm"
                            : "bg-white/[0.04]"
                        }`}
                      >
                        <ind.icon className="h-5 w-5" />
                      </div>
                      <div className="flex items-center gap-2">
                        {ind.featured && (
                          <span className="rounded-full border border-white/15 bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                            New
                          </span>
                        )}
                        <span className="text-[10px] uppercase tracking-wider text-white/35">
                          {ind.tag}
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold text-white">
                      {ind.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {ind.blurb}
                    </p>
                    {ind.href && (
                      <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-white/80 transition-colors group-hover:text-white">
                        Explore the practice
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    )}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

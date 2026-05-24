"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  Cpu,
  Building2,
  Palette,
  Database,
  CloudCog,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  blurb: string;
  bullets: string[];
  accent: string;
  href?: string;
};

const SERVICES: Service[] = [
  {
    icon: ShoppingBag,
    title: "E-commerce & Shopify Growth",
    blurb:
      "Revenue engineering for Shopify and Shopify Plus brands — CRO, AOV, recovery, and custom apps.",
    bullets: [
      "Conversion Rate Optimization",
      "AOV · Cross-sell · Upsell",
      "Abandoned cart recovery",
      "Custom Shopify apps",
    ],
    accent: "from-accent-violet to-accent-cyan",
    href: "/ecommerce",
  },
  {
    icon: Cpu,
    title: "AI Automation & Workflows",
    blurb:
      "LLM workflows, retrieval systems, agent orchestration, CRM automation, and intelligent ops tooling.",
    bullets: [
      "LLM + RAG pipelines",
      "Agent orchestration",
      "CRM & workflow automation",
      "Operations copilots",
    ],
    accent: "from-accent-violet to-accent-blue",
  },
  {
    icon: Building2,
    title: "Enterprise & SaaS Development",
    blurb:
      "Multi-tenant SaaS, ASP.NET / .NET Core, modern stacks, and enterprise platforms built for scale.",
    bullets: [
      "ASP.NET / .NET Core",
      "Next.js + TypeScript",
      "Multi-tenant architecture",
      "RBAC · Billing · APIs",
    ],
    accent: "from-accent-blue to-accent-cyan",
  },
  {
    icon: Palette,
    title: "Product Design & Engineering",
    blurb:
      "Product-grade UI/UX shipped in tight loops with engineering — no theatrical handoffs.",
    bullets: [
      "UX research + flows",
      "Design systems",
      "Prototyping → production",
      "Accessibility + performance",
    ],
    accent: "from-accent-cyan to-accent-violet",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    blurb:
      "Pipelines, warehouses, lakehouses, executive dashboards, and product analytics that operators trust.",
    bullets: [
      "ETL / ELT pipelines",
      "Warehouse + lakehouse",
      "Executive dashboards",
      "Product analytics",
    ],
    accent: "from-accent-blue to-accent-violet",
  },
  {
    icon: CloudCog,
    title: "Cloud, DevOps & Performance",
    blurb:
      "Pragmatic cloud architecture on AWS, Azure, GCP — IaC, CI/CD, observability, and hot-path tuning.",
    bullets: [
      "AWS · Azure · GCP",
      "Infrastructure as Code",
      "CI/CD + observability",
      "Latency + cost discipline",
    ],
    accent: "from-accent-cyan to-accent-teal",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="What we do"
          title={
            <>
              Engineering capability,{" "}
              <span className="text-accent-gradient">end&#8209;to&#8209;end.</span>
            </>
          }
          description="Six tightly-defined practices, one senior team. We can own design, architecture, and delivery — or plug into yours."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, idx) => (
            <ServiceCard key={s.title} service={s} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s, index }: { service: Service; index: number }) {
  // Mouse-tracked spotlight
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        className="card-elev relative h-full overflow-hidden p-6"
      >
        {/* Mouse-tracked spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(280px circle at var(--mx, 50%) var(--my, 50%), rgba(139,92,246,0.18), transparent 70%)",
          }}
        />
        {/* Edge glow accent */}
        <div
          aria-hidden
          className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${s.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.15]`}
        />
        <div className="relative">
          <div
            className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-glow-sm`}
          >
            <s.icon className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg font-semibold text-white">
            {s.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/55">
            {s.blurb}
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {s.bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-1.5 text-[12px] text-white/55"
              >
                <span
                  aria-hidden
                  className="inline-block h-1 w-1 shrink-0 rounded-full bg-accent-cyan"
                />
                {b}
              </li>
            ))}
          </ul>
          <Link
            href={s.href ?? "https://calendly.com/clipandcode/30min"}
            {...(s.href ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-white/70 transition-colors hover:text-white"
          >
            {s.href ? "Explore the practice" : "Discuss a project"}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

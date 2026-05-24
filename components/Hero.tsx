"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Activity,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import TypingCode from "./TypingCode";
import Marquee from "./Marquee";
import Aurora from "./Aurora";

export default function Hero() {
  // Mouse-tracked spotlight for the entire hero
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
    >
      {/* Background layers */}
      <Aurora />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-[600px] bg-radial-spot" />
        {/* Cursor spotlight */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(500px circle at var(--mx, 50%) var(--my, 30%), rgba(139,92,246,0.10), transparent 65%)",
          }}
        />
      </div>

      <div className="container-wide relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: copy */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="chip mb-6"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              Now booking Q3 engagements
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-display-2xl text-gradient"
            >
              Enterprise software &amp;{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg,#60A5FA 0%,#A78BFA 50%,#22D3EE 100%)",
                  backgroundSize: "200% 200%",
                  animation: "gradient-pan 8s ease-in-out infinite",
                }}
              >
                AI systems
              </span>{" "}
              built for scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/65 md:text-lg"
            >
              Clip &amp; Code is a senior consulting partner for ambitious teams.
              We architect scalable products, automate operations, modernize
              legacy systems, and ship AI&#8209;native experiences your users
              actually trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="https://calendly.com/clipandcode/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Strategy Call
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <Link href="#case-studies" className="btn-ghost">
                View Case Studies
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/45"
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-teal" />
                SOC&#8209;ready engineering practices
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-accent-violet" />
                15+ years senior leadership
              </span>
              <span className="inline-flex items-center gap-2">
                <Activity className="h-3.5 w-3.5 text-accent-cyan" />
                100+ products shipped
              </span>
            </motion.div>
          </div>

          {/* Right: floating product visual with parallax tilt */}
          <HeroVisual />
        </div>

        {/* Logo strip with marquee */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <p className="text-center text-[11px] uppercase tracking-[0.2em] text-white/40">
            Trusted by founders and operators at
          </p>
          <Marquee
            speed={45}
            className="mt-5"
            items={[
              "Northbound",
              "Helia Labs",
              "Quanton",
              "Lattica",
              "Veridian",
              "Polaris EdTech",
              "Stratos Health",
              "Cypher Systems",
            ].map((name) => (
              <span
                key={name}
                className="font-display text-sm font-medium tracking-tight text-white/45 hover:text-white/80 transition-colors"
              >
                {name}
              </span>
            ))}
          />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#services"
            aria-label="Scroll to services"
            className="group inline-flex flex-col items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-white/70"
          >
            <span>Scroll</span>
            <span className="inline-flex h-7 w-5 items-center justify-center rounded-full border border-white/15">
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block h-1 w-1 rounded-full bg-white/60"
              />
            </span>
            <ChevronDown className="h-3 w-3 opacity-50 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  // Subtle parallax tilt that follows the mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [4, -4]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-4, 4]), {
    stiffness: 120,
    damping: 18,
  });

  const onMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 100);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 100);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
      style={{ perspective: 1200 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[40px] bg-soft-gradient blur-3xl opacity-60"
      />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="conic-border relative rounded-2xl border border-white/10 bg-ink-800/80 p-4 shadow-card backdrop-blur-xl"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-[11px] text-white/40">
              app.clipandcode.io / ops
            </span>
          </div>
          <span className="chip !text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" />
            Live
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-4">
          <StatTile label="MRR" value="$184k" delta="+12.4%" tone="emerald" />
          <StatTile label="Active Users" value="48,210" delta="+3.1%" tone="violet" />
          <StatTile label="Latency p95" value="118ms" delta="-22%" tone="cyan" />
        </div>

        <div className="mt-4 rounded-xl border border-white/[0.06] bg-ink-900/60 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <TrendingUp className="h-3.5 w-3.5 text-accent-cyan" />
              Revenue · 30d
            </div>
            <div className="flex gap-1 text-[10px] text-white/40">
              <span className="rounded-full bg-white/[0.05] px-2 py-0.5">30d</span>
              <span className="rounded-full px-2 py-0.5">QTD</span>
              <span className="rounded-full px-2 py-0.5">YTD</span>
            </div>
          </div>
          <Sparkline />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <PipelineTile />
          <AIInsightTile />
        </div>
      </motion.div>

      {/* Floating code snippet — now with typing animation */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45 }}
        className="absolute -bottom-10 -left-6 hidden w-[280px] rotate-[-4deg] rounded-xl border border-white/10 bg-ink-800/85 p-3 shadow-card backdrop-blur-xl md:block animate-float-slow"
      >
        <TypingCode />
      </motion.div>

      {/* Floating AI badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute -right-3 -top-6 hidden rounded-2xl border border-white/10 bg-ink-800/90 p-3 shadow-glow-md backdrop-blur-xl md:block animate-float-slower"
      >
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient shadow-glow-sm">
            <Cpu className="h-4 w-4 text-white" />
          </span>
          <div className="leading-tight">
            <div className="text-[11px] text-white/45">AI Copilot</div>
            <div className="text-sm font-medium text-white">
              3 workflows automated
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StatTile({
  label,
  value,
  delta,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  tone: "emerald" | "violet" | "cyan";
}) {
  const toneMap = {
    emerald: "text-emerald-300",
    violet: "text-violet-300",
    cyan: "text-cyan-300",
  };
  return (
    <div className="rounded-xl border border-white/[0.06] bg-ink-900/60 p-3">
      <div className="text-[10px] uppercase tracking-wider text-white/40">
        {label}
      </div>
      <div className="number-mono mt-1 text-lg font-semibold text-white">
        {value}
      </div>
      <div className={`number-mono mt-0.5 text-[11px] ${toneMap[tone]}`}>
        {delta}
      </div>
    </div>
  );
}

function Sparkline() {
  const path =
    "M0,40 L20,38 L40,30 L60,33 L80,22 L100,26 L120,18 L140,12 L160,16 L180,8 L200,11 L220,4";
  return (
    <svg
      viewBox="0 0 220 48"
      className="mt-3 h-20 w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sparkStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d={`${path} L220,48 L0,48 Z`} fill="url(#sparkFill)" />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        d={path}
        fill="none"
        stroke="url(#sparkStroke)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PipelineTile() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-ink-900/60 p-3">
      <div className="text-[10px] uppercase tracking-wider text-white/40">
        Pipeline
      </div>
      <div className="mt-2 space-y-1.5">
        {[
          { label: "Ingest", v: 92 },
          { label: "Enrich", v: 76 },
          { label: "Score", v: 64 },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span className="w-12 text-[10px] text-white/50">{row.label}</span>
            <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: `${row.v}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-y-0 left-0 rounded-full bg-accent-gradient"
              />
            </span>
            <span className="number-mono w-8 text-right text-[10px] text-white/55">
              {row.v}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIInsightTile() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-ink-900/60 p-3">
      <div className="text-[10px] uppercase tracking-wider text-white/40">
        AI Insight
      </div>
      <div className="mt-1.5 text-[12px] leading-snug text-white/85">
        Routing 14% of tier&#8209;2 tickets to automation could save{" "}
        <span className="text-accent-gradient font-semibold">42h / week</span>.
      </div>
      <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/65">
        <Sparkles className="h-3 w-3 text-accent-violet" />
        Suggested
      </div>
    </div>
  );
}

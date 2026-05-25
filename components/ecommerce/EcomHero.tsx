"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import Aurora from "../Aurora";

export default function EcomHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-20">
      <Aurora />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-[600px] bg-radial-spot" />
      </div>

      <div className="container-wide relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="chip mb-6"
            >
              <ShoppingBag className="h-3.5 w-3.5 text-accent-cyan" />
              E-commerce growth practice · Shopify Plus partner-ready
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-display-xl text-gradient"
            >
              More revenue from{" "}
              <span className="text-accent-gradient">the same traffic.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/65 md:text-lg"
            >
              We work with Shopify and Shopify Plus brands to lift conversion
              rate, raise average order value, recover abandoned carts and
              ship custom Shopify apps that compound revenue every month —
              without burning your CAC.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="https://calendly.com/clipandcode/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a free CRO audit
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="#capabilities" className="btn-ghost">
                See what we do
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-white/45"
            >
              <span className="inline-flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5 text-accent-cyan" />
                Avg. +18% revenue per visitor in 90 days
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-teal" />
                Theme-safe · App-store compliant
              </span>
            </motion.div>
          </div>

          <EcomHeroVisual />
        </div>
      </div>
    </section>
  );
}

function EcomHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[40px] bg-soft-gradient blur-3xl opacity-60"
      />

      {/* Storefront / cart mockup */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="conic-border relative rounded-2xl border border-white/10 bg-ink-800/85 p-4 shadow-card backdrop-blur-xl"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-[11px] text-white/40">
              shop.brand.com / cart
            </span>
          </div>
          <span className="chip !text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" />
            A/B winner
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-4">
          <Stat label="CVR" value="4.81%" delta="+1.6pp" />
          <Stat label="AOV" value="$128" delta="+22.4%" />
          <Stat label="Cart recovery" value="29%" delta="+14pp" />
        </div>

        <div className="mt-4 rounded-xl border border-white/[0.06] bg-ink-900/60 p-4">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Funnel · last 30d</span>
            <span className="text-emerald-300 number-mono">+18% RPV</span>
          </div>
          <FunnelBars />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <UpsellTile />
          <CartTile />
        </div>
      </motion.div>

      {/* Floating Shopify app badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="absolute -right-3 -top-6 hidden rounded-2xl border border-white/10 bg-ink-800/90 p-3 shadow-glow-md backdrop-blur-xl md:block animate-float-slower"
      >
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient shadow-glow-sm">
            <ShoppingBag className="h-4 w-4 text-white" />
          </span>
          <div className="leading-tight">
            <div className="text-[11px] text-white/45">Shopify App</div>
            <div className="text-sm font-medium text-white">
              Custom upsell engine · live
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Stat({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-ink-900/60 p-3">
      <div className="text-[10px] uppercase tracking-wider text-white/40">
        {label}
      </div>
      <div className="number-mono mt-1 text-lg font-semibold text-white">
        {value}
      </div>
      <div className="number-mono mt-0.5 text-[11px] text-emerald-300">
        {delta}
      </div>
    </div>
  );
}

function FunnelBars() {
  const rows = [
    { label: "Visit", v: 100 },
    { label: "Add to Cart", v: 32 },
    { label: "Checkout", v: 14 },
    { label: "Purchase", v: 6.4 },
  ];
  return (
    <div className="mt-3 space-y-2">
      {rows.map((r, i) => (
        <div key={r.label} className="flex items-center gap-3">
          <span className="w-24 text-[11px] text-white/55">{r.label}</span>
          <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: `${r.v}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.2 + i * 0.12, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 rounded-full bg-accent-gradient"
            />
          </span>
          <span className="number-mono w-10 text-right text-[11px] text-white/60">
            {r.v}%
          </span>
        </div>
      ))}
    </div>
  );
}

function UpsellTile() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-ink-900/60 p-3">
      <div className="text-[10px] uppercase tracking-wider text-white/40">
        Cross-sell
      </div>
      <div className="mt-2 text-[12px] leading-snug text-white/85">
        Frequently bought together raised{" "}
        <span className="text-accent-gradient font-semibold">+$11.20</span> avg.
      </div>
      <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/65">
        <TrendingUp className="h-3 w-3 text-accent-cyan" />
        Live
      </div>
    </div>
  );
}

function CartTile() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-ink-900/60 p-3">
      <div className="text-[10px] uppercase tracking-wider text-white/40">
        Abandoned cart
      </div>
      <div className="mt-2 text-[12px] leading-snug text-white/85">
        SMS + email sequence recovered{" "}
        <span className="text-accent-gradient font-semibold">$42k / mo</span>.
      </div>
      <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/65">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
        Klaviyo
      </div>
    </div>
  );
}

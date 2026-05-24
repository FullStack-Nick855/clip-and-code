"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  AppWindow,
  Boxes,
  Wand2,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

const APP_FEATURES = [
  {
    icon: AppWindow,
    title: "Polaris + App Bridge native UI",
    blurb:
      "Merchant-facing UIs built with Shopify's design system so your app feels native, fast, and trusted.",
  },
  {
    icon: Boxes,
    title: "Theme App Extensions & blocks",
    blurb:
      "Drop-in storefront blocks merchants can install, configure, and remove without touching code.",
  },
  {
    icon: Wand2,
    title: "GraphQL Admin + Webhooks",
    blurb:
      "Bulk operations, webhook-driven sync, and resilient retry logic that survives Shopify's rate limits.",
  },
  {
    icon: GitBranch,
    title: "App Store submission",
    blurb:
      "From listing copy to review prep — we shepherd public apps through Shopify's approval process.",
  },
];

export default function ShopifyApps() {
  return (
    <section id="shopify-apps" className="relative py-16 md:py-24">
      <div className="container-wide">
        {/* Header — full width, centered for balance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="chip mx-auto mb-4">Custom Shopify apps</div>
          <h2 className="font-display text-display-lg text-gradient">
            Need an app{" "}
            <span className="text-accent-gradient">Shopify doesn&apos;t sell?</span>{" "}
            We build it.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/65 md:text-lg">
            From private apps that automate operations to public apps you can
            list on the Shopify App Store — designed by senior engineers who
            understand both the platform and the merchant.
          </p>
        </motion.div>

        {/* Two-column: mockup + features side-by-side, aligned center */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Mock Shopify admin panel — now on the left for variety */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-none"
          >
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-[40px] bg-soft-gradient blur-3xl opacity-50"
            />
            <div className="conic-border overflow-hidden rounded-2xl border border-white/10 bg-ink-800/80 backdrop-blur-xl">
              {/* Browser bar */}
              <div className="flex items-center justify-between border-b border-white/[0.06] bg-ink-900/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-3 hidden font-mono text-[11px] text-white/40 sm:inline">
                    admin.shopify.com / apps / clip-upsell
                  </span>
                </div>
                <span className="chip !text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" />
                  Installed
                </span>
              </div>

              <div className="grid grid-cols-[180px_1fr]">
                {/* Sidebar */}
                <div className="hidden border-r border-white/[0.06] bg-ink-900/40 p-4 sm:block">
                  <div className="text-[10px] uppercase tracking-wider text-white/35">
                    Clip Upsell
                  </div>
                  <ul className="mt-3 space-y-1.5 text-[12px] text-white/65">
                    {["Overview", "Offers", "A/B Tests", "Analytics", "Settings"].map(
                      (item, i) => (
                        <li
                          key={item}
                          className={`rounded-md px-2 py-1.5 ${
                            i === 0
                              ? "bg-white/[0.06] text-white"
                              : "hover:bg-white/[0.03]"
                          }`}
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Main panel */}
                <div className="col-span-2 p-5 sm:col-span-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-white/40">
                        Post-purchase upsell
                      </div>
                      <h4 className="mt-1 font-display text-lg font-semibold text-white">
                        Hydration Bundle · v3
                      </h4>
                    </div>
                    <span className="chip !text-[10px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
                      A/B running
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2.5">
                    {[
                      { l: "Impressions", v: "42,118" },
                      { l: "Take rate", v: "21.4%" },
                      { l: "Lift / AOV", v: "+$8.12" },
                    ].map((m) => (
                      <div
                        key={m.l}
                        className="rounded-lg border border-white/[0.06] bg-ink-900/60 p-3"
                      >
                        <div className="text-[10px] uppercase tracking-wider text-white/40">
                          {m.l}
                        </div>
                        <div className="number-mono mt-1 text-sm font-semibold text-white">
                          {m.v}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-white/[0.06] bg-ink-900/40 p-4">
                    <div className="flex items-center justify-between text-[11px] text-white/55">
                      <span>Take rate · last 14d</span>
                      <span className="text-emerald-300 number-mono">
                        +3.8pp
                      </span>
                    </div>
                    <svg
                      viewBox="0 0 320 64"
                      className="mt-2 h-16 w-full"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <defs>
                        <linearGradient id="appLine" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="50%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.6, ease: "easeOut" }}
                        d="M0,48 L40,44 L80,38 L120,40 L160,30 L200,22 L240,18 L280,12 L320,8"
                        fill="none"
                        stroke="url(#appLine)"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature list */}
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {APP_FEATURES.map((f, idx) => (
                <motion.li
                  key={f.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="card-elev p-5"
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">
                    {f.blurb}
                  </p>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="https://calendly.com/clipandcode/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Scope a Shopify app
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="#contact" className="btn-ghost">
                See pricing on the call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

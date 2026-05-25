"use client";

import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  ShoppingCart,
  CreditCard,
  Repeat,
  Sparkles,
  Layers,
  LineChart,
} from "lucide-react";
import SectionHeader from "../SectionHeader";

const CAPS = [
  {
    icon: Target,
    title: "Conversion Rate Optimization (CRO)",
    blurb:
      "Heatmaps, session replay and analytics audits feed a continuous A/B testing roadmap. Every change is shipped with a hypothesis, a sample-size plan and a revenue-impact projection.",
    points: [
      "PDP, collection and homepage testing",
      "Quantitative + qualitative research",
      "Mobile-first variant design",
      "Statistical rigor (no vanity wins)",
    ],
    accent: "from-accent-blue to-accent-violet",
  },
  {
    icon: TrendingUp,
    title: "Average Order Value (AOV) growth",
    blurb:
      "Bundles, tiered discounts, free-ship thresholds, post-purchase offers and quantity breaks engineered into the storefront — not bolted on top.",
    points: [
      "Frequently bought together engines",
      "Dynamic free-ship progress bars",
      "Tiered discount logic",
      "Post-purchase one-click upsells",
    ],
    accent: "from-accent-violet to-accent-cyan",
  },
  {
    icon: Repeat,
    title: "Cross-sell & upsell systems",
    blurb:
      "Personalized recommendations on PDP, cart and post-purchase pages — wired to your real catalog logic, margins and inventory state.",
    points: [
      "Cart-drawer cross-sell modules",
      "PDP “complete the look” slots",
      "Margin- and inventory-aware logic",
      "Subscription / refill prompts",
    ],
    accent: "from-accent-cyan to-accent-teal",
  },
  {
    icon: ShoppingCart,
    title: "Abandoned cart recovery",
    blurb:
      "Multi-channel win-back flows across email, SMS and on-site triggers — segmented by intent, AOV tier and product category for double-digit recovery rates.",
    points: [
      "Klaviyo / Postscript / Attentive flows",
      "Browse + cart + checkout abandonment",
      "Predictive discount tiers",
      "Server-side identity resolution",
    ],
    accent: "from-accent-teal to-accent-blue",
  },
  {
    icon: CreditCard,
    title: "Checkout optimization",
    blurb:
      "Shopify Checkout Extensions, dynamic shipping logic, express-pay placement and friction audits that recover the buyers other agencies write off.",
    points: [
      "Checkout Extensibility (Shopify Plus)",
      "Express pay (Shop Pay, Apple, Google)",
      "Address autocomplete + validation",
      "Smart shipping + tax logic",
    ],
    accent: "from-accent-blue to-accent-cyan",
  },
  {
    icon: Layers,
    title: "Custom Shopify apps",
    blurb:
      "We design, build and ship Shopify apps — public or private — using the latest Polaris, App Bridge, GraphQL Admin and Theme App Extensions.",
    points: [
      "Public + private apps",
      "Theme App Extensions & blocks",
      "Webhook + GraphQL Admin integrations",
      "Shopify App Store submission",
    ],
    accent: "from-accent-violet to-accent-blue",
  },
];

export default function EcomCapabilities() {
  return (
    <section id="capabilities" className="relative py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="What we do"
          title={
            <>
              The full revenue stack — built right{" "}
              <span className="text-accent-gradient">inside your store.</span>
            </>
          }
          description="We don't run growth as a side service. CRO, AOV, recovery, checkout and custom Shopify apps are one practice — handled by the same senior team."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {CAPS.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 md:p-8 transition-all duration-300 hover:border-white/[0.16]"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${c.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.15]`}
              />
              <div className="relative">
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-glow-sm`}
                >
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                  {c.blurb}
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <Sparkles
                        className="mt-[3px] h-3.5 w-3.5 shrink-0 text-accent-cyan"
                        aria-hidden
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metric strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
            <div className="flex items-start gap-3">
              <LineChart className="mt-1 h-5 w-5 text-accent-cyan" />
              <p className="text-balance text-white/75 md:text-lg">
                Across recent Shopify engagements, our partners typically see
                <span className="text-white font-semibold"> +18% revenue per visitor</span>,
                <span className="text-white font-semibold"> +22% AOV</span> and
                <span className="text-white font-semibold"> 14–29% abandoned-cart recovery</span>
                {" "}within the first 90 days. No magic — just discipline.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Shopify Plus",
                "Liquid + Hydrogen",
                "Klaviyo",
                "Postscript",
                "Triple Whale",
                "GA4 + Mixpanel",
              ].map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

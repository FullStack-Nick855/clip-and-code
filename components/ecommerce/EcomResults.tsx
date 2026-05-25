"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const RESULTS = [
  {
    brand: "DTC Skincare · Shopify Plus",
    headline: "+24% AOV in 60 days via bundle + post-purchase",
    metric: "+24%",
    label: "AOV",
    blurb:
      "Rebuilt PDP bundles, added a dynamic free-ship progress bar and shipped a one-click post-purchase upsell. Margin-aware logic kept gift-set offers off promo SKUs.",
    tags: ["Shopify Plus", "Liquid", "Checkout Ext.", "Klaviyo"],
  },
  {
    brand: "Outdoor Apparel · DTC",
    headline: "29% recovered carts with a 3-touch flow",
    metric: "29%",
    label: "Cart recovery",
    blurb:
      "Behavioral segmentation across browse, cart and checkout. Email + SMS with intent-aware discount tiers replaced a generic 10% blast.",
    tags: ["Klaviyo", "Postscript", "Segment"],
  },
  {
    brand: "Coffee Subscription · D2C",
    headline: "Custom Shopify app · subscription LTV +37%",
    metric: "+37%",
    label: "Customer LTV",
    blurb:
      "Built a private Shopify app on top of Recharge with intelligent reactivation, skip-prediction and a merchant dashboard their CX team actually uses.",
    tags: ["Custom App", "Recharge", "Polaris", "App Bridge"],
  },
];

export default function EcomResults() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Real outcomes"
          title={
            <>
              Stores we&apos;ve grown.{" "}
              <span className="text-accent-gradient">Numbers, not narratives.</span>
            </>
          }
          description="Brand names anonymized on request. Full case-study walkthroughs available on the discovery call."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {RESULTS.map((r, idx) => (
            <motion.article
              key={r.headline}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent-violet/20 blur-3xl"
              />
              <div className="relative">
                <div className="text-[11px] uppercase tracking-wider text-white/45">
                  {r.brand}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-semibold tracking-tight text-accent-gradient number-mono">
                    {r.metric}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-white/45">
                    {r.label}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {r.headline}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {r.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <span key={t} className="chip !text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

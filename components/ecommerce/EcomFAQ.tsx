"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "../SectionHeader";

const FAQ = [
  {
    q: "Do you work with stores that aren't on Shopify Plus?",
    a: "Yes. Most of our growth playbook works on standard Shopify. Some checkout-level optimizations (Checkout Extensibility, branded post-purchase pages) require Plus — we'll be clear up front about what's possible on your plan.",
  },
  {
    q: "How fast do you typically see results?",
    a: "We aim for a meaningful win within the first 30 days — usually a checkout, cart, or AOV optimization. Compounding lift from a full CRO program shows up over a 90-day cycle as winning experiments stack.",
  },
  {
    q: "Do you build apps for the public Shopify App Store?",
    a: "Yes — both private apps (built for your store only) and public apps (listed on the App Store). We handle Polaris UI, App Bridge embedding, GraphQL Admin integrations, webhook reliability, and Shopify's listing/review process.",
  },
  {
    q: "How do you measure CRO wins so they're not vanity?",
    a: "Every test ships with a pre-registered hypothesis, sample-size plan, primary metric, and guardrail metrics. We use Bayesian methods or frequentist gates (your call) and read on revenue per visitor, not raw CVR.",
  },
  {
    q: "Will this break my theme or slow my site down?",
    a: "No. Everything is built theme-safe, code-reviewed, and performance-budgeted. We measure Core Web Vitals before and after, and we won't ship anything that regresses LCP, CLS, or INP without explicit sign-off.",
  },
  {
    q: "How do engagements work — retainer or project?",
    a: "Most stores work with us on a monthly retainer covering audit, experimentation, development, and app work. Smaller stores can engage on focused projects (e.g., a checkout audit, an upsell module, a custom app build).",
  },
];

export default function EcomFAQ() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Questions{" "}
              <span className="text-accent-gradient">stores ask us</span>{" "}
              before signing.
            </>
          }
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
          {FAQ.map((item, idx) => (
            <FAQItem key={idx} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-white/[0.02] md:px-6"
      >
        <span className="text-[15px] font-medium text-white md:text-base">
          {q}
        </span>
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80">
          {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-[14px] leading-relaxed text-white/65 md:px-6 md:pb-6 md:text-[15px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

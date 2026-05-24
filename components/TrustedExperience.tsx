"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";

const STATS = [
  {
    value: 15,
    suffix: "+",
    label: "Years of senior engineering leadership",
  },
  {
    value: 100,
    suffix: "+",
    label: "Products shipped to production",
  },
  {
    value: 6,
    suffix: "",
    label: "Verticals — Health, FinTech, EdTech, SaaS, Media, Enterprise",
  },
  {
    value: 99.95,
    suffix: "%",
    decimals: 2,
    label: "Median uptime across production systems",
  },
];

export default function TrustedExperience() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="container-wide">
        <div className="hairline mb-14" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-[1.1fr_2fr] md:gap-14"
        >
          <div>
            <div className="chip mb-4">Track record</div>
            <h2 className="font-display text-display-lg text-gradient">
              Senior teams hire us because we&apos;ve done this before.
            </h2>
            <p className="mt-4 max-w-md text-white/60">
              From regulated healthcare platforms to global FinTech rollouts,
              we&apos;ve been the technical partner trusted to make it work — at
              scale, on time, and on spec.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="card-elev p-6"
              >
                <div className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  <Counter
                    to={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </div>
                <div className="mt-3 text-sm leading-relaxed text-white/55">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="hairline mt-20" />
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import CalendlyEmbed, { CALENDLY_URL } from "../CalendlyEmbed";

export default function EcomCTA() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="conic-border relative overflow-hidden rounded-3xl border border-white/[0.1] bg-ink-800/70 p-6 backdrop-blur-xl md:p-10"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent-blue/25 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-accent-violet/25 blur-3xl" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="chip mb-4">Free 30-min audit</div>
              <h2 className="font-display text-display-lg text-gradient">
                Pick a time.{" "}
                <span className="text-accent-gradient">We&apos;ll find the leaks.</span>
              </h2>
              <p className="mt-5 max-w-xl text-white/65 md:text-lg">
                On the call we&apos;ll screenshare your store, identify the
                three highest-leverage CRO/AOV/checkout wins, and tell you
                honestly whether we&apos;re the right team to ship them. No
                pitch deck.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-white/75">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                  Live funnel + checkout review
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-violet" />
                  3 prioritized experiments + projected lift
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-blue" />
                  Honest fit assessment — yes, no, or who to call
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Open in Calendly
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href="mailto:hello@clipandcode.com"
                  className="btn-ghost"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  hello@clipandcode.com
                </a>
              </div>
            </div>

            <CalendlyEmbed height={720} />
          </div>
        </motion.div>

        <p className="mt-6 text-center text-xs text-white/40">
          Prefer to write first? <Link href="mailto:hello@clipandcode.com" className="underline-offset-4 hover:underline">hello@clipandcode.com</Link>
        </p>
      </div>
    </section>
  );
}

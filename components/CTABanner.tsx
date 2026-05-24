"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Mail } from "lucide-react";
import CalendlyEmbed, { CALENDLY_URL } from "./CalendlyEmbed";

export default function CTABanner() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="conic-border relative overflow-hidden rounded-3xl border border-white/[0.1] bg-ink-800/70 p-10 backdrop-blur-xl md:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent-blue/25 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-accent-violet/25 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/15 blur-3xl" />
          </div>

          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="chip mb-4">Let&apos;s talk</div>
              <h2 className="font-display text-display-lg text-gradient">
                Need a technical partner that can{" "}
                <span className="text-accent-gradient">actually scale?</span>
              </h2>
              <p className="mt-5 max-w-xl text-white/65 md:text-lg">
                Tell us about the system, the constraint, the deadline.
                We&apos;ll come back with a clear point of view, an honest
                assessment, and the next concrete step — within two business
                days.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-white/75">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                  Architecture &amp; constraint review
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent-violet" />
                  Risk areas + quick-win roadmap
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent-blue" />
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
                  <Calendar className="h-4 w-4" aria-hidden />
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

            <CalendlyEmbed height={680} className="shadow-card" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

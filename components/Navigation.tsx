"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "E-commerce", href: "/ecommerce", highlight: true },
  { label: "Industries", href: "/#industries" },
  { label: "Portfolio", href: "/#case-studies" },
  { label: "About", href: "/#about" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2.5" : "py-4"
      )}
    >
      <div className="container-wide">
        <nav
          className={cn(
            "mx-auto flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300",
            scrolled
              ? "border-white/10 bg-ink-900/70 backdrop-blur-xl shadow-card"
              : "border-white/[0.06] bg-white/[0.02] backdrop-blur-md"
          )}
        >
          <Logo size="md" />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors hover:bg-white/[0.05]",
                    link.highlight
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                  {link.highlight && (
                    <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent-cyan align-middle" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://calendly.com/clipandcode/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-4 !py-2.5 !text-[13px] sm:!px-5"
            >
              <span className="hidden sm:inline">Book a Call</span>
              <span className="sm:hidden">Book</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container-wide lg:hidden"
          >
            <div className="mt-2 rounded-2xl border border-white/10 bg-ink-900/95 p-3 backdrop-blur-xl">
              <ul className="grid">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      onClick={() => setOpen(false)}
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-sm hover:bg-white/[0.05]",
                        link.highlight
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      )}
                    >
                      <span>{link.label}</span>
                      {link.highlight && (
                        <span className="rounded-full bg-accent-gradient px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                          New
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

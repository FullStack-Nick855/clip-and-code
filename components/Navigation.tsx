"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "E-commerce", href: "/ecommerce", highlight: true },
  { label: "Industries", href: "/#industries" },
  {
    label: "Portfolio",
    href: "/ClipAndCode_Portfolio.html",
    submenu: [
      { label: "Web", href: "/clipandcode_portfolio_web.html" },
      { label: "Logo", href: "/clipandcode_portfolio_logos.html" },
      { label: "E-commerce", href: "clipandcode_portfolio_shopify.html" },
    ],
  },
  { label: "About", href: "/#about" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

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
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-2 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative group">
                {link.submenu ? (
                  <div
                    className={cn(
                      "flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-sm transition-all hover:bg-white/5",
                      link.highlight
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.label}

                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />

                    {link.highlight && (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-all hover:bg-white/5",
                      link.highlight
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.label}

                    {link.highlight && (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    )}
                  </Link>
                )}

                {/* Dropdown */}
                {link.submenu && (
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                    <div className="w-64 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block border-b border-white/5 px-5 py-4 text-sm text-white/70 transition hover:bg-white/5 hover:text-white last:border-none"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-2">
            
              href="https://calendly.com/clipandcode/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-4 !py-2.5 !text-[13px] sm:!px-5"
            >
              <span className="hidden sm:inline">Book a Call</span>
              <span className="sm:hidden">Book</span>

              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="container-wide lg:hidden"
          >
            <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/95 p-3 backdrop-blur-xl">
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    {link.submenu ? (
                      <button
                        type="button"
                        onClick={() => setPortfolioOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            portfolioOpen && "rotate-180"
                          )}
                        />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}

                    {link.submenu && portfolioOpen && (
                      <div className="ml-4 mb-2">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-4 py-2 text-sm text-white/60 hover:bg-white/5 hover:text-white"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
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

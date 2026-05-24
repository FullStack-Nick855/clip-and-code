"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo({
  compact = false,
  size = "md",
}: {
  compact?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const dims =
    size === "lg"
      ? { box: "h-11 w-11", svg: "h-5 w-5", text: "text-[18px]" }
      : size === "sm"
      ? { box: "h-8 w-8", svg: "h-4 w-4", text: "text-[14px]" }
      : { box: "h-10 w-10", svg: "h-[18px] w-[18px]", text: "text-[16px]" };

  return (
    <Link
      href="/"
      aria-label="Clip & Code home"
      className="group inline-flex items-center gap-3"
    >
      <motion.span
        whileHover={{ scale: 1.04, rotate: -3 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
        className={`relative inline-flex ${dims.box} items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue via-accent-violet to-accent-cyan shadow-[0_8px_24px_-8px_rgba(139,92,246,0.55)]`}
      >
        {/* Inner mask so the gradient reads as a border */}
        <span className="absolute inset-[1.5px] rounded-[10px] bg-ink-900" />
        {/* Glow underneath */}
        <span
          aria-hidden
          className="absolute -inset-1 -z-10 rounded-2xl bg-accent-gradient opacity-40 blur-md transition-opacity duration-500 group-hover:opacity-70"
        />
        {/* Animated shine */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[1.5px] overflow-hidden rounded-[10px]"
        >
          <span className="absolute -inset-x-4 -inset-y-2 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </span>

        <svg
          viewBox="0 0 24 24"
          className={`relative ${dims.svg} text-white`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M8 6 3 12l5 6" />
          <path d="m16 6 5 6-5 6" />
          <path d="m14 4-4 16" />
        </svg>
      </motion.span>
      {!compact && (
        <span
          className={`font-display font-semibold tracking-tight text-white ${dims.text}`}
        >
          Clip
          <span className="px-1 text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan">
            &amp;
          </span>
          Code
        </span>
      )}
    </Link>
  );
}

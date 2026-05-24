"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({
  to,
  duration = 1.6,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 50, damping: 18, mass: 0.6 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      mv.set(to);
    }
  }, [inView, mv, to]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setDisplay(
        v.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      );
    });
    return () => unsub();
  }, [spring, decimals]);

  // Suppress unused warning for duration without changing API
  void duration;

  return (
    <span ref={ref} className="number-mono">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

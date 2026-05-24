"use client";

import React from "react";

export default function Marquee({
  items,
  speed = 40,
  className,
}: {
  items: React.ReactNode[];
  /** Seconds for one full loop */
  speed?: number;
  className?: string;
}) {
  // Duplicate the list so the loop is seamless.
  return (
    <div className={`mask-fade-x relative overflow-hidden ${className ?? ""}`}>
      <div
        className="flex w-max items-center gap-12"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {[0, 1].map((dup) => (
          <div
            key={dup}
            className="flex shrink-0 items-center gap-12"
            aria-hidden={dup === 1}
          >
            {items.map((item, i) => (
              <span key={i} className="shrink-0">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

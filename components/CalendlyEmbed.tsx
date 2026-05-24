"use client";

import { useEffect, useState } from "react";

type Props = {
  url?: string;
  /**
   * Desktop height in pixels. Mobile uses a smaller responsive height.
   */
  height?: number;
  /**
   * Mobile height in pixels.
   */
  mobileHeight?: number;
  className?: string;
  /**
   * Lazy-load: only mount the iframe after the user scrolls it near the viewport.
   * Keeps initial page weight tiny.
   */
  lazy?: boolean;
};

export const CALENDLY_URL = "https://calendly.com/clipandcode/30min";

export default function CalendlyEmbed({
  url = CALENDLY_URL,
  height = 720,
  mobileHeight = 560,
  className,
  lazy = true,
}: Props) {
  const [shouldLoad, setShouldLoad] = useState(!lazy);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!lazy || shouldLoad || !ref) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(ref);
    return () => obs.disconnect();
  }, [lazy, shouldLoad, ref]);

  // Calendly inline embed params for the dark theme
  const params = new URLSearchParams({
    hide_event_type_details: "0",
    hide_gdpr_banner: "1",
    background_color: "0B0F19",
    text_color: "ffffff",
    primary_color: "8B5CF6",
  });
  const embedSrc = `${url}?${params.toString()}`;

  // Pick the appropriate height: mobile-first via matchMedia.
  const [h, setH] = useState<number>(mobileHeight);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setH(mq.matches ? height : mobileHeight);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [height, mobileHeight]);

  return (
    <div
      ref={setRef}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 ${className ?? ""}`}
      style={{ height: h }}
    >
      {shouldLoad ? (
        <iframe
          src={embedSrc}
          title="Schedule a 30-minute discovery call with Clip & Code"
          width="100%"
          height="100%"
          frameBorder="0"
          loading="lazy"
          className="h-full w-full"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-9 w-9 animate-pulse-glow rounded-full bg-accent-gradient" />
            <div className="mt-3 text-xs text-white/55">
              Loading calendar…
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

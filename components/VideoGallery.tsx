"use client";

// components/VideoGallery.tsx
// ---------------------------------------------------------------------------
// "Editing-suite" gallery — thumbnail + performance fix.
//   - YouTube thumbnails now use hqdefault (ALWAYS exists) -> no black cards,
//     no slow failed maxresdefault requests. Falls back to mqdefault, then to a
//     designed placeholder that sits BEHIND every card (never pure black).
//   - Self-hosted clips load nothing until hover (preload="none").
//   - Numbered pagination (9 per page) keeps the DOM small.
// No external deps. Tailwind only. Import path kept as your "@/lib/videoes".
// ---------------------------------------------------------------------------

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  videos as ALL_VIDEOS,
  categories,
  type VideoItem,
  type CategoryId,
} from "@/lib/videoes";

const PER_PAGE = 9;

// hqdefault exists for EVERY public video; mqdefault is the smaller fallback.
const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const ytThumbFallback = (id: string) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;

/* ----------------------------- Icons ----------------------------- */
function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}
function FilmIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" />
    </svg>
  );
}

/* --------------------- Reveal-on-scroll hook --------------------- */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          ob.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);
  return { ref, inView };
}

/* --------------------------- Lightbox ---------------------------- */
function Lightbox({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const portrait = video.orientation === "portrait";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl animate-[fadeIn_.25s_ease]"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-amber-400 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] ring-1 ring-amber-400/10 animate-[popIn_.3s_cubic-bezier(.2,.8,.2,1)] ${
          portrait ? "max-w-[420px]" : "max-w-5xl"
        }`}
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 truncate font-mono text-[11px] uppercase tracking-widest text-white/40">
            {video.source === "youtube" ? "youtube" : "local"} / {video.id}
          </span>
        </div>

        <div className={portrait ? "aspect-[9/16]" : "aspect-video"}>
          {video.source === "youtube" ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${video.src}?autoplay=1&rel=0${
                video.start ? `&start=${video.start}` : ""
              }`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video className="h-full w-full bg-black" src={video.src} controls autoPlay playsInline />
          )}
        </div>
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <h3 className="font-semibold text-white">{video.title}</h3>
          <span className="font-mono text-[11px] uppercase tracking-widest text-amber-400">
            {video.category}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Card ------------------------------ */
function VideoCard({
  video,
  index,
  onOpen,
}: {
  video: VideoItem;
  index: number;
  onOpen: () => void;
}) {
  const portrait = video.orientation === "portrait";
  const isFile = video.source === "file";
  const [imgOk, setImgOk] = useState(true); // media still loading/ok
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const { ref, inView } = useInView<HTMLButtonElement>();

  const playPreview = () => {
    const v = vidRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };
  const stopPreview = () => {
    const v = vidRef.current;
    if (v) {
      v.pause();
      try {
        v.currentTime = 0.5;
      } catch {}
    }
  };

  const num = String(index + 1).padStart(2, "0");

  return (
    <button
      ref={ref}
      onClick={onOpen}
      onMouseEnter={isFile ? playPreview : undefined}
      onMouseLeave={isFile ? stopPreview : undefined}
      style={{ transitionDelay: `${Math.min(index % PER_PAGE, 8) * 45}ms` }}
      className={`group mb-6 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] text-left ring-1 ring-transparent transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-amber-400/40 hover:ring-amber-400/20 hover:shadow-[0_24px_60px_-20px_rgba(245,165,36,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className={`relative ${portrait ? "aspect-[9/16]" : "aspect-video"}`}>
        {/* designed placeholder ALWAYS behind — card is never pure black */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/[0.07] via-[#101014] to-amber-500/[0.06]">
          <FilmIcon className="h-10 w-10 text-white/15" />
        </div>

        {video.source === "youtube" ? (
          // YouTube: hqdefault (always exists) -> mqdefault -> placeholder
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={ytThumb(video.src)}
            alt={video.title}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.dataset.fallback) {
                img.dataset.fallback = "1";
                img.src = ytThumbFallback(video.src);
              } else {
                setImgOk(false); // both failed -> reveal placeholder
              }
            }}
            className={`relative h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08] ${
              imgOk ? "" : "hidden"
            }`}
          />
        ) : inView ? (
          // Self-hosted: show a still frame (#t=0.5) once in view, play on hover.
          // preload="metadata" keeps it light; only the current page mounts.
          <video
            ref={vidRef}
            src={`${video.src}#t=0.5`}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={video.title}
            onError={() => setImgOk(false)} // file missing -> reveal placeholder
            className={`relative h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
              imgOk ? "" : "hidden"
            }`}
          />
        ) : null}

        {/* gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 transition-opacity duration-500 group-hover:from-black/70" />

        {/* top row */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3.5">
          <span className="font-mono text-[11px] tracking-widest text-white/55">/ {num}</span>
          <span className="rounded-md border border-white/15 bg-black/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-white/70 backdrop-blur">
            {portrait ? "9:16" : "16:9"}
          </span>
        </div>

        {/* center play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 scale-90 items-center justify-center rounded-full bg-amber-400 text-black opacity-0 shadow-[0_8px_30px_rgba(245,165,36,0.6)] transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            <PlayIcon className="ml-1 h-7 w-7" />
          </span>
        </div>

        {/* bottom */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="flex items-end justify-between gap-3">
            <h3 className="text-[15px] font-semibold leading-tight text-white drop-shadow">
              {video.title}
            </h3>
            <span className="shrink-0 rounded-full bg-amber-400/90 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-black">
              {video.source === "youtube" ? "YT" : "MP4"}
            </span>
          </div>
          <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-0 rounded-full bg-amber-400 transition-all duration-[2500ms] ease-linear group-hover:w-full" />
          </div>
        </div>
      </div>
    </button>
  );
}

/* --------------------------- Pagination -------------------------- */
function getPages(page: number, count: number): (number | "…")[] {
  if (count <= 7) return Array.from({ length: count }, (_, i) => i + 1);
  const set = new Set<number>([1, count, page, page - 1, page + 1]);
  const sorted = [...set].filter((p) => p >= 1 && p <= count).sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (p - prev > 1) out.push("…");
    out.push(p);
    prev = p;
  }
  return out;
}

/* --------------------------- Gallery ----------------------------- */
export default function VideoGallery() {
  const [active, setActive] = useState<CategoryId>("ugc");
  const [open, setOpen] = useState<VideoItem | null>(null);
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? ALL_VIDEOS : ALL_VIDEOS.filter((v) => v.category === active)),
    [active]
  );

  useEffect(() => {
    setPage(1);
  }, [active]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const paged = filtered.slice(start, start + PER_PAGE);

  const close = useCallback(() => setOpen(null), []);
  const goTo = (p: number) => {
    setPage(Math.min(Math.max(1, p), pageCount));
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const total = ALL_VIDEOS.length;
  const formats = new Set(ALL_VIDEOS.map((v) => v.orientation)).size;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#08080B] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_90%_at_50%_-10%,rgba(245,165,36,0.16),transparent)]" />
        <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute -right-40 top-2/3 h-[420px] w-[420px] rounded-full bg-orange-600/10 blur-[120px]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <header className="mb-14 sm:mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/50">
              rec · clip &amp; code showreel
            </span>
          </div>

          <h1 className="max-w-4xl text-balance text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
            Frames that{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text italic text-transparent">
              move
            </span>{" "}
            people.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
            Cuts, color, motion and sound — cinematic long-form, scroll-stopping
            shorts and UGC ads, all in one reel.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-white/40">
            <span><span className="text-amber-400">{String(total).padStart(2, "0")}</span> total clips</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span><span className="text-amber-400">{String(categories.length - 1).padStart(2, "0")}</span> categories</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span><span className="text-amber-400">{String(formats).padStart(2, "0")}</span> formats</span>
          </div>
        </header>

        <div className="mb-12 sm:mb-14">
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.16) 0 1px, transparent 1px 16px)",
              }}
            />
            <div className="relative flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {categories.map((c) => {
                const isActive = active === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:text-[13px] ${
                      isActive
                        ? "bg-amber-400 text-black shadow-[0_0_28px_-6px_rgba(245,165,36,0.9)]"
                        : "border border-white/12 bg-[#0c0c10] text-white/65 hover:border-amber-400/40 hover:text-white"
                    }`}
                  >
                    {c.label}
                    {isActive && (
                      <span className="absolute -bottom-[7px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[6px] border-t-[7px] border-x-transparent border-t-amber-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          <p className="mt-6 text-center font-mono text-xs text-white/35">
            showing {String(paged.length).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
            {pageCount > 1 ? `  ·  page ${page}/${pageCount}` : ""}
          </p>
        </div>

        <div ref={gridRef} className="scroll-mt-24 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {paged.map((v, i) => (
            <VideoCard key={v.id} video={v} index={start + i} onOpen={() => setOpen(v)} />
          ))}
        </div>

        {pageCount > 1 && (
          <nav aria-label="Gallery pages" className="mt-14 flex items-center justify-center gap-2 font-mono text-sm">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className="flex h-10 items-center rounded-full border border-white/12 px-4 text-white/70 transition hover:border-amber-400/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              ‹ Prev
            </button>

            {getPages(page, pageCount).map((p, idx) =>
              p === "…" ? (
                <span key={`e${idx}`} className="px-1.5 text-white/30">…</span>
              ) : (
                <button
                  key={p}
                  onClick={() => goTo(p)}
                  aria-current={p === page ? "page" : undefined}
                  className={`h-10 w-10 rounded-full transition ${
                    p === page
                      ? "bg-amber-400 text-black shadow-[0_0_24px_-6px_rgba(245,165,36,0.9)]"
                      : "border border-white/12 text-white/70 hover:border-amber-400/40 hover:text-white"
                  }`}
                >
                  {p}
                </button>
              )
            )}

            <button
              onClick={() => goTo(page + 1)}
              disabled={page === pageCount}
              className="flex h-10 items-center rounded-full border border-white/12 px-4 text-white/70 transition hover:border-amber-400/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next ›
            </button>
          </nav>
        )}
      </div>

      {open && <Lightbox video={open} onClose={close} />}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popIn { from { opacity: 0; transform: scale(.96) } to { opacity: 1; transform: scale(1) } }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquareText,
  X,
  Send,
  ArrowUpRight,
  Sparkles,
  Check,
} from "lucide-react";

const PHONE = "917657855295";
const FOUNDER = "Gourav (Nick)";
const BRAND = "Clip & Code";
const POPUP_KEY = "cc_chat_popup_dismissed_v1";

const QUICK_REPLIES = [
  {
    label: "I need help with a Shopify store",
    text:
      "Hi Clip & Code — I'd like to talk about my Shopify store (CRO / AOV / apps).",
  },
  {
    label: "I want to scope an AI / automation project",
    text:
      "Hi Clip & Code — I'm exploring an AI or workflow automation project.",
  },
  {
    label: "We need enterprise / SaaS engineering",
    text:
      "Hi Clip & Code — looking for a senior engineering partner for an enterprise / SaaS build.",
  },
  {
    label: "Just say hello",
    text: "Hi Clip & Code — wanted to introduce myself.",
  },
];

function waLink(text: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [custom, setCustom] = useState("");

  // Auto-popup bubble once per session, ~4s after load
  useEffect(() => {
    if (typeof window === "undefined") return;
    let dismissed = false;
    try {
      dismissed = window.sessionStorage.getItem(POPUP_KEY) === "1";
    } catch {
      // sessionStorage might be blocked — fail silent.
    }
    if (dismissed) return;
    const t = setTimeout(() => {
      // Don't show the bubble if user already opened the full panel.
      setShowBubble((b) => (b ? b : true));
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  // When the user opens the full panel, retire the teaser bubble.
  useEffect(() => {
    if (open) setShowBubble(false);
  }, [open]);

  const dismissBubble = () => {
    setShowBubble(false);
    try {
      window.sessionStorage.setItem(POPUP_KEY, "1");
    } catch {
      /* noop */
    }
  };

  const isoTime = useMemo(() => {
    const d = new Date();
    return d.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, [open]);

  return (
    <div
      aria-live="polite"
      className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      {/* Teaser bubble */}
      <AnimatePresence>
        {showBubble && !open && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="relative w-[280px] rounded-2xl border border-white/10 bg-ink-800/95 p-4 shadow-card backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={dismissBubble}
              aria-label="Dismiss"
              className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-white/45 hover:bg-white/[0.06] hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <div className="flex items-start gap-3 pr-5">
              <Avatar />
              <div>
                <div className="text-[11px] uppercase tracking-wider text-white/40">
                  {FOUNDER} · {BRAND}
                </div>
                <div className="mt-1 text-[13px] leading-snug text-white/85">
                  Hi! 👋 Need help scoping a project? I usually reply in
                  minutes.
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-white"
                >
                  Start the conversation
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
            </div>
            {/* tail */}
            <div
              aria-hidden
              className="absolute -bottom-1.5 right-7 h-3 w-3 rotate-45 border-b border-r border-white/10 bg-ink-800/95"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 230, damping: 24 }}
            role="dialog"
            aria-label="Chat with Clip & Code"
            className="flex w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800/95 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-accent-violet via-accent-blue to-accent-cyan p-4">
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(40% 80% at 10% 10%, white, transparent), radial-gradient(40% 80% at 90% 90%, white, transparent)",
                }}
              />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar onLight />
                  <div className="leading-tight">
                    <div className="text-sm font-semibold text-white">
                      {FOUNDER}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-white/85">
                      <span className="relative inline-flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                      </span>
                      Online · replies in minutes
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    dismissBubble();
                  }}
                  aria-label="Close chat"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white/95 hover:bg-white/25"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Body / message stream */}
            <div className="max-h-[60vh] space-y-3 overflow-y-auto bg-ink-900/60 p-4">
              <Message
                from="them"
                time={isoTime}
                body={
                  <>
                    Hi there — I&apos;m{" "}
                    <span className="text-white font-medium">{FOUNDER}</span>,
                    senior software consultant at {BRAND}.
                  </>
                }
              />
              <Message
                from="them"
                delay={0.2}
                body={
                  <>
                    What can I help you with today?{" "}
                    <span className="text-white/55">
                      Picking an option below sends a WhatsApp message —
                      we&apos;ll continue there.
                    </span>
                  </>
                }
              />

              <div className="space-y-2 pt-1">
                {QUICK_REPLIES.map((q, i) => (
                  <motion.a
                    key={q.label}
                    href={waLink(q.text)}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white/85 transition-colors hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />
                      {q.label}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const trimmed = custom.trim();
                const text = trimmed
                  ? `Hi Clip & Code — ${trimmed}`
                  : "Hi Clip & Code — I'd like to chat.";
                window.open(waLink(text), "_blank", "noopener,noreferrer");
              }}
              className="flex items-center gap-2 border-t border-white/[0.08] bg-ink-900/70 p-3"
            >
              <input
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder="Or type a message…"
                aria-label="Message"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] text-white placeholder:text-white/40 focus:border-white/25 focus:outline-none focus:ring-2 focus:ring-accent-violet/30"
              />
              <button
                type="submit"
                aria-label="Send on WhatsApp"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue via-accent-violet to-accent-cyan text-white shadow-glow-sm transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="flex items-center justify-between gap-2 border-t border-white/[0.06] bg-ink-900/40 px-4 py-2 text-[11px] text-white/40">
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3 w-3 text-emerald-300" />
                Encrypted via WhatsApp
              </span>
              <span>Powered by {BRAND}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating action button */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet via-accent-blue to-accent-cyan shadow-[0_12px_40px_-8px_rgba(139,92,246,0.55)] transition-transform hover:scale-[1.04]"
      >
        {/* Pulse ring */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-accent-violet opacity-40 animate-ping"
        />
        {/* Inner gloss */}
        <span
          aria-hidden
          className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/15 via-transparent to-transparent"
        />
        <AnimatePresence initial={false} mode="wait">
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="relative h-6 w-6 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageSquareText className="relative h-6 w-6 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Online indicator dot */}
        {!open && (
          <span
            aria-hidden
            className="absolute right-0 top-0 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-ink-900 bg-emerald-400"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
          </span>
        )}
      </motion.button>
    </div>
  );
}

function Avatar({ onLight = false }: { onLight?: boolean }) {
  return (
    <div
      className={`relative inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full ${
        onLight ? "ring-2 ring-white/40" : "ring-1 ring-white/10"
      } bg-gradient-to-br from-ink-700 to-ink-900`}
    >
      <svg
        viewBox="0 0 64 64"
        className="h-7 w-7 text-white/85"
        aria-hidden
      >
        <defs>
          <linearGradient id="chatAvG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="22" r="11" fill="url(#chatAvG)" />
        <path
          d="M10 56 C10 42, 22 36, 32 36 C42 36, 54 42, 54 56 Z"
          fill="url(#chatAvG)"
        />
      </svg>
      <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink-900 bg-emerald-400" />
    </div>
  );
}

function Message({
  from,
  body,
  time,
  delay = 0,
}: {
  from: "me" | "them";
  body: React.ReactNode;
  time?: string;
  delay?: number;
}) {
  const isMe = from === "me";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className={`flex ${isMe ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
          isMe
            ? "bg-accent-gradient text-white"
            : "border border-white/[0.08] bg-white/[0.03] text-white/85"
        }`}
      >
        {body}
        {time && (
          <div className="mt-1 text-[10px] text-white/45">{time}</div>
        )}
      </div>
    </motion.div>
  );
}

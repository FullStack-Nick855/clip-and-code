"use client";

import { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { Clapperboard, TrendingUp, ShieldCheck } from "lucide-react";
import "./video-editing.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// Card colour theme for the "What I can do" section: "gradient" or "dark"
const CARD_THEME: "gradient" | "dark" = "gradient";

/* ───────────── "NOW EDITING" loader ───────────── */
const TOTAL_SECONDS = 17 * 60 + 36; // timeline length shown in the timecode (00:17:36:00)
const LOOP_MS = 20000; // real time the bar takes to run from start to end
const FPS = 24;

function toTimecode(progress: number) {
  const totalFrames = Math.floor(progress * TOTAL_SECONDS * FPS);
  const ff = totalFrames % FPS;
  const secs = Math.floor(totalFrames / FPS);
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(Math.floor(secs / 3600))}:${p(Math.floor((secs % 3600) / 60))}:${p(secs % 60)}:${p(ff)}`;
}

function NowEditing() {
  const [progress, setProgress] = useState(0.67);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    const tick = (now: number) => {
      setProgress(((now - start) % LOOP_MS) / LOOP_MS);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div className="now" aria-hidden="true">
      <div className="now-bar">
        <div className="now-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="now-row">
        <span>NOW EDITING</span>
        <span className="now-time">{toTimecode(progress)}</span>
      </div>
    </div>
  );
}

const tools = [
  "Premiere Pro", "After Effects", "DaVinci Resolve", "Color Grading",
  "Motion Graphics", "Sound Design", "YouTube Edits", "Short-Form Editing",
];

const longVideos = [
  { id: "7QR_cYQ75KM", tag: "Add Finance Video", title: "Financial Storytelling" },
  { id: "SnnbGn370hM", tag: "Add Vlog Video", title: "Lifestyle Edits" },
  { id: "l37Cpdjkobs", tag: "Add Gaming Video", title: "Gameplay Edits" },
  { id: "r1Rlxuzob-0", tag: "Add Real Estate Video", title: "Real Estate Films" },
];

const shorts = [
  { id: "0nGc2bvLCPo", label: "Captions · Punch-ins" },
  { id: "-p6Ojv2QHIc", label: "Graphs · B-roll" },
  { id: "AP7IkraqWRY", label: "Memes · SFX" },
  { id: "LBFCAQlvlX0", label: "Speed ramps · Text" },
  { id: "kBLC3txG5aE", label: "Story · Music" },
  { id: "jM3jmZ-vhoI", label: "CTA · Retention" },
];

const services = [
  { title: "Short-Form Content", text: "Fast, punchy edits for Reels, Shorts, TikTok, ads and creator clips.", points: ["Hook-first structure", "Captions & sound design", "Platform-ready exports"] },
  { title: "YouTube & Long Form", text: "Clean narrative edits for talking-head videos, vlogs, travel films, interviews and explainers.", points: ["Story pacing", "B-roll selection", "Music, mix & polish"] },
  { title: "Brand & Promo Edits", text: "Launch videos, product promos, event recaps and agency client edits that feel premium.", points: ["Color grading", "Motion graphics", "Revision-friendly workflow"] },
];

const capabilities = [
  { title: "Short Form Video", text: "We craft bite-sized, high-impact edits perfect for capturing attention on platforms like Instagram Reels, YouTube Shorts, and TikTok. Our expertise ensures your short-form content is engaging, dynamic, and packs a punch within seconds.", tilt: -3 },
  { title: "Thumbnail Design", text: "Your thumbnail is your video's first impression. We create eye-catching, platform-specific thumbnails that entice viewers to click and watch. Our designs will accurately represent your content while grabbing attention in a crowded feed.", tilt: 2.5 },
  { title: "SEO Optimization", text: "We go beyond the edit! We optimize your video titles, descriptions, and tags to increase discoverability in search results on YouTube and other platforms. This helps your ideal audience find your content more easily.", tilt: -2 },
  { title: "Long-Form Video", text: "We transform your in-depth content into polished, captivating long-form videos. Whether it's a detailed tutorial, an insightful interview, or a captivating vlog, we turn your raw footage into a cohesive, engaging experience for viewers.", tilt: 3 },
  { title: "Consulting", text: "Unsure where to start or need a fresh perspective? We offer personalized consultations to help you brainstorm video ideas, develop a content strategy, and optimize your approach for maximum impact on YouTube and Instagram.", tilt: -2.5 },
];

const steps = [
  { title: "Strategy", text: "We define the goal, platform, audience, references, deadline, and what the video should make viewers do." },
  { title: "Story", text: "I shape the strongest hook, select the useful footage, and build a clear viewing path before polishing." },
  { title: "Execution", text: "The edit gets pacing, captions, sound design, color, motion graphics, and platform-specific formatting." },
  { title: "Impact", text: "You receive final exports plus revisions, thumbnails or cutdowns if included in the project scope." },
];

const reviews = [
  { text: "We weren't just looking for someone to edit videos—we needed content that actually got people interested in our brand. The reels Mayank delivered felt professional, engaging, and perfectly matched our vibe. We noticed higher engagement almost immediately and the whole process was incredibly smooth.", name: "Sarah Mitchell", role: "Café Owner" },
  { text: "I sent over hours of footage with very little direction and got back a film that felt cinematic, emotional, and polished. The pacing, music, and storytelling turned simple clips into something people genuinely wanted to watch.", name: "Daniel Carter", role: "Travel Content Creator" },
  { text: "What stood out most wasn't the editing—it was the understanding of audience retention. Every cut felt intentional. The final video kept viewers engaged and represented my brand better than I imagined.", name: "James Walker", role: "Founder & Creator" },
  { text: "Reliable, fast, and incredibly easy to work with. We trusted Mayank with multiple client projects, and he consistently delivered high-quality edits that matched each brand's style while meeting tight deadlines.", name: "Alex Thompson", role: "Marketing Lead" },
  { text: "The difference between average content and great content is attention to detail. From storytelling to sound design, every part of the edit felt premium. The final result looked like something from a much larger production team.", name: "Rachel Morgan", role: "Brand Manager" },
  { text: "Great footage gets views. Great storytelling gets results. Mayank understands the difference.", name: "Michael Reed", role: "Creative Director" },
];

function CapabilityCard({
  item,
  index,
  total,
  progress,
}: {
  item: (typeof capabilities)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // while the next card slides over it, this card shrinks, straightens and dims
  const start = index / total;
  const targetScale = 1 - (total - 1 - index) * 0.045;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const rotate = useTransform(progress, [start, 1], [item.tilt, item.tilt * 0.35]);
  const shade = useTransform(progress, [start, 1], [1, 0.72]);
  const filter = useMotionTemplate`brightness(${shade})`;

  return (
    <div className="cap-stick" style={{ top: 120 + index * 22, zIndex: index + 1 }}>
      <motion.div
        className="cap-card"
        style={{ scale, rotate, filter }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="cap-num">0{index + 1}</span>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </motion.div>
    </div>
  );
}

function CapabilitiesSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start start", "end end"],
  });
  return (
    <section id="capabilities" className={`cap cap--${CARD_THEME}`}>
      <div className="w cap-grid">
        <div className="cap-left">
          <h2>
            What I can do <span className="g">for You</span>
          </h2>
          <p>
            We imagine and build experiences, products and businesses that
            disrupt the status quo, win hearts and realize the future. Explore
            how we work.
          </p>
          <a
            className="btn p"
            href="https://calendly.com/clipandcode/30min?month=2026-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call Now →
          </a>
        </div>
        <div className="cap-right" ref={listRef}>
          {capabilities.map((c, i) => (
            <CapabilityCard
              key={c.title}
              item={c}
              index={i}
              total={capabilities.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function VideoEditingPage() {
  const strip = [...tools, ...tools];

  // "use client" pages can't export `metadata`, so set the tab title here
  useEffect(() => {
    document.title = "Clip and Code — Video Editing & Creative Post-Production";
  }, []);

  return (
    <>
    <section className="relative overflow-hidden pt-32 md:pt-40 ">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-[600px] bg-radial-spot" />
      </div>

      <div className="container-wide relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ───────── LEFT ───────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="chip mb-6"
            >
              <Clapperboard className="h-3.5 w-3.5 text-accent-cyan" />
              Clip and Code · Video Editing for Creators &amp; Brands
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-display-xl text-gradient"
            >
              You have 3 seconds. <br />
              <span className="text-accent-gradient">I make them count.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/65 md:text-lg"
            >
              I help creators, coaches, agencies, and small brands turn raw
              footage into sharp videos built for retention: reels, YouTube
              edits, travel films, launch promos, talking-head content, and
              paid social ads.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link href="#work" className="btn-primary">
                Watch the Reel
              </Link>
              <Link
                href="https://calendly.com/clipandcode/30min?month=2026-10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Get a Quote
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-white/45"
            >
              <span className="inline-flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5 text-accent-cyan" />
                Avg. 48–72h turnaround · 100% remote-friendly
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-accent-teal" />
                Revision-friendly · Platform-ready exports
              </span>
            </motion.div>
          </div>

          {/* ───────── RIGHT ───────── */}
          <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-[40px] bg-soft-gradient blur-3xl opacity-60"
            />

            {/* animation card (same border style as the e-commerce card) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="conic-border relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/85 shadow-card backdrop-blur-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imgs/video-editing-animation.svg"
                alt="Video editing timeline animation"
                width={900}
                height={540}
                className="block h-auto w-full"
              />
            </motion.div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="absolute -right-3 -top-6 hidden rounded-2xl border border-white/10 bg-ink-800/90 p-3 shadow-glow-md backdrop-blur-xl md:block animate-float-slower"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient shadow-glow-sm">
                  <Clapperboard className="h-4 w-4 text-white" />
                </span>
                <div className="leading-tight">
                  <div className="text-[11px] text-white/45">Premiere Pro · After Effects</div>
                  <div className="text-sm font-medium text-white">
                    Final cut · export ready
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

      <div className={`ve ${inter.className}`}>
        <main id="top">
          <div className="w" style={{ paddingBottom: 40 }}>
            <NowEditing />
          </div>

        <div className="tools" aria-hidden="true">
          <div>{strip.map((t, i) => (
            <span key={i}>
              {t}
              <i className="dot" />
            </span>
          ))}</div>
        </div>

        <section id="work">
          <div className="w">
            <div className="tag">My Work</div>
            <h2>The work speaks first.</h2>
            <p className="lead">A quick look at pacing, story, color, sound, and scroll-stopping edits made for real client goals.</p>
            <div className="tag" id="long-videos" style={{ marginTop: 40 }}>Long YouTube Videos</div>
            <h3 style={{ fontSize: "1.6rem" }}>Built for watch time.</h3>
            <div className="grid g2">
              {longVideos.map((v) => (
                <div className="card" key={v.id}>
                  <iframe className="vid" loading="lazy" title={v.title} src={`https://www.youtube.com/embed/${v.id}`} allowFullScreen />
                  <div className="tag">{v.tag}</div>
                  <h3>{v.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="shorts" className="alt">
          <div className="w">
            <div className="tag">Shorts &amp; Reels</div>
            <h2>6 short-form edit styles.</h2>
            <p className="lead">Six vertical formats for creators and brands who need consistent short-form output across YouTube Shorts, Instagram Reels, and TikTok.</p>
            <div className="sh">
              {shorts.map((s, i) => (
                <a key={s.id} href={`https://youtube.com/shorts/${s.id}`} target="_blank" rel="noopener noreferrer">
                  <iframe loading="lazy" title={`Short ${i + 1}`} src={`https://www.youtube.com/embed/${s.id}`} />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CapabilitiesSection />

        <section id="services">
          <div className="w">
            <div className="tag">What Clients Book</div>
            <h2>Editing that fits the platform.</h2>
            <p className="lead">Choose the kind of content you need, send the footage and reference style, and I will shape the edit around your audience, deadline, and brand voice.</p>
            <div className="grid g3">
              {services.map((s) => (
                <div className="card" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="alt">
          <div className="w">
            <div className="tag">How It Works</div>
            <h2>From footage to final cut.</h2>
            <div className="grid g4">
              {steps.map((s, i) => (
                <div className="card" key={s.title}>
                  <div className="step">{i + 1}</div>
                  <div className="tag">Scene 0{i + 1}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials">
          <div className="w">
            <div className="tag">Client Cuts</div>
            <h2>Client testimonial</h2>
            <div className="grid g3">
              {reviews.map((r) => (
                <div className="card" key={r.name}>
                  <div className="stars">★★★★★</div>
                  <p>{r.text}</p>
                  <div className="who">{r.name}<small>{r.role}</small></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={{ paddingTop: 0 }}>
          <div className="w">
            <div className="ct">
              <div className="tag">Got Footage? Let&apos;s Talk</div>
              <h2>Let&apos;s cut something that performs.</h2>
              <p className="lead">Send your footage and a quick brief. Turnaround is usually 48–72 hours depending on length and scope.</p>
              <div className="cta">
                <a className="btn p" href="mailto:gavy@clipandcode.com?subject=Project%20Inquiry">Email Gavy</a>
              </div>
              <div className="info">
                <div><b>Email</b>gavy@clipandcode.com</div>
                <div><b>Phone</b><a href="tel:+917657855295">+91 7657 855 295</a></div>
              </div>
            </div>
          </div>
        </section>
        </main>
      </div>
    </>
  );
}
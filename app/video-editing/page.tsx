import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./video-editing.css";
import NowEditing from "./NowEditing";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Clip and Code — Video Editing & Creative Post-Production",
  description:
    "Clip and Code — reels, YouTube edits, travel films and brand content cut to hold attention.",
  alternates: { canonical: "https://clipandcode.com/video-editing" },
};

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

export default function VideoEditingPage() {
  const strip = [...tools, ...tools];
  return (
    <div className={`ve ${inter.className}`}>
      <main id="top">
        {/* ───────── HERO: text on the left, animation on the right ───────── */}
        <section className="hero">
          <div className="w">
            <div className="hero-grid">
              <div className="hero-text">
                <div className="badge"><i />EditSphere — Video Editing for Creators &amp; Brands</div>
                <h1>
                  You have 3 seconds.
                  <br />
                  <span className="g">I make them count.</span>
                </h1>
                <p>I help creators, coaches, agencies, and small brands turn raw footage into sharp videos built for retention: reels, YouTube edits, travel films, launch promos, talking-head content, and paid social ads.</p>
                <div className="cta">
                  <a className="btn p" href="#work">Watch the Reel</a>
                  <a className="btn o" href="https://calendly.com/clipandcode/30min?month=2026-10">Get a Quote</a>
                </div>
              </div>

              <div className="hero-anim">
                {/* file lives in: public/imgs/video-editing-animation.svg */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/imgs/video-editing-animation.svg"
                  alt="Video editing timeline animation"
                  width={960}
                  height={600}
                />
              </div>
            </div>

            <NowEditing />
          </div>
        </section>

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
  );
}
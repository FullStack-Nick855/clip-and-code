"use client";
import SectionHeader from "./SectionHeader";
import { caseStudies, type CaseStudy } from "./portfolioContent";
import { useState, useEffect } from "react";

type Position = "active" | "left1" | "left2" | "right1" | "right2" | "hidden";

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState<CaseStudy | null>(null);

  const total = caseStudies.length;

  const next = () => setActive((prev) => (prev + 1) % total);
  const prev = () => setActive((prev) => (prev - 1 + total) % total);

  // Auto-slide every 4 seconds; pauses while a modal is open
  useEffect(() => {
    if (selectedSlide) return; // don't advance behind an open modal
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [selectedSlide, total]);

  const getPosition = (index: number): Position => {
    let diff = index - active;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    switch (diff) {
      case 0:
        return "active";
      case -1:
        return "left1";
      case -2:
        return "left2";
      case 1:
        return "right1";
      case 2:
        return "right2";
      default:
        return "hidden";
    }
  };

  return (
    <>
      <section className="coverflow-section">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Selected work"
            title={
              <>
                Real systems.{" "}
                <span className="text-accent-gradient">Real outcomes.</span>
              </>
            }
              description="A snapshot of recent engagements across our consulting practice — names anonymized where required. Full case studies available on request."
            />
        </div>
        <div className="coverflow-wrapper">
          {caseStudies.map((slide, index) => (
            <div
              key={slide.title}
              className={`cover-card ${getPosition(index)}`}
              onClick={() => {
                if (index === active) {
                  setSelectedSlide(slide);
                } else {
                  setActive(index);
                }
              }}
            >
              <div className="cover-image">
                {/* Swap for next/image if you prefer optimized images */}
                <img src={slide.image} alt={slide.alt} />
              </div>

              <div className="cover-content">
                <div className="tags">
                  <span>{slide.category}</span>
                  <small>{slide.subcategory}</small>
                </div>

                <h3>{slide.title}</h3>

                <div className="metrics">
                  {slide.stats.map((stat) => (
                    <div key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="footer">
                  <span>
                    {slide.client} · {slide.platform}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSlide(slide);
                    }}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="controls">
          <button onClick={prev} aria-label="Previous">
            ←
          </button>
          <button onClick={next} aria-label="Next">
            →
          </button>
        </div>
      </section>

      {/* Modal */}
      {selectedSlide && (
        <div className="modal-overlay" onClick={() => setSelectedSlide(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedSlide(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <div className="modal-hero">
              <img src={selectedSlide.modalImage} alt={selectedSlide.alt} />
              <a
                className="visit-btn"
                href={selectedSlide.visitUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Live Site ↗
              </a>
            </div>

            <div className="modal-body">
              <div className="modal-tags">
                <span>{selectedSlide.category}</span>
                <span>{selectedSlide.subcategory}</span>
                <span>{selectedSlide.platform}</span>
              </div>

              <h2>{selectedSlide.title}</h2>

              <p className="intro">{selectedSlide.introduction}</p>

              <div className="modal-stats">
                {selectedSlide.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="modal-columns">
                <div className="column">
                  <h4>The Problem</h4>
                  <ul>
                    {selectedSlide.problems.map((problem) => (
                      <li key={problem}>{problem}</li>
                    ))}
                  </ul>
                </div>

                <div className="column">
                  <h4>What We Did</h4>
                  <ul className="solutions">
                    {selectedSlide.whatWeDid.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {selectedSlide.dataProof.length > 0 && (
                <div className="data-proof">
                  {selectedSlide.dataProof.map((proof) => (
                    <figure key={proof.image}>
                      <img src={proof.image} alt={proof.caption} />
                      <figcaption>{proof.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {selectedSlide.testimonial && (
                <div className="testimonial">
                  <div className="testimonial-head">
                    <div className="stars" aria-label={`${selectedSlide.testimonial.rating} out of 5`}>
                      {"★".repeat(selectedSlide.testimonial.rating)}
                      <span className="stars-empty">
                        {"★".repeat(5 - selectedSlide.testimonial.rating)}
                      </span>
                    </div>
                    <span className="time-ago">{selectedSlide.testimonial.timeAgo}</span>
                  </div>
                  <blockquote>{selectedSlide.testimonial.quote}</blockquote>
                  <cite>{selectedSlide.testimonial.author}</cite>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .coverflow-section {
          width: 100%;
          overflow: hidden;
          padding: 60px 0;
        }

        .coverflow-wrapper {
          position: relative;
          height: 580px;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 2200px;
          margin-top: 30px;
        }

     .cover-card {
  position: absolute;
  width: 360px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.7s ease;

  background: linear-gradient(
    180deg,
    rgba(20, 28, 45, 0.75) 0%,
    rgba(12, 18, 30, 0.9) 100%
  );

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.12);

  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.cover-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;

  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.15),
    rgba(255,255,255,0.02)
  );

  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);

  -webkit-mask-composite: xor;
  mask-composite: exclude;

  pointer-events: none;
}



        .active {
          z-index: 10;
          opacity: 1;
          transform: translateX(0) scale(1);
        }
        .left1 {
          z-index: 8;
          opacity: 0.85;
          transform: translateX(-320px) rotateY(40deg) scale(0.9);
        }
        .left2 {
          z-index: 5;
          opacity: 0.45;
          transform: translateX(-620px) rotateY(55deg) scale(0.75);
        }
        .right1 {
          z-index: 8;
          opacity: 0.85;
          transform: translateX(320px) rotateY(-40deg) scale(0.9);
        }
        .right2 {
          z-index: 5;
          opacity: 0.45;
          transform: translateX(620px) rotateY(-55deg) scale(0.75);
        }
        .hidden {
          opacity: 0;
          pointer-events: none;
        }

        .cover-image {
          height: 220px;
          overflow: hidden;
          background: #0c0c0c;
        }
        .cover-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cover-content {
          padding: 20px;
          color: white;
        }

        .tags {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-bottom: 12px;
        }
        .tags span {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .tags small {
          color: rgba(255, 255, 255, 0.55);
        }

        .cover-content h3 {
          font-size: 18px;
          line-height: 1.35;
          margin: 0;
        }

        .metrics {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 15px;
        }
        .metrics div {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 10px;
          padding: 10px 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }
        .metrics strong {
          font-size: 15px;
        }
        .metrics span {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          text-align: right;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
        }
        .footer > span {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
        }
        .footer button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
        }

        .controls {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
        }
     .controls button {
  width: 48px;
  height: 48px;
  border-radius: 50%;

  border: 1px solid rgba(255, 255, 255, 0.12);

  background: rgba(20, 28, 45, 0.85);
  color: #ffffff;

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  cursor: pointer;
  font-size: 18px;

  transition: all 0.3s ease;
}

.controls button:hover {
  background: rgba(34, 46, 75, 0.95);
  transform: translateY(-2px);
}

        /* ---------- Modal ---------- */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .modal-content {
          width: 100%;
          max-width: 1000px;
          max-height: 90vh;
          overflow-y: auto;
          background: #111;
          border-radius: 20px;
          color: white;
          position: relative;
        }

        .modal-hero {
          position: relative;
          max-height: 420px;
          overflow: hidden;
        }
        .modal-hero img {
          width: 100%;
          display: block;
          object-fit: cover;
        }
        .visit-btn {
          position: absolute;
          right: 20px;
          bottom: 20px;
          padding: 12px 18px;
          border-radius: 999px;
          background: #fff;
          color: #111;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
        }

        .modal-body {
          padding: 40px;
        }

        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }
        .modal-tags span {
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          font-size: 13px;
        }

        .modal-body h2 {
          font-size: 34px;
          line-height: 1.2;
          margin: 0 0 20px;
        }
        .intro {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          margin: 0;
        }

        .modal-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 16px;
          margin-top: 32px;
        }
        .modal-stats div {
          padding: 22px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 14px;
        }
        .modal-stats strong {
          display: block;
          font-size: 26px;
          margin-bottom: 8px;
        }
        .modal-stats span {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
        }

        .modal-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-top: 40px;
        }
        .column h4 {
          font-size: 18px;
          margin: 0 0 14px;
        }
        .column ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .column li {
          position: relative;
          padding-left: 22px;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          font-size: 14px;
        }
        .column li::before {
          content: "✕";
          position: absolute;
          left: 0;
          color: #ff6b6b;
        }
        .solutions li::before {
          content: "✓";
          color: #4ade80;
        }

        .data-proof {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .data-proof figure {
          margin: 0;
        }
        .data-proof img {
          width: 100%;
          border-radius: 14px;
          display: block;
        }
        .data-proof figcaption {
          margin-top: 10px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          text-align: center;
        }

        .testimonial {
          margin-top: 40px;
          padding: 28px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
        }
        .testimonial-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .stars {
          color: #facc15;
          letter-spacing: 2px;
        }
        .stars-empty {
          color: rgba(255, 255, 255, 0.2);
        }
        .time-ago {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
        }
        .testimonial blockquote {
          margin: 0;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
        }
        .testimonial cite {
          display: block;
          margin-top: 14px;
          font-style: normal;
          font-weight: 600;
        }

        .close-btn {
          position: absolute;
          right: 20px;
          top: 20px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          cursor: pointer;
          font-size: 18px;
          z-index: 2;
        }

        @media (max-width: 700px) {
          .modal-columns {
            grid-template-columns: 1fr;
          }
          .modal-body {
            padding: 24px;
          }
          .modal-body h2 {
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
}

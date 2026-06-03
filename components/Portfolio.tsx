"use client";

import { useState, useEffect } from "react";
import { caseStudies, type CaseStudy } from "./portfolioContent";

type Position =
  | "active"
  | "left1"
  | "left2"
  | "right1"
  | "right2"
  | "hidden";

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState<CaseStudy | null>(null);

  const total = caseStudies.length;

  const next = () => setActive((p) => (p + 1) % total);
  const prev = () => setActive((p) => (p - 1 + total) % total);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

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

        {/* HERO SECTION (UPDATED LIKE IMAGE) */}
        <div className="section-container">
          <span className="eyebrow">Selected work</span>

          <h2>
            Real systems.{" "}
            <span className="gradient-text">
              Real outcomes.
            </span>
          </h2>

          <p>
            A snapshot of recent engagements across our consulting practice — names anonymized where required. Full case studies available on request.

          </p>

         
        </div>

        {/* COVERFLOW */}
        <div className="coverflow-wrapper">
          {caseStudies.map((slide, index) => (
            <div
              key={slide.title}
              className={`cover-card ${getPosition(index)}`}
              onClick={() => {
                if (index === active) setSelectedSlide(slide);
                else setActive(index);
              }}
            >
              <div className="cover-image">
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

        {/* CONTROLS + VIEW ALL */}
        <div className="controls-wrapper">
          <div className="controls">
            <button onClick={prev}>←</button>
            <button onClick={next}>→</button>
          </div>
           <button className="cta-button btn-primary">
            View All <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span>
          </button>
        </div>
      </section>

      {/* MODAL */}
      {selectedSlide && (
        <div className="modal-overlay" onClick={() => setSelectedSlide(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedSlide(null)}>
              ✕
            </button>

            <div className="modal-hero">
              <img src={selectedSlide.modalImage} />
            </div>

            <div className="modal-body">
              <h2>{selectedSlide.title}</h2>
              <p>{selectedSlide.introduction}</p>
            </div>
          </div>
        </div>
      )}

      {/* ================= CSS ================= */}
      <style jsx>{`
        .coverflow-section {
          width: 100%;
          padding: 80px 0;
          background: #0b0f1a;
          color: white;
        }

        /* HERO */
        .section-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: left;
        }

        .eyebrow {
          display: inline-block;
          padding: 6px 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 999px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.03);
          margin-bottom: 18px;
        }

        .section-container h2 {
          font-size: 52px;
          line-height: 1.1;
          margin: 0;
          font-weight: 600;
        }

        .gradient-text {
          background: linear-gradient(90deg, #7aa2ff, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-container p {
          margin-top: 18px;
          max-width: 750px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
        }

        .cta-button {
          margin-top: 26px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: 500;
          background: linear-gradient(135deg, #5b7cfa, #7c3aed);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.35);
          transition: 0.3s;
        }

        .cta-button:hover {
          transform: translateY(-2px);
        }

        /* COVERFLOW */
        .coverflow-wrapper {
          position: relative;
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 2200px;
          margin-top: 60px;
        }

        .cover-card {
          position: absolute;
          width: 360px;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.7s ease;
          background: linear-gradient(180deg, #1a2335, #0c111b);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .cover-image {
          height: 220px;
        }

        .cover-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cover-content {
          padding: 18px;
        }

        .metrics {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .metrics div {
          display: flex;
          justify-content: space-between;
          padding: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }

        /* POSITIONS */
        .active {
          transform: translateX(0) scale(1);
          z-index: 10;
          opacity: 1;
        }

        .left1 {
          transform: translateX(-320px) rotateY(40deg) scale(0.9);
          opacity: 0.8;
        }

        .left2 {
          transform: translateX(-620px) rotateY(55deg) scale(0.75);
          opacity: 0.4;
        }

        .right1 {
          transform: translateX(320px) rotateY(-40deg) scale(0.9);
          opacity: 0.8;
        }

        .right2 {
          transform: translateX(620px) rotateY(-55deg) scale(0.75);
          opacity: 0.4;
        }

        .hidden {
          opacity: 0;
          pointer-events: none;
        }

        /* CONTROLS */
        .controls-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
        }

        .controls {
          display: flex;
          gap: 12px;
        }

        .controls button {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          cursor: pointer;
        }

        .view-all {
          padding: 10px 22px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: transparent;
          color: white;
          cursor: pointer;
        }

        /* MODAL */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          width: 90%;
          max-width: 900px;
          background: #111;
          border-radius: 16px;
          overflow: hidden;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.6);
          color: white;
        }
      `}</style>
    </>
  );
}
"use client";

import { useState } from "react";

export default function CaseStudySlider() {
  const slides = [
    {
      title: "We Increased Their CVR by 80% and Doubled Their Revenue",
      category: "E-Commerce",
      subcategory: "Pet Accessories",
      company: "Remy + Roo",
      color: "#0d1b2a",
    },
    {
      title: "Agency Website Built in Under 2 Weeks",
      category: "Web Design",
      subcategory: "Marketing Agency",
      company: "Funk Socials",
      color: "#111111",
    },
    {
      title: "Full Shopify Rebuild for an Award-Winning Skincare Brand",
      category: "Skincare",
      subcategory: "Beauty & Wellness",
      company: "LIHA Beauty",
      color: "#1a0f06",
    },
    {
      title: "Redesigned Onboarding That Cut Drop-off by 60%",
      category: "SaaS",
      subcategory: "B2B Platform",
      company: "FlowDesk",
      color: "#102010",
    },
    {
      title: "Luxury Fashion Store Rebuild That Tripled AOV",
      category: "Fashion",
      subcategory: "D2C Brand",
      company: "Velour Studio",
      color: "#1a0a1a",
    },
  ];

  const [active, setActive] = useState(2);
  const [selectedSlide, setSelectedSlide] = useState<any>(null);

  const total = slides.length;

  const next = () => {
    setActive((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + total) % total);
  };

  const getPosition = (index: number) => {
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
        <div className="coverflow-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`cover-card ${getPosition(index)}`}
              onClick={() => {
                setActive(index);
                setSelectedSlide(slide);
              }}
            >
              <div
                className="cover-image"
                style={{ background: slide.color }}
              >
                <div>
                  {slide.category}
                  <br />
                  {slide.subcategory}
                </div>
              </div>

              <div className="cover-content">
                <div className="tags">
                  <span>{slide.category}</span>
                  <small>{slide.subcategory}</small>
                </div>

                <h3>{slide.title}</h3>

                <div className="metrics">
                  <div>+108% Sales Growth</div>
                  <div>+80% Conversion Rate</div>
                  <div>Improved UX & Performance</div>
                </div>

                <div className="footer">
                  <span>{slide.company}</span>
                  <button>Read More →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="controls">
          <button onClick={prev}>←</button>
          <button onClick={next}>→</button>
        </div>
      </section>

      {/* Modal */}
      {selectedSlide && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedSlide(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedSlide(null)}
            >
              ✕
            </button>

            <div
              className="modal-hero"
              style={{
                background: selectedSlide.color,
              }}
            >
              {selectedSlide.company}
            </div>

            <div className="modal-body">
              <div className="modal-tags">
                <span>{selectedSlide.category}</span>
                <span>{selectedSlide.subcategory}</span>
              </div>

              <h2>{selectedSlide.title}</h2>

              <p>
                This is where your complete case study content will go.
                Add screenshots, project details, goals, challenges,
                process, and final results.
              </p>

              <div className="modal-stats">
                <div>
                  <strong>108%</strong>
                  <span>Sales Growth</span>
                </div>

                <div>
                  <strong>80%</strong>
                  <span>Conversion Rate Increase</span>
                </div>

                <div>
                  <strong>3x</strong>
                  <span>Performance Improvement</span>
                </div>
              </div>
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
          height: 560px;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 2200px;
        }

        .cover-card {
          position: absolute;
          width: 360px;
          border-radius: 18px;
          overflow: hidden;
          background: #111;
          cursor: pointer;
          transition: all 0.7s ease;
          box-shadow: 0 25px 60px rgba(0,0,0,.35);
        }

        .active {
          z-index: 10;
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .left1 {
          z-index: 8;
          opacity: .85;
          transform: translateX(-320px) rotateY(40deg) scale(.9);
        }

        .left2 {
          z-index: 5;
          opacity: .45;
          transform: translateX(-620px) rotateY(55deg) scale(.75);
        }

        .right1 {
          z-index: 8;
          opacity: .85;
          transform: translateX(320px) rotateY(-40deg) scale(.9);
        }

        .right2 {
          z-index: 5;
          opacity: .45;
          transform: translateX(620px) rotateY(-55deg) scale(.75);
        }

        .hidden {
          opacity: 0;
          pointer-events: none;
        }

        .cover-image {
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .cover-content {
          padding: 20px;
          color: white;
        }

        .tags {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
        }

        .metrics {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 15px;
        }

        .metrics div {
          padding: 10px;
          background: rgba(255,255,255,.05);
          border-radius: 8px;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
        }

        .footer button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
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
          cursor: pointer;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.85);
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
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          font-weight: 700;
        }

        .modal-body {
          padding: 40px;
        }

        .modal-tags {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .modal-tags span {
          padding: 8px 14px;
          background: rgba(255,255,255,.08);
          border-radius: 999px;
        }

        .modal-body h2 {
          font-size: 38px;
          margin-bottom: 20px;
        }

        .modal-body p {
          color: rgba(255,255,255,.7);
          line-height: 1.8;
        }

        .modal-stats {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .modal-stats div {
          padding: 24px;
          background: rgba(255,255,255,.05);
          border-radius: 14px;
        }

        .modal-stats strong {
          display: block;
          font-size: 32px;
          margin-bottom: 8px;
        }

        .close-btn {
          position: absolute;
          right: 20px;
          top: 20px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,.1);
          color: white;
          cursor: pointer;
          font-size: 18px;
        }
      `}</style>
    </>
  );
}
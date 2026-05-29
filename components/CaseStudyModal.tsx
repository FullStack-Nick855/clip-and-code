"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "./CaseStudiesPortifolio";

type Props = {
  study: CaseStudy;
  onClose: () => void;
};

export default function CaseStudyModal({ study, onClose }: Props) {
  const { testimonial } = study;

  // Close on Escape + lock background scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4 overflow-hidden"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={study.title}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[92vh] flex flex-col relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-gray-100 rounded-full p-2 transition-colors shadow"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Scrollable content */}
        <div
          className="overflow-y-auto overflow-x-hidden flex-1 h-0"
          data-lenis-prevent="true"
        >
          {/* Hero: image + dark info panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">
            <div className="relative bg-gray-100 overflow-hidden min-h-[280px]">
              <img
                src={study.modalImage}
                alt={study.alt}
                className="w-full h-full object-cover object-top min-h-[280px]"
              />
            </div>
            <div className="bg-gray-900 flex flex-col justify-between p-8 md:p-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold text-white/50 bg-white/10 px-3 py-1 rounded-full uppercase tracking-widest">
                    {study.category}
                  </span>
                  <span className="text-[10px] text-white/30 font-medium">
                    {study.subcategory}
                  </span>
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  {study.title}
                </h1>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold text-white/40 uppercase tracking-wider mb-1">
                    Client
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {study.client}
                  </p>
                  <p className="text-xs text-white/40 mt-0.5">
                    {study.platform}
                  </p>
                </div>
                <a
                  href={study.visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-white transition-colors"
                >
                  Visit Site
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Metrics bar */}
          <div className="bg-blue-600 px-8 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="text-xs text-blue-200 mt-0.5">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="px-8 md:px-12 py-12 space-y-16">
            {/* Introduction */}
            <section className="space-y-5">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">
                  Introduction
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Solution Used:{" "}
                  <span className="font-semibold text-gray-700">
                    {study.category}
                  </span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed text-[15px]">
                {study.introduction}
              </p>
            </section>

            {/* The Problem + What We Did */}
            <section className="space-y-6">
              <div className="border-l-4 border-red-400 pl-4">
                <p className="text-[11px] font-bold text-red-500 uppercase tracking-widest">
                  The Problem
                </p>
                <h2 className="text-xl font-bold text-gray-900 mt-1">
                  The Problem
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-3">
                  {study.problems.map((problem, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-gray-700 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                      {problem}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-2">
                    What We Did
                  </p>
                  <ul className="space-y-3">
                    {study.whatWeDid.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-gray-700 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Results */}
            <section className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-[11px] font-bold text-green-600 uppercase tracking-widest">
                  Results
                </p>
                <h2 className="text-xl font-bold text-gray-900 mt-1">
                  The Numbers Don&apos;t Lie
                </h2>
              </div>
              <div className="bg-gray-900 rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="space-y-2">
                      <p className="text-3xl md:text-4xl font-bold text-blue-400">
                        {metric.value}
                      </p>
                      <p className="text-xs text-gray-400 leading-snug">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {study.dataProof.length > 0 && (
                <div className="space-y-4 pt-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Data Proof
                  </p>
                  {study.dataProof.map((proof, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                    >
                      <img
                        src={proof.image}
                        alt={proof.caption}
                        className="w-full h-auto block"
                      />
                      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <p className="text-xs font-semibold text-gray-600">
                          {proof.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Testimonial (optional) */}
            {testimonial && (
              <section className="bg-gray-900 rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                      ★
                    </span>
                  ))}
                  <span className="text-xs text-gray-500 ml-2">
                    {testimonial.timeAgo}
                  </span>
                </div>
                <p className="text-gray-200 leading-relaxed text-sm italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-white font-semibold text-sm">
                  {testimonial.author}
                </p>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
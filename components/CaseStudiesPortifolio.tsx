"use client";

import { useState } from "react";
import { TrendingUp, ArrowRight } from "lucide-react";
import CaseStudyModal from "./CaseStudyModal";

export type Stat = {
  value: string;
  label: string;
};

export type DataProof = {
  image: string;
  caption: string;
};

export type Testimonial = {
  rating: number;
  timeAgo: string;
  quote: string;
  author: string;
};

export type CaseStudy = {
  // Card
  image: string;
  alt: string;
  category: string;
  subcategory: string;
  title: string;
  stats: Stat[];
  client: string;
  platform: string;
  // Modal
  modalImage: string;
  visitUrl: string;
  introduction: string;
  metrics: Stat[];
  problems: string[];
  whatWeDid: string[];
  dataProof: DataProof[];
  testimonial?: Testimonial;
};
import SectionHeader from "./SectionHeader";

const caseStudies: CaseStudy[] = [
  {
    image:
      "/mylas-moss1.png",
    alt: "mylas moss1",
    category: "E-commerce",
    subcategory: "Health & Wellness Brand",
    title: "Turning Brand Love Into Revenue Through Strategic Shopify CRO",
    stats: [
      { value: "+108%", label: "Total Sales Growth" },
      { value: "+80%", label: "Conversion Rate Lift" },
      { value: "1.1% to 1.98%", label: "CVR Improvement" },
    ],
    client: "Growth Needle",
    platform: "Shopify",
    modalImage:
      "/mylas-moss2.png",
    visitUrl: "https://www.mylasmoss.com/",
    introduction:
      "Mylas Moss now has a website experience that finally matches the quality of its products and brand identity — resulting in stronger conversions, higher customer confidence, and scalable growth.",
    metrics: [
      { value: "+108%", label: "Total Sales Growth" },
      { value: "+80%", label: "Conversion Rate Lift" },
      { value: "1.1% to 1.98%", label: "CVR Improvement" },
      { value: "$20K+", label: "Revenue Generated" },
    ],
    problems: [
      "Outdated Shopify experience that didn’t reflect the premium brand identity",
      "Confusing navigation made product discovery difficult",
      "Weak product pages with poor hierarchy, limited trust signals, and unclear CTAs",
      "Cart and checkout friction leading to high abandonment",
      "No upsell or bundle strategy to increase AOV",
      "Paid traffic directed to generic pages instead of conversion-focused landing pages",
    ],
    whatWeDid: [
      "Completely redesigned the website to match the premium brand aesthetic",
      "Rebuilt navigation and collection structure for better usability",
      "Redesigned product pages with stronger imagery, reviews, trust signals, and clear CTAs",
      "Optimized cart drawer and checkout flow to reduce friction",
      "Introduced bundle and cross-sell strategies to increase average order value",
      "Created dedicated landing pages aligned with paid ad campaigns",
    ],
    dataProof: [
           {
        image:
          "/data proof-mylas-moss.png",
        caption: "Data Proof",
      },
    ],
  },
  {
    image:
      "/podcasthealth1.png",
    alt: "podcast health1",
    category: "Health & Wellness",
    subcategory: "Healthcare Podcast",
    title:
      "Redesigning a Healthcare Podcast Platform for Better Engagement & Growth",
    stats: [
      { value: "< 3 weeks", label: "Full Build Time" },
      { value: "Ground Up", label: "UX Optimization" },
      { value: "Modern", label: " Healthcare Media Experience" },
    ],
    client: "Tim",
    platform: "Wordpress",
    modalImage:
      "/podcasthealth2.png",
    visitUrl: "https://podcasthealth.com/",
    introduction:
      "Podcast Health is a podcast-focused healthcare and wellness platform helping users discover trusted health conversations, expert insights, and wellness resources.",
    metrics: [
      { value: "< 3 weeks", label: "Full Build Time" },
      { value: "Ground Up", label: "UI & UX Optimization" },
      { value: "Modern", label: " Healthcare Media Experience" },
    ],
    problems: [
      "Outdated UI that lacked a modern and trustworthy healthcare aesthetic",
      "Homepage messaging wasn’t clearly communicating value",
      "Weak CTA placements reduced conversion opportunities",
      "Content hierarchy made podcast discovery difficult",
      "Poor mobile optimization affected engagement",
      "Limited landing page strategy for campaigns and traffic sources",
      "Low engagement flow between podcast episodes and conversion points",
    ],
    whatWeDid: [
      "Redesigned the website with a clean, modern healthcare-focused UI",
      "Improved homepage messaging and visual hierarchy",
      "Added stronger CTA sections for subscriptions and inquiries",
      "Optimized podcast and content pages for better user engagement",
      "Enhanced mobile responsiveness and browsing experience",
      "Built conversion-focused landing pages for campaigns",
      "Improved navigation and content discoverability",
    ],
    dataProof: [
      {
        image:
          "/data-proff-podcast.png",
        caption: "Data Proff",
      },
    ],
  },
  {
    image:
      "/wildsuccess1.png",
    alt: "wild success1",
    category: "Coaching",
    subcategory: "Leadership Coaching",
    title:
      "From Generic Corporate Website to a High-Trust Lead Generation Platform",
    stats: [
      { value: "+62%", label: "increase in qualified lead submissions" },
      { value: "+47%", label: "improvement in landing page conversion rate" },
      { value: "-35%", label: "reduction in bounce rate across key program pages" },
    ],
    client: "Gigi",
    platform: "Webflow",
    modalImage:
      "/wildsuccess2.png",
    visitUrl: "https://www.wildsuccess.global/",
    introduction:
      "Wild Success Global is a global personal development and coaching platform offering NLP training, coaching certifications, and transformational programs. Despite strong brand authority, large audience base, and global recognition, the website experience was not fully aligned with its positioning as a high-trust, conversion-driven coaching ecosystem. Traffic was present, but lead quality and conversion consistency were not optimized.",
    metrics: [
      { value: "+62%", label: "increase in qualified lead submissions" },
      { value: "+47%", label: "improvement in landing page conversion rate" },
      { value: "-35%", label: "reduction in bounce rate across key program pages" },
      { value: "+52%", label: "increase in average session duration" },
      { value: "+38%", label: "more users progressing from homepage → program pages" },
    ],
    problems: [
      "Website felt like a content-heavy corporate platform, not a high-converting funnel",
      "Messaging was broad and not focused on clear user transformation paths",
      "Weak hierarchy in presenting programs, making decision-making harder",
      "Lack of structured trust-building flow (proof, authority, outcomes not emphasized early)",
      "CTA placement was inconsistent across key pages",
      "Multiple programs created confusion instead of guided user journeys",
      "No strong funnel segmentation for different user intents (coaching, certification, mentoring)",
    ],
    whatWeDid: [
      "Repositioned the website experience into a conversion-focused lead generation platform",
      "Built a clearer information hierarchy around transformation-based outcomes",
      "Structured program presentation into guided user pathways (beginner → advanced)",
      "Optimized CTA placement across key sections for higher engagement",
      "Simplified navigation to reduce cognitive overload",
      "Aligned messaging with user intent (growth, coaching career, certification)",
      "Improved funnel clarity for different audience segments",
      ],
    dataProof: [
      {
        image:
          "/proven-resultnew.png",
  
        caption: "Proven Result",
      },
    ],
    testimonial: {
      rating: 5,
      timeAgo: "2 weeks ago",
      quote:
        "Working with Clip & Code on the Wild Success Global website revamp was a smooth and effective experience. They quickly understood our challenges and helped us restructure the site into a clearer, more conversion-focused platform. The new layout feels more intuitive for users and better aligned with our goals. Communication was easy throughout, and the execution was timely and well-handled.",
      author: "— Gigi",
    },
  },
];

export default function CaseStudiesPortifolio() {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-10 relative z-10">
        {/* Header */}
        <div className="space-y-3">
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

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <article
              key={study.client}
              onClick={() => setActive(study)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(study);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Read case study: ${study.title}`}
              className="group cursor-pointer w-full bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden flex-shrink-0 h-[200px]">
                <img
                  src={study.image}
                  alt={study.alt}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 flex-1 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-bold text-white/70 bg-white/10 px-2.5 py-1 rounded-full uppercase tracking-widest">
                      {study.category}
                    </span>
                    <span className="text-[11px] text-white/40 font-medium">
                      {study.subcategory}
                    </span>
                  </div>
                  <h3 className="text-lg font-light text-white leading-snug">
                    {study.title}
                  </h3>
                </div>

                {/* Stats */}
                <div className="space-y-2">
                  {study.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-3 py-2 px-2 rounded-lg border border-white/10 bg-white/5"
                    >
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="font-bold text-white text-sm">
                        {stat.value}
                      </span>
                      <span className="text-white/50 text-sm">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div className="text-xs text-white/40">
                    <span className="font-semibold text-white/70">
                      {study.client}
                    </span>{" "}
                    · {study.platform}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 group-hover:text-white group-hover:gap-2.5 transition-all">
                    Read case study
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <CaseStudyModal study={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
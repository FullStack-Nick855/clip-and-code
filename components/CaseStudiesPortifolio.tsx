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
      "https://media.base44.com/images/public/68d18eabe7cc45973ea6b8f9/0bd2783d0_Screenshot2026-05-10at002644.png",
    alt: "Remy + Roo",
    category: "E-commerce",
    subcategory: "Pet Accessories",
    title: "We Increased Their CVR by 80% and Doubled Their Revenue",
    stats: [
      { value: "+108%", label: "Total Sales Growth" },
      { value: "+80%", label: "Conversion Rate Lift" },
      { value: "1.1% to 1.98%", label: "CVR Improvement" },
    ],
    client: "Remy + Roo",
    platform: "Shopify",
    modalImage:
      "https://media.base44.com/images/public/68d18eabe7cc45973ea6b8f9/36ce1d3f2_Screenshot2026-05-10at002825.png",
    visitUrl: "https://remyandroo.com",
    introduction:
      "Remy + Roo is a premium dog accessories brand selling beautifully designed bandanas and everyday essentials for dogs. They had a loyal customer base and genuine brand love - but their website wasn't converting. Despite solid traffic from ads and organic, revenue wasn't matching the opportunity.",
    metrics: [
      { value: "+108%", label: "Total Sales Growth" },
      { value: "+80%", label: "Conversion Rate Lift" },
      { value: "1.1% to 1.98%", label: "CVR Improvement" },
      { value: "$20K+", label: "Revenue in Period" },
    ],
    problems: [
      "Outdated, visually weak Shopify theme that failed to communicate brand premium",
      "Confusing navigation making it hard to find products or understand the range",
      "Weak product pages with poor imagery layout, no social proof, and unclear CTAs",
      "Cart and checkout riddled with friction - high abandonment at every step",
      "No bundle or upsell mechanic despite having a perfect product catalogue for it",
      "Landing pages non-existent - all paid traffic sent to the homepage",
    ],
    whatWeDid: [
      "Full Shopify website redesign - visually elevated to match the premium brand identity",
      "Rebuilt navigation architecture for clarity and product discoverability",
      "Redesigned all PDPs with stronger imagery, trust signals, reviews, and clear CTAs",
      "Optimised the cart drawer and checkout flow, reducing abandonment at each step",
      "Built a 'Build Your Bundle' page to boost AOV and encourage multi-product purchases",
      "Developed targeted landing pages for paid traffic with conversion-focused layouts",
    ],
    dataProof: [
      {
        image:
          "https://media.base44.com/images/public/68d18eabe7cc45973ea6b8f9/a05024abd_Screenshot2026-05-09at171404.png",
        caption: "Total Sales - +108% YoY, $20,330 in period",
      },
      {
        image:
          "https://media.base44.com/images/public/68d18eabe7cc45973ea6b8f9/dd0fbf03c_Screenshot2026-05-09at171441.png",
        caption: "Conversion Rate - 1.1% to 1.98% (+80%)",
      },
    ],
  },
  {
    image:
      "https://media.base44.com/images/public/68d18eabe7cc45973ea6b8f9/2b8c845c8_Screenshot2026-05-09at193916.png",
    alt: "Funk Socials",
    category: "Web Design",
    subcategory: "Marketing Agency",
    title:
      "From Dead to Full of Life - A Creative Marketing Agency Website Built in Under 2 Weeks",
    stats: [
      { value: "< 2 weeks", label: "Full Build Time" },
      { value: "Ground Up", label: "Complete Rebuild" },
    ],
    client: "Funk Socials",
    platform: "Webflow",
    modalImage:
      "https://media.base44.com/images/public/68d18eabe7cc45973ea6b8f9/a483876fa_Screenshot2026-05-10at000433.png",
    visitUrl: "https://funksocials.digital",
    introduction:
      "Funk Socials is a social media marketing agency with a bold brand vision and serious creative energy. They reached out wanting to stand out in a crowded market - but their original website was holding them back badly. We saw the promise beneath the surface and rebuilt everything from scratch.",
    metrics: [
      { value: "< 2 weeks", label: "Full Build Time" },
      { value: "Ground Up", label: "Complete Rebuild" },
    ],
    problems: [
      "Original website was so poor it had to be hidden - not exaggerating",
      "No visual identity online to match the quality of their actual work",
      "Failing to communicate their creative edge in a crowded agency market",
      "Zero lead generation from the website - it was a dead end for growth",
    ],
    whatWeDid: [
      "Rebuilt the entire website from scratch in under 2 weeks",
      "Created an immersive, cinematic landing page with dark aesthetic and bold typography",
      "Designed custom motion and visual effects that reflect the brand's creative energy",
      "Built a conversion-focused layout to turn visitors into genuine leads",
      "Delivered one of the most creatively exciting builds we've worked on",
    ],
    dataProof: [
      {
        image:
          "https://media.base44.com/images/public/68d18eabe7cc45973ea6b8f9/532dc9367_Screenshot2026-05-09at175018.png",
        caption: "Funk Socials - funksocials.digital",
      },
    ],
  },
  {
    image:
      "https://media.base44.com/images/public/68d18eabe7cc45973ea6b8f9/55b77d400_Screenshot2026-05-09at193927.png",
    alt: "LIHA Beauty",
    category: "Skincare",
    subcategory: "Beauty & Wellness",
    title:
      "Full Shopify Rebuild for an Award-Winning Natural Skincare Brand Rooted in West African Botanical Tradition",
    stats: [
      { value: "Ground Up", label: "Full Shopify Rebuild" },
      { value: "Cleaner", label: "Backend & Codebase" },
      { value: "Elevated", label: "Brand-Level Storefront" },
    ],
    client: "LIHA Beauty",
    platform: "Shopify",
    modalImage:
      "https://media.base44.com/images/public/68d18eabe7cc45973ea6b8f9/b75e9d60a_Screenshot2026-05-10at000454.png",
    visitUrl: "https://lihabeauty.com",
    introduction:
      "LIHA Beauty creates natural, vegan skincare rooted in the botanical traditions of West Africa and traditional English aromatherapy - made in small batches with a strong emphasis on ritual, community, and ingredient integrity. The product, story, and taste level were already world-class. The site just needed to catch up.",
    metrics: [
      { value: "Ground Up", label: "Full Shopify Rebuild" },
      { value: "Cleaner", label: "Backend & Codebase" },
      { value: "Elevated", label: "Brand-Level Storefront" },
    ],
    problems: [
      "Years of accumulated legacy code weighing down the store's performance and flexibility",
      "Clunky structure and theme limitations blocking brand expression",
      "Digital experience no longer reflected the quality and care behind the products",
      "Hard to maintain and scale without a clean technical foundation",
    ],
    whatWeDid: [
      "Rebuilt the Shopify store from the ground up - no patches, a clean slate",
      "Fully decluttered the backend and removed all legacy technical debt",
      "Reworked the storefront so the digital experience matches the brand's quality level",
      "Improved site structure, flexibility, and long-term usability for the team",
      "Created a stronger, scalable foundation to grow the brand from",
    ],
    dataProof: [
      {
        image:
          "https://media.base44.com/images/public/68d18eabe7cc45973ea6b8f9/001f1bb5e_Screenshot2026-05-09at172319.png",
        caption: "LIHA Beauty - New Shopify storefront",
      },
    ],
    testimonial: {
      rating: 5,
      timeAgo: "8 weeks ago",
      quote:
        "Working with Growth Needle to revamp the LIHA Beauty website was an excellent experience from start to finish. The team was incredibly professional, responsive, and organized throughout the entire process. They met every deadline exactly as promised and delivered precisely what we asked for. What stood out most was their flexibility whenever we needed adjustments or refinements; they were quick to accommodate and ensured everything aligned with our vision. Beyond their technical expertise, they were simply a pleasure to work with. The entire collaboration felt smooth, efficient, and collaborative, which made a significant difference during a major website update. I highly recommend Growth Needle to anyone looking for a reliable and skilled team to support their website development or revamp.",
      author: "— LIHA Accounts",
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
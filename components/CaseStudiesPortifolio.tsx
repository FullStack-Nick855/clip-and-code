import { TrendingUp, ArrowRight } from "lucide-react";

type Stat = {
  value: string;
  label: string;
};

type CaseStudy = {
  image: string;
  alt: string;
  category: string;
  subcategory: string;
  title: string;
  stats: Stat[];
  client: string;
  platform: string;
  href?: string;
};

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
    href: "#",
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
    href: "#",
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
    href: "#",
  },
];

export default function CaseStudiesPortifolio() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-10 relative z-10">
        {/* Header */}
        <div className="space-y-3">
          <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em]">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Websites That{" "}
            <span className="font-extralight text-white/70">Actually Work</span>
          </h2>
          <p className="text-white/50 max-w-lg font-light leading-relaxed">
            Beautiful design is nothing without results. Here&apos;s what
            we&apos;ve delivered for real clients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <article
              key={study.client}
              className="group cursor-pointer w-full bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex flex-col h-full"
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
                  <a
                    href={study.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 group-hover:text-white group-hover:gap-2.5 transition-all"
                  >
                    Read case study
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
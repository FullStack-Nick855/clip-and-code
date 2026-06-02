// portfolioContent.ts
// ----------------------------------------------------------------------------
// All the CONTENT for the portfolio slider lives here.
// Each case study is its own self-contained object, so you can edit one card
// without touching the design file. Add / remove / reorder freely.
// ----------------------------------------------------------------------------

export interface CaseStudyStat {
  /** Big number, e.g. "108%" or "3x" */
  value: string;
  /** Caption under the number, e.g. "Sales Growth" */
  label: string;
}

export interface CaseStudy {
  /** Stable unique id (used as React key + anchor links) */
  id: string;
  title: string;
  category: string;
  subcategory: string;
  company: string;
  /** Hero / card background color */
  color: string;
  /** Short bullet metrics shown on the card face */
  metrics: string[];
  /** Full case-study body shown inside the modal */
  description: string;
  /** Big stat blocks shown inside the modal */
  stats: CaseStudyStat[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "remy-roo",
    title: "We Increased Their CVR by 80% and Doubled Their Revenue",
    category: "E-Commerce",
    subcategory: "Pet Accessories",
    company: "Remy + Roo",
    color: "#0d1b2a",
    metrics: ["+108% Sales Growth", "+80% Conversion Rate", "Improved UX & Performance"],
    description:
      "Remy + Roo came to us with a beautiful product range but a storefront that was leaking sales at checkout. " +
      "We rebuilt the product and cart experience around a single goal: removing every point of friction between " +
      "interest and purchase. Streamlined navigation, faster page loads, and a redesigned checkout flow led to a " +
      "doubling of revenue within the first quarter post-launch.",
    stats: [
      { value: "108%", label: "Sales Growth" },
      { value: "80%", label: "Conversion Rate Increase" },
      { value: "3x", label: "Performance Improvement" },
    ],
  },
  {
    id: "funk-socials",
    title: "Agency Website Built in Under 2 Weeks",
    category: "Web Design",
    subcategory: "Marketing Agency",
    company: "Funk Socials",
    color: "#111111",
    metrics: ["2 Week Turnaround", "Fully Responsive", "CMS-Driven Content"],
    description:
      "Funk Socials needed a credible, fast-loading agency site ahead of a major pitch — with almost no runway. " +
      "We scoped a tight design system, built reusable sections, and shipped a polished, fully responsive site in " +
      "under two weeks. The new site became their primary sales asset and helped them close their next three clients.",
    stats: [
      { value: "12", label: "Days to Launch" },
      { value: "100", label: "Lighthouse Performance" },
      { value: "3", label: "New Clients Closed" },
    ],
  },
  {
    id: "liha-beauty",
    title: "Full Shopify Rebuild for an Award-Winning Skincare Brand",
    category: "Skincare",
    subcategory: "Beauty & Wellness",
    company: "LIHA Beauty",
    color: "#1a0f06",
    metrics: ["+65% Mobile Sales", "Faster Load Times", "Refined Brand Identity"],
    description:
      "LIHA Beauty's heritage and craftsmanship deserved a storefront to match. We rebuilt their Shopify theme from " +
      "the ground up, focusing on rich storytelling, editorial product pages, and a mobile-first checkout. The result " +
      "is a store that feels as premium as the products inside it — and converts.",
    stats: [
      { value: "65%", label: "Mobile Sales Increase" },
      { value: "2.1s", label: "Avg. Load Time" },
      { value: "40%", label: "Lower Bounce Rate" },
    ],
  },
  {
    id: "flowdesk",
    title: "Redesigned Onboarding That Cut Drop-off by 60%",
    category: "SaaS",
    subcategory: "B2B Platform",
    company: "FlowDesk",
    color: "#102010",
    metrics: ["-60% Drop-off", "Faster Activation", "Clearer First-Run UX"],
    description:
      "New FlowDesk users were abandoning setup before reaching their first 'aha' moment. We mapped the activation " +
      "journey, cut the steps in half, and added contextual guidance at the exact moments users hesitated. Onboarding " +
      "drop-off fell by 60% and time-to-activation dropped dramatically.",
    stats: [
      { value: "60%", label: "Less Drop-off" },
      { value: "2x", label: "Faster Activation" },
      { value: "45%", label: "More Trial Conversions" },
    ],
  },
  {
    id: "velour-studio",
    title: "Luxury Fashion Store Rebuild That Tripled AOV",
    category: "Fashion",
    subcategory: "D2C Brand",
    company: "Velour Studio",
    color: "#1a0a1a",
    metrics: ["3x Average Order Value", "Premium UX", "Higher Retention"],
    description:
      "Velour Studio wanted a digital experience worthy of a luxury label. We introduced curated collections, " +
      "intelligent product recommendations, and a refined, tactile interface that encouraged larger baskets. " +
      "Average order value tripled while customers returned more often.",
    stats: [
      { value: "3x", label: "Average Order Value" },
      { value: "55%", label: "Repeat Purchase Rate" },
      { value: "70%", label: "Higher Engagement" },
    ],
  },
];
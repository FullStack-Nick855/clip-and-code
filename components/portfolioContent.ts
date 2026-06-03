// portfolioContent.ts
// ----------------------------------------------------------------------------
// Standalone CONTENT file. It imports nothing.
// Portfolio.tsx imports `caseStudies` from here. Edit card/modal text here only.
// ----------------------------------------------------------------------------

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
  // ---- Card ----
  image: string;
  alt: string;
  category: string;
  subcategory: string;
  title: string;
  stats: Stat[];
  client: string;
  platform: string;
  // ---- Modal ----
  modalImage: string;
  visitUrl: string;
  introduction: string;
  metrics: Stat[];
  problems: string[];
  whatWeDid: string[];
  dataProof: DataProof[];
  testimonial?: Testimonial;
};

export const caseStudies: CaseStudy[] = [
  {
    image: "/iwatchusa1.png",
    alt: "iwatch usa1",
    category: "E-commerce",
    subcategory: "Luxury Watches",
    title: "Turning Brand Love Into Revenue Through Strategic Shopify CRO",
    stats: [
       /* { value: "+95%", label: "Revenue Growth" },
      { value: "+72%", label: "Conversion Rate Increase" },
      { value: "+58%", label: "Increase in Qualified Leads" },  */
    ],
    client: "David",
    platform: "Shopify",
    modalImage: "/iwatchusa2.png",
    visitUrl: "https://iwatchusa.com/",
    introduction:
      "iWatch USA is a luxury watch retailer offering premium timepieces from some of the world's most sought-after brands. The business had a strong product catalog, industry credibility, and growing interest from luxury watch buyers, but the website experience wasn't fully optimized to convert that interest into consistent sales. The company focuses on authentic luxury watches and serves customers looking to buy, sell, and trade high-end timepieces.",
    metrics: [
      { value: "+95%", label: "Revenue Growth" },
      { value: "+72%", label: "Conversion Rate Increase" },
      { value: "+58%", label: "Increase in Qualified Leads" },
      { value: "+35%", label: "Improvement in Average Session Duration" },
    ],
    problems: [
      "Website experience lacked the premium feel expected by luxury watch buyers.",
      "Product discovery was difficult due to navigation and collection structure.",
      "High-value products require trust, but trust signals and credibility elements were not prominently showcased.",
      "Product pages focused on inventory rather than helping buyers make confident purchase decisions.",
      "Mobile experience created friction for users researching watches on the go.",
      "Inquiry and lead-generation paths were not optimized for luxury purchase journeys.",
      "Traffic from search and paid campaigns wasn't being effectively converted into qualified leads and sales.",
    ],
    whatWeDid: [
      "Redesigned the website to align with luxury buyer expectations and premium brand positioning.",
      "Rebuilt navigation and collection architecture to improve watch discovery.",
      "Optimized product pages with stronger trust signals, product information hierarchy, and conversion-focused layouts.",
      "Improved mobile usability and browsing experience across the entire customer journey.",
      "Enhanced lead capture and inquiry flows for high-ticket watch purchases.",
      "Created dedicated landing pages for key watch categories and marketing campaigns.",
      "Added strategic social proof, credibility messaging, and luxury-focused visual storytelling.",
    ],
    dataProof: [
      {
        image: "/iwatch-data.png",
        caption: "Data Proof",
      },
    ],
  },

    {
    image: "/teresondupuy1.png",
    alt: "teresondupuy1",
    category: "Coaching",
    subcategory: "Personal Development",
    title: "Transforming a Personal Brand Into a High-Converting Coaching Platform",
    stats: [
      /* { value: "+65%", label: "Consultation Inquiry Growth" },
      { value: "+48%", label: "Engagement Rate Improvement" },
      { value: "+55%", label: "Lead Generation Increase" },  */ 
    ],
    client: "Tereson",
    platform: "GoHighLevel (GHL)",
    modalImage: "/teresondupuy2.png",
    visitUrl: "https://teresondupuy.com/",
    introduction:
      "Terese On Dupuy is a personal brand and coaching platform built around helping women navigate confidence, relationships, and personal transformation. The brand had credibility, valuable content, and an engaged audience, but the website experience wasn't effectively converting visitors into consultation bookings and qualified leads. The user journey lacked clarity, making it difficult to turn interest into action.",
    metrics: [
      { value: "+65%", label: "Consultation Inquiry Growth" },
      { value: "+48%", label: "Engagement Rate Improvement" },
      { value: "+55%", label: "Lead Generation Increase" },
      { value: "+75%", label: "Mobile Conversion Improvement" },
    ],
    problems: [
      "Website messaging lacked a clear conversion-focused structure.",
      "Key offers and services were not immediately obvious to visitors",
      "Weak call-to-action placement across important pages",
      "Limited trust-building elements and social proof visibility",
      "User journey created friction between discovery and booking",
      "Mobile experience lacked optimization for lead generation",
      "Website did not fully reflect the authority and premium positioning of the brand",
    ],
    whatWeDid: [
      "Redesigned the website structure around a clear conversion funnel",
      "Improved messaging hierarchy to communicate value instantly",
      "Created stronger call-to-action sections across key pages",
      "Enhanced trust through testimonials, credibility markers, and social proof",
      "Optimized service pages for better user engagement and conversions",
      "Improved mobile responsiveness and user experience",
      "Streamlined the booking journey to reduce friction and increase inquiries",
    ],
    dataProof: [
      {
        image: "/teresondupuydata.png",
        caption: "Data Proof",
      },
    ],
  },

    {
    image: "/scriptnovelpublishing1.png",
    alt: "teresondupuy1",
    category: "Publishing",
    subcategory: "Book Publishing",
    title: "Transforming a Publishing Website Into a Lead Generation & Author Acquisition Platform",
    stats: [
    /*{ value: "+65%", label: "Consultation Inquiry Growth" },
      { value: "+48%", label: "Engagement Rate Improvement" },
      { value: "+55%", label: "Lead Generation Increase" },*/
    ],
    client: "Travis",
    platform: "Wix",
    modalImage: "/scriptnovelpublishing2.png",
    visitUrl: "https://www.scriptnovelpublishing.com/",
    introduction:
      "Script Novel Publishing provides end-to-end publishing solutions for authors looking to transform their ideas into professionally published books. From editing and cover design to publishing and marketing, the company offers comprehensive support throughout the publishing journey. Despite offering a wide range of services, the website wasn't effectively communicating the value of its publishing process or building enough confidence for first-time authors to take the next step.",
    metrics: [
      { value: "+65%", label: "Consultation Inquiry Growth" },
      { value: "+48%", label: "Engagement Rate Improvement" },
      { value: "+55%", label: "Lead Generation Increase" },
      { value: "+75%", label: "Mobile Conversion Improvement" },
    ],
    problems: [
      "Complex publishing services were difficult for new authors to understand",
      "Lack of a clear step-by-step publishing journey",
      "Service pages focused on features rather than author outcomes",
      "Trust and credibility were not showcased effectively",
      "Visitors struggled to identify the right publishing package",
      "Inquiry process lacked direction and clarity",
      "Mobile experience made service exploration difficult",
    ],
    whatWeDid: [
      "Created a clearer author-focused website structure",
      "Simplified the publishing process into easy-to-understand stages",
      "Improved service presentation and package positioning",
      "Enhanced trust through stronger credibility and authority signals",
      "Added conversion-focused inquiry sections throughout the website",
      "Improved mobile navigation and browsing experience",
      "Designed a smoother journey from discovery to consultation",
    ],
    dataProof: [
      {
        image: "/scriptnovelpublishing-data.png",
        caption: "Data Proof",
      },
    ],
  },

  {
    image: "/podcasthealth1.png",
    alt: "podcast health1",
    category: "Health & Wellness",
    subcategory: "Healthcare Podcast",
    title:
      "Redesigning a Healthcare Podcast Platform for Better Engagement & Growth",
    stats: [
      /* { value: "< 3 weeks", label: "Full Build Time" },
      { value: "Ground Up", label: "UX Optimization" },
      { value: "Modern", label: "Healthcare Media Experience" }, */
    ],
    client: "Tim",
    platform: "Wordpress",
    modalImage: "/podcasthealth2.png",
    visitUrl: "https://podcasthealth.com/",
    introduction:
      "Podcast Health is a podcast-focused healthcare and wellness platform helping users discover trusted health conversations, expert insights, and wellness resources.",
    metrics: [
      { value: "< 3 weeks", label: "Full Build Time" },
      { value: "Ground Up", label: "UI & UX Optimization" },
      { value: "Modern", label: "Healthcare Media Experience" },
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
        image: "/data-proff-podcast.png",
        caption: "Data Proff",
      },
    ],
  },
  {
    image: "/wildsuccess1.png",
    alt: "wild success1",
    category: "Coaching",
    subcategory: "Leadership Coaching",
    title:
      "From Generic Corporate Website to a High-Trust Lead Generation Platform",
    stats: [
        /* { value: "+62%", label: "increase in qualified lead submissions" },
      { value: "+47%", label: "improvement in landing page conversion rate" },
      { value: "-35%", label: "reduction in bounce rate across key program pages" },  */ 
    ],
    client: "Gigi",
    platform: "Webflow",
    modalImage: "/wildsuccess2.png",
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
        image: "/proven-resultnew.png",
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
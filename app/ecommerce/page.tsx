import type { Metadata } from "next";
import EcomHero from "@/components/ecommerce/EcomHero";
import EcomCapabilities from "@/components/ecommerce/EcomCapabilities";
import ShopifyApps from "@/components/ecommerce/ShopifyApps";
import Methodology from "@/components/ecommerce/Methodology";
import EcomResults from "@/components/ecommerce/EcomResults";
import EcomFAQ from "@/components/ecommerce/EcomFAQ";
import EcomCTA from "@/components/ecommerce/EcomCTA";

export const metadata: Metadata = {
  title:
    "Shopify CRO, AOV & Custom App Development — Clip & Code E-commerce Practice",
  description:
    "We help Shopify and Shopify Plus brands grow revenue per visitor through CRO, AOV optimization, cross-sell, upsell, abandoned cart recovery, checkout optimization and custom Shopify app development.",
  keywords: [
    "Shopify CRO",
    "Shopify AOV optimization",
    "abandoned cart recovery",
    "Shopify checkout optimization",
    "cross-sell upsell Shopify",
    "Shopify Plus agency",
    "custom Shopify app development",
    "Shopify Polaris App Bridge",
    "Klaviyo flows",
    "post-purchase upsell",
  ],
  alternates: { canonical: "/ecommerce" },
  openGraph: {
    type: "website",
    url: "/ecommerce",
    title:
      "Shopify CRO, AOV & Custom App Development — Clip & Code",
    description:
      "Senior consulting partner for Shopify brands. CRO, AOV, abandoned-cart recovery, checkout optimization and custom Shopify apps.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Shopify CRO, AOV & Custom App Development — Clip & Code",
    description:
      "Revenue engineering for Shopify and Shopify Plus brands.",
  },
};

const FAQ_LD = [
  {
    q: "Do you work with stores that aren't on Shopify Plus?",
    a: "Yes. Most of our growth playbook works on standard Shopify. Some checkout-level optimizations (Checkout Extensibility, branded post-purchase pages) require Plus — we'll be clear up front about what's possible on your plan.",
  },
  {
    q: "How fast do you typically see results?",
    a: "We aim for a meaningful win within the first 30 days — usually a checkout, cart, or AOV optimization. Compounding lift from a full CRO program shows up over a 90-day cycle as winning experiments stack.",
  },
  {
    q: "Do you build apps for the public Shopify App Store?",
    a: "Yes — both private apps (built for your store only) and public apps (listed on the App Store). We handle Polaris UI, App Bridge embedding, GraphQL Admin integrations, webhook reliability and Shopify's listing/review process.",
  },
  {
    q: "How do you measure CRO wins so they're not vanity?",
    a: "Every test ships with a pre-registered hypothesis, sample-size plan, primary metric and guardrail metrics. We use Bayesian methods or frequentist gates and read on revenue per visitor, not raw CVR.",
  },
  {
    q: "Will this break my theme or slow my site down?",
    a: "No. Everything is built theme-safe, code-reviewed and performance-budgeted. We measure Core Web Vitals before and after and won't ship anything that regresses LCP, CLS, or INP without explicit sign-off.",
  },
  {
    q: "How do engagements work — retainer or project?",
    a: "Most stores work with us on a monthly retainer covering audit, experimentation, development and app work. Smaller stores can engage on focused projects (e.g., a checkout audit, an upsell module, a custom app build).",
  },
];

export default function EcommercePage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Shopify E-commerce Growth & App Development",
    provider: {
      "@type": "Organization",
      name: "Clip & Code",
      url: "https://clipandcode.com",
    },
    areaServed: "Worldwide",
    description:
      "Conversion Rate Optimization (CRO), Average Order Value (AOV) growth, cross-sell and upsell systems, abandoned cart recovery, checkout optimization and custom Shopify app development for Shopify and Shopify Plus merchants.",
    offers: {
      "@type": "OfferCatalog",
      name: "E-commerce Growth Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Conversion Rate Optimization (CRO)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Average Order Value (AOV) Growth" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cross-sell & Upsell Systems" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Abandoned Cart Recovery" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Checkout Optimization" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Shopify App Development" } },
      ],
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_LD.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <EcomHero />
      <EcomCapabilities />
      <ShopifyApps />
      <Methodology />
      <EcomResults />
      <EcomFAQ />
      <EcomCTA />
    </>
  );
}

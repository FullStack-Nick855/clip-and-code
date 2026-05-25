import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clipandcode.com"),
  title: {
    default:
      "Clip & Code — Enterprise Software, AI Systems & Shopify Growth",
    template: "%s · Clip & Code",
  },
  description:
    "Clip & Code is a senior software consultancy building enterprise applications, AI automation, SaaS platforms, Shopify growth engines and modern product experiences for startups and global teams.",
  keywords: [
    "software consultancy",
    "enterprise development",
    "AI automation",
    "ASP.NET",
    "SaaS development",
    "UI/UX design",
    "data engineering",
    "digital transformation",
    "Shopify CRO",
    "Shopify Plus agency",
    "custom Shopify app development",
    "abandoned cart recovery",
    "AOV optimization",
  ],
  authors: [{ name: "Clip & Code" }],
  creator: "Clip & Code",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title:
      "Clip & Code — Enterprise Software, AI Systems & Shopify Growth",
    description:
      "We help startups, enterprises and Shopify brands build scalable products, automate operations and accelerate growth through engineering, design, AI and CRO.",
    siteName: "Clip & Code",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Clip & Code — Enterprise Software, AI Systems & Shopify Growth",
    description:
      "Senior consulting partner for enterprise software, AI systems, Shopify growth and modern product experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  width: "device-width",
  initialScale: 1,
};

const organizationLdJson = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Clip & Code",
  alternateName: "Clip and Code",
  url: "https://clipandcode.com",
  email: "hello@clipandcode.com",
  description:
    "Senior software consultancy specializing in enterprise applications, AI automation, SaaS platforms, Shopify growth and modern product experiences.",
  founder: {
    "@type": "Person",
    name: "Gourav",
    alternateName: "Nick",
    jobTitle: "Senior Software Consultant",
    description:
      "Senior software consultant with 15+ years building enterprise software, AI systems and modern product experiences. Known professionally as Nick by long-standing clients.",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Enterprise Software Development",
    "AI Automation",
    "SaaS Platforms",
    "Shopify CRO",
    "Shopify Plus",
    "Custom Shopify App Development",
    "Data Engineering",
    "UI/UX Design",
    "Cloud Infrastructure",
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: "https://calendly.com/clipandcode/30min",
    name: "Book a strategy call",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationLdJson),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}

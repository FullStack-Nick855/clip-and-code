import Link from "next/link";
import Logo from "./Logo";

const NAV = {
  Practice: [
    { label: "Services", href: "/#services" },
    { label: "Industries", href: "/#industries" },
    { label: "Portfolio", href: "/#case-studies" },
    { label: "Insights", href: "/#insights" },
  ],
  Capabilities: [
    { label: "E-commerce & Shopify", href: "/ecommerce" },
    { label: "AI & Automation", href: "/#services" },
    { label: "Enterprise Data Solutions", href: "/#services" },
    { label: "UI/UX & Product Engineering", href: "/#services" },
  ],
  Company: [
    { label: "About", href: "/#about" },
    { label: "Book a Call", href: "https://calendly.com/clipandcode/30min" },
    { label: "Contact", href: "mailto:hello@clipandcode.com" },
    { label: "Privacy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/[0.06] pt-20 pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Clip &amp; Code is a senior software consultancy building
              enterprise applications, AI systems, Shopify growth engines and
              modern product experiences.
            </p>
            <div className="mt-6 space-y-1.5 text-sm">
              <a
                href="mailto:hello@clipandcode.com"
                className="block text-white/75 transition-colors hover:text-white"
              >
                hello@clipandcode.com
              </a>
              <a
                href="https://calendly.com/clipandcode/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/55 transition-colors hover:text-white"
              >
                Book a 30-min discovery call →
              </a>
            </div>
          </div>

          {Object.entries(NAV).map(([title, items]) => (
            <div key={title}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                {title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 hairline" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Clip &amp; Code. All rights reserved.
          </p>
          <p className="text-xs text-white/35">
            Engineering Digital Growth · AI, Data &amp; Product Consulting
          </p>
        </div>
      </div>
    </footer>
  );
}

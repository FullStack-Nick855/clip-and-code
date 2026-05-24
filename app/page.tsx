import Hero from "@/components/Hero";
import TrustedExperience from "@/components/TrustedExperience";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedExperience />
      <Services />
      <Industries />
      <CaseStudies />
      <WhyUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}

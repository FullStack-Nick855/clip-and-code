import Hero from "@/components/Hero";
import CaseStudiesPortifolio from "@/components/CaseStudiesPortifolio";
import Process from "@/components/Process";
import TrustedExperience from "@/components/TrustedExperience";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import CaseStudySlider from "@/components/Portfolio";

export default function HomePage() {
  return (
    <>
      <Hero />
     
      <Process />
      <TrustedExperience />
      <Services />
      <Industries />
      <CaseStudySlider/>
       {/*<CaseStudiesPortifolio />*/}
      {/* <CaseStudies /> */}
      <WhyUs />
      <CTABanner />
      <Testimonials />
    </>
  );
}

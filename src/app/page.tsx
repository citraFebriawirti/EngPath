import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import StatsSection from "@/components/sections/hero-logos";
import { CoreFeatures } from "@/components/sections/core-features";
import BenefitsGrid from "@/components/sections/benefits-grid";
import AIToolsTabs from "@/components/sections/tools-tab";
import ClientTestimonial from "@/components/sections/client-testimonial";
import Pricing from "@/components/sections/pricing";
import FaqAccordion from "@/components/sections/faq-accordion";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <CoreFeatures />
        <BenefitsGrid />
        <AIToolsTabs />
        <ClientTestimonial />
        <Pricing />
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
}

import ExpertiseSection from "@/components/ExpertiseSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/Hero";
import WhyAffiSurge from "@/components/WhyAffiSurge";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <HeroSection />
      <WhyAffiSurge />
      <ExpertiseSection/>
      <FaqSection />
    </div>
  );
}
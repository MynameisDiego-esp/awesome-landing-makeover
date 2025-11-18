import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import ProblemSectionCustom from "@/components/ProblemSectionCustom";
import SolutionSectionCustom from "@/components/SolutionSectionCustom";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUsSectionCustom from "@/components/WhyChooseUsSectionCustom";
import ProcedureSectionCustom from "@/components/ProcedureSectionCustom";
import ComparisonSectionCustom from "@/components/ComparisonSectionCustom";
import CandidateSectionCustom from "@/components/CandidateSectionCustom";
import TestimonialSection from "@/components/TestimonialSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <HeroSection />
      <ProblemSectionCustom />
      <SolutionSectionCustom />
      <BenefitsSection />
      <WhyChooseUsSectionCustom />
      <ProcedureSectionCustom />
      <ComparisonSectionCustom />
      <CandidateSectionCustom />
      <TestimonialSection />
      <FinalCTASection />
      <FooterSection />
    </main>
  );
};

export default Index;

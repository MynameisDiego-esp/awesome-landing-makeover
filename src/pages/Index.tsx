import FloatingNav from "@/components/FloatingNav";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LanguageModal from "@/components/LanguageModal";
import MobileScrollToggle from "@/components/MobileScrollToggle";
import HeroSection from "@/components/HeroSection";
import ProblemSectionCustom from "@/components/ProblemSectionCustom";
import SolutionSectionCustom from "@/components/SolutionSectionCustom";
import WhyChooseUsSectionCustom from "@/components/WhyChooseUsSectionCustom";
import ProcedureSectionCustom from "@/components/ProcedureSectionCustom";
import ComparisonTable from "@/components/ComparisonTable";
import CandidateSectionCustom from "@/components/CandidateSectionCustom";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";
import AccessibilityPanel from "@/components/AccessibilityPanel";

const Index = () => {
  return (
    <main className="min-h-screen">
      <LanguageModal />
      <FloatingNav />
      <LanguageSwitcher />
      <MobileScrollToggle />
      <AccessibilityPanel />
      <HeroSection />
      <ProblemSectionCustom />
      <SolutionSectionCustom />
      <WhyChooseUsSectionCustom />
      <ProcedureSectionCustom />
      <CandidateSectionCustom />
      <ComparisonTable />
      <TestimonialSection />
      <FinalCTASection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;

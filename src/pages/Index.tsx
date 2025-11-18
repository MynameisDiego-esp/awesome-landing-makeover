import FloatingNav from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcedureTimeline from "@/components/ProcedureTimeline";
import ComparisonTable from "@/components/ComparisonTable";
import CandidateSection from "@/components/CandidateSection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WhyUsSection />
      <ProcedureTimeline />
      <ComparisonTable />
      <CandidateSection />
      <TestimonialCarousel />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;

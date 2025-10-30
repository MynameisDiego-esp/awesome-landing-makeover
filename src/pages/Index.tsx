import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcedureTimeline from "@/components/ProcedureTimeline";
import ComparisonTable from "@/components/ComparisonTable";
import CandidateSection from "@/components/CandidateSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WhyUsSection />
      <ProcedureTimeline />
      <ComparisonTable />
      <CandidateSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;

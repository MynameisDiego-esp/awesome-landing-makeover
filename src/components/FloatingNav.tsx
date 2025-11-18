import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";

const FloatingNav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConsultation = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center py-6 gap-4 lg:flex-row lg:justify-between lg:py-8">
          {/* Logo */}
          <div className="font-bold text-3xl">
            Zero Sweat
          </div>

          {/* Centered CTA Button */}
          <div className="flex items-center justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D] hover:opacity-90 text-gray-900 font-bold text-lg px-8 py-4 shadow-xl text-center leading-tight"
              onClick={handleConsultation}
            >
              <span className="block">Detén el sudor axilar</span>
              <span className="block">para siempre con miraDry®</span>
            </Button>
          </div>

          {/* Empty space for balance on desktop */}
          <div className="hidden lg:block w-[200px]"></div>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNav;

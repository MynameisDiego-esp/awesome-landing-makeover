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
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="font-bold text-3xl">
            Zero Sweat
          </div>

          {/* Centered CTA Button */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D] hover:opacity-90 text-gray-900 font-bold text-lg px-8 shadow-xl whitespace-nowrap"
              onClick={handleConsultation}
            >
              Detén el sudor axilar para siempre con miraDry®
            </Button>
          </div>

          {/* Empty space for balance */}
          <div className="w-[200px]"></div>
        </div>

        {/* Mobile CTA Button */}
        <div className="lg:hidden pb-4">
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D] hover:opacity-90 text-gray-900 font-bold text-base px-6 shadow-xl"
            onClick={handleConsultation}
          >
            Detén el sudor axilar para siempre con miraDry®
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNav;

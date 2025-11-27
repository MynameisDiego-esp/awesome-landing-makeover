import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const FloatingNav = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] text-white shadow-2xl overflow-visible">
      <div className="container mx-auto px-6 relative z-50">
        {/* Logo - Posicionado de forma independiente fuera del flujo */}
        <div className={`absolute left-6 top-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-300 ${
          isButtonHovered 
            ? 'z-30 opacity-100' 
            : 'z-10 opacity-100'
        }`}>
            <img 
              src={logo} 
              alt="Zero Sweat Logo" 
              className="h-32 lg:h-40 xl:h-48 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            />
        </div>

        {/* Contenido principal del navbar con altura fija independiente del logo */}
        <div className="flex flex-col items-center justify-center py-6 gap-4 lg:flex-row lg:justify-center lg:py-8 min-h-[70px] lg:min-h-[80px] relative z-[110]">
          {/* CTA Button */}
          <div className="flex items-center justify-center w-full lg:w-auto relative z-[110]">
            <Button
              size="lg"
              className="bg-gradient-to-b from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D]
                         hover:opacity-90 text-gray-900 font-semibold text-xl lg:text-2xl
                         px-8 lg:px-12 py-6 lg:py-8 shadow-2xl leading-tight rounded-full
                         transition-transform duration-200 hover:scale-105 whitespace-nowrap relative z-[110] tracking-tight"
              onClick={handleContactClick}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              style={{ letterSpacing: 0 }}
            >
              Detén el sudor axilar para  <span className="font-bold">siempre</span>
            </Button>
          </div>
        </div>
      </div>

      {/* SVG Curved Border Effect */}
      <div className="absolute bottom-0 left-0 w-full h-12 pointer-events-none translate-y-full overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lado Izquierdo */}
          <path
            d="M 0,80 Q 0,1 50,0 L 0,0 Z"
            fill="#0A0A0A"
          />
          
          {/* Lado Derecho */}
          <path
            d="M 1200,80 Q 1200,1 1150,0 L 1200,0 Z"
            fill="#0A0A0A"
          />
        </svg>
      </div>

    </nav>
  );
};

export default FloatingNav;
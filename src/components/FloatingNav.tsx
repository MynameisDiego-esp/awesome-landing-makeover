import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Button } from "@/components/ui/button";
import logo from "@/assets/NUEVOLOGO.png";

const FloatingNav = () => {
  const { t } = useTranslation();
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] text-white shadow-2xl overflow-visible">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-50">
        {/* Logo - Posicionado de forma independiente fuera del flujo */}
        {/* Logo más pequeño en móvil */}
        <div className={`absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-300 ${
          isButtonHovered 
            ? 'z-30 opacity-100' 
            : 'z-10 opacity-100'
        }`}>
            <img 
              src={logo} 
              alt="Zero Sweat Logo" 
              className="h-10 sm:h-16 md:h-20 lg:h-28 xl:h-32 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] max-w-[80px] sm:max-w-[120px] md:max-w-none"
            />
        </div>

        {/* Contenido principal del navbar con altura fija independiente del logo */}
        <div className="flex flex-col items-center justify-center py-3 sm:py-4 md:py-5 lg:py-8 gap-2 sm:gap-3 md:gap-4 lg:gap-4 lg:flex-row lg:justify-center min-h-[50px] sm:min-h-[60px] md:min-h-[65px] lg:min-h-[80px] relative z-[110]">
          {/* CTA Button - Versión móvil compacta */}
          <div className="flex items-center justify-center w-full lg:w-auto relative z-[110]">
            {/* Versión móvil con texto abreviado */}
            <Button
              size="lg"
              className="bg-gradient-to-b from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D]
                         hover:opacity-90 text-gray-900 font-semibold text-xs
                         px-3 py-2 shadow-lg leading-tight rounded-full
                         transition-transform duration-200 hover:scale-105 whitespace-nowrap relative z-[110] tracking-tight
                         md:hidden"
              onClick={handleContactClick}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              style={{ letterSpacing: 0 }}
            >
              <Trans 
                i18nKey="nav.stopSweatForeverMobile" 
                components={{ bold: <span className="font-bold" /> }}
              />
            </Button>
            
            {/* Versión desktop completa */}
            <Button
              size="lg"
              className="bg-gradient-to-b from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D]
                         hover:opacity-90 text-gray-900 font-semibold text-base sm:text-lg lg:text-2xl
                         px-4 sm:px-6 lg:px-12 py-4 sm:py-5 lg:py-8 shadow-2xl leading-tight rounded-full
                         transition-transform duration-200 hover:scale-105 whitespace-nowrap relative z-[110] tracking-tight
                         hidden md:flex"
              onClick={handleContactClick}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              style={{ letterSpacing: 0 }}
            >
              <Trans 
                i18nKey="nav.stopSweatForeverDesktop" 
                components={{ bold: <span className="font-bold" /> }}
              />
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
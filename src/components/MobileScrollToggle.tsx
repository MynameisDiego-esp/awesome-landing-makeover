import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileScrollToggle = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    // Solo mostrar en móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isMobileDevice = window.innerWidth < 768;
      
      // Obtener la sección HeroSection
      const heroSection = document.getElementById("inicio");
      let shouldShow = true;
      
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroBottom = scrollY + heroRect.bottom;
        // Ocultar después de que HeroSection salga completamente del viewport
        shouldShow = scrollY < heroBottom - 50;
      }

      // Solo mostrar si estamos dentro de HeroSection y es móvil
      setShowToggle(isMobileDevice && shouldShow);

      // Mostrar botón arriba si no está en el top
      setShowUp(scrollY > 100);

      // Mostrar botón abajo si no está en el bottom
      setShowDown(scrollY + windowHeight < documentHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar posición inicial

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight * 0.8, behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  if (!isMobile || !showToggle) return null;

  return (
    <div className="fixed right-4 bottom-32 z-[9998] flex flex-col gap-2 md:hidden">
      {showUp && (
        <Button
          onClick={scrollUp}
          className="w-12 h-12 rounded-full bg-primary/90 hover:bg-primary text-white shadow-lg backdrop-blur-sm border border-white/20"
          aria-label={t('mobileScroll.scrollUp')}
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}
      {showDown && (
        <Button
          onClick={scrollDown}
          className="w-12 h-12 rounded-full bg-primary/90 hover:bg-primary text-white shadow-lg backdrop-blur-sm border border-white/20"
          aria-label={t('mobileScroll.scrollDown')}
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default MobileScrollToggle;


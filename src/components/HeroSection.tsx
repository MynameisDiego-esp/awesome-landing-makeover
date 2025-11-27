import { useState, useEffect, useRef } from "react";
import heroBg from "@/assets/hero-woman.png";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      if (scrolled && !showButton) {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showButton]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !showButton) {
            setShowButton(true);
          }
        });
      },
      {
        threshold: 0.3, // Se activa cuando el 30% de la sección es visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [showButton]);

  const handleScrollToNext = () => {
    const nextSection = document.getElementById("problema");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen overflow-x-hidden overflow-y-visible"
    >
      {/* Background Gradient - Azul izquierda, Amarillo derecha - abarca toda la altura de la página */}
      <div
        className="fixed inset-0 w-full h-full bg-gradient-to-r from-cyan-600 via-teal-300 to-yellow-300 -z-10"
        style={{ minHeight: '100vh' }}
        aria-hidden="true"
      ></div>

      {/* Content Container - Ajustado para el navbar */}
      <div className="relative container mx-auto px-4 flex items-center min-h-screen pt-24 pb-20 md:pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
          
          {/* Texto - Más grande */}
          <div className="relative z-10 ml-4 sm:ml-6 md:ml-8 lg:ml-10 pt-4 sm:pt-6 md:pt-8 lg:pt-0">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] font-display mb-4 leading-[0.9]">
              <span
                className="text-black inline-block italic font-light tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif",
                  fontStyle: 'italic',
                  letterSpacing: '-0.025em',
                }}
              >
                Zero
              </span>
              <br />
              <span className="text-black inline-block font-semibold font-sans">Sweat</span>
              <br />
              <span className="text-black inline-block font-semibold font-sans">Clinic</span>
            </h1>
            
            {/* Scroll button - starts invisible and appears after scrolling */}
            <div className={`mt-6 ml-4 sm:ml-6 md:ml-8 transition-all duration-500 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              <button
                onClick={handleScrollToNext}
                className="flex flex-col items-start gap-2 text-black hover:opacity-80 transition-opacity duration-300 bg-transparent border-none outline-none cursor-pointer"
                aria-label="Ir a la siguiente sección"
              >
                <span className="text-sm sm:text-base font-semibold uppercase tracking-wide">
                  LISTO PARA SUDAR MENOS?
                </span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </div>

          {/* Imagen - Más grande y por encima del navbar */}
          <div 
            className={`relative mt-4 sm:mt-0 lg:-mt-8 transition-all duration-300 ${
              isScrolled ? 'z-[30]' : 'z-[100]'
            }`}
            style={{ minHeight: "350px" }}
          >
            <img
              src={heroBg}
              alt="Persona feliz"
              className="w-full h-auto object-contain scale-[1.69] self-end"
              style={{ maxHeight: '95vh' }}
            />
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default HeroSection;


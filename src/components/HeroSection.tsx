import { useState, useEffect, useRef } from "react";
import heroBg from "@/assets/hero-woman.png";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      if (scrolled && !showButton) {
        setShowButton(true);
      }

      // Calcular progreso del scroll dentro de la sección para móvil
      if (sectionRef.current) {
        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const sectionTop = scrollY + rect.top;
        const sectionHeight = rect.height;
        
        // Calcular el progreso basado en cuánto se ha scrolleado dentro de la sección
        // 0 = cuando la parte superior de la sección está en el viewport
        // 1 = cuando la parte inferior de la sección sale del viewport
        const scrollPosition = scrollY + windowHeight;
        const sectionStart = sectionTop;
        
        let progress = 0;
        if (scrollPosition >= sectionStart) {
          const scrolledAmount = scrollPosition - sectionStart;
          progress = Math.min(1, scrolledAmount / sectionHeight);
        }
        
        setScrollProgress(progress);
      }
    };

    // Usar requestAnimationFrame para mejor rendimiento
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Llamar una vez al montar
    
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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
        threshold: 0.40, // Se activa cuando el 90% de la sección es visible
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
      <div className="relative container mx-auto px-4 flex items-center min-h-screen pt-0 pb-16 md:pt-2 md:pb-20 lg:pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
          
          {/* Texto - Centrado en móvil, izquierda en desktop */}
          <button
            onClick={handleScrollToNext}
            className="relative z-10 text-center md:text-left ml-0 md:ml-4 lg:ml-8 xl:ml-10 lg:!opacity-100 lg:!transform-none cursor-pointer hover:opacity-95 transition-opacity duration-300 bg-transparent border-none outline-none blink-animation"
            style={{
              opacity: isMobile 
                ? Math.max(0.3, 1 - scrollProgress * 0.5) 
                : 1,
              transform: isMobile 
                ? `translateY(${Math.min(40, scrollProgress * 40)}px)` 
                : 'translateY(-200px)',
              transition: isMobile 
                ? 'opacity 2.5s ease-out, transform 2.5s ease-out'
                : 'none',
              animation: 'blink 2s ease-in-out infinite',
              width: '100%',
            }}
            aria-label="Ir a la siguiente sección"
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-semibold text-black mb-3 sm:mb-4 md:mb-6">
              Listo para dejar de sudar?
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] font-display mb-4 leading-[0.9]">
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
            
            {/* Scroll button - Oculto en móvil, visible en desktop */}
            <div className={`hidden md:block mt-6 ml-4 sm:ml-6 md:ml-8 transition-all duration-500 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              <div className="flex flex-col items-start gap-2 text-black">
                <span className="text-sm sm:text-base font-semibold uppercase tracking-wide">
                  LISTO PARA SUDAR MENOS?
                </span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </div>
            </div>
          </button>

          {/* Imagen Desktop - Visible solo en desktop */}
          <div 
            className={`hidden lg:block relative mt-4 sm:mt-0 lg:-mt-8 transition-all duration-300 ${
              isScrolled ? 'z-[30]' : 'z-[100]'
            }`}
            style={{ minHeight: "350px" }}
          >
            <img
              src={heroBg}
              alt="Persona feliz"
              className="w-full h-auto object-contain scale-[1.95] self-end"
              style={{ maxHeight: '95vh' }}
            />
          </div>
          
        </div>
      </div>

      {/* Imagen Móvil - Aparece pegada al fondo de la sección cuando se hace scroll */}
      <div 
        className="lg:hidden absolute bottom-0 left-0 right-0 w-full pointer-events-none"
        style={{
          zIndex: 5,
          opacity: scrollProgress > 0.4 ? Math.min(1, 0.7 + (scrollProgress - 0.4) * 1.5) : Math.max(0.5, scrollProgress * 1.2),
          transform: scrollProgress > 0.4 
            ? 'translateY(0)' 
            : 'translateY(20%)',
          transition: 'opacity 2.5s cubic-bezier(0.4, 0, 0.2, 1), transform 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="relative w-full h-[75vh] max-h-[600px] flex items-end justify-center px-4 pb-8">
          <img
            src={heroBg}
            alt="Persona feliz"
            className="w-full h-full object-contain object-bottom scale-125"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .blink-animation {
          animation: blink 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;


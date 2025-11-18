import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-woman.png";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
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
      <div className="relative container mx-auto px-4 flex items-center min-h-screen pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Texto - Más grande */}
          <div className="relative z-10 ml-8 md:ml-12 lg:ml-16">
            <h1 className="text-8xl md:text-9xl lg:text-[9rem] font-display mb-4 leading-[0.9]">
              <span className="text-black inline-block italic font-light tracking-tight" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Zero</span>
              <br />
              <span className="text-black inline-block font-bold">Sweat</span>
              <br />
              <span className="text-black inline-block font-bold">Clinic</span>
            </h1>
          </div>

          {/* Imagen - Más grande y por encima del navbar */}
          <div 
            className={`relative -mt-16 lg:-mt-8 transition-all duration-300 ${
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


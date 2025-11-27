import { useState } from "react";
import felizzImg from "@/assets/Feliz1.png";
import tristeImg from "@/assets/trsite (1).png";
import premierImg from "@/assets/PREMIER-Hospital_1.png";

const WhyChooseUsSectionCustom = () => {
  const [selectedView, setSelectedView] = useState<"antes" | "despues">("antes");

  return (
    <section className="relative bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-white">
                Por qué los pacientes nos 
                <span className="text-cyan-400"> eligen</span>
              </h2>
            </div>
            
            <div className="bg-cyan-400 text-black p-8 rounded-lg shadow-lg">
              <p className="text-lg leading-relaxed font-body">
                Somos el único centro en Tijuana que ofrece miraDry, con pacientes que viajan 
                desde todas partes del mundo. Todos los procedimientos son realizados por 
                especialistas capacitados bajo protocolos de seguridad. Se utiliza anestesia 
                para tu máxima comodidad.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex-shrink-0">
                  <svg className="w-full h-full text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">Especialistas Certificados</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex-shrink-0">
                  <svg className="w-full h-full text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">Protocolos de Seguridad</span>
              </div>
            </div>
          </div>
          
          {/* Right image comparison */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-full max-w-2xl aspect-[4/3]">
              {/* Before Image - Triste */}
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  selectedView === "antes"
                    ? "z-20 scale-100 blur-0"
                    : "z-10 scale-90 blur-md -translate-x-4 opacity-60"
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={tristeImg}
                    alt="Antes de miradry"
                    className="w-full h-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* After Image - Feliz (espejo) */}
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  selectedView === "despues"
                    ? "z-20 scale-100 blur-0"
                    : "z-10 scale-90 blur-md translate-x-4 opacity-60"
                }`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={felizzImg}
                    alt="Después de miradry"
                    className="w-full h-full object-contain rounded-lg scale-x-[-1]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Toggle buttons */}
              <div className="absolute inset-0 z-30 flex items-center justify-between pl-4 pr-0 pointer-events-none">
                {/* Left button - Antes */}
                <button
                  onClick={() => setSelectedView("antes")}
                  className={`pointer-events-auto px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                    selectedView === "antes"
                      ? "bg-cyan-400 text-black shadow-lg scale-110"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                >
                  Antes de miradry
                </button>

                {/* Right button - Después */}
                <button
                  onClick={() => setSelectedView("despues")}
                  className={`pointer-events-auto px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap -mr-4 ${
                    selectedView === "despues"
                      ? "bg-cyan-400 text-black shadow-lg scale-110"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                >
                  Después de miradry
                </button>
              </div>

              {/* Premier image badge - bottom right */}
              <div className="absolute -bottom-12 right-36 z-40">
                <div className="relative group">
                  {/* Elegant background with subtle glow */}
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  
                  {/* Image container with padding */}
                  <div className="relative px-5 py-4">
                    <img
                      src={premierImg}
                      alt="Premier Hospital"
                      className="h-20 w-auto object-contain filter brightness-110"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Subtle accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSectionCustom;


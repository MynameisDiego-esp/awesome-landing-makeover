import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import felizzImg from "@/assets/Feliz1.png";
import tristeImg from "@/assets/trsite (1).png";
import premierImg from "@/assets/PREMIER-Hospital_1.png";
import certificacionImg from "@/assets/certificacion.png";

const WhyChooseUsSectionCustom = () => {
  const { t } = useTranslation();
  const [selectedView, setSelectedView] = useState<"antes" | "despues">("antes");

  return (
    <section className="relative bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-white">
                <Trans
                  i18nKey="whyChooseUs.title"
                  components={{
                    cyan: <span className="text-cyan-400" />
                  }}
                />
              </h2>
            </div>
            
            <div className="relative group">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 via-cyan-100 to-cyan-50 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-cyan-200 via-cyan-100 to-cyan-50 text-black p-8 md:p-10 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-cyan-300/50 border-2 border-cyan-300/50">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-32 h-32 flex items-center justify-center overflow-hidden">
                      <img 
                        src={certificacionImg} 
                        alt="Certificación miraDry" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-black">{t('whyChooseUs.certifiedCenter')}</h3>
                  </div>
                  
                  <p className="text-lg md:text-xl leading-relaxed font-body font-medium text-black/90">
                    <Trans
                      i18nKey="whyChooseUs.description"
                      components={{
                        bold: <span className="font-bold text-black" />
                      }}
                    />
                  </p>
                  
                  {/* Decorative line */}
                  <div className="mt-6 h-1 bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-black/30 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex-shrink-0">
                  <svg className="w-full h-full text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">{t('whyChooseUs.certifiedSpecialists')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex-shrink-0">
                  <svg className="w-full h-full text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">{t('whyChooseUs.safetyProtocols')}</span>
              </div>
            </div>
          </div>
          
          {/* Right image comparison */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-full max-w-5xl aspect-[4/3] -mt-12">
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
                    className="w-full h-full object-contain rounded-xl"
                    style={{ transform: 'scale(1.3)' }}
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
                    className="w-full h-full object-contain rounded-xl"
                    style={{ transform: 'scaleX(-1) scale(1.3)' }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Toggle buttons - Mejorados para móvil */}
              <div className="absolute inset-0 z-30 flex items-center justify-between pl-2 pr-2 md:pl-4 md:pr-0 pointer-events-none">
                {/* Left button - Antes */}
                <button
                  onClick={() => setSelectedView("antes")}
                  className={`pointer-events-auto px-3 py-2 md:px-6 md:py-3 text-xs md:text-base rounded-lg font-semibold transition-all duration-300 whitespace-nowrap min-h-[36px] md:min-h-[44px] flex items-center justify-center ${
                    selectedView === "antes"
                      ? "bg-cyan-400 text-black shadow-lg scale-105"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                >
                  {t('whyChooseUs.beforeMiradry')}
                </button>

                {/* Right button - Después */}
                <button
                  onClick={() => setSelectedView("despues")}
                  className={`pointer-events-auto px-3 py-2 md:px-6 md:py-3 text-xs md:text-base rounded-lg font-semibold transition-all duration-300 whitespace-nowrap -mr-0 md:-mr-4 min-h-[36px] md:min-h-[44px] flex items-center justify-center ${
                    selectedView === "despues"
                      ? "bg-cyan-400 text-black shadow-lg scale-105"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                >
                  {t('whyChooseUs.afterMiradry')}
                </button>
              </div>

              {/* Premier image badge - bottom right - Oculto en móvil */}
              <div className="hidden md:block absolute -bottom-36 right-20 z-40">
                <div className="relative group animate-fade-in-slow">
                  {/* Elegant background with subtle glow */}
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl transform group-hover:scale-110 transition-all duration-500 ease-out group-hover:border-cyan-400/50 group-hover:shadow-cyan-400/30 group-hover:bg-black/80"></div>
                  
                  {/* Image container with padding */}
                  <div className="relative px-4 py-3 transition-all duration-500 ease-out group-hover:scale-105">
                    <img
                      src={premierImg}
                      alt="Premier Hospital"
                      className="h-20 md:h-28 w-auto object-contain filter brightness-110 transition-all duration-500 ease-out group-hover:brightness-125 group-hover:drop-shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Subtle accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 group-hover:opacity-100 group-hover:h-1 transition-all duration-500"></div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-500 blur-xl -z-10"></div>
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


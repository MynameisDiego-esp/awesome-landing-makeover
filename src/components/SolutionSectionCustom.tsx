import { useState, useEffect, useRef } from "react";
import step1 from "@/assets/step1.jpg";
import step2 from "@/assets/step2.jpg";
import step3 from "@/assets/step3.jpg";
import step4 from "@/assets/step4.jpg";
import heroImage from "@/assets/hero-image.jpg";

const benefits = [
  { title: "Sin sudor", text: "Reducción inmediata del exceso de sudoración." },
  { title: "Más confianza", text: "Levanta los brazos sin preocuparte." },
  { title: "Ropa limpia", text: "Adiós a las manchas en camisas y blusas." },
  { title: "Duradero", text: "Efecto prolongado por meses." },
  { title: "Seguro", text: "Tratamiento médico aprobado y controlado." },
];

const SolutionSectionCustom = () => {
  const [clickedImage, setClickedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Función para asignar refs
  const setImageRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) {
      imageRefs.current[index] = el;
    }
  };
  const images = [
    { 
      src: step1, 
      alt: "Paso 1 del procedimiento", 
      position: "left-top",
      benefit: benefits[0] // "Sin sudor"
    },
    { 
      src: step2, 
      alt: "Paso 2 del procedimiento", 
      position: "left-bottom",
      benefit: benefits[4] // "Seguro"
    },
    { 
      src: heroImage, 
      alt: "Resultado del tratamiento", 
      position: "center", 
      isMain: true,
      benefit: benefits[1] // "Más confianza"
    },
    { 
      src: step3, 
      alt: "Paso 3 del procedimiento", 
      position: "right-top",
      benefit: benefits[2] // "Ropa limpia"
    },
    { 
      src: step4, 
      alt: "Paso 4 del procedimiento", 
      position: "right-bottom",
      benefit: benefits[3] // "Duradero"
    }
  ];

  // Intersection Observer para detectar cuando las imágenes entran en el viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Función para inicializar observers
    const initObservers = () => {
      imageRefs.current.forEach((ref, index) => {
        if (!ref) return;

        // Limpiar observer anterior si existe
        const existingObserver = observers[index];
        if (existingObserver) {
          existingObserver.disconnect();
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleImages((prev) => {
                  const newSet = new Set(prev);
                  newSet.add(index);
                  return newSet;
                });
              } else {
                // Eliminar del set cuando sale del viewport
                setVisibleImages((prev) => {
                  const newSet = new Set(prev);
                  newSet.delete(index);
                  return newSet;
                });
              }
            });
          },
          {
            threshold: [0.1, 0.2, 0.3], // Múltiples thresholds para mejor detección
            rootMargin: "0px 0px -10% 0px", // Más sensible en móvil
          }
        );

        observer.observe(ref);
        observers[index] = observer;
      });
    };

    // Esperar a que los refs estén listos
    const timeoutId = setTimeout(initObservers, 200);
    
    // También intentar después de un render adicional
    const timeoutId2 = setTimeout(initObservers, 500);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, [images.length]); // Dependencia en la longitud del array de imágenes

  return (
    <section id="solucion" className="bg-[image:var(--gradient-accent)] py-20" style={{ background: "var(--gradient-accent)" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-4 animate-fade-in">
          La Solución: <span className="text-cyan-600">miraDry®</span> — Reducción
        </h2>
        <h3 className="text-3xl font-sans font-bold text-center mb-8 animate-fade-in-slow">
          Permanente de Sudor y Olor
        </h3>
        
        <p className="text-center text-xl max-w-3xl mx-auto mb-16 text-gray-700 animate-fade-in-slow font-body">
          miraDry utiliza energía térmica controlada para eliminar las glándulas sudoríparas 
          y odoríficas bajo la axila. Una vez eliminadas, no vuelven a regenerarse.
        </p>
        
        {/* Galería móvil - Patrón 2-1-2 */}
        <div className="block md:hidden max-w-2xl mx-auto mb-8 space-y-2">
          {/* Fila 1: 2 imágenes (step1 y step2) */}
          <div className="flex gap-2">
            {[images[0], images[1]].map((image, idx) => {
              const imageIndex = idx;
              const isClicked = clickedImage === imageIndex;
              const isVisible = visibleImages.has(imageIndex);
              return (
                <div 
                  key={idx} 
                  ref={(el) => {
                    if (el) imageRefs.current[imageIndex] = el;
                  }}
                  className="relative group animate-fade-in flex-1 cursor-pointer"
                  style={{ 
                    animationDelay: `${idx * 0.1}s`,
                    opacity: 0,
                    animationFillMode: 'forwards'
                  }}
                  onClick={() => {
                    setClickedImage(imageIndex);
                    setTimeout(() => setClickedImage(null), 5000);
                  }}
                >
                  <div className={`relative w-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ${
                    isClicked ? 'scale-95 ring-4 ring-cyan-400 ring-opacity-75' : 'scale-100'
                  }`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isClicked ? 'scale-110 brightness-110' : 'scale-100'
                      }`}
                      style={{ 
                        aspectRatio: '4/3',
                        clipPath: 'inset(0 round 1rem)',
                      }}
                      loading="lazy"
                    />
                    {/* Overlay visible al hacer scroll o clic */}
                    <div className={`absolute inset-0 backdrop-blur-sm flex items-center justify-center p-2 rounded-2xl transition-all duration-700 ease-out ${
                      isVisible || isClicked ? 'bg-black/60 opacity-100' : 'bg-black/60 opacity-0'
                    }`}>
                      <div className={`text-center transition-all duration-700 ease-out ${
                        isVisible || isClicked 
                          ? 'translate-y-0 scale-100 opacity-100' 
                          : 'translate-y-8 scale-95 opacity-0'
                      }`}>
                        <h3 className="text-xs font-bold text-cyan-400 mb-1 font-display">
                          {image.benefit.title}
                        </h3>
                        <p className="text-white text-[10px] font-body">
                          {image.benefit.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fila 2: 1 imagen (heroImage - principal) */}
          <div 
            ref={setImageRef(2)}
            className="relative group animate-fade-in cursor-pointer"
            style={{ 
              animationDelay: '0.2s',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
            onClick={() => {
              setClickedImage(2);
              setTimeout(() => setClickedImage(null), 5000);
            }}
          >
            <div className={`relative w-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ${
              clickedImage === 2 ? 'scale-95 ring-4 ring-cyan-400 ring-opacity-75' : 'scale-100'
            }`}>
              <img
                src={images[2].src}
                alt={images[2].alt}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  clickedImage === 2 ? 'scale-110 brightness-110' : 'scale-100'
                }`}
                style={{ 
                  aspectRatio: '4/3',
                  clipPath: 'inset(0 round 1rem)',
                }}
                loading="lazy"
              />
              {/* Overlay visible al hacer scroll o clic */}
              <div className={`absolute inset-0 backdrop-blur-sm flex items-center justify-center p-4 rounded-2xl transition-all duration-700 ease-out ${
                visibleImages.has(2) || clickedImage === 2 ? 'bg-black/60 opacity-100' : 'bg-black/60 opacity-0'
              }`}>
                <div className={`text-center transition-all duration-700 ease-out ${
                  visibleImages.has(2) || clickedImage === 2
                    ? 'translate-y-0 scale-100 opacity-100'
                    : 'translate-y-8 scale-95 opacity-0'
                }`}>
                  <h3 className="text-sm font-bold text-cyan-400 mb-1 font-display">
                    {images[2].benefit.title}
                  </h3>
                  <p className="text-white text-xs font-body">
                    {images[2].benefit.text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fila 3: 2 imágenes (step3 y step4) */}
          <div className="flex gap-2">
            {[images[3], images[4]].map((image, idx) => {
              const imageIndex = idx + 3;
              const isClicked = clickedImage === imageIndex;
              const isVisible = visibleImages.has(imageIndex);
              return (
                <div 
                  key={idx} 
                  ref={(el) => {
                    if (el) imageRefs.current[imageIndex] = el;
                  }}
                  className="relative group animate-fade-in flex-1 cursor-pointer"
                  style={{ 
                    animationDelay: `${(idx + 3) * 0.1}s`,
                    opacity: 0,
                    animationFillMode: 'forwards'
                  }}
                  onClick={() => {
                    setClickedImage(imageIndex);
                    setTimeout(() => setClickedImage(null), 5000);
                  }}
                >
                  <div className={`relative w-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ${
                    isClicked ? 'scale-95 ring-4 ring-cyan-400 ring-opacity-75' : 'scale-100'
                  }`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isClicked ? 'scale-110 brightness-110' : 'scale-100'
                      }`}
                      style={{ 
                        aspectRatio: '4/3',
                        clipPath: 'inset(0 round 1rem)',
                      }}
                      loading="lazy"
                    />
                    {/* Overlay visible al hacer scroll o clic */}
                    <div className={`absolute inset-0 backdrop-blur-sm flex items-center justify-center p-2 rounded-2xl transition-all duration-700 ease-out ${
                      isVisible || isClicked ? 'bg-black/60 opacity-100' : 'bg-black/60 opacity-0'
                    }`}>
                      <div className={`text-center transition-all duration-700 ease-out ${
                        isVisible || isClicked
                          ? 'translate-y-0 scale-100 opacity-100'
                          : 'translate-y-8 scale-95 opacity-0'
                      }`}>
                        <h3 className="text-xs font-bold text-cyan-400 mb-1 font-display">
                          {image.benefit.title}
                        </h3>
                        <p className="text-white text-[10px] font-body">
                          {image.benefit.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Galería desktop - Grid completo con hover */}
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => {
            const isMain = image.isMain;
            const isLeftTop = image.position === 'left-top';
            const isLeftBottom = image.position === 'left-bottom';
            const isRightTop = image.position === 'right-top';
            const isRightBottom = image.position === 'right-bottom';
            
            let gridClasses = 'relative group animate-fade-in';
            
            if (isMain) {
              gridClasses += ' md:row-span-2 md:col-start-2 md:row-start-1';
            } else if (isLeftTop) {
              gridClasses += ' md:col-start-1 md:row-start-1';
            } else if (isLeftBottom) {
              gridClasses += ' md:col-start-1 md:row-start-2';
            } else if (isRightTop) {
              gridClasses += ' md:col-start-3 md:row-start-1';
            } else if (isRightBottom) {
              gridClasses += ' md:col-start-3 md:row-start-2';
            }
            
            const isClicked = clickedImage === index;
            const isVisible = visibleImages.has(index);
            return (
              <div
                key={index}
                ref={setImageRef(index)}
                className={`${gridClasses} cursor-pointer`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
                onClick={() => {
                  setClickedImage(index);
                  setTimeout(() => setClickedImage(null), 5000);
                }}
              >
                <div className={`absolute -inset-2 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl blur-xl transition-all duration-500 ${
                  isClicked ? 'opacity-60 scale-105' : 'opacity-20 group-hover:opacity-40'
                }`}></div>
                <div className={`relative w-full h-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ${
                  isClicked ? 'scale-95 ring-4 ring-cyan-400 ring-opacity-75' : 'scale-100'
                }`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      isClicked ? 'scale-115 brightness-110' : 'scale-100 group-hover:scale-110'
                    }`}
                    style={{ 
                      aspectRatio: isMain ? '1/2' : '1/1',
                      clipPath: 'inset(0 round 1rem)',
                      height: '100%'
                    }}
                  />
                  {/* Overlay con texto del beneficio - visible al hacer scroll o clic */}
                  <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 rounded-2xl transition-all duration-700 ease-out ${
                    isVisible || isClicked ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className={`text-center transition-all duration-700 ease-out ${
                      isVisible || isClicked
                        ? 'translate-y-0 scale-100 opacity-100'
                        : 'translate-y-8 scale-95 opacity-0'
                    }`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-3 font-display">
                        {image.benefit.title}
                      </h3>
                      <p className="text-white text-base md:text-lg font-body">
                        {image.benefit.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto bg-cyan-200 border-l-4 p-10 rounded-r-lg animate-fade-in-slow" style={{ borderColor: '#00E5DD' }}>
          <p className="text-2xl text-gray-800">
            <strong className="block mb-4 text-3xl">No eres <span className="font-display italic">"una persona sudorosa"</span></strong>
            <span className="text-black text-2xl font-bold block ml-16">Tus glándulas sudoríparas están hiperactivas — y son tratables.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSectionCustom;


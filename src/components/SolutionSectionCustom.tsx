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
        
        {/* Galería móvil - Solo imagen principal */}
        <div className="block md:hidden max-w-2xl mx-auto mb-8">
          {images.filter(img => img.isMain).map((image, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ 
                animationDelay: '0.1s',
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  style={{ 
                    aspectRatio: '4/3',
                    clipPath: 'inset(0 round 1rem)',
                  }}
                />
                {/* Overlay siempre visible en móvil */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 rounded-2xl">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2 font-display">
                      {image.benefit.title}
                    </h3>
                    <p className="text-white text-sm font-body">
                      {image.benefit.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
            
            return (
              <div
                key={index}
                className={gridClasses}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ 
                      aspectRatio: isMain ? '1/2' : '1/1',
                      clipPath: 'inset(0 round 1rem)',
                      height: '100%'
                    }}
                  />
                  {/* Overlay con texto del beneficio */}
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-center justify-center p-6 rounded-2xl">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
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


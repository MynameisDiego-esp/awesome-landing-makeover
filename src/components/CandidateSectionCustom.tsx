import step4 from "@/assets/step4.jpg";

const CandidateSectionCustom = () => {
  return (
    <section id="candidato" className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-dark)] opacity-50" style={{ background: "var(--gradient-dark)" }}></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in-left group">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-glow"></div>
              <img 
                src={step4}
                alt="Candidato ideal"
                className="relative w-full h-auto hover:scale-110 transition-all duration-700 animate-float shadow-2xl rounded-2xl"
                style={{ clipPath: 'inset(0 round 1rem)' }}
              />
            </div>
            
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-display font-bold mb-8 animate-fade-in">
                ¿Eres buen<br />
                <span className="italic text-cyan-400">candidato?</span>
              </h2>
              
              <p className="text-xl mb-6 animate-fade-in font-sans">MiraDry es ideal para ti si:</p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-cyan-400 text-black px-6 py-4 rounded-lg font-sans font-semibold animate-bounce-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                  Mojás o manchas de sudor camisas sin importar el clima
                </div>
                <div className="bg-cyan-400 text-black px-6 py-4 rounded-lg font-sans font-semibold animate-bounce-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                  Te limita social o profesionalmente
                </div>
                <div className="bg-cyan-400 text-black px-6 py-4 rounded-lg font-sans font-semibold animate-bounce-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                  Prefieres una solución médica, no cosmética
                </div>
              </div>
              
              <div className="bg-yellow-400 text-black px-8 py-6 rounded-xl text-center text-xl font-sans font-bold animate-bounce-in hover:scale-110 transition-all duration-300" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
                QUIERES DESAPARECER ESTE PROBLEMA PERMANENTEMENTE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateSectionCustom;


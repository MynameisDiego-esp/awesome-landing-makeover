import step4 from "@/assets/step4.jpg";

const CandidateSectionCustom = () => {
  return (
    <section id="candidato" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-dark)" }}></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slide-in-left">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src={step4}
                  alt="Candidato ideal"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            <div className="animate-slide-in-right space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
                  ¿Eres buen<br />
                  <span className="text-primary italic">candidato?</span>
                </h2>
                <div className="w-20 h-1 bg-primary mt-6"></div>
              </div>
              
              <p className="text-xl text-slate-300 font-sans leading-relaxed">
                MiraDry es ideal para ti si:
              </p>
              
              <div className="space-y-3">
                <div className="group relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 px-6 py-4 rounded-lg transition-all duration-300 hover:bg-slate-800 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-lg"></div>
                  <p className="text-slate-200 font-sans font-medium pl-4">
                    Mojás o manchas de sudor camisas sin importar el clima
                  </p>
                </div>
                <div className="group relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 px-6 py-4 rounded-lg transition-all duration-300 hover:bg-slate-800 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-lg"></div>
                  <p className="text-slate-200 font-sans font-medium pl-4">
                    Te limita social o profesionalmente
                  </p>
                </div>
                <div className="group relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 px-6 py-4 rounded-lg transition-all duration-300 hover:bg-slate-800 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-lg"></div>
                  <p className="text-slate-200 font-sans font-medium pl-4">
                    Prefieres una solución médica, no cosmética
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="bg-gradient-to-r from-primary to-primary-glow text-white px-8 py-6 rounded-xl text-center shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                  <p className="text-lg font-sans font-semibold tracking-wide">
                    Quieres desaparecer este problema permanentemente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateSectionCustom;


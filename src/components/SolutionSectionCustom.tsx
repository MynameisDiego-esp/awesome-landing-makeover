import step2 from "@/assets/step2.jpg";

const SolutionSectionCustom = () => {
  return (
    <section id="solucion" className="bg-[image:var(--gradient-accent)] py-20" style={{ background: "var(--gradient-accent)" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-4 animate-fade-in">
          La Solución: <span className="text-cyan-600">miraDry®</span> — Reducción
        </h2>
        <h3 className="text-3xl font-sans font-bold text-center mb-8 animate-fade-in-slow">
          Permanente de Sudor y Olor
        </h3>
        
        <p className="text-center text-lg max-w-3xl mx-auto mb-16 text-gray-700 animate-fade-in-slow font-body">
          miraDry utiliza energía térmica controlada para eliminar las glándulas sudoríparas 
          y odoríficas bajo la axila. Una vez eliminadas, no vuelven a regenerarse.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-display font-bold mb-8 animate-fade-in italic">Imagina</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
                <span className="text-2xl font-sans font-bold text-cyan-600">01</span>
                <p className="text-lg font-body">Vestirte con cualquier color sin preocuparte</p>
              </div>
              <div className="flex items-start gap-4 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                <span className="text-2xl font-sans font-bold text-cyan-600">02</span>
                <p className="text-lg font-body">Sentirte fresco y seguro todo el día</p>
              </div>
              <div className="flex items-start gap-4 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                <span className="text-2xl font-sans font-bold text-cyan-600">03</span>
                <p className="text-lg font-body">Olvidarte por completo del desodorante</p>
              </div>
              <div className="flex items-start gap-4 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                <span className="text-2xl font-sans font-bold text-cyan-600">04</span>
                <p className="text-lg font-body">Levantar los brazos sin ansiedad</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right group">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img 
              src={step2}
              alt="Persona relajada"
              className="relative w-full h-auto hover:scale-110 hover:rotate-1 transition-all duration-700 animate-float shadow-2xl rounded-2xl"
              style={{ clipPath: 'inset(0 round 1rem)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSectionCustom;


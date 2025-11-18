const WhyChooseUsSectionCustom = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-dark)] opacity-50" style={{ background: "var(--gradient-dark)" }}></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-display font-bold mb-8 animate-fade-in">
                Por qué los<br />
                pacientes nos<br />
                eligen
              </h2>
              
              <div className="bg-cyan-400 text-black p-8 rounded-2xl animate-scale-in hover:scale-105 transition-transform duration-300">
                <p className="text-lg leading-relaxed font-body">
                  Somos el único centro en Tijuana que ofrece miraDry, con pacientes que viajan 
                  desde todas partes del mundo. Todos los procedimientos son realizados por 
                  especialistas capacitados bajo protocolos de seguridad. Se utiliza anestesia 
                  para tu máxima comodidad.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center animate-slide-in-right">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center animate-float hover:scale-110 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-6xl font-bold animate-glow">⭐️</div>
                  <div className="text-2xl font-bold text-black mt-4">5 Estrellas</div>
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


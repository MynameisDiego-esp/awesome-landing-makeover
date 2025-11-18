const ComparisonSectionCustom = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12 animate-fade-in">
          miraDry <span className="italic text-cyan-600">VS</span> Otras Opciones
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-4 font-sans font-bold mb-4 text-center">
            <div>Opción</div>
            <div>Duración</div>
            <div>Invasivo</div>
            <div>Costo a largo plazo</div>
          </div>
          
          <div className="space-y-2 font-body">
            <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 rounded-lg text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              <div>Antitranspirantes</div>
              <div>Diario</div>
              <div>Químico</div>
              <div>Costo de por vida</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 rounded-lg text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <div>Botox</div>
              <div>4 - 6 meses</div>
              <div>Inyecciones</div>
              <div>Gasto repetitivo</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 rounded-lg text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
              <div>Cirugía ETS</div>
              <div>Permanente</div>
              <div>Quirúrgico</div>
              <div>Alto riesgo/costo</div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 p-4 bg-gradient-to-r from-cyan-400 to-cyan-300 text-white rounded-lg font-sans font-bold text-center animate-bounce-in hover:scale-110 animate-glow transition-transform duration-300" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              <div>miraDry</div>
              <div>Permanente</div>
              <div>No quirúrgico</div>
              <div>Inversión única</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSectionCustom;


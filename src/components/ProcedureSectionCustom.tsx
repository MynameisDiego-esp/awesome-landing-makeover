import { Card } from "@/components/ui/card";

const ProcedureSectionCustom = () => {
  return (
    <section id="procedimiento" className="bg-[image:var(--gradient-soft)] py-20" style={{ background: "var(--gradient-soft)" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-4 animate-fade-in">
          Qué esperar del <span className="italic">procedimiento</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="p-8 bg-white animate-fade-in hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-sans font-bold mb-6">Antes</h3>
            <div className="space-y-4 font-body">
              <p><span className="font-bold font-sans">01</span> Consulta médica + prueba de sudoración</p>
              <p><span className="font-bold font-sans">02</span> Evaluación de candidatos, sólo tratamos a los pacientes correctos (95% de los candidatos)</p>
            </div>
          </Card>
          
          <Card className="p-8 bg-white animate-fade-in hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-sans font-bold mb-6">Durante</h3>
            <p className="text-cyan-600 font-sans font-bold mb-4">(60–90 min)</p>
            <div className="space-y-4 font-body">
              <p><span className="font-bold font-sans">01</span> Anestesia local para comodidad</p>
              <p><span className="font-bold font-sans">02</span> Aplicación de miraDry en la zona axilar</p>
            </div>
          </Card>
          
          <Card className="p-8 bg-white animate-fade-in hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-sans font-bold mb-6">Después</h3>
            <div className="space-y-4 font-body">
              <p><span className="font-bold font-sans">01</span> Actividades normales el mismo día</p>
              <p><span className="font-bold font-sans">02</span> Evitar ejercicio intenso por 48–72 horas</p>
              <p><span className="font-bold font-sans">03</span> Resultados inmediatos y permanentes</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcedureSectionCustom;


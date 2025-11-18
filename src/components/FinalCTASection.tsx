import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FinalCTASection = () => {
  return (
    <section id="contacto" className="bg-[image:var(--gradient-vibrant)] py-20" style={{ background: "var(--gradient-vibrant)" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-display font-bold mb-8 animate-bounce-in">
          <span className="text-white">ZERO</span><br />
          <span className="text-black">SWEAT</span><br />
          <span className="text-black">CLINIC</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-3xl font-display font-bold mb-6 animate-fade-in">Tu siguiente <span className="italic">paso</span></p>
          
          <Card className="p-8 bg-white/90 backdrop-blur mb-8 animate-scale-in hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-sans font-bold mb-4">Consulta Médica</h3>
            <h3 className="text-cyan-600 text-xl font-sans font-bold mb-6">Prueba de Sudoración</h3>
            
            <div className="space-y-3 text-left mb-6 font-body">
              <p className="animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>• Evaluación médica</p>
              <p className="animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>• Prueba de sudoración</p>
              <p className="animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>• Plan de tratamiento personalizado</p>
            </div>
          </Card>
          
          <Button variant="cta" size="xl" className="animate-bounce-in font-sans" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
            Agenda tu Consulta + Prueba de Sudoración
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;


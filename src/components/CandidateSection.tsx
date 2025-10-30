import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp } from "lucide-react";

const criteria = [
  "Mojas o manchas de sudor camisas sin importar el clima",
  "El sudor te limita social o profesionalmente",
  "Prefieres una solución médica, no cosmética",
  "Quieres resultados permanentes, no temporales"
];

const CandidateSection = () => {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 animate-fade-in">
            ¿Eres buen candidato?
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 animate-fade-in">
            miraDry® es ideal para ti si...
          </p>
          
          <Card className="p-10 shadow-[var(--shadow-card)] mb-8 animate-fade-in-slow">
            <div className="space-y-4 mb-8">
              {criteria.map((criterion, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="bg-primary/10 p-2 rounded-full shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium">{criterion}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-primary/10 rounded-xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary mb-2">95%</h3>
              <p className="text-foreground font-semibold mb-4">
                De los candidatos evaluados son aprobados para el tratamiento
              </p>
              <Button variant="hero" size="lg" className="mt-4">
                Descubre si calificas
              </Button>
            </div>
          </Card>
          
          <p className="text-center text-lg text-foreground font-semibold animate-scale-in">
            ¿Quieres desaparecer este problema permanentemente?
          </p>
        </div>
      </div>
    </section>
  );
};

export default CandidateSection;

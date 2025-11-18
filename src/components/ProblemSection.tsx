import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const problems = [
  "Re-aplicas desodorante varias veces al día",
  "Manchas tus prendas de la zona de las axilas",
  "Te incomoda levantar los brazos en público",
  "Te preocupa tu propio olor",
  "Sudas aún con clima frío"
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            ¿Te identificas con esto?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
            Si experimentas alguno de estos síntomas, eres candidato para miraDry®
          </p>
          
          <Card className="p-8 shadow-[var(--shadow-card)] animate-fade-in-slow">
            <div className="grid md:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 text-left p-4 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="bg-primary/10 p-2 rounded-full shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{problem}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

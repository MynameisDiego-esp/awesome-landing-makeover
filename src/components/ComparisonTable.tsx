import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    option: "Antitranspirantes",
    duration: "Diario",
    invasive: "Químico",
    cost: "Costo de por vida",
    isGood: false
  },
  {
    option: "Botox",
    duration: "4-6 meses",
    invasive: "Inyecciones",
    cost: "Gasto repetitivo",
    isGood: false
  },
  {
    option: "Cirugía ETS",
    duration: "Permanente",
    invasive: "Quirúrgico",
    cost: "Alto riesgo/costo",
    isGood: false
  },
  {
    option: "miraDry",
    duration: "Permanente",
    invasive: "No quirúrgico",
    cost: "Inversión única",
    isGood: true
  }
];

const ComparisonTable = () => {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 animate-fade-in">
            miraDry® vs Otras Opciones
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 animate-fade-in">
            Compara y descubre por qué miraDry® es la mejor solución
          </p>
          
          <div className="overflow-x-auto animate-fade-in-slow">
            <Card className="p-8 shadow-[var(--shadow-card)]">
              <div className="min-w-[600px]">
                {/* Header */}
                <div className="grid grid-cols-4 gap-4 pb-4 border-b-2 border-primary/20 mb-4">
                  <div className="font-bold text-foreground">Opción</div>
                  <div className="font-bold text-foreground">Duración</div>
                  <div className="font-bold text-foreground">Invasivo</div>
                  <div className="font-bold text-foreground">Costo a largo plazo</div>
                </div>
                
                {/* Rows */}
                {comparisons.map((item, index) => (
                  <div 
                    key={index}
                    className={`grid grid-cols-4 gap-4 py-4 rounded-lg transition-all ${
                      item.isGood 
                        ? "bg-primary/10 border-2 border-primary font-semibold" 
                        : "hover:bg-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {item.isGood ? (
                        <Check className="w-5 h-5 text-primary" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground" />
                      )}
                      <span className={item.isGood ? "text-primary" : "text-foreground"}>
                        {item.option}
                      </span>
                    </div>
                    <div className="text-foreground">{item.duration}</div>
                    <div className="text-foreground">{item.invasive}</div>
                    <div className="text-foreground">{item.cost}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

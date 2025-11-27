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

const attributes = [
  { label: "Duración", key: "duration" as const },
  { label: "Invasivo", key: "invasive" as const },
  { label: "Costo a largo plazo", key: "cost" as const }
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
              <div className="min-w-[800px]">
                {/* Header Row - First row with option names as headers */}
                <div className="grid grid-cols-5 gap-4 pb-4 border-b-2 border-primary/20 mb-4">
                  <div className="font-bold text-foreground">Opción</div>
                  {comparisons.map((item, index) => {
                    const isMiradry = item.isGood;
                    return (
                      <div 
                        key={index}
                        className={`font-bold flex items-center justify-center gap-2 p-3 rounded-lg transition-all ${
                          isMiradry 
                            ? "text-primary bg-primary/10 border-4 border-primary shadow-md" 
                            : "text-foreground border-2 border-transparent"
                        }`}
                      >
                        {item.isGood ? (
                          <Check className="w-5 h-5 text-primary" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground" />
                        )}
                        <span>{item.option}</span>
                      </div>
                    );
                  })}
                </div>
                
                {/* Attribute Rows - Each attribute becomes a row */}
                {attributes.map((attr, attrIndex) => (
                  <div 
                    key={attrIndex}
                    className="grid grid-cols-5 gap-4 py-4 rounded-lg transition-all hover:bg-accent/50 border-b border-primary/10 last:border-b-0"
                  >
                    <div className="font-bold text-foreground flex items-center">{attr.label}</div>
                    {comparisons.map((item, itemIndex) => {
                      const value = item[attr.key];
                      const isMiradry = item.isGood;
                      return (
                        <div
                          key={itemIndex}
                          className={`text-foreground text-center p-3 rounded-lg transition-all flex items-center justify-center ${
                            isMiradry 
                              ? "font-semibold text-primary bg-primary/10 border-4 border-primary shadow-md" 
                              : "border-2 border-transparent"
                          }`}
                        >
                          {value}
                        </div>
                      );
                    })}
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

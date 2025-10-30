import { Card } from "@/components/ui/card";
import { ClipboardCheck, Clock, Activity } from "lucide-react";

const timelineSteps = [
  {
    phase: "Antes",
    icon: ClipboardCheck,
    items: [
      "Consulta médica + prueba de sudoración",
      "Evaluación de candidatos",
      "Solo tratamos a los pacientes correctos (95% de los candidatos)"
    ]
  },
  {
    phase: "Durante",
    icon: Clock,
    duration: "60-90 min",
    items: [
      "Anestesia local para comodidad",
      "Aplicación de miraDry en la zona axilar",
      "Procedimiento realizado por especialistas capacitados"
    ]
  },
  {
    phase: "Después",
    icon: Activity,
    items: [
      "Actividades normales el mismo día",
      "Evitar ejercicio intenso por 48-72 horas",
      "Resultados inmediatos y permanentes"
    ]
  }
];

const ProcedureTimeline = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 animate-fade-in">
            Qué esperar del procedimiento
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 animate-fade-in">
            Un proceso simple y cómodo de principio a fin
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 animate-fade-in-slow border-2 hover:border-primary/50"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {step.phase}
                    </h3>
                    {step.duration && (
                      <p className="text-primary font-semibold">{step.duration}</p>
                    )}
                  </div>
                  
                  <ul className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">0{itemIndex + 1}</span>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcedureTimeline;

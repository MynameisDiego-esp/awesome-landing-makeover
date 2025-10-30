import { Card } from "@/components/ui/card";
import { Award, Users, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Únicos en Tijuana",
    description: "El único centro certificado para ofrecer miraDry® en la región"
  },
  {
    icon: Globe,
    title: "Reconocimiento Internacional",
    description: "Pacientes que viajan desde todas partes del mundo"
  },
  {
    icon: Shield,
    title: "Máxima Seguridad",
    description: "Protocolos de seguridad y especialistas capacitados"
  },
  {
    icon: Users,
    title: "Alta Tasa de Aceptación",
    description: "95% de los candidatos son aprobados para el tratamiento"
  }
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 animate-fade-in">
            Por qué los pacientes nos eligen
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 animate-fade-in">
            Experiencia, confianza y resultados comprobados
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 animate-fade-in-slow border-2 hover:border-primary/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-xl shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <Card className="mt-12 p-10 bg-[image:var(--gradient-accent)] border-2 border-primary/20 animate-scale-in">
            <p className="text-center text-lg text-foreground leading-relaxed">
              Todos los procedimientos son realizados por <span className="font-bold text-primary">especialistas capacitados</span> bajo 
              estrictos protocolos de seguridad. Se utiliza <span className="font-bold text-primary">anestesia local</span> para 
              tu máxima comodidad durante todo el procedimiento.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

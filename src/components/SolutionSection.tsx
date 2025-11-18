import { Card } from "@/components/ui/card";
import { Zap, Shield, Clock, Sparkles } from "lucide-react";
import step1 from "@/assets/step1.jpg";
import step2 from "@/assets/step2.jpg";
import step3 from "@/assets/step3.jpg";
import step4 from "@/assets/step4.jpg";

const benefits = [
  {
    icon: Sparkles,
    title: "Vestirte con cualquier color",
    description: "Sin preocuparte por manchas"
  },
  {
    icon: Shield,
    title: "Sentirte fresco y seguro",
    description: "Todo el día, todos los días"
  },
  {
    icon: Clock,
    title: "Olvidarte del desodorante",
    description: "Por completo y para siempre"
  },
  {
    icon: Zap,
    title: "Levantar los brazos",
    description: "Sin ansiedad ni preocupación"
  }
];

const SolutionSection = () => {
  return (
    <section id="solucion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              La Solución:{" "}
              <span className="text-primary">miraDry®</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              miraDry utiliza energía térmica controlada para eliminar las glándulas sudoríparas 
              y odoríficas bajo la axila. Una vez eliminadas, no vuelven a regenerarse.
            </p>

            {/* Gallery of 8 photos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-in">
              {[step1, step2, step3, step4, step1, step2, step3, step4].map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 aspect-square"
                  style={{ animationDelay: `${idx * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <img
                    src={img}
                    alt={`Galería miraDry ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in-slow">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <Card className="p-10 bg-[image:var(--gradient-accent)] border-2 border-primary/20 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-foreground font-semibold text-lg">Reducción permanente del sudor</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-foreground font-semibold text-lg">Reducción permanente del mal olor</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary/20">
              <p className="text-center text-foreground font-medium text-lg">
                Sin toxinas • Sin cirugía • Sin tiempo de recuperación
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

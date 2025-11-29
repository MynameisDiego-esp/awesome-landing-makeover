import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Calendar, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-20 bg-[image:var(--gradient-accent)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 shadow-[var(--shadow-card)] border-2 border-primary/20 animate-scale-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                ¿Listo para desaparecer este problema{" "}
                <span className="text-primary">permanentemente?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Agenda tu Prueba de Sudoracion gratuita
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-4 rounded-full mb-3">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Prueba de Sudoración</h3>
                <p className="text-sm text-muted-foreground">Evaluamos tu caso específico</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-4 rounded-full mb-3">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Evaluación Médica</h3>
                <p className="text-sm text-muted-foreground">Por especialistas capacitados</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-4 rounded-full mb-3">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Plan Personalizado</h3>
                <p className="text-sm text-muted-foreground">Tratamiento a tu medida</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group" onClick={handleContactClick}>
                <Calendar className="mr-2 group-hover:scale-110 transition-transform" />
                Agendar Prueba de Sudoración Gratuita
              </Button>
              <Button variant="outline" size="xl">
                <Phone className="mr-2" />
                Llamar Ahora
              </Button>
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              Somos el único centro en Tijuana que ofrece miraDry®
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-[image:var(--gradient-hero)]"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="mb-6 flex gap-2 flex-wrap">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Aprobado por FDA
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                No quirúrgico
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Resultados permanentes
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Detén el sudor axilar{" "}
              <span className="text-primary">para siempre</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Basta de vivir con sudor y mal olor. Con miraDry® obtendrás resultados 
              permanentes en solo 1-2 sesiones, sin cirugía ni tiempo de recuperación.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group">
                Agenda tu Consulta Gratuita
                <CheckCircle2 className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Ver cómo funciona
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground italic">
              No eres "una persona sudorosa". Tus glándulas sudoríparas están hiperactivas — y son tratables.
            </p>
          </div>
          
          {/* Right image */}
          <div className="relative animate-fade-in-slow">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={heroImage}
                alt="Persona feliz y segura levantando los brazos sin preocupación"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-[var(--shadow-card)] animate-scale-in">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">95%</p>
                  <p className="text-sm text-muted-foreground">Tasa de éxito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

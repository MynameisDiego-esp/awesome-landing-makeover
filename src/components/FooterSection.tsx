import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white py-12 text-center">
      <div className="container mx-auto px-4">
        <p className="text-2xl font-body font-bold mb-4 animate-fade-in">
          Estás A UNA decisión de transformar tu confianza,<br />
          levantar los brazos sin pensarlo y olvidar el sudor para siempre
        </p>
        
        <Button variant="cta" size="xl" className="mt-6 font-sans animate-bounce-in">
          Agenda tu Consulta + Prueba de Sudoración
        </Button>
      </div>
    </footer>
  );
};

export default FooterSection;


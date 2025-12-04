import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import hikingImage from "@/assets/HIKING.png";

const FinalCTASection = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section 
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${hikingImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      
      {/* Contenido */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-bounce-in">
            <span className="text-white drop-shadow-2xl">ZERO</span><br />
            <span className="text-white drop-shadow-2xl">SWEAT</span><br />
            <span className="text-white drop-shadow-2xl">CLINIC</span>
          </h2>
          
          <p className="text-4xl md:text-5xl font-display font-bold mb-10 animate-fade-in text-white drop-shadow-lg">
            Tu siguiente <span className="italic text-cyan-300">paso</span>
          </p>
          
          <Card className="p-10 bg-white/95 backdrop-blur-md mb-10 animate-scale-in hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-cyan-400/30">
            <h3 className="text-3xl font-sans font-bold mb-2 text-gray-900">Prueba de Sudoracion</h3>
            
            <div className="space-y-4 text-left mb-8 font-body">
              <p className="animate-fade-in hover:translate-x-2 transition-transform duration-300 text-lg text-gray-700 flex items-center gap-3" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                <span className="text-cyan-600 font-bold">✓</span>
                <span>Evaluación médica</span>
              </p>
              <p className="animate-fade-in hover:translate-x-2 transition-transform duration-300 text-lg text-gray-700 flex items-center gap-3" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                <span className="text-cyan-600 font-bold">✓</span>
                <span>Prueba de sudoración</span>
              </p>
              <p className="animate-fade-in hover:translate-x-2 transition-transform duration-300 text-lg text-gray-700 flex items-center gap-3" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                <span className="text-cyan-600 font-bold">✓</span>
                <span>Plan de tratamiento personalizado</span>
              </p>
            </div>
          </Card>
          
          <Button 
            variant="cta" 
            size="xl" 
            className="animate-bounce-in font-sans text-lg px-8 py-6 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300" 
            style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
            onClick={handleContactClick}
          >
            Agenda tu Consulta + Prueba de Sudoración
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;


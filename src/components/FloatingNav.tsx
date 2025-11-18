import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";

const FloatingNav = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, llamar a una API o mostrar un mensaje de éxito
    console.log("Formulario enviado");
    setIsDialogOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] text-white shadow-2xl overflow-visible">
      <div className="container mx-auto px-6 relative z-50">
        {/* Logo - Posicionado de forma independiente fuera del flujo */}
        <div className={`absolute left-6 top-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-300 ${
          isDialogOpen 
            ? 'z-[108] opacity-0' 
            : isButtonHovered 
              ? 'z-30 opacity-100' 
              : 'z-10 opacity-100'
        }`}>
            <img 
              src={logo} 
              alt="Zero Sweat Logo" 
              className="h-32 lg:h-40 xl:h-48 w-auto object-contain"
            />
        </div>

        {/* Contenido principal del navbar con altura fija independiente del logo */}
        <div className="flex flex-col items-center justify-center py-6 gap-4 lg:flex-row lg:justify-center lg:py-8 min-h-[70px] lg:min-h-[80px] relative z-[110]">
          {/* CTA Button */}
          <div className="flex items-center justify-center w-full lg:w-auto relative z-[110]">
            <Button
              size="lg"
              className="bg-gradient-to-b from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D]
                         hover:opacity-90 text-gray-900 font-bold text-lg lg:text-xl
                         px-8 lg:px-12 py-6 lg:py-8 shadow-2xl leading-tight rounded-full
                         transition-transform duration-200 hover:scale-105 whitespace-nowrap relative z-[110]"
              onClick={() => setIsDialogOpen(true)}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              Detén el sudor axilar para siempre
            </Button>
          </div>
        </div>
      </div>

      {/* SVG Curved Border Effect */}
      <div className="absolute bottom-0 left-0 w-full h-12 pointer-events-none translate-y-full overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lado Izquierdo */}
          <path
            d="M 0,80 Q 0,1 50,0 L 0,0 Z"
            fill="#0A0A0A"
          />
          
          {/* Lado Derecho */}
          <path
            d="M 1200,80 Q 1200,1 1150,0 L 1200,0 Z"
            fill="#0A0A0A"
          />
        </svg>
      </div>

      {/* Modal de Formulario */}
      <style>{`
        [data-radix-dialog-overlay] {
          z-index: 109 !important;
          background-color: rgba(0, 0, 0, 0.95) !important;
          backdrop-filter: blur(4px) !important;
        }
        [data-radix-dialog-content] {
          z-index: 110 !important;
          max-height: 90vh !important;
          overflow-y: auto !important;
        }
        body:has([data-radix-dialog-overlay][data-state="open"]) {
          overflow: hidden !important;
        }
      `}</style>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] max-w-[90vw] bg-white text-gray-900 !z-[110] [&>button]:!z-[111] max-h-[90vh] overflow-y-auto p-4 sm:p-6">
          <DialogHeader className="pr-8">
            <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900">
              Solicita información sobre el procedimiento
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-gray-600 mt-2">
              Completa el formulario y nos pondremos en contacto contigo para brindarte más información sobre nuestro procedimiento para detener el sudor axilar.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-3 sm:space-y-4 mt-4" onSubmit={handleSubmit}>
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="nombre" className="text-gray-900 font-medium text-sm sm:text-base">
                Nombre completo *
              </Label>
              <Input
                id="nombre"
                type="text"
                placeholder="Ingresa tu nombre completo"
                required
                className="bg-white border-gray-300 text-sm sm:text-base h-10 sm:h-11"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-gray-900 font-medium text-sm sm:text-base">
                Correo electrónico *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="bg-white border-gray-300 text-sm sm:text-base h-10 sm:h-11"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="telefono" className="text-gray-900 font-medium text-sm sm:text-base">
                Teléfono *
              </Label>
              <Input
                id="telefono"
                type="tel"
                placeholder="+52 123 456 7890"
                required
                className="bg-white border-gray-300 text-sm sm:text-base h-10 sm:h-11"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="edad" className="text-gray-900 font-medium text-sm sm:text-base">
                Edad
              </Label>
              <Input
                id="edad"
                type="number"
                placeholder="Ingresa tu edad"
                className="bg-white border-gray-300 text-sm sm:text-base h-10 sm:h-11"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="consulta" className="text-gray-900 font-medium text-sm sm:text-base">
                Consulta o comentarios
              </Label>
              <textarea
                id="consulta"
                rows={3}
                placeholder="¿Tienes alguna pregunta específica sobre el procedimiento?"
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm sm:text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none border-gray-300"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
              <Button
                type="submit"
                className="bg-gradient-to-b from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D] text-gray-900 font-bold rounded-full px-6 sm:px-8 py-5 sm:py-6 hover:opacity-90 transition-opacity flex-1 text-sm sm:text-base"
              >
                Enviar solicitud
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="rounded-full px-6 sm:px-8 py-5 sm:py-6 border-gray-300 flex-1 text-sm sm:text-base"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default FloatingNav;
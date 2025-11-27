import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, llamar a una API o mostrar un mensaje de éxito
    console.log("Formulario enviado");
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Resetear después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section
      id="contacto"
      className="relative py-24 md:py-32 overflow-hidden min-h-screen flex items-center"
    >
      {/* Background gradient inmersivo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D] opacity-90" />
      
      {/* Overlay pattern para más profundidad */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(0,229,221,0.2) 0%, transparent 50%)`,
        }}
      />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 drop-shadow-lg">
              Agenda tu Consulta
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-2">
              + Prueba de Sudoración
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
          </div>

          {/* Form Card */}
          <Card className="p-8 md:p-12 bg-white/95 backdrop-blur-md shadow-2xl border-2 border-white/50 relative overflow-hidden">
            {/* Success message */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D] flex items-center justify-center z-50 rounded-lg">
                <div className="text-center p-8">
                  <CheckCircle2 className="w-20 h-20 text-gray-900 mx-auto mb-4 animate-scale-in" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    ¡Solicitud Enviada!
                  </h3>
                  <p className="text-lg text-gray-800">
                    Nos pondremos en contacto contigo pronto
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-gray-900 font-semibold text-base">
                  Nombre completo *
                </Label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  required
                  className="bg-white border-2 border-gray-300 focus:border-[#00E5DD] focus:ring-2 focus:ring-[#00E5DD]/20 text-base h-12 transition-all"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-900 font-semibold text-base">
                  Correo electrónico *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="bg-white border-2 border-gray-300 focus:border-[#00E5DD] focus:ring-2 focus:ring-[#00E5DD]/20 text-base h-12 transition-all"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-gray-900 font-semibold text-base">
                  Teléfono *
                </Label>
                <Input
                  id="telefono"
                  type="tel"
                  placeholder="+52 123 456 7890"
                  required
                  className="bg-white border-2 border-gray-300 focus:border-[#00E5DD] focus:ring-2 focus:ring-[#00E5DD]/20 text-base h-12 transition-all"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edad" className="text-gray-900 font-semibold text-base">
                  Edad
                </Label>
                <Input
                  id="edad"
                  type="number"
                  placeholder="Ingresa tu edad"
                  className="bg-white border-2 border-gray-300 focus:border-[#00E5DD] focus:ring-2 focus:ring-[#00E5DD]/20 text-base h-12 transition-all"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="consulta" className="text-gray-900 font-semibold text-base">
                  Consulta o comentarios
                </Label>
                <textarea
                  id="consulta"
                  rows={4}
                  placeholder="¿Tienes alguna pregunta específica sobre el procedimiento?"
                  className="flex w-full rounded-md border-2 border-gray-300 bg-white px-4 py-3 text-base ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5DD] focus-visible:ring-offset-2 focus-visible:border-[#00E5DD] disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-gradient-to-b from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D] text-gray-900 font-bold rounded-full px-8 py-7 hover:opacity-90 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar solicitud
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Additional info */}
            <div className="mt-8 pt-8 border-t-2 border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <CheckCircle2 className="w-8 h-8 text-[#00E5DD] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Prueba de Sudoración</p>
                  <p className="text-xs text-gray-600">Evaluamos tu caso específico</p>
                </div>
                <div>
                  <CheckCircle2 className="w-8 h-8 text-[#00E5DD] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Evaluación Médica</p>
                  <p className="text-xs text-gray-600">Por especialistas capacitados</p>
                </div>
                <div>
                  <CheckCircle2 className="w-8 h-8 text-[#00E5DD] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Plan Personalizado</p>
                  <p className="text-xs text-gray-600">Tratamiento a tu medida</p>
                </div>
              </div>
            </div>
          </Card>

          <p className="text-center text-sm text-gray-700 mt-6 font-medium">
            Somos el único centro en Tijuana que ofrece miraDry®
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;

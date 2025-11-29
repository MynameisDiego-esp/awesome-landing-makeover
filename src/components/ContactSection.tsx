import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const nombre = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const telefono = formData.get('telefono') as string;
    const edad = formData.get('edad') as string;
    const consulta = formData.get('consulta') as string;
    
    // Email de destino
    const emailDestino = 'docsalas@bajahaircenter.com';
    
    // Crear asunto del email
    const asunto = encodeURIComponent('Nueva Prueba de Sudoración - Zero Sweat Clinic');
    
    // Crear cuerpo del mensaje formateado
    const cuerpo = encodeURIComponent(
      `Nueva Prueba de Sudoración - Zero Sweat Clinic\n\n` +
      `Nombre: ${nombre}\n` +
      `Email: ${email}\n` +
      `Teléfono: ${telefono}\n` +
      (edad ? `Edad: ${edad}\n` : '') +
      (consulta ? `\nPrueba de Sudoración:\n${consulta}` : '')
    );
    
    // Crear URL de mailto
    const mailtoUrl = `mailto:${emailDestino}?subject=${asunto}&body=${cuerpo}`;
    
    // Abrir el cliente de email
    window.location.href = mailtoUrl;
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Resetear después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
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
              {t('contact.title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-2">
              {t('contact.subtitle')}
            </p>
            <p className="text-lg text-gray-700 mt-4">
              {t('contact.description')}
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
                    {t('contact.form.successTitle')}
                  </h3>
                  <p className="text-lg text-gray-800">
                    {t('contact.form.successMessage')}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-gray-900 font-semibold text-base">
                  {t('contact.form.name')}
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                  className="bg-white border-2 border-gray-300 focus:border-[#00E5DD] focus:ring-2 focus:ring-[#00E5DD]/20 text-base h-12 transition-all"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-900 font-semibold text-base">
                  {t('contact.form.email')}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                  className="bg-white border-2 border-gray-300 focus:border-[#00E5DD] focus:ring-2 focus:ring-[#00E5DD]/20 text-base h-12 transition-all"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-gray-900 font-semibold text-base">
                  {t('contact.form.phone')}
                </Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder={t('contact.form.phonePlaceholder')}
                  required
                  className="bg-white border-2 border-gray-300 focus:border-[#00E5DD] focus:ring-2 focus:ring-[#00E5DD]/20 text-base h-12 transition-all"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edad" className="text-gray-900 font-semibold text-base">
                  {t('contact.form.age')}
                </Label>
                <Input
                  id="edad"
                  name="edad"
                  type="number"
                  placeholder={t('contact.form.agePlaceholder')}
                  className="bg-white border-2 border-gray-300 focus:border-[#00E5DD] focus:ring-2 focus:ring-[#00E5DD]/20 text-base h-12 transition-all"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="consulta" className="text-gray-900 font-semibold text-base">
                  {t('contact.form.comments')}
                </Label>
                <textarea
                  id="consulta"
                  name="consulta"
                  rows={4}
                  placeholder={t('contact.form.commentsPlaceholder')}
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
                      {t('contact.form.submitting')}
                    </>
                  ) : (
                    <>
                      {t('contact.form.submit')}
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
                  <p className="text-sm font-semibold text-gray-900">{t('contact.features.sweatTest.title')}</p>
                  <p className="text-xs text-gray-600">{t('contact.features.sweatTest.description')}</p>
                </div>
                <div>
                  <CheckCircle2 className="w-8 h-8 text-[#00E5DD] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{t('contact.features.medicalEvaluation.title')}</p>
                  <p className="text-xs text-gray-600">{t('contact.features.medicalEvaluation.description')}</p>
                </div>
                <div>
                  <CheckCircle2 className="w-8 h-8 text-[#00E5DD] mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{t('contact.features.personalizedPlan.title')}</p>
                  <p className="text-xs text-gray-600">{t('contact.features.personalizedPlan.description')}</p>
                </div>
              </div>
            </div>
          </Card>

          <p className="text-center text-sm text-gray-700 mt-6 font-medium">
            {t('contact.note')}
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

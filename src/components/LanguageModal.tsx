import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

const LanguageModal = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [visitorIP, setVisitorIP] = useState<string>('');

  useEffect(() => {
    // Verificar si ya se ha seleccionado un idioma previamente
    const hasSelectedLanguage = localStorage.getItem('language-selected');
    
    // Obtener IP del visitante (múltiples servicios como fallback)
    const fetchIP = async () => {
      const services = [
        'https://api.ipify.org?format=json',
        'https://api64.ipify.org?format=json',
        'https://ipapi.co/json/'
      ];

      for (const service of services) {
        try {
          const res = await fetch(service);
          const data = await res.json();
          const ip = data.ip || data.query;
          if (ip) {
            setVisitorIP(ip);
            // Guardar IP en localStorage para referencia
            localStorage.setItem('visitor-ip', ip);
            console.log('Visitor IP:', ip);
            
            // Aquí puedes hacer una llamada a tu API para guardar la IP
            // fetch('/api/track-visitor', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ ip: ip, timestamp: new Date().toISOString() })
            // });
            break;
          }
        } catch (err) {
          console.error(`Error fetching IP from ${service}:`, err);
          continue;
        }
      }
    };

    fetchIP();

    // Mostrar modal solo si no se ha seleccionado antes
    if (!hasSelectedLanguage) {
      // Esperar un poco para que la página cargue
      setTimeout(() => {
        setIsOpen(true);
      }, 800);
    } else {
      // Si ya hay un idioma guardado, usarlo
      const savedLanguage = localStorage.getItem('i18nextLng') || 'es';
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleLanguageSelect = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language-selected', 'true');
    setIsOpen(false);
    
    // Guardar IP y idioma seleccionado
    const ip = visitorIP || localStorage.getItem('visitor-ip') || 'unknown';
    
    // Enviar datos de tracking (descomenta y configura tu endpoint)
    // fetch('/api/track-visitor', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ 
    //     ip: ip, 
    //     language: lang,
    //     timestamp: new Date().toISOString(),
    //     userAgent: navigator.userAgent
    //   })
    // });
    
    console.log('Language selected:', { ip, language: lang });
  };

  const handleClose = () => {
    // Si cierran sin seleccionar, usar el idioma del navegador o español por defecto
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = browserLang === 'es' || browserLang === 'en' ? browserLang : 'es';
    i18n.changeLanguage(defaultLang);
    localStorage.setItem('language-selected', 'true');
    setIsOpen(false);
    
    // Track even if closed
    const ip = visitorIP || localStorage.getItem('visitor-ip') || 'unknown';
    console.log('Language auto-selected:', { ip, language: defaultLang });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <Card className="relative w-full max-w-md mx-4 bg-[#0A0A0A] border-2 border-cyan-400/30 shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {/* Icon and Title */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Selecciona tu idioma / Select your language
            </h2>
            <p className="text-sm text-gray-400">
              Elige cómo quieres ver el contenido
            </p>
          </div>

          {/* Language Options */}
          <div className="space-y-3 mb-6">
            <Button
              onClick={() => handleLanguageSelect('es')}
              className="w-full bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border-2 border-cyan-400/50 text-white hover:bg-cyan-500/30 hover:border-cyan-400 py-6 text-lg font-semibold transition-all duration-200"
            >
              <span className="text-2xl mr-3">🇲🇽</span>
              <div className="text-left flex-1">
                <div className="font-bold">Español</div>
                <div className="text-sm font-normal opacity-80">Spanish</div>
              </div>
            </Button>

            <Button
              onClick={() => handleLanguageSelect('en')}
              className="w-full bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border-2 border-cyan-400/50 text-white hover:bg-cyan-500/30 hover:border-cyan-400 py-6 text-lg font-semibold transition-all duration-200"
            >
              <span className="text-2xl mr-3">🇺🇸</span>
              <div className="text-left flex-1">
                <div className="font-bold">English</div>
                <div className="text-sm font-normal opacity-80">Inglés</div>
              </div>
            </Button>
          </div>

          {/* Footer note */}
          <p className="text-xs text-center text-gray-500">
            Tu preferencia será guardada para futuras visitas
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LanguageModal;


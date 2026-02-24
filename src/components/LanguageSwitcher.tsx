import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe, ChevronDown, X } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detectar scroll para mostrar/ocultar el popup
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Mostrar después de 100px de scroll
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Cerrar el menú si se vuelve al top
      }
    };

    // Verificar posición inicial
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Cerrar el popup al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      ref={dropdownRef}
      className={`fixed right-6 top-24 z-[9999] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Botón flotante */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#0A0A0A] border border-white/20 text-white hover:text-cyan-400 hover:bg-[#1a1a1a] hover:border-cyan-400/50 transition-all duration-200 rounded-full px-4 py-2.5 shadow-2xl backdrop-blur-sm"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {/* Popup Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-44 bg-[#0A0A0A] border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 backdrop-blur-sm">
          <div className="py-2">
            <button
              onClick={() => changeLanguage('es')}
              className={`w-full text-left px-4 py-3 text-sm transition-colors duration-200 flex items-center justify-between ${
                currentLang === 'es'
                  ? 'bg-cyan-500/20 text-cyan-400 font-semibold'
                  : 'text-white hover:bg-white/10 hover:text-cyan-400'
              }`}
            >
              <span>Español</span>
              {currentLang === 'es' && (
                <span className="text-cyan-400">✓</span>
              )}
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`w-full text-left px-4 py-3 text-sm transition-colors duration-200 flex items-center justify-between ${
                currentLang === 'en'
                  ? 'bg-cyan-500/20 text-cyan-400 font-semibold'
                  : 'text-white hover:bg-white/10 hover:text-cyan-400'
              }`}
            >
              <span>English</span>
              {currentLang === 'en' && (
                <span className="text-cyan-400">✓</span>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;


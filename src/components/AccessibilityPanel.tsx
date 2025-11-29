import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Type, 
  Contrast, 
  RotateCcw,
  Plus,
  Minus
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface AccessibilitySettings {
  fontSize: number; // Multiplier (1.0 = 100%)
  highContrast: boolean;
}

const AccessibilityPanel = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 1.0,
    highContrast: false,
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibilitySettings");
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (e) {
        console.error("Error loading accessibility settings:", e);
      }
    }
  }, []);

  // Apply settings to document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.fontSize = `${newSettings.fontSize * 100}%`;
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }
  };

  // Save settings to localStorage
  const saveSettings = (newSettings: AccessibilitySettings) => {
    localStorage.setItem("accessibilitySettings", JSON.stringify(newSettings));
    setSettings(newSettings);
    applySettings(newSettings);
  };

  // Font size controls
  const increaseFontSize = () => {
    const newSize = Math.min(settings.fontSize + 0.1, 1.5); // Max 150%
    saveSettings({ ...settings, fontSize: newSize });
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(settings.fontSize - 0.1, 0.8); // Min 80%
    saveSettings({ ...settings, fontSize: newSize });
  };

  const resetFontSize = () => {
    saveSettings({ ...settings, fontSize: 1.0 });
  };

  // Contrast toggle
  const toggleContrast = () => {
    saveSettings({ ...settings, highContrast: !settings.highContrast });
  };

  // Reset all settings
  const resetAll = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 1.0,
      highContrast: false,
    };
    saveSettings(defaultSettings);
  };

  return (
    <>
      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl bg-gradient-to-br from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D] hover:opacity-90 text-gray-900 border-2 border-white/50 transition-all duration-300 hover:scale-110 md:w-16 md:h-16"
        aria-label={isOpen ? "Cerrar panel de accesibilidad" : "Abrir panel de accesibilidad"}
        aria-expanded={isOpen}
      >
        <Settings className={`w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </Button>

      {/* Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)] sm:max-w-sm bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-4 sm:p-6 animate-in slide-in-from-bottom-5 duration-300">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b-2 border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Accesibilidad
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
                aria-label="Cerrar"
              >
                ×
              </Button>
            </div>

            {/* Font Size Control */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Tamaño de texto
                </label>
                <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                  {Math.round(settings.fontSize * 100)}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decreaseFontSize}
                  disabled={settings.fontSize <= 0.8}
                  className="flex-1"
                  aria-label="Disminuir tamaño de texto"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetFontSize}
                  className="flex-1"
                  aria-label="Restablecer tamaño de texto"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={increaseFontSize}
                  disabled={settings.fontSize >= 1.5}
                  className="flex-1"
                  aria-label="Aumentar tamaño de texto"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Contrast Control */}
            <div className="space-y-3 pt-2 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <Contrast className="w-4 h-4" />
                  Alto contraste
                </label>
                <Button
                  variant={settings.highContrast ? "default" : "outline"}
                  size="sm"
                  onClick={toggleContrast}
                  className={`transition-all ${
                    settings.highContrast
                      ? "bg-gradient-to-br from-[#00E5DD] via-[#A0FFD6] to-[#FFE04D] text-gray-900"
                      : ""
                  }`}
                  aria-label={settings.highContrast ? "Desactivar alto contraste" : "Activar alto contraste"}
                  aria-pressed={settings.highContrast}
                >
                  {settings.highContrast ? "Activado" : "Desactivado"}
                </Button>
              </div>
            </div>

            {/* Reset All */}
            <div className="pt-2 border-t border-gray-200">
              <Button
                variant="outline"
                size="sm"
                onClick={resetAll}
                className="w-full"
                aria-label="Restablecer todas las configuraciones"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Restablecer todo
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Styles for high contrast mode */}
      <style>{`
        .high-contrast {
          --background: 0 0% 100%;
          --foreground: 0 0% 0%;
          --card: 0 0% 100%;
          --card-foreground: 0 0% 0%;
          --primary: 0 0% 0%;
          --primary-foreground: 0 0% 100%;
          --secondary: 0 0% 95%;
          --secondary-foreground: 0 0% 0%;
          --muted: 0 0% 90%;
          --muted-foreground: 0 0% 0%;
          --accent: 0 0% 85%;
          --accent-foreground: 0 0% 0%;
          --border: 0 0% 0%;
          --input: 0 0% 0%;
          --ring: 0 0% 0%;
        }
        
        .high-contrast * {
          border-color: hsl(0 0% 0%) !important;
        }
        
        .high-contrast button:not(.no-contrast-border),
        .high-contrast a:not(.no-contrast-border) {
          border: 2px solid hsl(0 0% 0%) !important;
        }
        
        .high-contrast h1,
        .high-contrast h2,
        .high-contrast h3,
        .high-contrast h4,
        .high-contrast h5,
        .high-contrast h6,
        .high-contrast p,
        .high-contrast span,
        .high-contrast div {
          color: hsl(0 0% 0%) !important;
        }
        
        .high-contrast .bg-gradient-to-br,
        .high-contrast .bg-gradient-to-r,
        .high-contrast .bg-gradient-to-l {
          background: hsl(0 0% 100%) !important;
          border: 2px solid hsl(0 0% 0%) !important;
        }
        
        @keyframes slide-in-from-bottom-5 {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: slide-in-from-bottom-5 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default AccessibilityPanel;


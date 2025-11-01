import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "problema", label: "El Problema" },
    { id: "solucion", label: "La Solución" },
    { id: "procedimiento", label: "Procedimiento" },
    { id: "candidato", label: "¿Eres candidato?" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="font-bold text-2xl">
            Zero Sweat
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-base font-medium hover:text-green-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white text-base px-6"
              onClick={() => scrollToSection("contacto")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2 text-base font-medium hover:text-green-400 transition-colors"
          >
            Menú
            <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 text-left text-sm font-medium hover:text-green-400 hover:bg-gray-900 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 text-white mt-2"
                onClick={() => scrollToSection("contacto")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Contactar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FloatingNav;

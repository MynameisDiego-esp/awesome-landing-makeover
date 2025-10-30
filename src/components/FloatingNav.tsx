import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <div className="bg-white/90 backdrop-blur-lg rounded-full shadow-[var(--shadow-soft)] border border-border/50 px-4 py-3 flex items-center gap-4">
        {/* Logo */}
        <div className="font-bold text-primary hidden sm:block">
          Zero Sweat
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-full transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Contact Button */}
        <Button 
          size="sm" 
          className="bg-[image:var(--gradient-cta)] hover:opacity-90 rounded-full shadow-[var(--shadow-soft)] border-0"
          onClick={() => scrollToSection("contacto")}
        >
          <Phone className="w-4 h-4 mr-2" />
          Contactar
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-accent/50 rounded-full transition-colors"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full mt-2 left-0 right-0 bg-white/95 backdrop-blur-lg rounded-2xl shadow-[var(--shadow-card)] border border-border/50 p-4 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-3 text-left text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default FloatingNav;

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center mb-6">
              <img 
                src={logo} 
                alt="Zero Sweat Clinic Logo" 
                className="h-24 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">
                <span className="italic">Zero</span> Sweat Clinic
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tu solución definitiva para detener el sudor axilar de forma permanente. 
                Transforma tu confianza con miraDry®.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://www.facebook.com/BajaHairCenter/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/bajahaircenter_andmedispa/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://goo.gl/maps/WpWu7hoQtPs6j8KS6" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-sans font-bold uppercase tracking-wide">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("problema")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                >
                  El Problema
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solucion")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                >
                  La Solución
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("procedimiento")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                >
                  Procedimiento
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-sans font-bold uppercase tracking-wide">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Teléfono</p>
                  <div className="space-y-1">
                    <a href="tel:+16198701316" className="text-white hover:text-primary transition-colors duration-300 block">
                      +1 (619) 870-1316
                    </a>
                    <a href="tel:+526643355729" className="text-white hover:text-primary transition-colors duration-300 block">
                      +52 (664) 335-5729
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a href="mailto:info@zerosweatclinic.com" className="text-white hover:text-primary transition-colors duration-300">
                    info@zerosweatclinic.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Ubicación</p>
                  <a 
                    href="https://goo.gl/maps/WpWu7hoQtPs6j8KS6" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors duration-300 text-sm"
                  >
                    Antonio Caso 2055 Suite 306. Zona Urbana Rio Tijuana, 22010 Tijuana, BC, México
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Horario</p>
                  <div className="space-y-1 text-white text-sm">
                    <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                    <p>Sábado: 9:00 AM - 5:00 PM</p>
                    <p>Domingo: Cerrado</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-sans font-bold uppercase tracking-wide">¿Listo para comenzar?</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Agenda tu Prueba de Sudoracion. 
              Estás a una decisión de transformar tu confianza.
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              className="w-full font-sans"
              onClick={() => scrollToSection("contacto")}
            >
              Agenda tu Consulta
            </Button>
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-gray-400 leading-relaxed">
                Prueba de Sudoracion especializada en hiperhidrosis axilar. 
                Tratamiento con miraDry® certificado.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Zero Sweat Clinic. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;


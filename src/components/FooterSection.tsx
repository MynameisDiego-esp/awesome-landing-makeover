import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Clock } from "lucide-react";
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
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
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
                  <a href="tel:+521234567890" className="text-white hover:text-primary transition-colors duration-300">
                    +52 123 456 7890
                  </a>
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
                  <p className="text-white text-sm">
                    Ciudad de México, México
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Horario</p>
                  <p className="text-white text-sm">
                    Lun - Vie: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-sans font-bold uppercase tracking-wide">¿Listo para comenzar?</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Agenda tu consulta médica y prueba de sudoración. 
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
                Consulta médica especializada en hiperhidrosis axilar. 
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


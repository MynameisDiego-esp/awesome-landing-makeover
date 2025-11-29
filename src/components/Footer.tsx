import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Zero Sweat Clinic</h3>
            <p className="text-background/80 leading-relaxed">
              El único centro certificado en Tijuana para procedimientos miraDry®. 
              Resultados permanentes con tecnología aprobada por FDA.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+1 (619) 870-1316</span>
                <span>+52 (664) 335-5729</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>info@zerosweatclinic.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Antonio Caso 2055 Suite 306. Zona Urbana Rio Tijuana, 22010 Tijuana, BC, México</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Horario</h4>
            <div className="space-y-2 text-background/80">
              <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
              <p>Sábado: 9:00 AM - 5:00 PM</p>
              <p>Domingo: Cerrado</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2025 Zero Sweat Clinic. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            miraDry® es una marca registrada. Procedimiento aprobado por FDA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

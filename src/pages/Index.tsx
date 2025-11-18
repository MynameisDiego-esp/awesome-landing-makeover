import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingNav from "@/components/FloatingNav";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import heroBg from "@/assets/hero-woman.png";
import sillon from "@/assets/sillon.png";
import step1 from "@/assets/step1.jpg";
import step2 from "@/assets/step2.jpg";
import step3 from "@/assets/step3.jpg";
import step4 from "@/assets/step4.jpg";
import { useState, useEffect } from "react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <FloatingNav />
      
      {/* Hero Section */}
<section
  id="inicio"
  className="relative min-h-screen overflow-x-hidden overflow-y-visible"
>
  {/* Background Gradient - Azul izquierda, Amarillo derecha - abarca toda la altura de la página */}
  <div
    className="fixed inset-0 w-full h-full bg-gradient-to-r from-cyan-600 via-teal-300 to-yellow-300 -z-10"
    style={{ minHeight: '100vh' }}
    aria-hidden="true"
  ></div>

  {/* Content Container - Ajustado para el navbar */}
  <div className="relative container mx-auto px-4 flex items-center min-h-screen pt-16 pb-20">
    <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
      
      {/* Texto - Más grande */}
      <div className="relative z-10 ml-8 md:ml-12 lg:ml-16">
        <h1 className="text-8xl md:text-9xl lg:text-[9rem] font-display mb-4 leading-[0.9]">
          <span className="text-black inline-block italic font-light tracking-tight" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Zero</span>
          <br />
          <span className="text-black inline-block font-bold">Sweat</span>
          <br />
          <span className="text-black inline-block font-bold">Clinic</span>
        </h1>
      </div>

      {/* Imagen - Más grande y por encima del navbar, pegada al fondo */}
      <div 
        className={`relative flex items-end transition-all duration-300 ${
          isScrolled ? 'z-[30]' : 'z-[100]'
        }`}
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <img
          src={heroBg}
          alt="Persona feliz"
          className="w-full h-auto object-contain scale-[1.69] object-bottom"
          style={{ maxHeight: '95vh', objectPosition: 'bottom' }}
        />
      </div>
      
    </div>
  </div>
</section>

{/* Problem Section - Dark Clean + Larger Image */}
<section
  id="problema"
  className="relative bg-black text-white py-12 overflow-x-visible"
>
  <div className="container mx-auto px-6 lg:px-8 overflow-visible">
      {/* Dynamic Island - Estilo iPhone - Centrada en el top */}
      <div className="flex justify-center -mt-4 mb-8 animate-fade-in-slow">
        <div className="bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-300 rounded-full px-7 py-4 sm:px-12 sm:py-6 shadow-[0_0_40px_rgba(59,130,246,0.6),0_0_80px_rgba(34,211,238,0.35)] backdrop-blur-md border border-white/20 hover:scale-110 transition-transform duration-300">
        <div className="flex items-center gap-2">
          <p 
            className="text-sm xs:text-base sm:text-lg font-bold text-black leading-tight text-center" 
            style={{ fontFamily: "'Playfair Display', 'Poppins', Georgia, serif" }}
          >
            <span className="hidden sm:inline">Aprobado por FDA • No quirúrgico • 1-2 sesiones • Resultados permanentes</span>
            <span className="sm:hidden">Aprobado por FDA • No quirúrgico • 1-2 sesiones • Permanente</span>
          </p>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-14 lg:gap-24 xl:gap-32 items-end">
      {/* Imagen a la izquierda - pegada al fondo y borde izquierdo */}
      <div className="relative flex justify-start items-end -ml-6 sm:-ml-12 lg:-ml-16 overflow-visible">
        <img
          src={sillon}
          alt="Sillón"
          className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl h-auto object-contain object-bottom scale-110 lg:scale-125"
          style={{ objectPosition: 'bottom left' }}
        />
      </div>

      {/* Texto a la derecha */}
      <div>
        <h2 className="text-4xl lg:text-5xl font-[ClashDisplay] font-bold mb-8 leading-tight pl-6 sm:pl-12">
          Basta de vivir<br />
          con <span className="text-cyan-400 italic">sudor</span> y<br />
          <span className="italic text-cyan-400">mal olor</span>
        </h2>
        
        {/* Isla con gradiente para "Si tú" */}
        <div className="bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-300 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(59,130,246,0.5),0_0_60px_rgba(34,211,238,0.3)] mb-4 -ml-4 sm:-ml-6">
          <p className="text-xl lg:text-2xl font-[Poppins] font-bold text-black mb-4">
            Si tú:
          </p>
          <ul className="space-y-2 sm:space-y-3 font-[Inter] text-sm sm:text-base lg:text-lg text-gray-900">
            <li>• Re-aplicas desodorante varias veces al día</li>
            <li>• Manchas tus prendas en la zona de las axilas</li>
            <li>• Te incomoda levantar los brazos en público</li>
            <li>• Te preocupa tu propio olor</li>
            <li>• Sudas incluso con clima frío</li>
          </ul>
        </div>

        <Button
          variant="cta"
          size="xl"
          className="mt-6 bg-cyan-400 text-black hover:bg-cyan-500 font-[Poppins]"
        >
          Agenda tu Consulta + Prueba de Sudoración
        </Button>
      </div>
    </div>
  </div>
</section> 



      {/* Solution Section */}
      <section id="solucion" className="bg-[image:var(--gradient-accent)] py-20" style={{ background: "var(--gradient-accent)" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-4 animate-fade-in">
            La Solución: <span className="text-cyan-600">miraDry®</span> — Reducción
          </h2>
          <h3 className="text-3xl font-sans font-bold text-center mb-8 animate-fade-in-slow">
            Permanente de Sudor y Olor
          </h3>
          
          <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-gray-700 animate-fade-in-slow font-body">
            miraDry utiliza energía térmica controlada para eliminar las glándulas sudoríparas 
            y odoríficas bajo la axila. Una vez eliminadas, no vuelven a regenerarse.
          </p>

          {/* Gallery of 8 photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-in">
            {[step1, step2, step3, step4, step1, step2, step3, step4].map((img, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 aspect-square"
                style={{ animationDelay: `${idx * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <img
                  src={img}
                  alt={`Galería miraDry ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-display font-bold mb-8 animate-fade-in italic">Imagina</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
                  <span className="text-2xl font-sans font-bold text-cyan-600">01</span>
                  <p className="text-lg font-body">Vestirte con cualquier color sin preocuparte</p>
                </div>
                <div className="flex items-start gap-4 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                  <span className="text-2xl font-sans font-bold text-cyan-600">02</span>
                  <p className="text-lg font-body">Sentirte fresco y seguro todo el día</p>
                </div>
                <div className="flex items-start gap-4 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                  <span className="text-2xl font-sans font-bold text-cyan-600">03</span>
                  <p className="text-lg font-body">Olvidarte por completo del desodorante</p>
                </div>
                <div className="flex items-start gap-4 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                  <span className="text-2xl font-sans font-bold text-cyan-600">04</span>
                  <p className="text-lg font-body">Levantar los brazos sin ansiedad</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right group">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img 
                src={step2}
                alt="Persona relajada"
                className="relative w-full h-auto hover:scale-110 hover:rotate-1 transition-all duration-700 animate-float shadow-2xl rounded-2xl"
                style={{ clipPath: 'inset(0 round 1rem)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<section id="beneficios" className="bg-black text-white py-24">
  <div className="container mx-auto px-6 lg:px-8 text-center">
    <h2 className="text-5xl lg:text-6xl font-[ClashDisplay] font-bold mb-16">
      Beneficios reales,<br />
      <span className="text-cyan-400">desde la primera sesión</span>
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {[
        { title: "Sin sudor", text: "Reducción inmediata del exceso de sudoración." },
        { title: "Más confianza", text: "Levanta los brazos sin preocuparte." },
        { title: "Ropa limpia", text: "Adiós a las manchas en camisas y blusas." },
        { title: "Duradero", text: "Efecto prolongado por meses." },
        { title: "Seguro", text: "Tratamiento médico aprobado y controlado." },
        { title: "Sin dolor", text: "Procedimiento cómodo y rápido." },
      ].map((b, i) => (
        <div key={i} className="p-8 bg-neutral-900 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-[Poppins] text-cyan-400 mb-3">{b.title}</h3>
          <p className="text-gray-300 font-[Inter]">{b.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-dark)] opacity-50" style={{ background: "var(--gradient-dark)" }}></div>
        <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-display font-bold mb-8 animate-fade-in">
                Por qué los<br />
                pacientes nos<br />
                eligen
              </h2>
              
              <div className="bg-cyan-400 text-black p-8 rounded-2xl animate-scale-in hover:scale-105 transition-transform duration-300">
                <p className="text-lg leading-relaxed font-body">
                  Somos el único centro en Tijuana que ofrece miraDry, con pacientes que viajan 
                  desde todas partes del mundo. Todos los procedimientos son realizados por 
                  especialistas capacitados bajo protocolos de seguridad. Se utiliza anestesia 
                  para tu máxima comodidad.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center animate-slide-in-right">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center animate-float hover:scale-110 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-6xl font-bold animate-glow">⭐️</div>
                  <div className="text-2xl font-bold text-black mt-4">5 Estrellas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Procedure Timeline */}
      <section id="procedimiento" className="bg-[image:var(--gradient-soft)] py-20" style={{ background: "var(--gradient-soft)" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-4 animate-fade-in">
            Qué esperar del <span className="italic">procedimiento</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="p-8 bg-white animate-fade-in hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              <h3 className="text-2xl font-sans font-bold mb-6">Antes</h3>
              <div className="space-y-4 font-body">
                <p><span className="font-bold font-sans">01</span> Consulta médica + prueba de sudoración</p>
                <p><span className="font-bold font-sans">02</span> Evaluación de candidatos, sólo tratamos a los pacientes correctos (95% de los candidatos)</p>
              </div>
            </Card>
            
            <Card className="p-8 bg-white animate-fade-in hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
              <h3 className="text-2xl font-sans font-bold mb-6">Durante</h3>
              <p className="text-cyan-600 font-sans font-bold mb-4">(60–90 min)</p>
              <div className="space-y-4 font-body">
                <p><span className="font-bold font-sans">01</span> Anestesia local para comodidad</p>
                <p><span className="font-bold font-sans">02</span> Aplicación de miraDry en la zona axilar</p>
              </div>
            </Card>
            
            <Card className="p-8 bg-white animate-fade-in hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
              <h3 className="text-2xl font-sans font-bold mb-6">Después</h3>
              <div className="space-y-4 font-body">
                <p><span className="font-bold font-sans">01</span> Actividades normales el mismo día</p>
                <p><span className="font-bold font-sans">02</span> Evitar ejercicio intenso por 48–72 horas</p>
                <p><span className="font-bold font-sans">03</span> Resultados inmediatos y permanentes</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12 animate-fade-in">
            miraDry <span className="italic text-cyan-600">VS</span> Otras Opciones
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-4 gap-4 font-sans font-bold mb-4 text-center">
              <div>Opción</div>
              <div>Duración</div>
              <div>Invasivo</div>
              <div>Costo a largo plazo</div>
            </div>
            
            <div className="space-y-2 font-body">
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 rounded-lg text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
                <div>Antitranspirantes</div>
                <div>Diario</div>
                <div>Químico</div>
                <div>Costo de por vida</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 rounded-lg text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                <div>Botox</div>
                <div>4 - 6 meses</div>
                <div>Inyecciones</div>
                <div>Gasto repetitivo</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 rounded-lg text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                <div>Cirugía ETS</div>
                <div>Permanente</div>
                <div>Quirúrgico</div>
                <div>Alto riesgo/costo</div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 p-4 bg-gradient-to-r from-cyan-400 to-cyan-300 text-white rounded-lg font-sans font-bold text-center animate-bounce-in hover:scale-110 animate-glow transition-transform duration-300" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                <div>miraDry</div>
                <div>Permanente</div>
                <div>No quirúrgico</div>
                <div>Inversión única</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Section */}
      <section id="candidato" className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-dark)] opacity-50" style={{ background: "var(--gradient-dark)" }}></div>
        <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in-left group">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-glow"></div>
              <img 
                src={step4}
                alt="Candidato ideal"
                className="relative w-full h-auto hover:scale-110 transition-all duration-700 animate-float shadow-2xl rounded-2xl"
                style={{ clipPath: 'inset(0 round 1rem)' }}
              />
            </div>
            
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-display font-bold mb-8 animate-fade-in">
                ¿Eres buen<br />
                <span className="italic text-cyan-400">candidato?</span>
              </h2>
              
              <p className="text-xl mb-6 animate-fade-in font-sans">MiraDry es ideal para ti si:</p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-cyan-400 text-black px-6 py-4 rounded-lg font-sans font-semibold animate-bounce-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                  Mojás o manchas de sudor camisas sin importar el clima
                </div>
                <div className="bg-cyan-400 text-black px-6 py-4 rounded-lg font-sans font-semibold animate-bounce-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                  Te limita social o profesionalmente
                </div>
                <div className="bg-cyan-400 text-black px-6 py-4 rounded-lg font-sans font-semibold animate-bounce-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                  Prefieres una solución médica, no cosmética
                </div>
              </div>
              
              <div className="bg-yellow-400 text-black px-8 py-6 rounded-xl text-center text-xl font-sans font-bold animate-bounce-in hover:scale-110 transition-all duration-300" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
                QUIERES DESAPARECER ESTE PROBLEMA PERMANENTEMENTE
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-4 animate-fade-in">
            Lo que dicen nuestros <span className="italic text-cyan-600">pacientes</span>
          </h2>
          <p className="text-center text-lg font-body text-gray-600 mb-12 animate-fade-in-slow">
            Miles de vidas transformadas con resultados permanentes
          </p>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="bg-[image:var(--gradient-vibrant)] py-20" style={{ background: "var(--gradient-vibrant)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-display font-bold mb-8 animate-bounce-in">
            <span className="text-white">ZERO</span><br />
            <span className="text-black">SWEAT</span><br />
            <span className="text-black">CLINIC</span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-3xl font-display font-bold mb-6 animate-fade-in">Tu siguiente <span className="italic">paso</span></p>
            
            <Card className="p-8 bg-white/90 backdrop-blur mb-8 animate-scale-in hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-sans font-bold mb-4">Consulta Médica</h3>
              <h3 className="text-cyan-600 text-xl font-sans font-bold mb-6">Prueba de Sudoración</h3>
              
              <div className="space-y-3 text-left mb-6 font-body">
                <p className="animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>• Evaluación médica</p>
                <p className="animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>• Prueba de sudoración</p>
                <p className="animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>• Plan de tratamiento personalizado</p>
              </div>
            </Card>
            
            <Button variant="cta" size="xl" className="animate-bounce-in font-sans" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
              Agenda tu Consulta + Prueba de Sudoración
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-2xl font-body font-bold mb-4 animate-fade-in">
            Estás A UNA decisión de transformar tu confianza,<br />
            levantar los brazos sin pensarlo y olvidar el sudor para siempre
          </p>
          
          <Button variant="cta" size="xl" className="mt-6 font-sans animate-bounce-in">
            Agenda tu Consulta + Prueba de Sudoración
          </Button>
        </div>
      </footer>
    </main>
  );
};

export default Index;

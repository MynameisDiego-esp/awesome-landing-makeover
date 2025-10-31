import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingNav from "@/components/FloatingNav";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import heroBg from "@/assets/hero-bg.jpg";
import step1 from "@/assets/step1.jpg";
import step2 from "@/assets/step2.jpg";
import step3 from "@/assets/step3.jpg";
import step4 from "@/assets/step4.jpg";

const Index = () => {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen bg-[image:var(--gradient-vibrant)] overflow-hidden" style={{ background: "var(--gradient-vibrant)" }}>
        <div className="container mx-auto px-4 flex items-center min-h-screen pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="animate-slide-in-left">
              <p className="bg-cyan-500 text-white px-4 py-2 rounded-full inline-block text-sm mb-6 animate-fade-in">
                Detén el sudor axilar para siempre con miraDry®
              </p>
              
              <h1 className="text-7xl font-display font-bold mb-4">
                <span className="italic text-cyan-600 inline-block animate-bounce-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>Zero</span>
                <br />
                <span className="text-black inline-block animate-bounce-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>Sweat</span>
                <br />
                <span className="text-black inline-block animate-bounce-in" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>Clinic</span>
              </h1>
              
              <div className="bg-cyan-500 text-white px-6 py-3 rounded-lg inline-block text-sm mb-8 animate-fade-in-slow font-body">
                Aprobado por FDA • No quirúrgico • 1-2 sesiones • Resultados permanentes
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <img 
                src={heroBg}
                alt="Persona feliz"
                className="w-full h-auto hover:scale-105 transition-transform duration-500 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Dark */}
      <section id="problema" className="bg-[image:var(--gradient-dark)] text-white py-20" style={{ background: "var(--gradient-dark)" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold mb-12 animate-fade-in">
            Basta de vivir<br />
            con sudor y<br />
            <span className="italic text-cyan-400">mal olor</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-xl mb-6 animate-fade-in font-sans">Si tú:</p>
              <ul className="space-y-3 font-body text-lg">
                <li className="animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>• Re-aplicas desodorante varias veces al día</li>
                <li className="animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>• Manchas tus prendas de la zona de las axilas</li>
                <li className="animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>• Te incomoda levantar los brazos en público</li>
                <li className="animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>• Te preocupa tu propio olor</li>
                <li className="animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>• Sudas aún con clima frío</li>
              </ul>
              
              <Button className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6 hover:scale-110 transition-all duration-300 animate-bounce-in" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
                Agenda tu Consulta + Prueba de Sudoración
              </Button>
            </div>
            
            <div className="relative animate-slide-in-right">
              <img 
                src={step1}
                alt="Persona levantando brazos"
                className="w-full h-auto hover:scale-105 transition-transform duration-500 animate-float shadow-2xl"
              />
            </div>
          </div>
          
          <p className="mt-12 text-center text-cyan-400 italic text-xl animate-fade-in-slow">
            No eres "una persona sudorosa". Tus glándulas sudoríparas están hiperactivas — y son tratables.
          </p>
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
          
          <p className="text-center text-lg max-w-3xl mx-auto mb-16 text-gray-700 animate-fade-in-slow font-body">
            miraDry utiliza energía térmica controlada para eliminar las glándulas sudoríparas 
            y odoríficas bajo la axila. Una vez eliminadas, no vuelven a regenerarse.
          </p>
          
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
            
            <div className="animate-slide-in-right">
              <img 
                src={step2}
                alt="Persona relajada"
                className="w-full h-auto hover:scale-105 transition-transform duration-500 animate-float shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Dark with Yellow Accent */}
      <section className="bg-[image:var(--gradient-dark)] text-white py-20" style={{ background: "var(--gradient-dark)" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src={step3}
                alt="Espalda mostrando resultado"
                className="w-full h-auto hover:scale-105 transition-transform duration-500 animate-float shadow-2xl"
              />
            </div>
            
            <div className="animate-slide-in-right">
              <h3 className="text-4xl font-display font-bold mb-8 animate-fade-in">
                Con <span className="text-cyan-400">miraDry</span> Láser, obtienes:
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-yellow-400 text-black px-6 py-4 rounded-lg font-sans font-semibold text-lg animate-bounce-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                  Reducción permanente del sudor
                </div>
                <div className="bg-yellow-400 text-black px-6 py-4 rounded-lg font-sans font-semibold text-lg animate-bounce-in hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                  Reducción permanente del mal olor
                </div>
              </div>
              
              <p className="text-xl text-cyan-400 animate-fade-in-slow font-body">
                Sin toxinas • Sin cirugía • Sin tiempo de recuperación
              </p>
            </div>
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
            <div className="animate-slide-in-left">
              <img 
                src={step4}
                alt="Candidato ideal"
                className="w-full h-auto hover:scale-105 transition-transform duration-500 animate-float shadow-2xl"
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
            
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-xl px-12 py-6 rounded-full font-sans font-bold animate-bounce-in hover:scale-110 transition-all duration-300" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
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
          
          <Button className="mt-6 bg-cyan-400 hover:bg-cyan-500 text-black text-lg px-8 py-4 rounded-full font-sans font-bold animate-bounce-in hover:scale-110 transition-all duration-300">
            Agenda tu Consulta + Prueba de Sudoración
          </Button>
        </div>
      </footer>
    </main>
  );
};

export default Index;

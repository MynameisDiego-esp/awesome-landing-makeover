import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import sillon from "@/assets/sillon.png";

const problems = [
  "Re-aplicas desodorante varias veces al día",
  "Manchas tus prendas de la zona de las axilas",
  "Te incomoda levantar los brazos en público",
  "Te preocupa tu propio olor",
  "Sudas aún con clima frío"
];

const ProblemSection = () => {
  return (
    <section id="problema" className="relative bg-black text-white py-12 overflow-x-visible">
      <div className="container mx-auto px-6 lg:px-8 overflow-visible">
        {/* Dynamic Island */}
        <div className="flex justify-center -mt-4 mb-8 animate-fade-in-slow">
          <div className="bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-300 rounded-full px-7 py-4 sm:px-12 sm:py-6 shadow-[0_0_40px_rgba(59,130,246,0.6),0_0_80px_rgba(34,211,238,0.35)] backdrop-blur-md border border-white/20 hover:scale-110 transition-transform duration-300">
            <div className="flex items-center gap-2">
              <p className="text-sm xs:text-base sm:text-lg font-bold text-black leading-tight text-center" style={{ fontFamily: "'Playfair Display', 'Poppins', Georgia, serif" }}>
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
          <div className="space-y-8 mb-8 animate-fade-in">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              ¿Te identificas con esto?
            </h2>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 text-left p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="bg-cyan-400/20 p-2 rounded-full shrink-0">
                    <Check className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-white font-medium text-lg">{problem}</p>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-cyan-400/30 p-8 text-center shadow-xl">
              <p className="text-2xl font-bold text-white mb-2">
                Si experimentas alguno de estos síntomas
              </p>
              <p className="text-xl text-cyan-200">
                Eres candidato para miraDry®
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

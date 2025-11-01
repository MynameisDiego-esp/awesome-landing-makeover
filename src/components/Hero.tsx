import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, PlayCircle } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleConsultation = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 via-emerald-200 to-yellow-200" />

      <div className="container mx-auto px-4 py-20 relative z-10 pt-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <div className="mb-6 flex gap-2 flex-wrap">
              <Badge className="text-base px-5 py-2.5 bg-emerald-400 text-white hover:bg-emerald-500 border-none">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Aprobado por FDA
              </Badge>
              <Badge className="text-base px-5 py-2.5 bg-cyan-400 text-white hover:bg-cyan-500 border-none">
                No quirúrgico
              </Badge>
              <Badge className="text-base px-5 py-2.5 bg-purple-400 text-white hover:bg-purple-500 border-none">
                1-2 sesiones
              </Badge>
              <Badge className="text-base px-5 py-2.5 bg-pink-400 text-white hover:bg-pink-500 border-none">
                Resultados permanentes
              </Badge>
            </div>

            <div className="mb-8"></div>

            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              Basta de vivir con sudor y mal olor. Con miraDry® obtendrás resultados permanentes en solo 1-2 sesiones,
              sin cirugía ni tiempo de recuperación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={handleConsultation}
                size="lg"
                className="group bg-gradient-to-r from-[#00E5DD] via-[#A0FFD6] to-[#A0FFD6] hover:opacity-90 text-gray-900 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-xl px-10 py-7"
              >
                Agenda tu Consulta + Prueba de Sudoración
                <CheckCircle2 className="ml-2 w-6 h-6 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Si tú checklist */}
            <div className="bg-white/90 backdrop-blur-sm border-2 border-cyan-400 rounded-2xl p-6 shadow-xl">
              <p className="font-semibold text-gray-900 mb-4 text-xl">Si tú:</p>
              <ul className="space-y-3">
                {[
                  "Re-aplicas desodorante varias veces al día",
                  "Manchas tus prendas de la zona de las axilas",
                  "Te incomoda levantar los brazos en público",
                  "Te preocupa tu propio olor",
                  "Sudas aún con clima frío",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#00E5DD' }} />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 bg-cyan-200 border-l-4 p-4 rounded-r-lg" style={{ borderColor: '#00E5DD' }}>
              <p className="text-lg text-gray-800">
                <strong className="block mb-1 text-xl">No eres "una persona sudorosa"</strong>
                <span className="text-gray-700">Tus glándulas sudoríparas están hiperactivas — y son tratables.</span>
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="relative opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&q=80"
                alt="Persona feliz y segura levantando los brazos sin preocupación"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00E5DD]/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-2xl opacity-0 animate-[scaleIn_0.6s_ease-out_0.8s_forwards] border-2 border-emerald-400">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-cyan-300 to-emerald-300 p-2 sm:p-3 rounded-full">
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#00E5DD' }} />
                </div>
                <div>
                  <p className="font-bold text-xl sm:text-2xl text-gray-900">95%</p>
                  <p className="text-xs sm:text-sm text-gray-600">Candidatos ideales</p>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg opacity-0 animate-[scaleIn_0.6s_ease-out_1s_forwards]">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
              aria-label="Cerrar video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="miraDry Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

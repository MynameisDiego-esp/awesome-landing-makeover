import { useTranslation, Trans } from "react-i18next";
import { Button } from "@/components/ui/button";
import sillon from "@/assets/sillon.png";

const ProblemSectionCustom = () => {
  const { t } = useTranslation();
  const handleContactClick = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="problema"
      className="relative bg-black text-white py-12 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Dynamic Island - Estilo iPhone - Centrada en el top */}
        <div className="flex justify-center -mt-4 mb-8 animate-fade-in-slow">
          <div className="bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-300 rounded-full px-7 py-4 sm:px-12 sm:py-6 shadow-[0_0_40px_rgba(59,130,246,0.6),0_0_80px_rgba(34,211,238,0.35)] backdrop-blur-md border border-white/20 hover:scale-110 transition-transform duration-300">
            <div className="flex items-center gap-2">
              <p 
                className="text-sm xs:text-base sm:text-lg font-bold text-black leading-tight text-center" 
                style={{ fontFamily: "'Playfair Display', 'Poppins', Georgia, serif" }}
              >
                <span className="hidden sm:inline">{t('problem.badge')}</span>
                <span className="sm:hidden">{t('problem.badgeMobile')}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 xl:gap-32 items-end">
          {/* Imagen a la izquierda (más grande y movida a la izquierda, sólo un poco arriba, sin borde) */}
          <div className="relative flex justify-start items-end mb-2 sm:-mb-2 md:-mb-6 lg:-mb-8 -ml-12 sm:-ml-16 md:-ml-24 lg:-ml-32 xl:-ml-[16rem] overflow-visible -mt-8 sm:-mt-10 md:-mt-16 lg:-mt-20 xl:-mt-24">
            <div className="overflow-visible w-full">
            <div className="relative overflow-visible">
  <img
    src={sillon}
    alt={t('problem.chairAlt')}
    className="w-full h-full object-cover scale-[1.15]"
  />
</div>

            </div>
          </div>

          {/* Texto a la derecha */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-[ClashDisplay] font-bold mb-8 leading-tight pl-6 sm:pl-12">
              <Trans
                i18nKey="problem.title"
                components={{
                  cyan: <span className="text-cyan-400 italic" />,
                  br: <br />
                }}
              />
            </h2>
            
            {/* Isla con gradiente para "Si tú" */}
            <div className="bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-300 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(59,130,246,0.5),0_0_60px_rgba(34,211,238,0.3)] mb-4 -ml-4 sm:-ml-6">
              <p className="text-xl lg:text-2xl font-[Poppins] font-bold text-black mb-4">
                {t('problem.ifYou')}
              </p>
              <ul className="space-y-2 sm:space-y-3 font-[Inter] text-sm sm:text-base lg:text-lg text-gray-900">
                <li>• {t('problem.symptoms.1')}</li>
                <li>• {t('problem.symptoms.2')}</li>
                <li>• {t('problem.symptoms.3')}</li>
                <li>• {t('problem.symptoms.4')}</li>
                <li>• {t('problem.symptoms.5')}</li>
              </ul>
            </div>

            <Button
              variant="cta"
              size="xl"
              className="mt-6 bg-cyan-400 text-black hover:bg-cyan-500 font-[Poppins] text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
              onClick={handleContactClick}
            >
              {t('problem.ctaWithConsultation')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSectionCustom;


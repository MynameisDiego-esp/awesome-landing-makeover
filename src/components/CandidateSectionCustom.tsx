import { useTranslation, Trans } from "react-i18next";
import sudorSenor from "@/assets/sudor senor.png";
import premierHospital from "@/assets/PREMIER-Hospital_1.png";

const CandidateSectionCustom = () => {
  const { t } = useTranslation();
  return (
    <section id="candidato" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-dark)" }}></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <div className="relative animate-slide-in-left md:col-span-3 group">
              <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:shadow-primary/20">
                <img 
                  src={sudorSenor}
                  alt="Candidato ideal"
                  className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] min-h-[500px] md:min-h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none transition-all duration-700 group-hover:from-slate-900/10"></div>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-700 pointer-events-none"></div>
              </div>
              {/* PREMIER Hospital Logo - Esquina */}
              <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 right-4 sm:right-6 md:right-8 z-20 group">
                <div className="relative transition-all duration-500 ease-out hover:scale-110 hover:rotate-1 animate-fade-in-slow">
                  <img 
                    src={premierHospital}
                    alt="PREMIER Hospital"
                    className="h-32 sm:h-40 md:h-52 lg:h-64 w-auto object-contain drop-shadow-lg transition-all duration-500 ease-out group-hover:shadow-xl group-hover:shadow-white/20"
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500 blur-xl -z-10"></div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right space-y-8 md:col-span-2">
              <div className="animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight transition-all duration-500 hover:scale-105">
                  <Trans
                    i18nKey="candidate.title"
                    components={{
                      br: <br />,
                      primary: <span className="text-primary italic transition-all duration-500 hover:text-primary/80" />
                    }}
                  />
                </h2>
                <div className="w-20 h-1 bg-primary mt-6 transition-all duration-500 hover:w-32 hover:shadow-lg hover:shadow-primary/50"></div>
              </div>
              
              <p className="text-xl text-slate-300 font-sans leading-relaxed animate-fade-in-slow transition-all duration-500 hover:text-slate-200">
                {t('candidate.subtitle')}
              </p>
              
              <div className="space-y-3">
                <div className="group relative bg-white backdrop-blur-sm border border-white/40 px-6 py-4 rounded-lg transition-all duration-500 ease-out hover:bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-l-lg group-hover:w-2"></div>
                  <p className="text-slate-800 font-sans font-medium pl-4 transition-all duration-300 group-hover:text-slate-900 group-hover:pl-6">
                    {t('candidate.criteria.1')}
                  </p>
                </div>
                <div className="group relative bg-white backdrop-blur-sm border border-white/40 px-6 py-4 rounded-lg transition-all duration-500 ease-out hover:bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-l-lg group-hover:w-2"></div>
                  <p className="text-slate-800 font-sans font-medium pl-4 transition-all duration-300 group-hover:text-slate-900 group-hover:pl-6">
                    {t('candidate.criteria.2')}
                  </p>
                </div>
                <div className="group relative bg-white backdrop-blur-sm border border-white/40 px-6 py-4 rounded-lg transition-all duration-500 ease-out hover:bg-white hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-l-lg group-hover:w-2"></div>
                  <p className="text-slate-800 font-sans font-medium pl-4 transition-all duration-300 group-hover:text-slate-900 group-hover:pl-6">
                    {t('candidate.criteria.3')}
                  </p>
                </div>
              </div>
              
              <div className="pt-4 animate-fade-in-slow">
                <div className="bg-gradient-to-r from-primary to-primary-glow text-white px-8 py-6 rounded-xl text-center shadow-lg shadow-primary/20 transition-all duration-500 ease-out hover:shadow-xl hover:shadow-primary/30 hover:scale-105 hover:-translate-y-1 group cursor-pointer">
                  <p className="text-lg font-sans font-semibold tracking-wide transition-all duration-300 group-hover:tracking-wider">
                    {t('candidate.criteria.4')}
                  </p>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 blur-xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateSectionCustom;


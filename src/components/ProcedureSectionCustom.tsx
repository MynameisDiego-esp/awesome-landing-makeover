import { Card } from "@/components/ui/card";
import { useTranslation, Trans } from "react-i18next";

const ProcedureSectionCustom = () => {
  const { t } = useTranslation();
  return (
    <section id="procedimiento" className="bg-[image:var(--gradient-soft)] py-20" style={{ background: "var(--gradient-soft)" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-4 animate-fade-in">
          <Trans
            i18nKey="procedure.title"
            components={{
              italic: <span className="italic" />
            }}
          />
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="p-8 bg-white animate-fade-in hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-sans font-bold mb-6">{t('procedure.before.title')}</h3>
            <div className="space-y-4 font-body">
              <p><span className="font-bold font-sans">01</span> {t('procedure.before.step1')}</p>
              <p><span className="font-bold font-sans">02</span> {t('procedure.before.step2')}</p>
            </div>
          </Card>
          
          <Card className="p-8 bg-white animate-fade-in hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-sans font-bold mb-6">{t('procedure.during.title')}</h3>
            <p className="text-cyan-600 font-sans font-bold mb-4">{t('procedure.during.duration')}</p>
            <div className="space-y-4 font-body">
              <p><span className="font-bold font-sans">01</span> {t('procedure.during.step1')}</p>
              <p><span className="font-bold font-sans">02</span> {t('procedure.during.step2')}</p>
            </div>
          </Card>
          
          <Card className="p-8 bg-white animate-fade-in hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-sans font-bold mb-6">{t('procedure.after.title')}</h3>
            <div className="space-y-4 font-body">
              <p><span className="font-bold font-sans">01</span> {t('procedure.after.step1')}</p>
              <p><span className="font-bold font-sans">02</span> {t('procedure.after.step2')}</p>
              <p><span className="font-bold font-sans">03</span> {t('procedure.after.step3')}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcedureSectionCustom;


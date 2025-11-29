import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const { t } = useTranslation();
  
  const comparisons = [
    {
      option: t('comparison.options.antiperspirants'),
      duration: t('comparison.values.daily'),
      invasive: t('comparison.values.chemical'),
      cost: t('comparison.values.lifetimeCost'),
      isGood: false
    },
    {
      option: t('comparison.options.botox'),
      duration: t('comparison.values.4to6months'),
      invasive: t('comparison.values.injections'),
      cost: t('comparison.values.repetitiveExpense'),
      isGood: false
    },
    {
      option: t('comparison.options.surgery'),
      duration: t('comparison.values.permanent'),
      invasive: t('comparison.values.surgical'),
      cost: t('comparison.values.highRiskCost'),
      isGood: false
    },
    {
      option: t('comparison.options.miradry'),
      duration: t('comparison.values.permanent'),
      invasive: t('comparison.values.nonSurgical'),
      cost: t('comparison.values.singleInvestment'),
      isGood: true
    }
  ];

  const attributes = [
    { label: t('comparison.duration'), key: "duration" as const },
    { label: t('comparison.invasive'), key: "invasive" as const },
    { label: t('comparison.cost'), key: "cost" as const }
  ];
  
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 animate-fade-in">
            {t('comparison.title')}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 animate-fade-in">
            {t('comparison.subtitle')}
          </p>
          
          <div className="overflow-x-auto animate-fade-in-slow">
            <Card className="p-8 shadow-[var(--shadow-card)]">
              <div className="min-w-[800px]">
                {/* Header Row - First row with option names as headers */}
                <div className="grid grid-cols-5 gap-4 pb-4 border-b-2 border-primary/20 mb-4">
                  <div className="font-bold text-foreground">{t('comparison.option')}</div>
                  {comparisons.map((item, index) => {
                    const isMiradry = item.isGood;
                    return (
                      <div 
                        key={index}
                        className={`font-bold flex items-center justify-center gap-2 p-3 rounded-lg transition-all ${
                          isMiradry 
                            ? "text-primary bg-primary/10 border-4 border-primary shadow-md" 
                            : "text-foreground border-2 border-transparent"
                        }`}
                      >
                        {item.isGood ? (
                          <Check className="w-5 h-5 text-primary" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground" />
                        )}
                        <span>{item.option}</span>
                      </div>
                    );
                  })}
                </div>
                
                {/* Attribute Rows - Each attribute becomes a row */}
                {attributes.map((attr, attrIndex) => (
                  <div 
                    key={attrIndex}
                    className="grid grid-cols-5 gap-4 py-4 rounded-lg transition-all hover:bg-accent/50 border-b border-primary/10 last:border-b-0"
                  >
                    <div className="font-bold text-foreground flex items-center">{attr.label}</div>
                    {comparisons.map((item, itemIndex) => {
                      const value = item[attr.key];
                      const isMiradry = item.isGood;
                      return (
                        <div
                          key={itemIndex}
                          className={`text-foreground text-center p-3 rounded-lg transition-all flex items-center justify-center ${
                            isMiradry 
                              ? "font-semibold text-primary bg-primary/10 border-4 border-primary shadow-md" 
                              : "border-2 border-transparent"
                          }`}
                        >
                          {value}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

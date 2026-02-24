interface ComparisonItem {
  option: string;
  duration: string;
  invasive: string;
  cost: string;
  isHighlighted: boolean;
}

const COMPARISONS: ComparisonItem[] = [
  { 
    option: "Antitranspirantes", 
    duration: "Diario", 
    invasive: "Químico", 
    cost: "Costo de por vida",
    isHighlighted: false
  },
  { 
    option: "Botox", 
    duration: "4 - 6 meses", 
    invasive: "Inyecciones", 
    cost: "Gasto repetitivo",
    isHighlighted: false
  },
  { 
    option: "Cirugía ETS", 
    duration: "Permanente", 
    invasive: "Quirúrgico", 
    cost: "Alto riesgo/costo",
    isHighlighted: false
  },
  { 
    option: "miraDry", 
    duration: "Permanente", 
    invasive: "No quirúrgico", 
    cost: "Inversión única",
    isHighlighted: false
  }
];

const TABLE_HEADERS = ["Opción", "Duración", "Invasivo", "Costo a largo plazo"];

const ComparisonSectionCustom = () => {
  const getAnimationStyle = (index: number) => ({
    animationDelay: `${(index + 1) * 0.1}s`,
    opacity: 0,
    animationFillMode: 'forwards' as const
  });

  const getCardClasses = (isHighlighted: boolean) => {
    const baseClasses = "p-4 rounded-lg text-center transition-transform duration-300";
    if (isHighlighted) {
      return `${baseClasses} bg-cyan-500 text-white font-sans font-bold animate-bounce-in hover:scale-110 animate-glow`;
    }
    return `${baseClasses} bg-gray-100 text-gray-900 font-body animate-fade-in hover:scale-105`;
  };

  const getMobileCardClasses = (isHighlighted: boolean) => {
    const baseClasses = "p-4 rounded-lg text-center animate-fade-in transition-transform duration-300";
    if (isHighlighted) {
      return `${baseClasses} bg-cyan-500 text-white font-sans font-bold`;
    }
    return `${baseClasses} bg-gray-100 text-gray-900 font-body`;
  };

  const getMobileCardStyle = (isHighlighted: boolean, index: number) => ({
    ...getAnimationStyle(index),
    backgroundColor: isHighlighted ? 'rgb(6 182 212)' : 'rgb(243 244 246)'
  });

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12 animate-fade-in">
          miraDry <span className="italic text-cyan-600">VS</span> Otras Opciones
        </h2>
        
        {/* Versión móvil - Cards verticales */}
        <div className="block md:hidden max-w-4xl mx-auto space-y-3">
          {COMPARISONS.map((item, index) => (
            <div
              key={`mobile-${item.option}-${index}`}
              className={getMobileCardClasses(item.isHighlighted)}
              style={getMobileCardStyle(item.isHighlighted, index)}
            >
              <div className={`font-bold mb-2 text-base ${item.isHighlighted ? "text-cyan-700" : "text-gray-900"}`}>
                {item.option}
              </div>
              <div className={`text-sm space-y-1 ${item.isHighlighted ? "text-cyan-600" : "text-gray-700"}`}>
                <div>
                  <span className="font-semibold">Duración:</span> {item.duration}
                </div>
                <div>
                  <span className="font-semibold">Invasivo:</span> {item.invasive}
                </div>
                <div>
                  <span className="font-semibold">Costo:</span> {item.cost}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Versión desktop - Grid de 4 columnas */}
        <div className="hidden md:block max-w-4xl mx-auto">
          {/* Headers */}
          <div className="grid grid-cols-4 gap-4 font-sans font-bold mb-4 text-center">
            {TABLE_HEADERS.map((header, index) => (
              <div key={`header-${index}`}>{header}</div>
            ))}
          </div>
          
          {/* Rows */}
          <div className="space-y-2 font-body">
            {COMPARISONS.map((item, index) => {
              const rowData = [item.option, item.duration, item.invasive, item.cost];
              return (
                <div
                  key={`desktop-${item.option}-${index}`}
                  className={`grid grid-cols-4 gap-4 ${getCardClasses(item.isHighlighted)}`}
                  style={getAnimationStyle(index)}
                >
                  {rowData.map((data, dataIndex) => (
                    <div key={`cell-${index}-${dataIndex}`}>{data}</div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSectionCustom;


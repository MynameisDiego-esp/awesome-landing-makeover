import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ClipboardCheck, Clock, Activity } from "lucide-react";

// Mouse selection animation using framer-motion
import { motion, AnimatePresence } from "framer-motion";

const timelineSteps = [
  {
    phase: "Antes",
    icon: ClipboardCheck,
    items: [
      "Prueba de Sudoracion",
      "Evaluación de candidatos",
      "Solo tratamos a los pacientes correctos (95% de los candidatos)",
    ],
  },
  {
    phase: "Durante",
    icon: Clock,
    duration: "60-90 min",
    items: [
      "Anestesia local para comodidad",
      "Aplicación de miraDry en la zona axilar",
      "Procedimiento realizado por especialistas capacitados",
    ],
  },
  {
    phase: "Después",
    icon: Activity,
    items: [
      "Actividades normales el mismo día",
      "Evitar ejercicio intenso por 48-72 horas",
      "Resultados inmediatos y permanentes",
    ],
  },
];

// Animation variants for click selection
const cardVariants = {
  initial: { scale: 1, y: 0, boxShadow: "0 2px 16px rgba(0,0,0,0.05)", borderColor: "rgba(0,0,0,0.13)" },
  hover: { scale: 1.04, y: -8, boxShadow: "0 6px 30px 0px rgba(34,211,238,0.18)", borderColor: "rgba(34,211,238,0.27)" },
  selected: { 
    scale: 1.1, 
    y: -22, 
    boxShadow: "0 10px 50px 0px rgba(34,211,238,0.28),0 0 10px 2px #22d3ee77", 
    borderColor: "#06b6d4",
    transition: { type: "spring" as const, stiffness: 220, damping: 20 }
  }
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1.04, transition: { duration: 0.25 } },
  exit: { opacity: 0, scale: 1.12, transition: { duration: 0.18 } }
};

const ProcedureTimeline = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 animate-fade-in">
            Qué esperar del procedimiento
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 animate-fade-in">
            Un proceso simple y cómodo de principio a fin
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isSelected = selectedCard === index;
              return (
                <motion.div
                  key={index}
                  initial="initial"
                  animate={isSelected ? "selected" : "initial"}
                  whileHover="hover"
                  variants={cardVariants}
                  transition={{ type: "spring", duration: 0.3 }}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => handleCardClick(index)}
                  className={`relative cursor-pointer select-none group`}
                >
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        className="pointer-events-none absolute inset-0 z-10 rounded-xl"
                        variants={glowVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        style={{
                          boxShadow: "0 0 45px 10px #22d3ee55, 0 0 15px 3px #22d3ee44, 0 4px 40px 0px #06b6d4b0"
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <Card
                    tabIndex={0}
                    className={`relative z-20 p-8 border-2 transition-all animate-fade-in-slow ${
                      isSelected
                        ? "ring-2 ring-cyan-400 ring-offset-2 border-primary/60"
                        : "hover:border-primary/40"
                    } group-active:scale-98`}
                  >
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {step.phase}
                      </h3>
                      {step.duration && (
                        <p className="text-primary font-semibold">
                          {step.duration}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">
                            0{itemIndex + 1}
                          </span>
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  {/* pseudo-cursor animation when selected */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        key={`cursor-${index}`}
                        initial={{ opacity: 0, x: -30, y: -30 }}
                        animate={{ opacity: 1, x: 16, y: 16 }}
                        exit={{ opacity: 0, x: 0, y: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="pointer-events-none absolute -top-2 -left-2 z-30"
                        style={{ width: 32, height: 32 }}
                      >
                        <svg width={32} height={32} viewBox="0 0 32 32" className="">
                          <defs>
                            <filter id="dropShadow" x="0" y="0" width="200%" height="200%">
                              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#06b6d4" />
                            </filter>
                          </defs>
                          <g filter="url(#dropShadow)">
                            <path
                              d="M6.5 4L25 15.5H17.5L22 28L13 17.75L6.5 20.5V4Z"
                              fill="#22d3ee"
                              stroke="#0ea5e9"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcedureTimeline;

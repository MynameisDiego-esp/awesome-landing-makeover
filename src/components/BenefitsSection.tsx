const BenefitsSection = () => {
  const benefits = [
    { title: "Sin sudor", text: "Reducción inmediata del exceso de sudoración." },
    { title: "Más confianza", text: "Levanta los brazos sin preocuparte." },
    { title: "Ropa limpia", text: "Adiós a las manchas en camisas y blusas." },
    { title: "Duradero", text: "Efecto prolongado por meses." },
    { title: "Seguro", text: "Tratamiento médico aprobado y controlado." },
    { title: "Sin dolor", text: "Procedimiento cómodo y rápido." },
  ];

  return (
    <section id="beneficios" className="bg-black text-white py-24">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-5xl lg:text-6xl font-[ClashDisplay] font-bold mb-16">
          Beneficios reales,<br />
          <span className="text-cyan-400">desde la primera sesión</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((b, i) => (
            <div key={i} className="p-8 bg-neutral-900 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-[Poppins] text-cyan-400 mb-3">{b.title}</h3>
              <p className="text-gray-300 font-[Inter]">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;


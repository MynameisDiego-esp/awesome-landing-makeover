import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const TestimonialSection = () => {
  return (
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
  );
};

export default TestimonialSection;


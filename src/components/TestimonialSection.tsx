import { useTranslation, Trans } from "react-i18next";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const TestimonialSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-br from-cyan-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-4 animate-fade-in">
          <Trans
            i18nKey="testimonials.title"
            components={{
              cyan: <span className="italic text-cyan-600" />
            }}
          />
        </h2>
        <p className="text-center text-lg font-body text-gray-600 mb-12 animate-fade-in-slow">
          {t('testimonials.subtitle')}
        </p>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default TestimonialSection;


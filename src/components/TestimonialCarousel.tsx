import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TestimonialCarousel = () => {
  const { t } = useTranslation();
  
  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{
    text: string;
    name: string;
  }>;
  
  // Agregar rating a cada testimonio
  const testimonialsWithRating = testimonials.map(testimonial => ({
    ...testimonial,
    rating: 5,
  }));
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonialsWithRating.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-2">
                <Card className="p-8 bg-white/90 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-lg font-body text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-sans font-semibold text-cyan-600">
                    — {testimonial.name}
                  </p>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    text: "Después de años luchando con sudor excesivo, miraDry cambió mi vida completamente. Ya no me preocupo por las manchas en mi ropa.",
    name: "María G.",
    rating: 5,
  },
  {
    text: "El procedimiento fue rápido y prácticamente indoloro. Los resultados fueron inmediatos y permanentes. ¡Lo recomiendo 100%!",
    name: "Carlos R.",
    rating: 5,
  },
  {
    text: "Viajé desde San Diego para el tratamiento. El personal fue profesional y los resultados superaron mis expectativas.",
    name: "Jennifer M.",
    rating: 5,
  },
  {
    text: "Ya no necesito desodorante y puedo usar cualquier color de ropa sin preocuparme. Fue la mejor inversión que he hecho.",
    name: "Luis F.",
    rating: 5,
  },
];

export const TestimonialCarousel = () => {
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
          {testimonials.map((testimonial, index) => (
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

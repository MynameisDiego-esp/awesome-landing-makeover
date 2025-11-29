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
    text: "Fui a ver a la Dra. Sarah. Me hizo PRP y restauración láser de CO2 en la cara. No mostraré fotos ahora mismo porque estoy sanando. Vivo en Nevada y viajé a México.\nLlevo unos tres o cuatro años visitándola para diferentes modalidades. Es increíble.\n¡Échenle un vistazo!.",
    name: "Rita B.",
    rating: 5,
  },
  {
    text: "Me recomendó a la Dra. Salas Mónica Garibay Silver, Enlace de Turismo Médico, quien me ha ayudado en numerosas ocasiones a encontrar el médico, el hospital o los servicios relacionados adecuados para mis necesidades. La Dra. Salas y su equipo son amables y profesionales. Después de mi consulta sobre la piel por varios problemas, la Dra. Salas me proporcionó un plan escrito para abordar cada uno con terapias y medicamentos. Esta es la primera vez que lo hago, ya que la mayoría de los médicos explican cómo tratarán mis problemas, pero rara vez hay un plan tan detallado. Mi primera terapia fue con la enfermera Claudia, quien fue muy detallada tanto en su explicación del tratamiento como en el seguimiento. Debo decir que estoy muy satisfecha y recomiendo ampliamente a la Dra. Salas y a su equipo.",
    name: "David C.",
    rating: 5,
  },
  {
    text: "Excelente clinica, La Dra. Salas es uno de los mejores dermatologos y cuenta con su equipo de ultima generacion para su piel.",
    name: "Jennifer M.",
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

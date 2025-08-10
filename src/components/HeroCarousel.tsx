import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroCarousel = () => {
  const slides = [
    {
      title: "UPSC Civil Services",
      subtitle: "Preparation 2025",
      description: "Complete guidance for IAS, IPS, IFS and other civil services examinations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      buttonText: "Start Preparation"
    },
    {
      title: "SSC Combined Graduate",
      subtitle: "Level Examination",
      description: "Comprehensive preparation for SSC CGL with updated syllabus and pattern",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
      buttonText: "Apply Now"
    },
    {
      title: "Banking PO & Clerk",
      subtitle: "Recruitment 2025",
      description: "Latest notifications for SBI, IBPS, RBI and other banking examinations",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
      buttonText: "View Details"
    },
    {
      title: "Railway RRB",
      subtitle: "Multiple Posts",
      description: "Apply for various railway positions including NTPC, Group D, and ALP",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop",
      buttonText: "Check Eligibility"
    }
  ];

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-[400px] lg:h-[450px] bg-gradient-to-r from-primary/90 to-primary-hover/90">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-30"
                        style={{ backgroundImage: `url(${slide.image})` }}
                      />
                      <div className="relative z-10 h-full flex items-center">
                        <div className="container mx-auto px-8">
                          <div className="max-w-2xl text-white">
                            <h1 className="text-4xl lg:text-6xl font-bold mb-2 animate-fade-in">
                              {slide.title}
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-primary-foreground/90 animate-fade-in">
                              {slide.subtitle}
                            </h2>
                            <p className="text-lg lg:text-xl mb-6 text-primary-foreground/80 animate-fade-in">
                              {slide.description}
                            </p>
                            <Button 
                              size="lg" 
                              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 animate-scale-in"
                            >
                              {slide.buttonText}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cakeImages } from "../../../data/images";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Cakes from our home oven",
      subtitle: "Birthday, wedding and custom orders",
      image: cakeImages.chocolate,
    },
    {
      id: 2,
      title: "Baked fresh for your table",
      subtitle: "Chocolate, florals, cupcakes and more",
      image: cakeImages.wedding,
    },
    {
      id: 3,
      title: "Tell us the occasion",
      subtitle: "We design the cake around you",
      image: cakeImages.strawberry,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl">
                <p className="text-white text-xl md:text-2xl mb-4 font-light italic">
                  {slide.subtitle}
                </p>
                <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-8">
                  {slide.title}
                </h1>
                <div className="flex flex-wrap gap-4">
                  <Link to="/cakes" className="bg-primary text-white px-8 py-4 rounded-full hover:bg-[#9a5a3d] transition font-medium flex items-center gap-2 shadow-lg">
                    Browse Cakes
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/custom-order"
                    className="px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-lg"
                    style={{ backgroundColor: "#c4a35a", color: "#3d2418" }}
                  >
                    Custom Order
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? "bg-primary w-8" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

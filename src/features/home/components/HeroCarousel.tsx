import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { carouselImages } from "../../../data/images";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Award-winning cakes",
      subtitle: "Trained bakers, homemade with care",
      image: carouselImages[0],
    },
    {
      id: 2,
      title: "Cakes from our home oven",
      subtitle: "Birthday, wedding and custom orders",
      image: carouselImages[1],
    },
    {
      id: 3,
      title: "Tell us the occasion",
      subtitle: "We design the cake around you",
      image: carouselImages[2],
    },
    {
      id: 4,
      title: "Skill you can taste",
      subtitle: "Freshly baked daily, professionally trained",
      image: carouselImages[3],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: "#3d2418" }}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-30"
          />
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-contain object-center p-6 md:p-10"
          />

          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#3d2418]/85 via-[#3d2418]/35 to-transparent pt-40 pb-24 md:pb-28">
            <div className="max-w-7xl mx-auto px-4">
              <p className="text-white/90 text-lg md:text-xl mb-2 font-light italic">
                {slide.subtitle}
              </p>
              <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight mb-6">
                {slide.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/cakes"
                  className="bg-primary text-white px-7 py-3 rounded-full hover:bg-[#9a5a3d] transition font-medium flex items-center gap-2 shadow-lg"
                >
                  Browse Cakes
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/custom-order"
                  className="px-7 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg"
                  style={{ backgroundColor: "#c4a35a", color: "#3d2418" }}
                >
                  Custom Order
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-500 ${
              index === currentSlide ? "bg-primary w-8" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

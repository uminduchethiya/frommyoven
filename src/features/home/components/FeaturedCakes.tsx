import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cakeImages } from "../../../data/images";

interface CakeCard {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
  duration: string;
  nights: string;
  pickup: string;
  category: string;
}

export default function FeaturedCakes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const cakes: CakeCard[] = [
    {
      id: 1,
      title: "Birthday Cakes",
      image: cakeImages.birthday,
      price: "LKR 8,500",
      description:
        "Chocolate fudge, strawberry cream and photo cakes for birthdays of every age — baked fresh in our home kitchen.",
      duration: "Serves 10+",
      nights: "48 hrs",
      pickup: "Pickup or delivery",
      category: "Birthday Cakes",
    },
    {
      id: 2,
      title: "Wedding Cakes",
      image: cakeImages.wedding,
      price: "LKR 45,000",
      description:
        "Three-tier florals, lemon elderflower and rustic naked cakes, with a tasting and venue delivery if you want it.",
      duration: "Serves 40+",
      nights: "14 days",
      pickup: "Venue delivery",
      category: "Wedding Cakes",
    },
    {
      id: 3,
      title: "Celebration Cakes",
      image: cakeImages.celebration,
      price: "LKR 5,400",
      description:
        "School milestones, Mother’s Day, Avurudu and any gathering that needs a homemade cake.",
      duration: "Serves 6+",
      nights: "48 hrs",
      pickup: "Pickup or delivery",
      category: "Celebration Cakes",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % (cakes.length - (cardsPerView - 1)));
  const prevSlide = () =>
    setCurrentIndex(
      (prev) =>
        (prev - 1 + (cakes.length - (cardsPerView - 1))) %
        (cakes.length - (cardsPerView - 1))
    );

  const goToSlide = (index: number) => setCurrentIndex(index);

  const visibleCakes = cakes.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary mb-3">Our menu</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 text-forest">
            Cakes for <span className="text-primary">every occasion</span>
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto">
            Homemade sponges, buttercream and ganache — choose a ready cake or tell us exactly what you want.
          </p>
          <Link to="/cakes" className="inline-block mt-4 text-primary font-medium hover:underline">
            Browse the full cake menu
          </Link>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition -ml-4"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition -mr-4"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div
            className={`grid gap-6 ${
              cardsPerView === 1
                ? "grid-cols-1"
                : cardsPerView === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            {visibleCakes.map((cake) => (
              <div
                key={cake.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-semibold text-sm">
                    Starting from {cake.price}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {cake.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                    {cake.description}
                  </p>

                  <Link
                    to={`/cakes?category=${encodeURIComponent(cake.category)}`}
                    className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    <span>
                      {cake.duration} / {cake.nights}
                    </span>
                    <span className="text-white/70">|</span>
                    <span>{cake.pickup}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: cakes.length - (cardsPerView - 1) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-3 h-3 bg-primary"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

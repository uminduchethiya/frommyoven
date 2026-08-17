import React, { useState, useEffect } from "react";
import { guestPhotos } from "../../../data/images";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andrew Simon",
    role: "Birthday host",
    image: guestPhotos.guest1,
    text: "The chocolate fudge cake tasted homemade in the best way — moist, not too sweet, and it looked exactly like the photo. Everyone asked where we ordered it.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex Jordan",
    role: "Bride",
    image: guestPhotos.guest2,
    text: "From My Oven handled our wedding cake with so much care. The tasting was generous, the flowers matched our palette, and delivery to the venue was calm and on time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Doe",
    role: "Mum of two",
    image: guestPhotos.guest3,
    text: "They remembered our nut allergy and still made a rainbow cake the children could not stop talking about. Soft sponge, bright layers, name on top.",
    rating: 5,
  },
  {
    id: 4,
    name: "John Smith",
    role: "Office manager",
    image: guestPhotos.guest4,
    text: "Sixty labelled cupcakes arrived at the office looking bakery-perfect. Easy WhatsApp ordering and a fair price for a last-minute Friday treat.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sarah Williams",
    role: "Anniversary dinner",
    image: guestPhotos.guest5,
    text: "The red velvet was beautiful and the cream-cheese frosting was just right. We added a short message and it felt personal, not mass-produced.",
    rating: 5,
  },
  {
    id: 6,
    name: "Michael Brown",
    role: "Regular customer",
    image: guestPhotos.guest6,
    text: "I keep coming back for the cheesecake and the caramel drip. Honest communication, consistent quality, and cakes that actually taste homemade.",
    rating: 5,
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const getVisibleTestimonials = () => {
    if (window.innerWidth < 768) return 1;
    return 3;
  };

  const [visibleTestimonials, setVisibleTestimonials] = useState(
    getVisibleTestimonials()
  );
  const maxIndex = testimonials.length - visibleTestimonials;

  useEffect(() => {
    const handleResize = () => {
      setVisibleTestimonials(getVisibleTestimonials());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-secondary font-light text-xl mb-2"
            style={{ fontFamily: "cursive" }}
          >
            Testimonial
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "cursive" }}
          >
            <span className="text-primary">What Clients </span>
            <span className="text-black">Say About Us</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleTestimonials)
              }%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`flex-shrink-0 px-4 w-full md:w-1/3`}
              >
                <div
                  className="rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[400px] flex flex-col relative backdrop-blur-xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.18)",
                    border: "1px solid rgba(255, 255, 255, 0.55)",
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                      <p className="text-[#c4a35a] text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-800 leading-relaxed flex-1">
                    {testimonial.text}
                  </p>

                  <div className="absolute bottom-6 right-6">
                    <div className="w-12 h-12 bg-[#c4a35a] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-[#b76e4d] text-3xl font-serif leading-none">
                        "
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8">
                    <span className="text-[#c4a35a] text-6xl font-serif leading-none opacity-50">
                      "
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-8 h-3 bg-primary"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

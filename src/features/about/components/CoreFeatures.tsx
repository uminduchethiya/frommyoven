import { Cake, Heart, ChefHat, Leaf } from "lucide-react";
import { useState, useEffect } from "react";

export default function CoreFeatures() {
  const [visibleCards, setVisibleCards] = useState([false, false, false, false]);

  useEffect(() => {
    const timers = [0, 1, 2, 3].map((index) =>
      setTimeout(() => {
        setVisibleCards((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 150)
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const features = [
    {
      id: 1,
      icon: Cake,
      title: "Tell us how you want it",
      description: "Choose a menu cake or send a date, servings and a photo for a custom design.",
      reviews: "Made to order only",
    },
    {
      id: 2,
      icon: Heart,
      title: "Pick the occasion",
      description: "Birthday, wedding, kids’ party, office table or a quiet cake at home.",
      reviews: "12 occasion guides",
    },
    {
      id: 3,
      icon: ChefHat,
      title: "Baked by Indi",
      description: "Small-batch sponges, ganache and buttercream from Indi Deepanjali’s home oven.",
      reviews: "From My Oven bakery",
    },
    {
      id: 4,
      icon: Leaf,
      title: "A trusted local baker",
      description: "Clear WhatsApp replies, allergy notes and pickup or delivery you can plan around.",
      reviews: "Based in Padukka",
    },
  ];

  return (
    <section className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary mb-3">How we work</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 text-forest">
            Find <span className="text-primary">your perfect cake</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple ordering, honest timings and cakes that taste like they came from a home kitchen — because they did.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`transform transition-all duration-500 ${
                  visibleCards[index]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                } hover:-translate-y-2 hover:scale-105 hover:shadow-xl`}
              >
                <div className="h-full flex flex-col bg-white border border-gray-200 p-8 rounded-2xl transition-shadow hover:shadow-lg">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-100">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-sm mb-6 flex-grow text-gray-600">{feature.description}</p>
                  <p className="text-sm font-semibold text-primary">{feature.reviews}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

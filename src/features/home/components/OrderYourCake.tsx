import { Link } from "react-router-dom";
import { ArrowRight, Cake, Shield, Heart } from "lucide-react";
import { birthdayImages, weddingImages, celebrationImages } from "../../../data/images";

export default function OrderYourCake() {
  const features = [
    {
      icon: <Cake className="w-7 h-7" />,
      title: "Baked to order",
      description:
        "Every cake is mixed, baked and finished in our home kitchen after you order — never sitting on a shop shelf.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Allergy-aware kitchen",
      description:
        "Tell us about eggs, nuts or reduced sugar. We plan a safe slot and keep notes on every order.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Designed around you",
      description:
        "Flavour, size, flowers, a photo or a short message — we shape the cake to the person and the day.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
  ];

  return (
    <section className="py-24 bg-sand overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 lg:h-72">
                <img src={celebrationImages[5]} alt="Celebration cake from From My Oven" className="w-full h-full object-cover" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 lg:h-72 mt-12">
                <img src={weddingImages[8]} alt="Wedding cake from From My Oven" className="w-full h-full object-cover" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-64 -mt-8">
                <img src={birthdayImages[52]} alt="Kids birthday cake from From My Oven" className="w-full h-full object-cover" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-64">
                <img src={celebrationImages[5]} alt="Celebration cake from From My Oven" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <p
              className="text-secondary text-2xl font-semibold mb-3"
              style={{ fontFamily: "cursive" }}
            >
              Made with you
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight"
              style={{ fontFamily: "cursive" }}
            >
              Order Your <span className="text-primary">Cake</span>
              <br /> With Us
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Share the date, how many people you are feeding and the flavour you love.
              We will reply with a size, a price and a pickup or delivery time.
            </p>

            <div className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/70 transition-all duration-300"
                >
                  <div className={`${feature.bgColor} ${feature.iconColor} p-3 rounded-lg flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/custom-order"
              className="bg-primary text-white px-8 py-4 rounded-full hover:bg-[#9a5a3d] transition font-medium inline-flex items-center gap-2 group text-lg"
            >
              Start a custom order
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

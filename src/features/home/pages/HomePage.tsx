import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cake, Sparkles, Users, Grid3x3, Search } from "lucide-react";
import HeroCarousel from "../components/HeroCarousel";
import TopOccasions from "../components/TopOccasions";
import OrderYourCake from "../components/OrderYourCake";
import TestimonialCarousel from "../components/TestimonialCarousel";
import GalleryComponent from "../components/GalleryComponent";
import FeaturedCakes from "../components/FeaturedCakes";
import { occasionsData } from "../../occasions/data/occasionsData";
import { CAKE_CATEGORIES } from "../../cakes/data/cakesData";

export default function Home() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (category) params.set("category", category);
    if (type && !category) params.set("category", type);
    if (duration) params.set("duration", duration);
    navigate(`/cakes${params.toString() ? `?${params.toString()}` : ""}`);
  };

  return (
    <div>
      <HeroCarousel />
      <div className="relative -mt-20 z-30 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-[#e8e0d2]">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Cake className="w-4 h-4 text-primary" />
                  Occasion
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 bg-white"
                >
                  <option value="">All occasions</option>
                  {occasionsData.map((item) => (
                    <option key={item.slug} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Style
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 bg-white"
                >
                  <option value="">Any style</option>
                  <option value="Birthday Cakes">Birthday</option>
                  <option value="Wedding Cakes">Wedding</option>
                  <option value="Chocolate Cakes">Chocolate</option>
                  <option value="Cupcakes">Cupcakes</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Users className="w-4 h-4 text-primary" />
                  Servings
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 bg-white"
                >
                  <option value="">Any size</option>
                  <option value="1-3">Small · up to 8</option>
                  <option value="4-7">Medium · 9–16</option>
                  <option value="8-14">Large · 17+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Grid3x3 className="w-4 h-4 text-primary" />
                  Cake category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 bg-white"
                >
                  <option value="">All categories</option>
                  {CAKE_CATEGORIES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSearch}
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-[#9a5a3d] transition font-medium flex items-center justify-center gap-2 h-12"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <FeaturedCakes />
      <TopOccasions />
      <OrderYourCake />
      <TestimonialCarousel />
      <GalleryComponent />
    </div>
  );
}

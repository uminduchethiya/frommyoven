import { Link } from "react-router-dom";
import { cakeImages } from "../../../data/images";

interface Occasion {
  id: number;
  city: string;
  slug: string;
  tours: number;
  image: string;
}

export default function TopOccasions() {
  const occasions: Occasion[] = [
    { id: 1, city: "Wedding", slug: "wedding", tours: 3, image: cakeImages.wedding },
    { id: 2, city: "Birthday", slug: "birthday", tours: 5, image: cakeImages.birthday },
    { id: 3, city: "Kids Party", slug: "kids-party", tours: 3, image: cakeImages.kids },
    { id: 4, city: "Anniversary", slug: "anniversary", tours: 3, image: cakeImages.redVelvet },
    { id: 5, city: "Any Celebration", slug: "celebration", tours: 4, image: cakeImages.celebration },
  ];

  return (
    <section className="bg-sand py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary mb-3">Celebrate with us</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-forest mb-4">
            Cakes for <span className="text-primary">every occasion</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Weddings, birthdays, baby showers and quiet Tuesday treats — pick an occasion and we will suggest the right cake.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Link to={`/occasions/${occasions[0].slug}`} className="lg:row-span-2 relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-[670px]">
            <div className="relative h-full min-h-[500px] lg:min-h-[650px]">
              <img
                src={occasions[0].image}
                alt={occasions[0].city}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-4xl font-bold mb-4">
                  {occasions[0].city}
                </h3>
                <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  {occasions[0].tours} Cakes
                </span>
              </div>
            </div>
          </Link>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {occasions.slice(1).map((occasion) => (
              <Link
                key={occasion.id}
                to={`/occasions/${occasion.slug}`}
                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="relative h-64 md:h-80">
                  <img
                    src={occasion.image}
                    alt={occasion.city}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-3">
                      {occasion.city}
                    </h3>
                    <span className="inline-block bg-primary text-white px-3 py-1.5 rounded-full text-sm font-medium">
                      {occasion.tours} Cakes
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            to="/occasions"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            View all occasions
          </Link>
        </div>
      </div>
    </section>
  );
}

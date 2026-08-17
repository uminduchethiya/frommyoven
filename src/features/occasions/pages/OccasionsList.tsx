import { Link } from "react-router-dom";
import PageHero from "../../../shared/components/PageHero";
import { occasionsData } from "../data/occasionsData";
import { cakeImages } from "../../../data/images";

export default function OccasionsList() {
  return (
    <>
      <PageHero
        title="Occasions"
        subtitle="Birthday, wedding, kids’ parties, corporate tables and quiet celebrations at home."
        image={cakeImages.celebration}
        crumb="Occasions"
      />
      <section className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {occasionsData.map((occasion) => (
          <Link
            key={occasion.slug}
            to={`/occasions/${occasion.slug}`}
            className="group relative overflow-hidden rounded-3xl h-80 shadow-sm"
          >
            <img
              src={occasion.image}
              alt={occasion.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-secondary text-xs uppercase tracking-[0.2em] mb-1">
                {occasion.region}
              </p>
              <h2 className="text-3xl font-display font-semibold">{occasion.name}</h2>
              <p className="text-white/80 text-sm mt-2 line-clamp-2">{occasion.intro}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOccasionBySlug, occasionsData } from "../data/occasionsData";
import { getCakeById } from "../../cakes/data/cakesData";
import Lightbox from "../../../shared/components/Lightbox";

export default function OccasionSingle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const occasion = getOccasionBySlug(slug || "");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!occasion) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <button onClick={() => navigate("/occasions")} className="bg-primary text-white px-6 py-3 rounded-full">
          Back to occasions
        </button>
      </div>
    );
  }

  const relatedCakes = occasion.cakeIds
    .map((id) => getCakeById(id))
    .filter((cake): cake is NonNullable<typeof cake> => Boolean(cake));
  const nearby = occasionsData.filter((item) => occasion.nearby.includes(item.slug));

  return (
    <div className="pb-16">
      <div className="relative h-[50vh] min-h-[340px]">
        <img src={occasion.image} alt={occasion.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/45" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 pb-12 text-white">
          <p className="text-secondary uppercase tracking-[0.2em] text-xs mb-2">{occasion.region}</p>
          <h1 className="text-5xl md:text-6xl font-display font-semibold">{occasion.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-display font-semibold text-forest mb-3">About {occasion.name} cakes</h2>
            <p className="text-gray-600 leading-relaxed">{occasion.intro}</p>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6">
              <h3 className="font-display text-xl font-semibold mb-3">Popular styles</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {occasion.attractions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-6">
              <h3 className="font-display text-xl font-semibold mb-3">How to order</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {occasion.thingsToDo.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h3 className="font-display text-xl font-semibold mb-3">Photo gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {occasion.gallery.map((src, index) => (
                <button key={src} onClick={() => setLightboxIndex(index)} className="overflow-hidden rounded-2xl">
                  <img src={src} alt="" className="h-32 w-full object-cover hover:scale-105 transition" />
                </button>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-4">
          <div className="bg-sand rounded-3xl p-6">
            <p className="text-sm text-gray-500">Best time to order</p>
            <p className="font-medium text-forest mt-1">{occasion.bestTime}</p>
          </div>
          <div className="bg-white rounded-3xl p-6">
            <p className="text-sm text-gray-500">Typical size</p>
            <p className="font-medium text-forest mt-1">{occasion.recommendedDays}</p>
          </div>
          <Link
            to="/custom-order"
            className="block text-center bg-primary text-white py-3 rounded-full font-semibold"
          >
            Order a {occasion.name.toLowerCase()} cake
          </Link>
        </aside>
      </div>

      {nearby.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-2xl font-display font-semibold text-forest mb-5">Related occasions</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {nearby.map((item) => (
              <Link key={item.slug} to={`/occasions/${item.slug}`} className="relative h-48 rounded-2xl overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/35" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-display">{item.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      {relatedCakes.length > 0 && (
        <section className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-display font-semibold text-forest mb-5">Cakes for this occasion</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {relatedCakes.map((cake) => (
              <Link key={cake.id} to={`/cakes/${cake.id}`} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <img src={cake.image} alt={cake.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-forest">{cake.title}</h3>
                  <p className="text-sm text-gray-500">{cake.duration}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={occasion.gallery.map((src, index) => ({ src, alt: `${occasion.name} ${index + 1}` }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((current) =>
              current === null ? 0 : (current - 1 + occasion.gallery.length) % occasion.gallery.length
            )
          }
          onNext={() =>
            setLightboxIndex((current) =>
              current === null ? 0 : (current + 1) % occasion.gallery.length
            )
          }
        />
      )}
    </div>
  );
}

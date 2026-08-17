import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Layers,
  Cake,
  Timer,
  Ruler,
  X,
} from "lucide-react";
import { formatCakePrice, getCakeById, cakesData } from "../data/cakesData";
import EnquiryForm from "../../../shared/components/EnquiryForm";
import Lightbox from "../../../shared/components/Lightbox";
import { occasionsData } from "../../occasions/data/occasionsData";

export default function CakeSingle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const cake = getCakeById(Number(id));
  const [openDay, setOpenDay] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!cake) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-3xl font-display font-semibold mb-3">Cake not found</h2>
          <button
            onClick={() => navigate("/cakes")}
            className="bg-primary text-white px-6 py-3 rounded-full"
          >
            Back to cakes
          </button>
        </div>
      </div>
    );
  }

  const relatedOccasions = occasionsData.filter((occasion) =>
    cake.categories.some((category) =>
      category.toLowerCase().includes(occasion.name.toLowerCase().split(" ")[0])
    ) || occasion.cakeIds.includes(cake.id)
  );
  const relatedCakes = cakesData
    .filter((item) => item.id !== cake.id && item.categories.some((cat) => cake.categories.includes(cat)))
    .slice(0, 3);

  return (
    <div className="bg-sand pb-16">
      <div className="relative h-[52vh] min-h-[360px]">
        <img src={cake.image} alt={cake.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/50" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 pb-12 text-white">
          <p className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">
            {cake.categories.join(" · ")}
          </p>
          <h1 className="text-4xl md:text-6xl font-display font-semibold mb-4">{cake.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/90">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{cake.duration}</span>
            <span className="flex items-center gap-2"><Cake className="w-4 h-4" />{cake.startLocation} · {cake.endLocation}</span>
            <span className="font-semibold">{formatCakePrice(cake.price)}</span>
          </div>
        </div>
        <button
          onClick={() => navigate("/cakes")}
          className="absolute top-4 right-4 bg-white/90 p-2 rounded-full"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-forest mb-3">About this cake</h2>
            <p className="text-gray-600 leading-relaxed">{cake.overview}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm">
              <p className="flex gap-2"><Layers className="w-4 h-4 text-primary mt-0.5" />{cake.accommodation}</p>
              <p className="flex gap-2"><Ruler className="w-4 h-4 text-primary mt-0.5" />{cake.transport}</p>
              <p className="flex gap-2"><Timer className="w-4 h-4 text-primary mt-0.5" />{cake.meals}</p>
              <p className="flex gap-2"><Cake className="w-4 h-4 text-primary mt-0.5" />{cake.places.join(", ")}</p>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-forest mb-5">How your order works</h2>
            <div className="space-y-3">
              {cake.itinerary.map((item, index) => (
                <div key={item.day} className="border border-gray-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenDay(openDay === index ? -1 : index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-forest">
                      Step {item.day} – {item.title}
                    </span>
                    {openDay === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDay === index && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                      <p>{item.description}</p>
                      {item.overnight && (
                        <p className="mt-2 text-primary font-medium">{item.overnight}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-forest mb-4">Cake highlights</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {cake.highlights.map((item) => (
                <li key={item} className="flex gap-2 text-gray-700 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold mb-3 text-forest">Included</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {cake.included.map((item) => (
                  <li key={item} className="flex gap-2"><Check className="w-4 h-4 text-primary" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold mb-3 text-forest">Not included</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {cake.excluded.map((item) => (
                  <li key={item} className="flex gap-2"><X className="w-4 h-4 text-red-400" />{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-forest mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {cake.gallery.map((src, index) => (
                <button key={src + index} onClick={() => setLightboxIndex(index)} className="overflow-hidden rounded-2xl">
                  <img src={src} alt={`${cake.title} ${index + 1}`} className="h-36 w-full object-cover hover:scale-105 transition" />
                </button>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-forest mb-4">Our kitchen</h2>
            <iframe
              title={`${cake.title} map`}
              src={`https://www.google.com/maps?q=${cake.mapQuery}&output=embed`}
              className="w-full h-80 rounded-2xl border-0"
              loading="lazy"
            />
          </section>

          {relatedOccasions.length > 0 && (
            <section>
              <h2 className="text-2xl font-display font-semibold text-forest mb-4">Occasions for this cake</h2>
              <div className="flex flex-wrap gap-3">
                {relatedOccasions.map((occasion) => (
                  <Link
                    key={occasion.slug}
                    to={`/occasions/${occasion.slug}`}
                    className="bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-primary text-sm"
                  >
                    {occasion.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-forest mb-4">FAQs</h2>
            {cake.faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-gray-100 py-3">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full flex justify-between text-left font-medium text-forest"
                >
                  {faq.question}
                  {openFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openFaq === index && <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>}
              </div>
            ))}
          </section>
        </div>

        <aside className="space-y-6">
          <div id="book" className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
            <p className="text-sm text-gray-500">From</p>
            <p className="text-3xl font-display font-semibold text-forest mb-1">
              {formatCakePrice(cake.price)}
            </p>
            <p className="text-sm text-gray-500 mb-5">Homemade · {cake.rating}★ ({cake.reviews} reviews)</p>
            <EnquiryForm
              type="cake"
              contextTitle={cake.title}
              contextDetails={`Cake: ${cake.title}\nSize: ${cake.duration}\nFlavour: ${cake.startLocation} with ${cake.endLocation}\nPrice: ${formatCakePrice(cake.price)}`}
              submitLabel="Order / Enquire about this cake"
            />
          </div>
        </aside>
      </div>

      {relatedCakes.length > 0 && (
        <section className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-display font-semibold text-forest mb-5">Related cakes</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {relatedCakes.map((item) => (
              <Link key={item.id} to={`/cakes/${item.id}`} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-forest">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.duration}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={cake.gallery.map((src, index) => ({ src, alt: `${cake.title} ${index + 1}` }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((current) =>
              current === null ? 0 : (current - 1 + cake.gallery.length) % cake.gallery.length
            )
          }
          onNext={() =>
            setLightboxIndex((current) =>
              current === null ? 0 : (current + 1) % cake.gallery.length
            )
          }
        />
      )}
    </div>
  );
}

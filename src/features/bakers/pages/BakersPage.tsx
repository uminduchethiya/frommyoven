import { useState } from "react";
import { Star, Languages, Cake, Sparkles } from "lucide-react";
import PageHero from "../../../shared/components/PageHero";
import EnquiryForm from "../../../shared/components/EnquiryForm";
import { bakersData, type Baker } from "../data/bakersData";
import { cakeImages } from "../../../data/images";

export default function BakersPage() {
  const [selected, setSelected] = useState<Baker | null>(null);

  return (
    <>
      <PageHero
        title="Meet the Bakers"
        subtitle="The people who mix, bake and decorate every From My Oven cake."
        image={cakeImages.bakery}
        crumb="Bakers"
      />

      <section className="max-w-5xl mx-auto px-4 pt-6 mb-12">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-display font-semibold text-forest mb-3">
            A small kitchen, careful hands
          </h2>
          <p className="text-gray-600 leading-relaxed">
            From My Oven is a home bakery. Our bakers are used to custom briefings,
            allergy notes and last-minute message changes. You can request a baker
            for a tasting, a wedding consult or a large cupcake batch.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {bakersData.map((baker) => (
            <article key={baker.id} className="bg-white rounded-3xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row gap-5">
              <img
                src={baker.photo}
                alt={baker.name}
                className="w-full md:w-44 h-56 md:h-44 object-cover rounded-2xl"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-forest">{baker.name}</h3>
                    <p className="text-sm text-gray-500">{baker.experienceYears} years of baking</p>
                  </div>
                  <p className="flex items-center gap-1 text-sm font-medium">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    {baker.rating} ({baker.reviews})
                  </p>
                </div>
                <p className="text-gray-600 text-sm mt-3">{baker.intro}</p>
                <div className="grid sm:grid-cols-2 gap-2 mt-4 text-sm text-gray-600">
                  <p className="flex gap-2"><Languages className="w-4 h-4 text-primary" />{baker.languages.join(", ")}</p>
                  <p className="flex gap-2"><Cake className="w-4 h-4 text-primary" />{baker.vehicle}</p>
                  <p className="flex gap-2 sm:col-span-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    {baker.specialities.join(", ")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {baker.services.map((service) => (
                    <span key={service} className="bg-sand text-forest text-xs px-2.5 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
                <blockquote className="text-sm italic text-gray-500 mt-4">
                  “{baker.testimonial}”
                </blockquote>
                <button
                  onClick={() => {
                    setSelected(baker);
                    document.getElementById("baker-request")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-4 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#9a5a3d]"
                >
                  Request This Baker
                </button>
              </div>
            </article>
          ))}
        </div>

        <div id="baker-request" className="bg-white rounded-3xl p-6 shadow-sm h-fit sticky top-24">
          <h3 className="text-xl font-display font-semibold text-forest mb-4">
            {selected ? `Request ${selected.name}` : "Request a baker"}
          </h3>
          <EnquiryForm
            type="baker"
            contextTitle={selected ? selected.name : "Any available baker"}
            contextDetails={
              selected
                ? `Baker: ${selected.name}\nExperience: ${selected.experienceYears} years\nLanguages: ${selected.languages.join(", ")}\nRole: ${selected.vehicle}\nSpecialities: ${selected.specialities.join(", ")}`
                : "Please assign a suitable baker for our cake order."
            }
            submitLabel="Request This Baker"
          />
        </div>
      </section>
    </>
  );
}

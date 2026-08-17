import { useMemo, useState } from "react";
import PageHero from "../../../shared/components/PageHero";
import Lightbox from "../../../shared/components/Lightbox";
import { GALLERY_CATEGORIES, galleryImages } from "../data/galleryData";
import { pageHeroImages } from "../../../data/images";

export default function GalleryPage() {
  const [category, setCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = useMemo(
    () =>
      category === "All"
        ? galleryImages
        : galleryImages.filter((image) => image.category === category),
    [category]
  );

  return (
    <>
      <PageHero
        title="Cake Gallery"
        subtitle="Birthday cakes, wedding tiers, cupcakes and everyday bakes from our oven."
        image={pageHeroImages.gallery}
        crumb="Gallery"
      />

      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", ...GALLERY_CATEGORIES].map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                category === item ? "bg-primary text-white" : "bg-white border border-gray-200 text-gray-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="masonry-grid">
          {images.map((image, index) => (
            <button
              key={image.id}
              className="masonry-item w-full overflow-hidden rounded-2xl group relative"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-4 text-left">
                {image.caption}
              </span>
            </button>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((current) =>
              current === null ? 0 : (current - 1 + images.length) % images.length
            )
          }
          onNext={() =>
            setLightboxIndex((current) =>
              current === null ? 0 : (current + 1) % images.length
            )
          }
        />
      )}
    </>
  );
}

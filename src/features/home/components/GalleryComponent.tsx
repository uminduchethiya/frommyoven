import { useState } from "react";
import { Link } from "react-router-dom";
import { ZoomIn } from "lucide-react";
import Lightbox from "../../../shared/components/Lightbox";
import { birthdayImages, weddingImages, celebrationImages } from "../../../data/images";

const images = [
  { src: birthdayImages[0], alt: "Chocolate birthday cake" },
  { src: birthdayImages[52], alt: "Jungle kids birthday cake" },
  { src: celebrationImages[5], alt: "Mother's Day celebration cake" },
  { src: weddingImages[8], alt: "Three-tier wedding cake" },
  { src: celebrationImages[0], alt: "School celebration cake" },
  { src: weddingImages[0], alt: "Wedding cake jars" },
  { src: celebrationImages[9], alt: "Avurudu festival cake" },
  { src: weddingImages[11], alt: "Mr and Mrs wedding cake" },
];

export default function GalleryComponent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="bg-sand px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary mb-3">From the kitchen</p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-forest">
            Recent <span className="text-primary">gallery</span>
          </h2>
          <Link to="/gallery" className="inline-block mt-4 text-primary font-medium hover:underline">
            View the full gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <button
              key={image.alt}
              onClick={() => setLightboxIndex(index)}
              className="relative group overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute inset-0 bg-forest/0 group-hover:bg-forest/30 transition flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition" />
              </span>
            </button>
          ))}
        </div>
      </div>

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
    </section>
  );
}

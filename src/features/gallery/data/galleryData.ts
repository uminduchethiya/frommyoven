import { birthdayImages, weddingImages, celebrationImages } from "../../../data/images";

export const GALLERY_CATEGORIES = ["Birthday", "Wedding", "Celebrations"] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption: string;
}

export const galleryImages: GalleryImage[] = [
  ...birthdayImages.map((src, index) => ({
    id: index + 1,
    src,
    alt: `Birthday cake ${index + 1}`,
    category: "Birthday" as const,
    caption: "Birthday cake from From My Oven",
  })),
  ...weddingImages.map((src, index) => ({
    id: 54 + index,
    src,
    alt: `Wedding cake ${index + 1}`,
    category: "Wedding" as const,
    caption: "Wedding cake from From My Oven",
  })),
  ...celebrationImages.map((src, index) => ({
    id: 66 + index,
    src,
    alt: `Celebration cake ${index + 1}`,
    category: "Celebrations" as const,
    caption: "Celebration cake from From My Oven",
  })),
];

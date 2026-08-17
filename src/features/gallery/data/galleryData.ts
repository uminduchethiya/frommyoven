import { cakeImages } from "../../../data/images";

export const GALLERY_CATEGORIES = [
  "Birthday",
  "Wedding",
  "Cupcakes",
  "Chocolate",
  "Florals",
  "Kids",
  "Cheesecake",
  "Bakery",
  "Minis",
  "Celebrations",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: cakeImages.birthday, alt: "Birthday cake", category: "Birthday", caption: "Classic birthday cake" },
  { id: 2, src: cakeImages.rainbow, alt: "Rainbow cake", category: "Kids", caption: "Rainbow party cake" },
  { id: 3, src: cakeImages.kids, alt: "Kids cake", category: "Kids", caption: "Kids celebration cake" },
  { id: 4, src: cakeImages.celebration, alt: "Celebration cake", category: "Celebrations", caption: "Any-occasion cake" },
  { id: 5, src: cakeImages.wedding, alt: "Wedding cake", category: "Wedding", caption: "Garden rose wedding cake" },
  { id: 6, src: cakeImages.weddingTall, alt: "Tall wedding cake", category: "Wedding", caption: "Tiered wedding cake" },
  { id: 7, src: cakeImages.floral, alt: "Floral cake", category: "Florals", caption: "Lemon elderflower florals" },
  { id: 8, src: cakeImages.naked, alt: "Naked cake", category: "Wedding", caption: "Semi-naked floral cake" },
  { id: 9, src: cakeImages.cupcakes, alt: "Vanilla cupcakes", category: "Cupcakes", caption: "Vanilla bean cupcakes" },
  { id: 10, src: cakeImages.redVelvetCups, alt: "Red velvet cupcakes", category: "Cupcakes", caption: "Red velvet cupcakes" },
  { id: 11, src: cakeImages.macarons, alt: "Macarons", category: "Minis", caption: "Macaron accents" },
  { id: 12, src: cakeImages.mini, alt: "Mini cakes", category: "Minis", caption: "Mini celebration cakes" },
  { id: 13, src: cakeImages.chocolate, alt: "Chocolate cake", category: "Chocolate", caption: "Classic chocolate fudge" },
  { id: 14, src: cakeImages.chocolateSlice, alt: "Chocolate slice", category: "Chocolate", caption: "Triple chocolate slice" },
  { id: 15, src: cakeImages.drip, alt: "Drip cake", category: "Chocolate", caption: "Salted caramel drip" },
  { id: 16, src: cakeImages.slices, alt: "Cake slices", category: "Celebrations", caption: "Clean bakery slices" },
  { id: 17, src: cakeImages.redVelvet, alt: "Red velvet", category: "Celebrations", caption: "Red velvet romance" },
  { id: 18, src: cakeImages.strawberry, alt: "Strawberry cake", category: "Birthday", caption: "Strawberry shortcake" },
  { id: 19, src: cakeImages.berries, alt: "Berry cake", category: "Florals", caption: "Fresh berry finish" },
  { id: 20, src: cakeImages.cheesecake, alt: "Cheesecake", category: "Cheesecake", caption: "New York cheesecake" },
  { id: 21, src: cakeImages.tiramisu, alt: "Tiramisu", category: "Cheesecake", caption: "Tiramisu layer cake" },
  { id: 22, src: cakeImages.dessert, alt: "Dessert platter", category: "Bakery", caption: "Dessert table" },
  { id: 23, src: cakeImages.pastry, alt: "Pastry", category: "Bakery", caption: "From the pastry bench" },
  { id: 24, src: cakeImages.bakery, alt: "Bakery", category: "Bakery", caption: "From My Oven kitchen" },
  { id: 25, src: cakeImages.bread, alt: "Bakery shelf", category: "Bakery", caption: "Morning bake" },
  { id: 26, src: cakeImages.kitchen, alt: "Kitchen", category: "Bakery", caption: "Home bakery kitchen" },
  { id: 27, src: cakeImages.frosting, alt: "Frosting", category: "Celebrations", caption: "Buttercream finish" },
  { id: 28, src: cakeImages.lemon, alt: "Lemon cake", category: "Florals", caption: "Lemon sponge" },
  { id: 29, src: cakeImages.carrot, alt: "Carrot cake", category: "Celebrations", caption: "Spice carrot cake" },
  { id: 30, src: cakeImages.mixing, alt: "Mixing bowl", category: "Bakery", caption: "Batter in the bowl" },
];

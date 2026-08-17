export interface Baker {
  id: number;
  name: string;
  photo: string;
  experienceYears: number;
  languages: string[];
  vehicle: string;
  intro: string;
  specialities: string[];
  services: string[];
  rating: number;
  reviews: number;
  testimonial: string;
}

export const bakersData: Baker[] = [
  {
    id: 1,
    name: "Indi Deepanjali",
    photo: "/images/bakers/deepanjali.jpeg",
    experienceYears: 8,
    languages: ["English", "Sinhala"],
    vehicle: "Head baker · custom cakes from our home oven",
    intro:
      "Indi Deepanjali is the baker behind From My Oven. She designs and bakes every cake herself — birthday, wedding, kids’ themes and celebration cakes — from her kitchen in Padukka.",
    specialities: ["Birthday cakes", "Custom themes", "Wedding cakes", "Kids cakes"],
    services: ["Custom design", "Tastings", "Pickup or delivery", "Allergy-aware bakes"],
    rating: 4.9,
    reviews: 142,
    testimonial:
      "Deepanjali made our themed cake exactly as we imagined. It looked beautiful and tasted homemade in the best way.",
  },
];

export const getBakerById = (id: number) =>
  bakersData.find((baker) => baker.id === id);

import { bakerPhotos } from "../../../data/images";

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
    name: "Nimali Perera",
    photo: bakerPhotos.baker1,
    experienceYears: 12,
    languages: ["English", "Sinhala"],
    vehicle: "Head baker · chocolate & celebration cakes",
    intro:
      "Nimali started From My Oven from her home kitchen in Padukka. She still bakes the chocolate fudge and wedding sponges herself, and checks every cake before it leaves.",
    specialities: ["Chocolate", "Wedding tiers", "Ganache", "Birthday cakes"],
    services: ["Custom design", "Tastings", "Venue delivery", "Allergy-aware bakes"],
    rating: 4.9,
    reviews: 142,
    testimonial:
      "Nimali remembered our daughter is egg-free and the chocolate cake still tasted like a proper celebration cake.",
  },
  {
    id: 2,
    name: "Sahan Fernando",
    photo: bakerPhotos.baker2,
    experienceYears: 9,
    languages: ["English", "Sinhala", "Tamil"],
    vehicle: "Pastry chef · cheesecake & caramel",
    intro:
      "Sahan handles baked cheesecakes, caramel work and the drip cakes. He is precise with temperature and timing, which is why the slices come out clean.",
    specialities: ["Cheesecake", "Salted caramel", "Drip cakes", "Tiramisu"],
    services: ["Dessert tables", "Corporate platters", "Flavour pairing", "Rush slots"],
    rating: 4.8,
    reviews: 88,
    testimonial:
      "The caramel drip looked exactly like the photo and the cheesecake was the best we have had in Colombo.",
  },
  {
    id: 3,
    name: "Amaya Jayawardena",
    photo: bakerPhotos.baker3,
    experienceYears: 8,
    languages: ["English", "Sinhala"],
    vehicle: "Cake artist · florals & buttercream",
    intro:
      "Amaya pipes the roses, places the flowers and finishes wedding and engagement cakes. She is the person to talk to if you have a Pinterest board.",
    specialities: ["Buttercream florals", "Naked cakes", "Wedding design", "Colour matching"],
    services: ["Design consults", "Fresh flowers", "Photo cakes", "Keepsake tiers"],
    rating: 5,
    reviews: 61,
    testimonial:
      "Amaya matched our bridesmaid dresses perfectly. The cake was the most photographed thing after us.",
  },
  {
    id: 4,
    name: "Ravi de Silva",
    photo: bakerPhotos.baker4,
    experienceYears: 11,
    languages: ["English", "Sinhala", "Tamil"],
    vehicle: "Production baker · cupcakes & minis",
    intro:
      "Ravi runs the cupcake and mini-cake batches. If you need sixty identical swirls for an office or a kids’ party, he is the one who makes it happen on time.",
    specialities: ["Cupcakes", "Mini cakes", "Sheet cakes", "Party boxes"],
    services: ["Large batches", "School orders", "Office delivery", "Mix-and-match boxes"],
    rating: 4.9,
    reviews: 97,
    testimonial:
      "Sixty cupcakes for a school fair, all labelled, all soft. Ravi made it look easy.",
  },
  {
    id: 5,
    name: "Dilani Bandara",
    photo: bakerPhotos.baker5,
    experienceYears: 7,
    languages: ["English", "Sinhala"],
    vehicle: "Decorator · kids themes & photo cakes",
    intro:
      "Dilani loves kids’ cakes, rainbow layers and edible prints. She keeps themes cheerful and flavours mild, and she is careful with allergy notes.",
    specialities: ["Kids cakes", "Rainbow layers", "Photo prints", "Name toppers"],
    services: ["Theme colours", "Allergy notes", "Party add-ons", "Smash cakes"],
    rating: 4.8,
    reviews: 73,
    testimonial:
      "Our son’s rainbow cake had his name on top and a hidden colourful slice. The children were delighted.",
  },
];

export const getBakerById = (id: number) =>
  bakersData.find((baker) => baker.id === id);

import { birthdayImages, weddingImages, celebrationImages } from "../../../data/images";

export interface Occasion {
  slug: string;
  name: string;
  region: string;
  image: string;
  gallery: string[];
  intro: string;
  attractions: string[];
  thingsToDo: string[];
  bestTime: string;
  recommendedDays: string;
  nearby: string[];
  cakeIds: number[];
}

export const occasionsData: Occasion[] = [
  {
    slug: "birthday",
    name: "Birthday",
    region: "Celebrations",
    image: birthdayImages[0],
    gallery: [birthdayImages[52], ...birthdayImages.slice(0, 11)],
    intro:
      "From first birthdays to milestone 50ths, we bake cakes that match the person — chocolate for the serious sweet tooth, rainbow layers for kids, and photo cakes for the guest of honour.",
    attractions: ["Classic chocolate", "Rainbow kids cake", "Photo cakes", "Cupcake towers"],
    thingsToDo: [
      "Tell us the age, name and favourite flavour",
      "Add candles and a matching cupcake box",
      "Choose pickup the morning of the party",
      "Ask for a hidden rainbow or drip finish",
    ],
    bestTime: "Order 2–5 days ahead; kids themes need 5 days",
    recommendedDays: "Serves 8–20",
    nearby: ["kids-party", "celebration", "baby-shower"],
    cakeIds: [1, 3, 4, 5, 6, 13, 14],
  },
  {
    slug: "wedding",
    name: "Wedding",
    region: "Weddings",
    image: weddingImages[8],
    gallery: weddingImages,
    intro:
      "Wedding cakes from From My Oven are designed with you — tasting, flowers, height and a calm delivery to the venue. Classic white, garden roses or a rustic naked cake.",
    attractions: ["Three-tier garden rose", "Floral naked cake", "Lemon elderflower", "Keepsake top tier"],
    thingsToDo: [
      "Book a flavour tasting",
      "Share your florals and dress colours",
      "Confirm guest count for servings",
      "Add a cutting cake plus cupcakes if you like",
    ],
    bestTime: "Book 3–8 weeks before the wedding",
    recommendedDays: "Serves 40–80",
    nearby: ["engagement", "anniversary", "valentines"],
    cakeIds: [2, 8, 9],
  },
  {
    slug: "anniversary",
    name: "Anniversary",
    region: "Romance",
    image: birthdayImages[4],
    gallery: [birthdayImages[4], weddingImages[8], weddingImages[6], weddingImages[11]],
    intro:
      "A smaller, more personal cake for two or a family table. Red velvet, tiramisu and floral naked cakes are our anniversary favourites.",
    attractions: ["Red velvet romance", "Tiramisu layer", "Floral naked", "Heart toppers"],
    thingsToDo: [
      "Add a short message on the cake",
      "Choose a dinner-friendly flavour",
      "Ask for a compact 6-inch if it is just the two of you",
      "Pair with a mini cake for the next morning",
    ],
    bestTime: "48 hours to 5 days",
    recommendedDays: "Serves 6–16",
    nearby: ["wedding", "valentines", "engagement"],
    cakeIds: [2, 4, 13],
  },
  {
    slug: "engagement",
    name: "Engagement",
    region: "Romance",
    image: weddingImages[8],
    gallery: [weddingImages[8], weddingImages[11], weddingImages[0], weddingImages[4]],
    intro:
      "Pretty, photogenic cakes for proposal dinners and engagement parties. Think flowers, lemon, vanilla and a cake that looks as good as the ring photos.",
    attractions: ["Lemon elderflower", "Floral naked", "Macaron accents", "Mini favour cakes"],
    thingsToDo: [
      "Match the cake to your invitation colours",
      "Add a small dessert table of minis",
      "Ask for a surprise message inside",
    ],
    bestTime: "5–10 days",
    recommendedDays: "Serves 12–30",
    nearby: ["wedding", "anniversary", "celebration"],
    cakeIds: [2, 8, 9],
  },
  {
    slug: "kids-party",
    name: "Kids Party",
    region: "Family",
    image: birthdayImages[52],
    gallery: [birthdayImages[52], ...birthdayImages.slice(9, 12)],
    intro:
      "Colour, sprinkles and a name on top. We keep flavours mild, portions generous and themes cheerful without needing licensed characters.",
    attractions: ["Rainbow reveal", "Cupcake boxes", "Name toppers", "Mild vanilla sponge"],
    thingsToDo: [
      "Share favourite colours, not copyrighted characters",
      "Add a dozen cupcakes for the class",
      "Tell us about nut or egg allergies",
    ],
    bestTime: "5 days for themed cakes",
    recommendedDays: "Serves 16–24",
    nearby: ["birthday", "baby-shower", "celebration"],
    cakeIds: [5, 6, 7, 14],
  },
  {
    slug: "baby-shower",
    name: "Baby Shower",
    region: "Family",
    image: celebrationImages[5],
    gallery: [celebrationImages[5], celebrationImages[4], weddingImages[8], celebrationImages[8]],
    intro:
      "Soft colours, cupcake towers and a centrepiece cake for baby showers. We can keep flavours light and decorations gender-neutral or themed.",
    attractions: ["Cupcake tower", "Mini cakes", "Floral naked", "Pastel buttercream"],
    thingsToDo: [
      "Choose a colour story",
      "Add a ‘guess the flavour’ mini set",
      "Ask for a smash-cake add-on for later",
    ],
    bestTime: "5–7 days",
    recommendedDays: "Serves 15–30",
    nearby: ["kids-party", "celebration", "baby-shower"],
    cakeIds: [7, 11],
  },
  {
    slug: "corporate",
    name: "Corporate",
    region: "Events",
    image: celebrationImages[12],
    gallery: [celebrationImages[12], celebrationImages[5], birthdayImages[0], celebrationImages[0]],
    intro:
      "Office birthdays, product launches and client gifts. We can print a logo, box cupcakes for the team or send a sheet cake that slices cleanly.",
    attractions: ["Logo photo cakes", "Office cupcake boxes", "Sheet cakes", "Branded boxes"],
    thingsToDo: [
      "Send a high-resolution logo",
      "Tell us the headcount and dietary notes",
      "Choose morning delivery to the office",
    ],
    bestTime: "4–7 days for printed logos",
    recommendedDays: "Serves 12–40",
    nearby: ["celebration", "birthday", "graduation"],
    cakeIds: [8, 11],
  },
  {
    slug: "christmas",
    name: "Christmas",
    region: "Seasonal",
    image: celebrationImages[6],
    gallery: [celebrationImages[6], celebrationImages[9], celebrationImages[12], birthdayImages[0]],
    intro:
      "Festive sponges, spice, chocolate and pretty boxes for gifting. We open a limited Christmas pre-order list each December.",
    attractions: ["Chocolate showpiece", "Carrot spice", "Gift minis", "Dessert platters"],
    thingsToDo: [
      "Join the December pre-order list",
      "Order gift boxes for clients",
      "Collect on Christmas Eve morning",
    ],
    bestTime: "Pre-order 2 weeks ahead in December",
    recommendedDays: "Serves 8–16",
    nearby: ["celebration", "eid", "valentines"],
    cakeIds: [11, 12],
  },
  {
    slug: "valentines",
    name: "Valentine's Day",
    region: "Romance",
    image: birthdayImages[4],
    gallery: [birthdayImages[4], celebrationImages[5], weddingImages[8], weddingImages[11]],
    intro:
      "Heart cakes, red velvet and a two-person tiramisu. We run a Valentine’s menu every February with a clear cutoff date.",
    attractions: ["Heart red velvet", "Tiramisu for two", "Macaron boxes", "Message plaques"],
    thingsToDo: [
      "Order before the February cutoff",
      "Add a handwritten note",
      "Choose evening delivery",
    ],
    bestTime: "Order 5–7 days before 14 February",
    recommendedDays: "Serves 2–8",
    nearby: ["anniversary", "engagement", "wedding"],
    cakeIds: [4, 13],
  },
  {
    slug: "graduation",
    name: "Graduation",
    region: "Milestones",
    image: birthdayImages[19],
    gallery: [birthdayImages[19], celebrationImages[0], birthdayImages[0], birthdayImages[52]],
    intro:
      "Bold drip cakes, school colours and a name on top for graduation dinners and family photos.",
    attractions: ["Salted caramel drip", "Photo cakes", "Chocolate fudge", "Colour-matched drip"],
    thingsToDo: [
      "Share school or uni colours",
      "Add the graduate’s name and year",
      "Pair with a cupcake box for friends",
    ],
    bestTime: "3–5 days",
    recommendedDays: "Serves 12–20",
    nearby: ["birthday", "celebration", "corporate"],
    cakeIds: [1, 14],
  },
  {
    slug: "eid",
    name: "Festival",
    region: "Seasonal",
    image: celebrationImages[9],
    gallery: [celebrationImages[9], celebrationImages[6], celebrationImages[12], celebrationImages[5]],
    intro:
      "Sharing cakes and sweet boxes for Eid, Avurudu and family festival tables. We keep designs elegant and flavours that travel well between homes.",
    attractions: ["Mini celebration set", "Dessert platters", "Chocolate fudge", "Gift boxes"],
    thingsToDo: [
      "Order a sharing cake plus minis",
      "Ask for a nut-free batch if needed",
      "Collect the morning of the festival",
    ],
    bestTime: "5–7 days in festival weeks",
    recommendedDays: "Serves 10–24",
    nearby: ["celebration", "christmas", "valentines"],
    cakeIds: [11, 12],
  },
  {
    slug: "celebration",
    name: "Any Celebration",
    region: "Everyday",
    image: celebrationImages[5],
    gallery: celebrationImages,
    intro:
      "School milestones, Mother’s Day, Avurudu or a quiet gathering — we bake cakes for any celebration that needs a homemade centrepiece.",
    attractions: ["Mini celebration cakes", "School theme cakes", "Festival cakes", "Cupcake boxes"],
    thingsToDo: [
      "Pick a flavour and a size",
      "Add a short message",
      "Choose pickup or local delivery",
    ],
    bestTime: "24–48 hours for most cakes",
    recommendedDays: "Serves 6–16",
    nearby: ["birthday", "corporate", "graduation"],
    cakeIds: [10, 11, 12],
  },
];

export const getOccasionBySlug = (slug: string) =>
  occasionsData.find((occasion) => occasion.slug === slug);

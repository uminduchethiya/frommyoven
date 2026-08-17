import { cakeGalleries } from "../../../data/images";

export const CAKE_CATEGORIES = [
  "Birthday Cakes",
  "Wedding Cakes",
  "Celebration Cakes",
] as const;

export type CakeCategory = (typeof CAKE_CATEGORIES)[number];

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  overnight?: string;
}

export interface CakeFaq {
  question: string;
  answer: string;
}

export interface Cake {
  id: number;
  title: string;
  image: string;
  gallery: string[];
  duration: string;
  durationDays: number;
  startLocation: string;
  endLocation: string;
  price: number | null;
  shortDescription: string;
  overview: string;
  places: string[];
  accommodation: string;
  transport: string;
  meals: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  categories: CakeCategory[];
  itinerary: ItineraryDay[];
  faqs: CakeFaq[];
  mapQuery: string;
  rating: number;
  reviews: number;
}

const defaultFaqs: CakeFaq[] = [
  {
    question: "How far in advance should I order?",
    answer:
      "Standard cakes need 48 hours. Wedding, tall and fully custom designs need 7–14 days so we can confirm flavour, size and decoration.",
  },
  {
    question: "Do you deliver?",
    answer:
      "Yes. Pickup from our Padukka kitchen is free. Delivery is available across Colombo and nearby towns for a small fee, timed to your event.",
  },
  {
    question: "Can you work around allergies?",
    answer:
      "We can bake egg-free, nut-free and reduced-sugar versions on request. Please tell us clearly when you order so we can plan a safe kitchen slot.",
  },
];

export const cakesData: Cake[] = [
  {
    id: 1,
    title: "Classic Chocolate Fudge",
    image: cakeGalleries.chocolateDrip[0],
    gallery: cakeGalleries.chocolateDrip,
    duration: "Serves 10–12",
    durationDays: 12,
    startLocation: "Dark chocolate sponge",
    endLocation: "Ganache frosting",
    price: 8500,
    shortDescription:
      "Rich cocoa layers, silky ganache and a glossy finish — our most-loved celebration cake.",
    overview:
      "A homemade chocolate fudge cake with moist dark sponge, whipped ganache filling and a smooth chocolate finish. Perfect for birthdays, office treats and anyone who wants a proper bakery chocolate cake.",
    places: ["Dark chocolate", "Ganache", "Cocoa nibs", "Vanilla cream"],
    accommodation: "Two-layer dark chocolate sponge",
    transport: "8 inch round",
    meals: "48 hours notice",
    highlights: [
      "Deep homemade chocolate flavour",
      "Silky ganache filling",
      "Optional birthday message plaque",
      "Available as cupcakes or a sheet cake",
    ],
    included: [
      "Cake board and bakery box",
      "Candle set on request",
      "Handwritten message",
      "Care and serving notes",
    ],
    excluded: ["Delivery outside Colombo", "Edible gold leaf", "Photo print topper"],
    categories: ["Birthday Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Confirm size & message",
        description: "Choose servings, frosting finish and the text you want on the cake.",
        overnight: "We hold your slot",
      },
      {
        day: 2,
        title: "Bake the sponges",
        description: "Chocolate sponges are baked the day before so they stay moist and slice cleanly.",
        overnight: "Cool and wrap",
      },
      {
        day: 3,
        title: "Fill, frost & finish",
        description: "Ganache filling, smooth coat and optional drip or sprinkles.",
        overnight: "Chill overnight",
      },
      {
        day: 4,
        title: "Pickup or delivery",
        description: "Collect from From My Oven or we deliver to your home, office or venue.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 4.9,
    reviews: 186,
  },
  {
    id: 2,
    title: "Garden Rose Wedding Cake",
    image: cakeGalleries.weddingRoses[2],
    gallery: cakeGalleries.weddingRoses,
    duration: "Serves 40–60",
    durationDays: 50,
    startLocation: "Vanilla bean & berry",
    endLocation: "Buttercream roses",
    price: 45000,
    shortDescription:
      "A three-tier wedding cake with fresh florals, vanilla bean sponge and berry filling.",
    overview:
      "Our signature wedding cake is designed with you — flavour pairings, height, flowers and a tasting if you want one. Soft vanilla bean sponge, raspberry conserve and Swiss meringue buttercream, finished with garden roses.",
    places: ["Vanilla bean", "Raspberry", "Lemon curd", "White chocolate"],
    accommodation: "Three-tier vanilla and berry sponges",
    transport: "6 / 8 / 10 inch tiers",
    meals: "14 days notice",
    highlights: [
      "Private flavour tasting",
      "Fresh or sugar flowers",
      "Venue setup on request",
      "Keepsake top tier option",
    ],
    included: [
      "Design consultation",
      "Cake stand hire",
      "Venue delivery in Colombo",
      "Serving kit",
    ],
    excluded: ["Fresh imported flowers", "Late-night venue overtime", "Alcohol-soaked tiers"],
    categories: ["Wedding Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Design consult",
        description: "Share photos, guest count, colours and the wedding date.",
        overnight: "Mood board sent",
      },
      {
        day: 2,
        title: "Tasting box",
        description: "We send or host a tasting of two sponges and two fillings.",
        overnight: "Flavour locked",
      },
      {
        day: 3,
        title: "Bake & stack",
        description: "Each tier is baked, filled and crumb-coated for a clean finish.",
        overnight: "Chill and rest",
      },
      {
        day: 4,
        title: "Decorate",
        description: "Buttercream roses, piping and floral placement.",
        overnight: "Final check",
      },
      {
        day: 5,
        title: "Wedding-day delivery",
        description: "We deliver, assemble on site and stay until the cake is camera-ready.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Colombo+Sri+Lanka",
    rating: 5,
    reviews: 74,
  },
  {
    id: 3,
    title: "Gold Ruffle Birthday Cake",
    image: cakeGalleries.goldRuffle[0],
    gallery: cakeGalleries.goldRuffle,
    duration: "Serves 8–10",
    durationDays: 10,
    startLocation: "Vanilla sponge",
    endLocation: "Gold ruffles & candles",
    price: 7800,
    shortDescription:
      "A rectangular cream cake with white ruffles, gold pearls and tall gold candles.",
    overview:
      "A rectangular celebration cake finished with wafer-style white ruffles, gold and white pearls, a gold Happy Birthday topper and tall wavy gold candles. Photographed from a few angles so you can see the same cake up close.",
    places: ["Vanilla", "Buttercream", "Gold pearls", "Ruffles"],
    accommodation: "Rectangular vanilla sponge",
    transport: "Rectangle board",
    meals: "24–48 hours notice",
    highlights: [
      "Fresh seasonal strawberries",
      "Light, not overly sweet",
      "Pretty for afternoon tea",
      "Can be made as a tray bake",
    ],
    included: ["Bakery box", "Serving spoon", "Fresh fruit garnish"],
    excluded: ["Out-of-season imported berries", "Overnight holding beyond 24 hours"],
    categories: ["Birthday Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Order & fruit check",
        description: "We confirm strawberry quality and your preferred sweetness.",
      },
      {
        day: 2,
        title: "Bake & assemble",
        description: "Sponge, cream and fruit are layered the morning of pickup.",
      },
      {
        day: 3,
        title: "Collect chilled",
        description: "Keep refrigerated and serve within the day for the best texture.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 4.8,
    reviews: 112,
  },
  {
    id: 4,
    title: "Yugeli Princess Cake",
    image: cakeGalleries.yugeli[0],
    gallery: cakeGalleries.yugeli,
    duration: "Serves 12–14",
    durationDays: 14,
    startLocation: "Vanilla sponge",
    endLocation: "Pink princess finish",
    price: 9200,
    shortDescription:
      "Pink princess cake with a crown, pearls and Yugeli in pink letters.",
    overview:
      "A tall pink birthday cake with a gold crown, pearls and the name Yugeli on the front. Extra photos show the same cake from other angles — not a different design.",
    places: ["Vanilla", "Pink buttercream", "Pearls", "Crown topper"],
    accommodation: "Tall round sponge",
    transport: "8 inch round",
    meals: "48 hours notice",
    highlights: [
      "Signature cream-cheese frosting",
      "Heart or rose decoration",
      "Cupcake version available",
      "Deep homemade colour",
    ],
    included: ["Cake box", "Rose petals or heart topper", "Message card"],
    excluded: ["Fondant covering", "Alcohol filling"],
    categories: ["Birthday Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Choose finish",
        description: "Smooth coat, rustic swirl or a ring of red-velvet crumbs.",
      },
      {
        day: 2,
        title: "Bake & frost",
        description: "Sponges rest so the cream cheese sets cleanly.",
      },
      {
        day: 3,
        title: "Ready for romance",
        description: "Pickup or candlelit delivery.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 4.9,
    reviews: 98,
  },
  {
    id: 5,
    title: "Mayen Safari Cake",
    image: cakeGalleries.mayen[0],
    gallery: cakeGalleries.mayen,
    duration: "Serves 16–20",
    durationDays: 18,
    startLocation: "Vanilla sponge",
    endLocation: "Safari animals & gold 1",
    price: 11000,
    shortDescription:
      "Mayen’s 1st birthday safari cake with a lion, jungle animals and a gold number one.",
    overview:
      "A kids’ first-birthday cake in a safari theme — lion, jungle animals and a gold 1. We can match a name, age and animal colours for your party.",
    places: ["Vanilla", "Safari theme", "Gold 1", "Jungle animals"],
    accommodation: "Themed kids sponge",
    transport: "8 inch round",
    meals: "5 days notice",
    highlights: [
      "Hidden rainbow reveal",
      "Name and age topper",
      "Matching cupcake add-on",
      "Mild, kid-friendly sweetness",
    ],
    included: ["Candles", "Paper plates on request", "Theme colour match"],
    excluded: ["Licensed character figurines", "Indoor fireworks"],
    categories: ["Birthday Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Pick a theme",
        description: "Share colours, name, age and any character inspiration.",
      },
      {
        day: 2,
        title: "Bake rainbow layers",
        description: "Each colour is baked separately for a bright slice.",
      },
      {
        day: 3,
        title: "Decorate",
        description: "Clouds, drips, sprinkles and the name plaque.",
      },
      {
        day: 4,
        title: "Party delivery",
        description: "We can drop the cake at home or the party hall.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 4.9,
    reviews: 143,
  },
  {
    id: 6,
    title: "Bevindu Jungle Cake",
    image: cakeGalleries.bevindu[0],
    gallery: cakeGalleries.bevindu,
    duration: "Serves 12",
    durationDays: 12,
    startLocation: "Vanilla sponge",
    endLocation: "Jungle cupcakes",
    price: 9800,
    shortDescription:
      "Bevindu jungle cake with matching green cupcakes — extra photos of the same set.",
    overview:
      "A jungle-themed birthday cake with matching green cupcakes. The gallery shows this same cake and cupcake set from different angles.",
    places: ["Vanilla", "Jungle theme", "Green cupcakes", "Name topper"],
    accommodation: "Themed cake plus cupcakes",
    transport: "Cake and cupcake box",
    meals: "48 hours notice",
    highlights: [
      "Homemade salted caramel",
      "Optional pretzel crunch",
      "Tall drip finish",
      "Great for teen and adult birthdays",
    ],
    included: ["Cake box", "Extra caramel pot", "Message plaque"],
    excluded: ["Gold leaf", "Macaron tower"],
    categories: ["Birthday Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Confirm drip style",
        description: "Chocolate, caramel or a mix, plus any crunch layer.",
      },
      {
        day: 2,
        title: "Cook caramel & bake",
        description: "Caramel is made in small batches in our kitchen.",
      },
      {
        day: 3,
        title: "Drip & decorate",
        description: "Chilled cake, drip, shards and a pinch of sea salt.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 4.8,
    reviews: 87,
  },
  {
    id: 7,
    title: "First Birthday One Cake",
    image: cakeGalleries.oneSmash[0],
    gallery: cakeGalleries.oneSmash,
    duration: "Serves 8–10",
    durationDays: 10,
    startLocation: "Vanilla smash cake",
    endLocation: "Blue & cream One",
    price: 7200,
    shortDescription:
      "Blue and cream first-birthday smash cake with a gold One topper.",
    overview:
      "A first-birthday smash cake in blue and cream, with a gold One. Extra photos are the same cake from other angles.",
    places: ["Vanilla", "Blue cream", "Smash cake", "Gold One"],
    accommodation: "Small smash cake",
    transport: "6 inch round",
    meals: "48 hours notice",
    highlights: [
      "Overnight set for a clean slice",
      "Berry or passionfruit sauce",
      "Can be made mini for parties",
      "Gluten-free base on request",
    ],
    included: ["Sauce jug", "Cake box", "Serving notes"],
    excluded: ["Alcohol-soaked fruit", "Same-day bake"],
    categories: ["Birthday Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Bake",
        description: "Slow baked in a water bath for a silky texture.",
        overnight: "Overnight chill",
      },
      {
        day: 2,
        title: "Finish",
        description: "Compote, white chocolate shards or a plain top.",
      },
      {
        day: 3,
        title: "Collect cold",
        description: "Keep chilled until 20 minutes before serving.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 4.7,
    reviews: 64,
  },
  {
    id: 8,
    title: "Wedding Cake Jars",
    image: cakeGalleries.weddingJars[0],
    gallery: cakeGalleries.weddingJars,
    duration: "Box of 12",
    durationDays: 6,
    startLocation: "Vanilla & berry",
    endLocation: "Named wedding jars",
    price: 4800,
    shortDescription:
      "Individual wedding cake jars with wooden spoons — Diliru & Lakdini style favours.",
    overview:
      "Cake in a jar with a wooden spoon, tied with ribbon — a wedding favour guests can take home. The gallery shows this same jar set, not other cakes.",
    places: ["Vanilla", "Berry", "Jar favours", "Wooden spoons"],
    accommodation: "Individual cake jars",
    transport: "Jar set with spoons",
    meals: "7 days notice",
    highlights: [
      "Mix-and-match flavours",
      "Name tags for parties",
      "Vegan vanilla option",
      "Same-week rush slots",
    ],
    included: ["Window bakery box", "Flavour labels", "Candles"],
    excluded: ["Individual gift boxes unless requested"],
    categories: ["Wedding Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Choose the mix",
        description: "Tell us how many of each flavour and any colour theme.",
      },
      {
        day: 2,
        title: "Bake & pipe",
        description: "Cupcakes are baked the morning of collection so they stay soft.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 4.8,
    reviews: 210,
  },
  {
    id: 9,
    title: "Wedding Fruit Cake Portions",
    image: cakeGalleries.weddingFruit[0],
    gallery: cakeGalleries.weddingFruit,
    duration: "Serves 14–16",
    durationDays: 16,
    startLocation: "Rich fruit cake",
    endLocation: "Iced portions",
    price: 12500,
    shortDescription:
      "Iced wedding fruit cake squares — extra photos of the same portions.",
    overview:
      "Traditional wedding fruit cake cut into iced squares. The gallery is this same fruit cake, photographed as a batch of portions.",
    places: ["Fruit cake", "Royal icing", "Wedding portions", "Marzipan"],
    accommodation: "Iced fruit cake squares",
    transport: "Portion box",
    meals: "5 days notice",
    highlights: [
      "Fresh citrus flavour",
      "Floral decoration",
      "Popular as a wedding second cake",
      "Not too heavy after a meal",
    ],
    included: ["Flower garnish", "Cake box", "Serving card"],
    excluded: ["Imported elderflower if out of stock — we use a homemade syrup"],
    categories: ["Wedding Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Flower plan",
        description: "We match edible and fresh flowers to your palette.",
      },
      {
        day: 2,
        title: "Bake lemon layers",
        description: "Syrup is brushed on while the sponges are still warm.",
      },
      {
        day: 3,
        title: "Assemble & dress",
        description: "Cream, flowers and a light dusting of sugar.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 4.9,
    reviews: 51,
  },
  {
    id: 10,
    title: "Juthula First Letter Cake",
    image: cakeGalleries.firstLetter[0],
    gallery: cakeGalleries.firstLetter,
    duration: "Serves 16",
    durationDays: 16,
    startLocation: "Vanilla sponge",
    endLocation: "First-letter board",
    price: null,
    shortDescription:
      "Juthula first-letter reading cake with a yellow board — four photos of the same cake.",
    overview:
      "A school first-letter celebration cake with a yellow reading board. Every gallery photo is this cake, from different angles.",
    places: ["Vanilla", "School theme", "Letter board", "Buttercream"],
    accommodation: "Themed celebration sponge",
    transport: "Custom size",
    meals: "7 days notice",
    highlights: [
      "Serious chocolate flavour",
      "Optional gold leaf",
      "Espresso soak for adults",
      "Quoted to your guest count",
    ],
    included: ["Design consult", "Luxury box", "Gold dust on request"],
    excluded: ["Alcohol unless requested", "Same-week rush"],
    categories: ["Celebration Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Quote & size",
        description: "Share guest count and whether you want gold or a drip.",
      },
      {
        day: 2,
        title: "Temper & bake",
        description: "Ganaches are made with couverture chocolate.",
      },
      {
        day: 3,
        title: "Glaze",
        description: "The cake is glazed cold for a glossy finish.",
      },
      {
        day: 4,
        title: "White-glove delivery",
        description: "We deliver standing upright and ready to slice.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 5,
    reviews: 38,
  },
  {
    id: 11,
    title: "Mother's Day Mini Set",
    image: cakeGalleries.mothersDay[0],
    gallery: cakeGalleries.mothersDay,
    duration: "Set of 6 minis",
    durationDays: 6,
    startLocation: "Mint bento cake",
    endLocation: "Matching cupcakes",
    price: 5400,
    shortDescription:
      "Mother’s Day mint bento cake with four matching cupcakes — same set in every photo.",
    overview:
      "A small mint bento cake with four matching cupcakes for Mother’s Day. The gallery shows this same boxed set, not other cakes.",
    places: ["Vanilla", "Mint cream", "Cupcakes", "Bento cake"],
    accommodation: "Bento cake plus cupcakes",
    transport: "Gift box",
    meals: "3 days notice",
    highlights: [
      "Personal name tags",
      "Pretty ribbon box",
      "Great as wedding favours",
      "Mix sweet and less-sweet",
    ],
    included: ["Ribbon gift box", "Flavour card", "Name tags"],
    excluded: ["Individual cake stands"],
    categories: ["Celebration Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Pick the six",
        description: "Choose flavours and whether names go on the box or each cake.",
      },
      {
        day: 2,
        title: "Bake minis",
        description: "Small tins, careful bake, neat frosting.",
      },
      {
        day: 3,
        title: "Box & ribbon",
        description: "Ready as a gift or a dessert table.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 4.7,
    reviews: 79,
  },
  {
    id: 12,
    title: "Avurudu Betel Leaf Cake",
    image: cakeGalleries.avuruduLeaf[0],
    gallery: cakeGalleries.avuruduLeaf,
    duration: "Serves 12–20",
    durationDays: 16,
    startLocation: "Vanilla sponge",
    endLocation: "Green betel leaf",
    price: 10500,
    shortDescription:
      "Avurudu betel-leaf cake with frangipani flowers — two photos of this cake only.",
    overview:
      "A green betel-leaf cake for Avurudu, with frangipani flowers and a Sinhala New Year greeting. Gallery photos are this cake only, not a mixed table.",
    places: ["Vanilla", "Green leaf", "Frangipani", "Avurudu"],
    accommodation: "Leaf-shaped sponge",
    transport: "Round board",
    meals: "4 days notice",
    highlights: [
      "Edible photo print",
      "Logo-safe for corporate events",
      "Any sponge flavour",
      "Colour-matched borders",
    ],
    included: ["Photo print", "Proof before printing", "Cake box"],
    excluded: ["Copyrighted character art we cannot legally print"],
    categories: ["Celebration Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Send the photo",
        description: "We check resolution and send a layout proof.",
      },
      {
        day: 2,
        title: "Print & bake",
        description: "Sponge is baked while the print is prepared.",
      },
      {
        day: 3,
        title: "Apply & finish",
        description: "Print is set, borders piped, message added.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 4.6,
    reviews: 91,
  },
  {
    id: 13,
    title: "Happy Birthday Amma Cake",
    image: cakeGalleries.ammaFloral[0],
    gallery: cakeGalleries.ammaFloral,
    duration: "Serves 10",
    durationDays: 10,
    startLocation: "Vanilla sponge",
    endLocation: "Peach flowers",
    price: 8900,
    shortDescription:
      "Happy Birthday Amma cake with peach flowers — extra photos of the same cake.",
    overview:
      "A peach floral birthday cake with Happy Birthday Amma. Every gallery photo is this cake from another angle.",
    places: ["Vanilla", "Peach flowers", "Buttercream", "Name message"],
    accommodation: "Round floral sponge",
    transport: "8 inch round",
    meals: "48 hours notice",
    highlights: [
      "Real espresso soak",
      "Alcohol-free by default",
      "Optional splash of rum",
      "Elegant dinner-party cake",
    ],
    included: ["Cocoa dusting", "Cake box", "Serving notes"],
    excluded: ["Alcohol unless requested"],
    categories: ["Birthday Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Choose the soak",
        description: "Espresso only, or a light rum finish.",
      },
      {
        day: 2,
        title: "Layer & chill",
        description: "Needs a proper rest so slices hold.",
        overnight: "Overnight set",
      },
      {
        day: 3,
        title: "Dust & box",
        description: "Cocoa just before collection.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 4.8,
    reviews: 55,
  },
  {
    id: 14,
    title: "Spiderman Birthday Cake",
    image: cakeGalleries.spiderman[0],
    gallery: cakeGalleries.spiderman,
    duration: "Serves 20–24",
    durationDays: 22,
    startLocation: "Vanilla sponge",
    endLocation: "Spiderman theme",
    price: 16500,
    shortDescription:
      "Spiderman birthday cake for Thiwru, age 5 — extra photos of this cake only.",
    overview:
      "A Spiderman-themed kids’ birthday cake. The gallery is this same cake from another angle, not a different design.",
    places: ["Vanilla", "Spiderman theme", "Kids birthday", "Name & age"],
    accommodation: "Themed kids sponge",
    transport: "8 inch round",
    meals: "5 days notice",
    highlights: [
      "Photogenic rustic finish",
      "Seasonal fruit and flowers",
      "Popular for engagements",
      "Less sweet than a full buttercream cake",
    ],
    included: ["Flower crown", "Cake stand hire", "Berry garnish"],
    excluded: ["Fully fondant covering"],
    categories: ["Birthday Cakes"],
    itinerary: [
      {
        day: 1,
        title: "Flower & fruit plan",
        description: "We match what is in season to your colour palette.",
      },
      {
        day: 2,
        title: "Bake & scrape",
        description: "Layers are stacked and given a thin rustic coat.",
      },
      {
        day: 3,
        title: "Dress on the day",
        description: "Flowers and fruit go on just before delivery.",
      },
    ],
    faqs: defaultFaqs,
    mapQuery: "Padukka+Sri+Lanka",
    rating: 4.9,
    reviews: 67,
  },
];

export const getCakeById = (id: number): Cake | undefined =>
  cakesData.find((cake) => cake.id === id);

export const getCakesByCategory = (category: CakeCategory): Cake[] =>
  cakesData.filter((cake) => cake.categories.includes(category));

export const getCakesByFlavour = (flavour: string): Cake[] =>
  cakesData.filter((cake) =>
    cake.places.some((item) => item.toLowerCase() === flavour.toLowerCase())
  );

export const formatCakePrice = (price: number | null) =>
  price === null ? "Contact for Price" : `From LKR ${price.toLocaleString()}`;

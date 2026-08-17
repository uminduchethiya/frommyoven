import { birthdayImages, weddingImages, celebrationImages } from "../../../data/images";

export const CAKE_CATEGORIES = [
  "Birthday Cakes",
  "Wedding Cakes",
  "Anniversary Cakes",
  "Cupcakes",
  "Chocolate Cakes",
  "Cheesecakes",
  "Kids Cakes",
  "Custom Cakes",
  "Celebration Cakes",
  "Mini Cakes",
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
    image: birthdayImages[0],
    gallery: birthdayImages.slice(0, 5),
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
    categories: ["Chocolate Cakes", "Birthday Cakes", "Celebration Cakes"],
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
    image: weddingImages[8],
    gallery: [weddingImages[8], weddingImages[11], weddingImages[6], weddingImages[0], weddingImages[4]],
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
    categories: ["Wedding Cakes", "Custom Cakes", "Celebration Cakes"],
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
    title: "Strawberry Cream Shortcake",
    image: birthdayImages[4],
    gallery: birthdayImages.slice(4, 9),
    duration: "Serves 8–10",
    durationDays: 10,
    startLocation: "Vanilla sponge",
    endLocation: "Chantilly cream",
    price: 7800,
    shortDescription:
      "Light vanilla layers, fresh strawberries and softly whipped cream.",
    overview:
      "A bakery classic: airy vanilla sponge, macerated strawberries and Chantilly cream. Best eaten the same day — we bake it fresh for your party.",
    places: ["Vanilla", "Strawberry", "Cream", "Lemon zest"],
    accommodation: "Soft vanilla sponge",
    transport: "7 inch round",
    meals: "24–48 hours notice",
    highlights: [
      "Fresh seasonal strawberries",
      "Light, not overly sweet",
      "Pretty for afternoon tea",
      "Can be made as a tray bake",
    ],
    included: ["Bakery box", "Serving spoon", "Fresh fruit garnish"],
    excluded: ["Out-of-season imported berries", "Overnight holding beyond 24 hours"],
    categories: ["Birthday Cakes", "Celebration Cakes"],
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
    title: "Red Velvet Romance",
    image: birthdayImages[4],
    gallery: birthdayImages.slice(4, 9),
    duration: "Serves 12–14",
    durationDays: 14,
    startLocation: "Red velvet",
    endLocation: "Cream cheese frosting",
    price: 9200,
    shortDescription:
      "Velvet crumb, a hint of cocoa and tangy cream-cheese frosting.",
    overview:
      "Our red velvet is cocoa-scented, deep red and paired with a not-too-sweet cream cheese frosting. A favourite for anniversaries and Valentine’s tables.",
    places: ["Red velvet", "Cream cheese", "Cocoa", "Vanilla"],
    accommodation: "Two-layer red velvet",
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
    categories: ["Anniversary Cakes", "Birthday Cakes", "Cupcakes"],
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
    title: "Rainbow Kids Party Cake",
    image: birthdayImages[52],
    gallery: [birthdayImages[52], ...birthdayImages.slice(9, 13)],
    duration: "Serves 16–20",
    durationDays: 18,
    startLocation: "Rainbow vanilla",
    endLocation: "Buttercream clouds",
    price: 11000,
    shortDescription:
      "Hidden rainbow layers, sprinkles and a fun theme for kids’ birthdays.",
    overview:
      "Six colourful vanilla layers under a cloud of buttercream. We can match a favourite character colour palette, add a name topper and pack matching cupcakes.",
    places: ["Vanilla", "Rainbow", "Sprinkles", "White chocolate"],
    accommodation: "Six-layer rainbow sponge",
    transport: "8 inch tall",
    meals: "5 days notice",
    highlights: [
      "Hidden rainbow reveal",
      "Name and age topper",
      "Matching cupcake add-on",
      "Mild, kid-friendly sweetness",
    ],
    included: ["Candles", "Paper plates on request", "Theme colour match"],
    excluded: ["Licensed character figurines", "Indoor fireworks"],
    categories: ["Kids Cakes", "Birthday Cakes", "Custom Cakes"],
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
    title: "Salted Caramel Drip",
    image: birthdayImages[19],
    gallery: birthdayImages.slice(19, 24),
    duration: "Serves 12",
    durationDays: 12,
    startLocation: "Brown sugar sponge",
    endLocation: "Salted caramel drip",
    price: 9800,
    shortDescription:
      "Brown-sugar cake, caramel buttercream and a shiny salted drip.",
    overview:
      "For caramel lovers: moist brown-sugar sponge, homemade salted caramel and a chocolate drip. Looks dramatic on the table and slices neatly.",
    places: ["Caramel", "Brown sugar", "Dark chocolate", "Sea salt"],
    accommodation: "Two-layer brown sugar sponge",
    transport: "8 inch round",
    meals: "48 hours notice",
    highlights: [
      "Homemade salted caramel",
      "Optional pretzel crunch",
      "Tall drip finish",
      "Great for teen and adult birthdays",
    ],
    included: ["Cake box", "Extra caramel pot", "Message plaque"],
    excluded: ["Gold leaf", "Macaron tower"],
    categories: ["Chocolate Cakes", "Celebration Cakes", "Birthday Cakes"],
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
    title: "New York Cheesecake",
    image: celebrationImages[12],
    gallery: [celebrationImages[12], celebrationImages[5], weddingImages[0], celebrationImages[6], birthdayImages[4]],
    duration: "Serves 8–10",
    durationDays: 10,
    startLocation: "Baked vanilla",
    endLocation: "Berry compote",
    price: 7200,
    shortDescription:
      "Dense baked cheesecake on a biscuit base, with a jug of berry sauce.",
    overview:
      "A proper baked cheesecake — creamy, slightly tangy and set overnight. Serve plain or with our warm berry compote.",
    places: ["Cream cheese", "Vanilla", "Biscuit", "Berry"],
    accommodation: "Baked vanilla cheesecake",
    transport: "8 inch tin",
    meals: "48 hours notice",
    highlights: [
      "Overnight set for a clean slice",
      "Berry or passionfruit sauce",
      "Can be made mini for parties",
      "Gluten-free base on request",
    ],
    included: ["Sauce jug", "Cake box", "Serving notes"],
    excluded: ["Alcohol-soaked fruit", "Same-day bake"],
    categories: ["Cheesecakes", "Mini Cakes", "Celebration Cakes"],
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
    title: "Vanilla Bean Cupcake Box",
    image: birthdayImages[14],
    gallery: birthdayImages.slice(14, 19),
    duration: "Box of 12",
    durationDays: 6,
    startLocation: "Vanilla bean",
    endLocation: "Swirled buttercream",
    price: 4800,
    shortDescription:
      "A dozen fluffy vanilla cupcakes with piped buttercream and sprinkles.",
    overview:
      "Our bestselling box for offices, kids’ tables and last-minute celebrations. Mix vanilla, chocolate and red velvet in one box if you like.",
    places: ["Vanilla", "Chocolate", "Red velvet", "Lemon"],
    accommodation: "Soft cupcake sponges",
    transport: "12-piece bakery box",
    meals: "24 hours notice",
    highlights: [
      "Mix-and-match flavours",
      "Name tags for parties",
      "Vegan vanilla option",
      "Same-week rush slots",
    ],
    included: ["Window bakery box", "Flavour labels", "Candles"],
    excluded: ["Individual gift boxes unless requested"],
    categories: ["Cupcakes", "Birthday Cakes", "Mini Cakes"],
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
    title: "Lemon Elderflower Cake",
    image: weddingImages[11],
    gallery: weddingImages.slice(8, 12),
    duration: "Serves 14–16",
    durationDays: 16,
    startLocation: "Lemon sponge",
    endLocation: "Elderflower cream",
    price: 12500,
    shortDescription:
      "Bright lemon layers, elderflower cream and a garden-party finish.",
    overview:
      "A light, fragrant cake for engagements, garden weddings and spring birthdays. Lemon sponge, elderflower syrup and a cloud of cream, finished with fresh flowers.",
    places: ["Lemon", "Elderflower", "Vanilla", "Berry"],
    accommodation: "Three-layer lemon sponge",
    transport: "8 inch tall",
    meals: "5 days notice",
    highlights: [
      "Fresh citrus flavour",
      "Floral decoration",
      "Popular as a wedding second cake",
      "Not too heavy after a meal",
    ],
    included: ["Flower garnish", "Cake box", "Serving card"],
    excluded: ["Imported elderflower if out of stock — we use a homemade syrup"],
    categories: ["Wedding Cakes", "Custom Cakes", "Anniversary Cakes"],
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
    title: "Triple Chocolate Truffle",
    image: birthdayImages[1],
    gallery: birthdayImages.slice(1, 6),
    duration: "Serves 16",
    durationDays: 16,
    startLocation: "Dark, milk & white",
    endLocation: "Truffle glaze",
    price: null,
    shortDescription:
      "A showpiece chocolate cake with truffle ganache — priced to your size.",
    overview:
      "Three chocolate sponges, three ganaches and a mirror-style truffle glaze. We scale this for intimate dinners or large celebrations. Contact us for a quote.",
    places: ["Dark chocolate", "Milk chocolate", "White chocolate", "Espresso"],
    accommodation: "Triple chocolate layers",
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
    categories: ["Chocolate Cakes", "Custom Cakes", "Celebration Cakes"],
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
    title: "Mini Celebration Cakes",
    image: celebrationImages[5],
    gallery: [celebrationImages[5], celebrationImages[0], celebrationImages[6], celebrationImages[9], celebrationImages[12]],
    duration: "Set of 6 minis",
    durationDays: 6,
    startLocation: "Mixed flavours",
    endLocation: "Petit fours finish",
    price: 5400,
    shortDescription:
      "Six individual cakes — ideal for tasting tables, gifts and small gatherings.",
    overview:
      "A boxed set of 8 cm cakes in mixed flavours. Guests each get their own cake, or you can gift them as favours.",
    places: ["Vanilla", "Chocolate", "Red velvet", "Lemon"],
    accommodation: "Individual mini sponges",
    transport: "Gift box of 6",
    meals: "3 days notice",
    highlights: [
      "Personal name tags",
      "Pretty ribbon box",
      "Great as wedding favours",
      "Mix sweet and less-sweet",
    ],
    included: ["Ribbon gift box", "Flavour card", "Name tags"],
    excluded: ["Individual cake stands"],
    categories: ["Mini Cakes", "Cupcakes", "Celebration Cakes"],
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
    title: "Custom Photo Cake",
    image: birthdayImages[19],
    gallery: birthdayImages.slice(19, 24),
    duration: "Serves 12–20",
    durationDays: 16,
    startLocation: "Your photo",
    endLocation: "Edible print",
    price: 10500,
    shortDescription:
      "Your photo, logo or artwork printed on a homemade sponge of your choice.",
    overview:
      "Send a high-resolution photo and we print it on icing, then finish the cake in matching colours. Popular for milestone birthdays, retirements and brand launches.",
    places: ["Vanilla", "Chocolate", "Buttercream", "Fondant"],
    accommodation: "Printed icing on homemade sponge",
    transport: "8 or 10 inch",
    meals: "4 days notice",
    highlights: [
      "Edible photo print",
      "Logo-safe for corporate events",
      "Any sponge flavour",
      "Colour-matched borders",
    ],
    included: ["Photo print", "Proof before printing", "Cake box"],
    excluded: ["Copyrighted character art we cannot legally print"],
    categories: ["Custom Cakes", "Birthday Cakes", "Kids Cakes"],
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
    title: "Tiramisu Layer Cake",
    image: weddingImages[6],
    gallery: [weddingImages[6], weddingImages[7], birthdayImages[0], celebrationImages[12], weddingImages[0]],
    duration: "Serves 10",
    durationDays: 10,
    startLocation: "Espresso sponge",
    endLocation: "Mascarpone cream",
    price: 8900,
    shortDescription:
      "Coffee-soaked layers, mascarpone cream and a dusting of cocoa.",
    overview:
      "Tiramisu as a sliceable celebration cake. Soft espresso sponge, mascarpone and cocoa — grown-up, not too sweet, lovely after dinner.",
    places: ["Espresso", "Mascarpone", "Cocoa", "Vanilla"],
    accommodation: "Coffee-soaked layers",
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
    categories: ["Anniversary Cakes", "Cheesecakes", "Celebration Cakes"],
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
    title: "Floral Naked Cake",
    image: weddingImages[0],
    gallery: weddingImages.slice(0, 5),
    duration: "Serves 20–24",
    durationDays: 22,
    startLocation: "Vanilla & berry",
    endLocation: "Fresh flowers",
    price: 16500,
    shortDescription:
      "A rustic semi-naked cake with seasonal fruit and garden flowers.",
    overview:
      "For couples and hosts who want something pretty but not overly iced. Vanilla sponge, berry jam, a light buttercream scrape and flowers from the garden.",
    places: ["Vanilla", "Berry jam", "Cream", "Seasonal fruit"],
    accommodation: "Semi-naked vanilla layers",
    transport: "9 inch tall",
    meals: "5 days notice",
    highlights: [
      "Photogenic rustic finish",
      "Seasonal fruit and flowers",
      "Popular for engagements",
      "Less sweet than a full buttercream cake",
    ],
    included: ["Flower crown", "Cake stand hire", "Berry garnish"],
    excluded: ["Fully fondant covering"],
    categories: ["Wedding Cakes", "Anniversary Cakes", "Custom Cakes"],
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

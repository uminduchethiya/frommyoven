export const COMPANY = {
  brand: "From My Oven",
  legalName: "From My Oven Bakery",
  tagline: "Homemade cakes, made to order",
  logo: "/images/logo.jpg",
  phone: "+94 77 293 3146",
  phoneTel: "+94772933146",
  whatsapp: "94772933146",
  email: "hello@frommyoven.com",
  location: "Padukka, Wattareka, Sri Lanka",
  hours: "Tue–Sun: 9 AM – 7 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Padukka+Wattareka+Sri+Lanka&output=embed",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Cakes", to: "/cakes" },
  { label: "Custom Order", to: "/custom-order" },
  { label: "Occasions", to: "/occasions" },
  { label: "Gallery", to: "/gallery" },
  { label: "Baker", to: "/bakers" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

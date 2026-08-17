const birthdaySrc = (n: number) =>
  `/images/birthday/birthday-${String(n).padStart(2, "0")}.jpeg`;

const weddingSrc = (n: number) =>
  `/images/wedding/wedding-${String(n).padStart(2, "0")}.jpeg`;

const celebrationSrc = (n: number) =>
  `/images/celebration/celebration-${String(n).padStart(2, "0")}.jpeg`;

const carouselSrc = (n: number) =>
  `/images/carousel/carousel-${String(n).padStart(2, "0")}.jpeg`;

export const birthdayImages = Array.from({ length: 53 }, (_, i) => birthdaySrc(i + 1));
export const weddingImages = Array.from({ length: 12 }, (_, i) => weddingSrc(i + 1));
export const celebrationImages = Array.from({ length: 13 }, (_, i) => celebrationSrc(i + 1));
export const carouselImages = Array.from({ length: 4 }, (_, i) => carouselSrc(i + 1));

export const cakeImages = {
  chocolate: birthdayImages[0],
  chocolateSlice: birthdayImages[1],
  drip: birthdayImages[19],
  birthday: birthdayImages[0],
  rainbow: birthdayImages[9],
  wedding: weddingImages[8],
  weddingTall: weddingImages[11],
  floral: weddingImages[8],
  naked: weddingImages[6],
  cupcakes: celebrationImages[5],
  redVelvet: birthdayImages[4],
  redVelvetCups: celebrationImages[4],
  strawberry: birthdayImages[4],
  cheesecake: celebrationImages[12],
  tiramisu: weddingImages[6],
  slices: celebrationImages[12],
  macarons: celebrationImages[5],
  pastry: weddingImages[0],
  bakery: celebrationImages[12],
  bread: weddingImages[6],
  kitchen: birthdayImages[0],
  mixing: celebrationImages[0],
  frosting: birthdayImages[4],
  lemon: weddingImages[11],
  carrot: celebrationImages[9],
  dessert: celebrationImages[12],
  mini: celebrationImages[5],
  berries: birthdayImages[4],
  celebration: celebrationImages[5],
  kids: birthdayImages[52],
};

export const bakerPhotos = {
  baker1: "/images/bakers/deepanjali.jpeg",
};

export const guestPhotos = {
  guest1: birthdayImages[0],
  guest2: weddingImages[8],
  guest3: birthdayImages[52],
  guest4: celebrationImages[5],
  guest5: birthdayImages[4],
  guest6: celebrationImages[12],
};

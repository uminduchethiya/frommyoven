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

const pick = (images: string[], ...indexes: number[]) => indexes.map((index) => images[index]);

export const cakeGalleries = {
  chocolateDrip: pick(birthdayImages, 0, 2),
  goldRuffle: pick(birthdayImages, 1, 3, 6),
  pinkButterfly: pick(birthdayImages, 4, 8, 15),
  yugeli: pick(birthdayImages, 5, 9, 10),
  ammaFloral: pick(birthdayImages, 7, 11, 12),
  familyAmma: pick(birthdayImages, 13, 19, 29),
  spiderman: pick(birthdayImages, 14, 16),
  bevindu: pick(birthdayImages, 17, 18, 20),
  oneSmash: pick(birthdayImages, 21, 27, 31),
  mayen: pick(birthdayImages, 52),
  weddingRoses: pick(weddingImages, 5, 7, 8, 11),
  weddingJars: pick(weddingImages, 0, 1, 2, 4, 10),
  weddingFruit: pick(weddingImages, 3, 6, 9),
  firstLetter: pick(celebrationImages, 0, 1, 2, 3),
  mothersDay: pick(celebrationImages, 4, 5, 8),
  avuruduLeaf: pick(celebrationImages, 6, 7),
  colourKids: pick(celebrationImages, 9, 10, 11),
};

export const cakeImages = {
  chocolate: cakeGalleries.chocolateDrip[0],
  chocolateSlice: cakeGalleries.chocolateDrip[1],
  drip: cakeGalleries.chocolateDrip[0],
  birthday: cakeGalleries.chocolateDrip[0],
  rainbow: cakeGalleries.yugeli[0],
  wedding: cakeGalleries.weddingRoses[2],
  weddingTall: cakeGalleries.weddingRoses[3],
  floral: cakeGalleries.weddingRoses[0],
  naked: cakeGalleries.weddingFruit[0],
  cupcakes: cakeGalleries.mothersDay[0],
  redVelvet: cakeGalleries.pinkButterfly[0],
  redVelvetCups: cakeGalleries.mothersDay[1],
  strawberry: cakeGalleries.pinkButterfly[0],
  cheesecake: cakeGalleries.avuruduLeaf[0],
  tiramisu: cakeGalleries.weddingFruit[1],
  slices: cakeGalleries.weddingFruit[0],
  macarons: cakeGalleries.mothersDay[0],
  pastry: cakeGalleries.weddingJars[0],
  bakery: cakeGalleries.avuruduLeaf[0],
  bread: cakeGalleries.weddingFruit[0],
  kitchen: cakeGalleries.chocolateDrip[0],
  mixing: cakeGalleries.firstLetter[0],
  frosting: cakeGalleries.pinkButterfly[0],
  lemon: cakeGalleries.weddingRoses[3],
  carrot: cakeGalleries.colourKids[0],
  dessert: cakeGalleries.avuruduLeaf[0],
  mini: cakeGalleries.mothersDay[0],
  berries: cakeGalleries.pinkButterfly[0],
  celebration: cakeGalleries.mothersDay[0],
  kids: cakeGalleries.mayen[0],
};

export const bakerPhotos = {
  baker1: "/images/bakers/deepanjali.jpeg",
};

export const pageHeroImages = {
  cakes: cakeGalleries.chocolateDrip[0],
  customOrder: cakeGalleries.weddingRoses[2],
  occasions: cakeGalleries.firstLetter[0],
  gallery: cakeGalleries.pinkButterfly[0],
  baker: bakerPhotos.baker1,
  about: cakeGalleries.colourKids[0],
  contact: cakeGalleries.weddingJars[0],
};

export const guestPhotos = {
  guest1: birthdayImages[0],
  guest2: weddingImages[8],
  guest3: birthdayImages[52],
  guest4: celebrationImages[5],
  guest5: birthdayImages[4],
  guest6: celebrationImages[12],
};

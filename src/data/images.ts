const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const cakeImages = {
  chocolate: unsplash("photo-1578985545062-69928b1d9587"),
  chocolateSlice: unsplash("photo-1563729784474-d77dbb933a9e"),
  drip: unsplash("photo-1606890737304-57a1ca8a5b62"),
  birthday: unsplash("photo-1464349095431-e9a21285b5f3"),
  rainbow: unsplash("photo-1558636508-e0db3814bd1d"),
  wedding: unsplash("photo-1535254973040-607b474cb50d"),
  weddingTall: unsplash("photo-1464195244916-405fa0a82545"),
  floral: unsplash("photo-1621303837174-89787a7d4729"),
  naked: unsplash("photo-1542826438-bd32f43d626f"),
  cupcakes: unsplash("photo-1486427944299-d1955d23e34d"),
  redVelvet: unsplash("photo-1586985289688-ca3cf47d3e6e"),
  redVelvetCups: unsplash("photo-1614707267537-b85aaf00c4b7"),
  strawberry: unsplash("photo-1565958011703-44f9829ba187"),
  cheesecake: unsplash("photo-1533134242443-d4fd215305ad"),
  tiramisu: unsplash("photo-1571877227200-a0d98ea607e9"),
  slices: unsplash("photo-1588195538326-c5b1e1d0d654"),
  macarons: unsplash("photo-1612203985729-70726954388c"),
  dessert: unsplash("photo-1488477181946-6428a0291777"),
  pastry: unsplash("photo-1551024506-0bccd828d307"),
  bakery: unsplash("photo-1517433670267-08bbd4be890f"),
  bread: unsplash("photo-1509440159596-0249088772ff"),
  kitchen: unsplash("photo-1556910103-1c02765aa8be"),
  mixing: unsplash("photo-1556910103-1c02765aa8be"),
  frosting: unsplash("photo-1571115177098-24ec42ed204d"),
  lemon: unsplash("photo-1488477181946-6428a0291777"),
  carrot: unsplash("photo-1606313564200-e75d5e30476c"),
  mini: unsplash("photo-1486427944299-d1955d23e34d"),
  berries: unsplash("photo-1565958011703-44f9829ba187"),
  celebration: unsplash("photo-1464349095431-e9a21285b5f3"),
  kids: unsplash("photo-1558636508-e0db3814bd1d"),
};

export const bakerPhotos = {
  baker1: unsplash("photo-1556911220-e15b29be8c8f", 800),
  baker2: unsplash("photo-1595273670150-bd0c3c392e46", 800),
  baker3: unsplash("photo-1577219491135-ce391730fb2c", 800),
  baker4: unsplash("photo-1556909114-f6e7ad7d3136", 800),
  baker5: unsplash("photo-1607631568010-a87245c0daf8", 800),
};

export const guestPhotos = {
  guest1: unsplash("photo-1507003211169-0a1dd7228f2d", 150),
  guest2: unsplash("photo-1494790108377-be9c29b29330", 150),
  guest3: unsplash("photo-1438761681033-6461ffad8d80", 150),
  guest4: unsplash("photo-1500648767791-00dcc994a43e", 150),
  guest5: unsplash("photo-1534528741775-53994a69daeb", 150),
  guest6: unsplash("photo-1506794778202-cad84cf45f1d", 150),
};

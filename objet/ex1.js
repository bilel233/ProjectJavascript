/* creation d'un objet */

let user = {};

// objet deja construit

let assistantManajer = {
  rangeTilesPerTurn: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: "young and ambitious",
  greeting: "let's make some money",
};

/* exemple avec un objet table */

let table = {
  legs: 3,
  color: "brown",
  priceUSD: 100,
};

console.log(table);
console.log(table.color);

/* un autre objet */

let house = {
  rooms: 3,
  color: "brown",
  priceUSD: 10000,
};
console.log(house);

let house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

/* portrait paysage */

const portrait = (width, height) => {
  if (width > height) {
    return true;
  } else {
    return false;
  }
};

/* tests de la fonction portrait */

console.log(portrait(1, 2));
console.log(portrait(10, 2));

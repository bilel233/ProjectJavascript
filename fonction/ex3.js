/* somme de multiples */

const multiples = (a) => {
  let s = 0; // compteur somme

  for (let i = 0; i <= a; i++) {
    if (i % 3 || i % 5 == 0) {
      s = s + i;
    }
  }
  return s;
};

/* on test la fonction multiples */

console.log(multiples(10));

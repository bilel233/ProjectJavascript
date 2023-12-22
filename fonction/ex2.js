/* nombre maximum */

function maximum(a, b) {
  /* renvoie le maximum de deux nombres */

  if (a > b) {
    return a;
  } else {
    return b;
  }
}

/* tests de la fonction maximum */

console.log(maximum(1, 10));
console.log(maximum(10, 1));

/* une autre maniere de renvoyer le maximum de deux entiers */

const max = (a, b) => (a > b ? a : b);

console.log(max(10, 10));
console.log(max(15, 10));

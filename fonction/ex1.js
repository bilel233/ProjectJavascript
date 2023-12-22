// echanges de variables

function swap(a, b) {
  let temp = a; // declaration d'une variable temporaire
  a = b;
  b = temp;

  console.log(a);
  console.log(b);
}

/* tests de la fonction swap */

swap(1, 2);
console.log("===============");
swap(5, 7);
console.log("===============");
swap(1.1, 2);

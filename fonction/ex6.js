/* boucles de nombres pairs et impairs */

/* premiere facoon de coder la fonction */

function oddOrEven(n) {
  /* verifie si la serie de nombres est pairs ou impairs */
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i + " PAIR");
    } else {
      console.log(i + " IMPAIR");
    }
  }
}

// tests de la fonction

oddOrEven(10);
oddOrEven(25);

/* deuxieme facon de coder la fonction */

const pairOuImpair = (n) => {
  /* verifie si la serie d enombres est pairs ou impairs */
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i + " PAIR");
    } else {
      console.log(i + " IMPAIR");
    }
  }
};

/* tests de la fonction */

pairOuImpair(11);

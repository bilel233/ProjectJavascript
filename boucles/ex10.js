/* calculer la somme d etous le snombres pairs de 1 à 100 */

let s = 0; // on initialise la somme a 0

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    s = s + i;
  }
}
console.log(s);

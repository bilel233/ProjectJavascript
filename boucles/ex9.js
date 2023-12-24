/* calcule de la somme de tous les nombres impairs de 1 à 100
 */

let s = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    // divisible par 3
    console.log(i);
    s = s + i;
  }
}
console.log(s); // affichage de la somme

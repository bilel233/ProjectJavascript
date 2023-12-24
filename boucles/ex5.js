/* imprimez tous les nombres divisibles par 5 et 15 de 1 à 100
 */

for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 15 == 0) {
    console.log(i);
  }
}

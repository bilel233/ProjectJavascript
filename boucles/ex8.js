/* Posez à l'utilisateur une question : « Combien de fois souhaitez-vous imprimer Hello World ? » puis imprimez Hello World autant de fois

*/

let count = Number(
  prompt("Combien de fois souhaitez-vous imprimer Hello World ?")
);

for (let i = 0; i < count; i++) {
  console.log("Combien de fois souhaitez-vous imprimer Hello World ?");
}

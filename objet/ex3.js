/* les tableaux sont des objets */

// les tableaux sont des objets

let fruits = [];
fruits.push("apple");
fruits.push("pear");
console.log(fruits);

fruits.pop();
console.log(fruits);

/* construction d'uné fonction */

function arrayBuilder(one, two, three) {
  let arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  console.log(arr);
}
// appel de la fonction

arrayBuilder("apple", "pear", "plum");

// on peut retourner le tableau nouvellement construit

function arrayBuilder(one, two, three) {
  let arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}

let simpleArr = arrayBuilder("apple", "pear", "plum");

console.log(simpleArr);

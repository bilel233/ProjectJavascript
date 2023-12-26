/* valeurs de retours des fonctions */

console.log("Hello");

function consoleLog(val) {
  console.log(val);
  return val;
}

consoleLog("Hello");

/* un autre exemple */

function doubleIt(num) {
  return num * 2;
}
/* code d'une autre fonction
 */

function objecMaker(val) {
  return {
    prop: val,
  };
}
doubleIt(10).toString();

/* le but : renvoyer des valeurs */

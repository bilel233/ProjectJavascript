/* exemple de fonction */

function listArrayItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + 1, arr[i]);
  }
}

let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);

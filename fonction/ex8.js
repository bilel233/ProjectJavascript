/* localiser la position d'une lettre choisie dans ce mot donné */

const letterfinder = (word, match) => {
  for (let i = 0; i <= word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
};

/* tests de la fonction letterFinder */

letterfinder("test", "t");

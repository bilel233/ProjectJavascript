/* speed limits */

const speedLimit = (s) => {
  if (s <= 70) {
    console.log("Good safe Driving");
  }
  if (s > 70) {
    console.log("Speed limit crossed by penality point");
  }
};

// tests de la fonction sppedlimits
speedLimit(20);
speedLimit(110);

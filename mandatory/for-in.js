const flowers = {
  tulip: 20,
  rose: 10,
  lily: 15,
};

for (flowerType in flowers) {
  console.log(`${flowerType} : ${flowers[flowerType]}`);          //for every flower type, print the value of that flower type
}

// Prints
// tulip: 20 m  
// rose: 10
// lily: 15
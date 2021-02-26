// Exercise 2
/*
Write code in the space provided so that the expected values output
*/

let dog = {
  name: "Billy",
  wantsToPlay: false,
};

// WRITE CODE BELOW THIS LINE
dog.name = "Rex";
dog.wantsToPlay = true;
// WRITE CODE ABOVE THIS LINE

console.log(dog.name);
console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true

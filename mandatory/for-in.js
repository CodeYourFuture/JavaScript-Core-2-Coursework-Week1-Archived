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


/*  WRITERS
Ex2

 RYNO
*/


writers.forEach(({ firstName, lastName, age, occupation }) => {
  // console.log(firstName);
  console.log(`Hi, my name is ${firstName} ${lastName}. I am ${age} years old, and work as a ${occupation}.`)
});

writers.forEach(element => {
  console.log(`Hi, my name is ${element.firstName} ${element.lastName}. I am ${element.age} years old, and work as a ${element.occupation}.`)
});

/*
Exercise 2:

Only `console.log()` out the writers who are in their 40s (meaning between 40 and 49)
and not alive anymore. Use the below sentence format:

"Writer {firstName} {lastName} died at {age} years old."
*/
for (objectInArrayThatDiedIn40s of writers) {
  /*The for/of statement loops through the values of an iterable object(writers).
  It loops over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:*/
  if (objectInArrayThatDiedIn40s.alive === false && objectInArrayThatDiedIn40s.age > 39 && objectInArrayThatDiedIn40s.age < 50) {
    // checking if conditions are met by using && Logical Operator + Comparison Operators.
    console.log(`Exercise2: Writer ${objectInArrayThatDiedIn40s.firstName} ${objectInArrayThatDiedIn40s.lastName} died at ${objectInArrayThatDiedIn40s.age} years old.`);
  }
}


/*
Exercise 3:

Only `console.log()` out alive writers who are in their 40s (meaning between 40 and 49):

  "Hi, my name is {firstName} {lastName}. I am {age} years old."
*/

writers
  .filter(element =>
    element.age > 40 && element.age < 49 && element.alive)
  .forEach(element =>
    console.log(`Hi, my name is ${element.firstName} ${element.lastName}. I am ${element.age} years old.`))

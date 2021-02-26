/* 
  Challenge 1: Famous Writers

  Did you know you can also have an Array of Objects? 

  You might think "This is madness!" but in everyday coding life
  it is quite a frequent combination. Just think about what benefits we can get from this construct.

  An object lets you store multiple values in a single variable, then you can store complex objects in an array.
  Let's assume you have a list of data about people names and their birthday and you would like to print each name
  with corresponding birthday together. 

  Storing these pieces of information in different arrays and then pairing them up
  makes the iteration unnecessarily complicated, code will be less intuitive, needs extra cognitive effort to
  reason about and last but not least it can be error-prone (for example, you match up the wrong birthday to a name).

  In this exercise you will practice how to access Objects stored in an Array and their properties. You already know 
  different ways of looping through Arrays, it won't be different in this case. The only extra step is that you have to 
  use values inside Objects.
*/

// We've created an array of objects for you here:
let writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "Bell",
    lastName: "Hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

/*
Exercise 1:

  Loop through the Array, and for each object, use `console.log()` to print out the below sentence
  and insert the corresponding values to the place holders that are indicated in curly braces:

  "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
*/
/* ---- Explanation -----
/* The for..in loop allow us to loop through both array and objects, while the for...of loop
 can loop through Array. But in this case I had used the for...in loop in handy with the index, as it iterates only over the property Names. 
 Same can also be done using the for... of loop. but the for...of loop iterate over the the property value so does not need the indexes.
 Different example on how to archive the same task is listed below:
 */
/*  ---- Solution 1
  for (let writer = 0; writer < writers.length;writer++){
    console.log(`Hi, my name is ${writers[writer].firstName}. I am ${writers[writer].age} years old, and work as a ${writers[writer ].occupation}`)
   }
*/
/* --- Solution 2
   for (let writer in writers){
     console.log(`Hi, my name is ${writers[writer].firstName}. I am ${writers[writer].age} years old, and work as a ${writers[writer ].occupation}`)
  }
  for (let keys of writers){
  console.log(`Hi, my name is ${keys.firstName} ${keys.lastName}. I am ${keys.age} years old, and work as a ${keys.occupation}.`);
}
*/

//Solution 3
writers.forEach(function (writer) {
  console.log(
    `Hi, my name is ${writer.firstName}. I am ${writer.age} years old, and work as a ${writer.occupation}`
  );
});

/*
Exercise 2:

  Only `console.log()` out the writers who are in their 40s (meaning between 40 and 49)
  and not alive anymore.(meaning alive must not be equal to tre) Use the below sentence format:

  "Writer {firstName} {lastName} died at {age} years old."
*/
/*----Explanation----
The funny aspect of programming is the ability to finds differences solutions for the same task.
In this case I went on creating a function called "filterWriter" which has the parameter of "writer". Since the want us to return writers whose age is within the boundaries of 40 and 49 ("meaning between 40 and 49"), I had made used of the if statement. and the !== operator. In programming,
the negations of !== (not  equality), is the equality operator (===).
So if writer.alive is not equal to true (!== true),this mean it is equal to false.
If the condition is true take from the array the writers firstName, lastName and age by accessing them using the dot notation or square bracket.

We Still need to filter those value from the array; using the filter() method by calling back our function name (hints: callBacks functions) inside the filter methods.
*/
function filterWriter(writer) {
  if (writer.age <= 49 && writer.alive !== true) {
    console.log(
      `Writer ${writer.firstName} ${writer.lastName} died at ${writer.age} year old.`
    );
  }
}
return writers.filter(filterWriter); // It can also be done with the filter method

/*
Exercise 3:

  Only `console.log()` out alive writers who are in their 40s (meaning between 40 and 49):

  "Hi, my name is {firstName} {lastName}. I am {age} years old."
*/
function filterWriter(writer) {
  if (writer.age <= 49 && writer.alive !== false) {
    console.log(
      `Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} year old.`
    );
  }
}
return writers.forEach(filterWriter);

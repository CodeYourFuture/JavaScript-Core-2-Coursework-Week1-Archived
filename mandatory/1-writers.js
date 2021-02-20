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
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "Bell",
    lastName: "Hooks",
    occupation: "writer",
    age: 64,
    alive: true,
  },
];

/*
Exercise 1:

  Loop through the Array, and for each object, use `console.log()` to print out the below sentence
  and insert the corresponding values to the place holders that are indicated in curly braces:

  "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
*/
writers.forEach((writerDetails) => {
  console.log(
    `Hi, my name is ${writerDetails.firstName} ${writerDetails.lastName}. I am ${writerDetails.age} years old, and work as a ${writerDetails.occupation}.`
  );
});

/*
Exercise 2:

  Only `console.log()` out the writers who are in their 40s (meaning between 40 and 49)
  and not alive anymore. Use the below sentence format:

  "Writer {firstName} {lastName} died at {age} years old."
*/

/*This solution doesn't work, I wonder why?:
function isDeadAndIn40s(writer) {
  return writer.age >= 40 && writer.age <= 49 && writer.alive === false;
}

let passedWritersIn40s= writers.filter(isDeadAndIn40s);
  console.log(
    `Writer ${passedWritersIn40s.firstName} ${passedWritersIn40s.lastName} died at ${passedWritersIn40s.age} years old.`
  );*/

writers.forEach((writerDetails) => {
  if (
    writerDetails.age >= 40 &&
    writerDetails.age <= 49 &&
    writerDetails.alive === false
  )
    console.log(
      `Writer ${writerDetails.firstName} ${writerDetails.lastName} died at ${writerDetails.age} years old.`
    );
});

/*
Exercise 3:


  Only `console.log()` out alive writers who are in their 40s (meaning between 40 and 49):

  "Hi, my name is {firstName} {lastName}. I am {age} years old."
*/
writers.forEach((writerDetails) => {
  if (
    writerDetails.age >= 40 &&
    writerDetails.age <= 49 &&
    writerDetails.alive === true
  )
    console.log(
      `Hi, my name is  ${writerDetails.firstName} ${writerDetails.lastName} I am ${writerDetails.age} years old.`
    );
});

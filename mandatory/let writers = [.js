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
      age: 40,
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
      age: 63,
      alive: true,
    },
    {
      firstName: "Yukiko",
      lastName: "Motoya",
      occupation: "writer",
      age: 49,
      alive: true,
    }
  ];
  
  /*
  Exercise 1:
  
    Loop through the Array, and for each object, use `console.log()` to print out the below sentence
    and insert the corresponding values to the place holders that are indicated in curly braces:
  
    "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
  */
function logAllWriters(writers) {
    `Hi, my name is ${writers.firstName} ${writers.lastName}. I am ${writers.age} years old, and work as a ${writers.occupation}`;
};

console.log([logAllWriters]);
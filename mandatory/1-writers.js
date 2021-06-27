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
function logAllWriters() {
  // write your code to log all writers here
};

/*
Exercise 2:

  Only `console.log()` out the writers who are in their 40s (meaning between 40 and 49)
  and not alive anymore. Use the below sentence format:

  "Writer {firstName} {lastName} died at {age} years old."
*/

function logDeadWritersInTheirForties() {
  // write your code here
}

/*
Exercise 3:

  Only `console.log()` out alive writers who are in their 40s (meaning between 40 and 49):

  "Hi, my name is {firstName} {lastName}. I am {age} years old."
*/

function logAliveWritersInTheirForties() {
  // write your code here
}

/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern 1-writers.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("exercise 1", () => expectFunctionToLog(logAllWriters, [
  "Hi, my name is Virginia Woolf. I am 59 years old, and work as a writer.",
  "Hi, my name is Zadie Smith. I am 40 years old, and work as a writer.",
  "Hi, my name is Jane Austen. I am 41 years old, and work as a writer.",
  "Hi, my name is Bell Hooks. I am 63 years old, and work as a writer.",
  "Hi, my name is Yukiko Motoya. I am 49 years old, and work as a writer."
]));

test("exercise 2", () => expectFunctionToLog(logDeadWritersInTheirForties, [
  "Writer Jane Austen died at 41 years old."
]));

test("exercise 3", () => expectFunctionToLog(logAliveWritersInTheirForties, [
  "Hi, my name is Zadie Smith. I am 40 years old.",
  "Hi, my name is Yukiko Motoya. I am 49 years old."
]));

function expectFunctionToLog(f, values) {
    const consoleLogSpy = jest.spyOn(console, 'log');
    f();
    expect(consoleLogSpy).toBeCalledTimes(values.length);
    values.forEach((value, i) => {
      expect(consoleLogSpy).nthCalledWith(i+1, value);
    });
    consoleLogSpy.mockRestore();
};
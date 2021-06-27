/**

Get Sum of People's Budget

Create the function that takes an array with objects and returns the sum of people's budgets.

For example:

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
])

Should give return the answer of 62600.

**/

function getBudgets(peopleArray) {
}

/* ======= TESTS - DO MODIFY (!!!) =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 9-budgets.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("No Budgets", () => {
  expect(getBudgets([])).toEqual(0);
}); 

test("Test 1", () => {
  expect(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])).toEqual(65700);
});

test("Test 2", () => {
  expect(getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ])).toEqual(62600);
});

test("Test 3", () => {
  expect(getBudgets([
    { name: "John", age: 21, budget: 19401 },
    { name: "Steve", age: 32, budget: 12321 },
    { name: "Martin", age: 16, budget: 1204 },
  ])).toEqual(32926);
});

test("Test 4", () => {
  expect(getBudgets([
    { name: "John", age: 21, budget: 10234 },
    { name: "Steve", age: 32, budget: 21754 },
    { name: "Martin", age: 16, budget: 4935 },
  ])).toEqual(36923);
});

test("Huge List", () => {
  expect(getBudgets([
    {
      name: "Reba",
      age: 73,
      budget: 9657,
    },
    {
      name: "Tessa",
      age: 77,
      budget: 2585,
    },
    {
      name: "Margery",
      age: 48,
      budget: 2269,
    },
    {
      name: "Manuela",
      age: 75,
      budget: 4761,
    },
    {
      name: "Sanders",
      age: 52,
      budget: 5652,
    },
    {
      name: "Bettye",
      age: 66,
      budget: 8335,
    },
    {
      name: "Walton",
      age: 31,
      budget: 7092,
    },
    {
      name: "Karyn",
      age: 41,
      budget: 8962,
    },
    {
      name: "Nora",
      age: 31,
      budget: 8354,
    },
    {
      name: "Barlow",
      age: 77,
      budget: 3438,
    },
    {
      name: "Iva",
      age: 61,
      budget: 4806,
    },
    {
      name: "Marcia",
      age: 34,
      budget: 10104,
    },
    {
      name: "Russo",
      age: 23,
      budget: 1602,
    },
    {
      name: "Cortez",
      age: 51,
      budget: 4253,
    },
    {
      name: "Zimmerman",
      age: 43,
      budget: 4239,
    },
    {
      name: "Renee",
      age: 75,
      budget: 9077,
    },
    {
      name: "Caroline",
      age: 33,
      budget: 8301,
    },
    {
      name: "Grant",
      age: 49,
      budget: 9942,
    },
    {
      name: "Tammi",
      age: 58,
      budget: 7447,
    },
    {
      name: "Mayra",
      age: 73,
      budget: 3500,
    },
    {
      name: "Goodwin",
      age: 28,
      budget: 4223,
    },
    {
      name: "Cathryn",
      age: 57,
      budget: 2517,
    },
    {
      name: "Stuart",
      age: 20,
      budget: 8208,
    },
    {
      name: "Lina",
      age: 45,
      budget: 5131,
    },
    {
      name: "Hampton",
      age: 62,
      budget: 3423,
    },
    {
      name: "Coleen",
      age: 49,
      budget: 5377,
    },
    {
      name: "Jamie",
      age: 56,
      budget: 8361,
    },
    {
      name: "Brigitte",
      age: 77,
      budget: 1460,
    },
    {
      name: "Colette",
      age: 41,
      budget: 3419,
    },
    {
      name: "Susan",
      age: 45,
      budget: 8097,
    },
    {
      name: "Shaffer",
      age: 75,
      budget: 3883,
    },
    {
      name: "Clements",
      age: 74,
      budget: 3141,
    },
    {
      name: "Cobb",
      age: 58,
      budget: 6058,
    },
    {
      name: "Ochoa",
      age: 25,
      budget: 7916,
    },
    {
      name: "Anita",
      age: 72,
      budget: 2678,
    },
    {
      name: "Carolyn",
      age: 51,
      budget: 2781,
    },
    {
      name: "Beard",
      age: 72,
      budget: 9433,
    },
    {
      name: "Bender",
      age: 26,
      budget: 8824,
    },
    {
      name: "Rich",
      age: 37,
      budget: 3312,
    },
    {
      name: "Angelina",
      age: 48,
      budget: 8997,
    },
    {
      name: "Cecelia",
      age: 30,
      budget: 5044,
    },
    {
      name: "Nixon",
      age: 59,
      budget: 5178,
    },
    {
      name: "Alana",
      age: 30,
      budget: 7976,
    },
    {
      name: "Mcconnell",
      age: 54,
      budget: 2419,
    },
    {
      name: "Cunningham",
      age: 21,
      budget: 5659,
    },
    {
      name: "Concetta",
      age: 58,
      budget: 8269,
    },
    {
      name: "Natalie",
      age: 27,
      budget: 3078,
    },
    {
      name: "Lee",
      age: 46,
      budget: 3743,
    },
    {
      name: "Monica",
      age: 18,
      budget: 8701,
    },
    {
      name: "Lauri",
      age: 61,
      budget: 7849,
    },
  ])).toEqual(289531);
});

/**

The Frugal Gentleman

Atticus has been invited to a dinner party, and he decides to purchase a meal to share with he party 
Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. 

In any selection of two or more meals, he will always buy the second-cheapest. 
If there is no choice, then he will buy the only meal given to him. 
If there are no meals available, then he will return null

Given an array of Meal objects, write a function that returns the name of the Meal he will buy for the party. If given an array of only one, Atticus will buy that Meal.

let setOne = [
  { name: "Turkey", price: 8.99 },
  { name: "Chicken", price: 13.99 },
  { name: "Lobster", price: 10.99 }
]
chosenMeal(setOne)

Should give the answer "Lobster"

If given an empty array:

let emptyArray = []
chosenMeal(emptyArray)

Should give the answer "Nothing :("

**/

function chooseMeal(mealArray) {
}

/* ======= TESTS - DO MODIFY (!!!) =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 10-cheap-diner.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("Meal to select is last", () => {
  expect(chooseMeal([
    { name: "Dunkin' Donuts", price: 8.99 },
    { name: "Captain D's", price: 13.99 },
    { name: "Moe's Southwest Grill", price: 10.99 },
  ])).toEqual("Moe's Southwest Grill");
});

test("Meal to select is first", () => {
  expect(chooseMeal([
    { name: "Moe's Southwest Grill", price: 10.99 },
    { name: "Dunkin' Donuts", price: 8.99 },
    { name: "Captain D's", price: 13.99 },
  ])).toEqual("Moe's Southwest Grill");
});

test("Meal to select is also most expensive", () => {
  expect(chooseMeal([
    { name: "Burger King", price: 8.99 },
    { name: "Wingstop", price: 9.99 },
  ])).toEqual("Wingstop");
});

test("Only one meal to select", () => { 
  expect(chooseMeal([{ name: "Subway", price: 8.99 }])).toEqual("Subway");
});

test("No meals to select", () => {
  expect(chooseMeal([])).toEqual("Nothing :(");
});

test("Meal to select is second cheapest, not second most expensive", () => {
  expect(chooseMeal([
    { name: "Church's Chicken", price: 8.99 },
    { name: "Smoothie King", price: 109.99 },
    { name: "Jason's Deli", price: 22.77 },
    { name: "Jamba Juice", price: 38.44 },
  ])).toEqual("Jason's Deli");
});

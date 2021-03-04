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

If given an empty array, return null.

let emptyArray = []
chosenMeal(emptyArray)

Should give the answer "Nothing :("

**/

function chooseMeal(mealArray) {
   if (mealArray.length === 0) {
    return "Nothing :(";
  }
  else if (mealArray.length === 1) {
    return mealArray[0]["name"];
  }
  else {
    let priceVal = mealArray.map((foodPrice) => foodPrice.price);
    let sortedPriceVal = [...priceVal].sort((firstPrice, secondPrice) => firstPrice - secondPrice);
    let indexOfSecondCheapest = priceVal.indexOf(sortedPriceVal[1]);
    return mealArray[indexOfSecondCheapest].name;
  }
}// Write your code here


/*
==================================================
====== TESTS - DO NOT MODIFY BELOW THIS LINE =====
==================================================
*/
const util = require("util");

function test(test_name, actual, expected) {
  let status;

  if (actual === expected) {
    status = `PASSED! You got the correct answer of ${util.inspect(expected)}`;
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "Test 1",
  chooseMeal([
    { name: "Dunkin' Donuts", price: 8.99 },
    { name: "Captain D's", price: 13.99 },
    { name: "Moe's Southwest Grill", price: 10.99 },
  ]),
  "Moe's Southwest Grill"
);

test(
  "Test 2",
  chooseMeal([
    { name: "Burger King", price: 8.99 },
    { name: "Wingstop", price: 9.99 },
  ]),
  "Wingstop"
);

test("Test 3", chooseMeal([{ name: "Subway", price: 8.99 }]), "Subway");

test("Test 4", chooseMeal([]), "Nothing :(");

test(
  "Test 5",
  chooseMeal([
    { name: "Church's Chicken", price: 8.99 },
    { name: "Smoothie King", price: 109.99 },
    { name: "Jamba Juice", price: 38.44 },
    { name: "Jason's Deli", price: 22.77 },
  ]),
  "Jason's Deli"
);

test(
  "Test 6",
  chooseMeal([{ name: "Church's Chicken", price: 8.99 }]),
  "Church's Chicken"
);

/*
As you you can have an Array of Objects, you can also store Arrays in Objects.

In this exercise, you'll practice:
 - How to loop through the properties (keys) of an Object and read its values.
 - How to access an Array stored inside an Object.
 - How to access a specific property of an object and set it.

You're going shopping, and you need a shopping list. You've already created your weekly meal plan
that contains the missing ingredients for your menus. It is stored in the "weeklyMealPlan" object.
Complete the exercises below.
*/

// Here is your
let weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: [],
};

/*
Exercise 1:
  Loop through the weekly meal plan object to gather weekly ingredients into the weeklyGroceriesToBuy array.
  The weeklyGroceriesToBuy array shouldn't contain any repeating items.
*/
// Gather all week item names into this array
let weeklyGroceriesToBuy = [];

/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weekendGroceriesToBuy array.
*/
// Gather weekend item names into this array
let weekendGroceriesToBuy = [];

/*
Exercise 3:
  Loop through your weekly meal plan:
    - count how many ingredients you should buy each day
    - and update the corresponding properties of numberOfItemsPerWeek object.
*/
// Gather daily item counts into this object
let numberOfItemsPerWeek = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  friday: 0,
  saturday: 0,
  sunday: 0,
};

/*
==================================================
====== TESTS - DO NOT MODIFY BELOW THIS LINE =====
==================================================
*/
const util = require("util");

function test(testName, actual) {
  let passed = true;

  let allExpectedItems = [].concat(...Object.values(weeklyMealPlan));
  if (testName === "weekendGroceriesToBuy") {
    allExpectedItems = [].concat(weeklyMealPlan.saturday, weeklyMealPlan.sunday)
  }

  for (const item of allExpectedItems) {
    if (!actual.includes(item)) {
      passed = false;
      console.log(`FAILED: \`${testName}\` should have contained ${util.inspect(item)} but it did not - it was ${util.inspect(actual)}`);
    } else if (actual.indexOf(item) !== actual.lastIndexOf(item)) {
      passed = false;
      console.log(`FAILED: \`${testName}\` should only have contained ${util.inspect(item)} once but it appeared multiple times in ${util.inspect(actual)}`);
    }
  }

  if (passed) {
    console.log(`PASSED: ${testName} is correct!`);
  }
}

test("weeklyGroceriesToBuy", weeklyGroceriesToBuy)
test("weekendGroceriesToBuy", weekendGroceriesToBuy)

let expectedNumberOfItemsPerWeek = {
  monday: 5,
  tuesday: 6,
  wednesday: 4,
  thursday: 4,
  friday: 5,
  saturday: 4,
  sunday: 0,
};

if (util.isDeepStrictEqual(expectedNumberOfItemsPerWeek, numberOfItemsPerWeek)) {
  console.log("PASSED: numberOfItemsPerWeek is correct");
} else {
  console.log(`FAILED: expected \`numberOfItemsPerWeek\` to be ${util.inspect(expectedNumberOfItemsPerWeek)} but it was ${util.inspect(numberOfItemsPerWeek)}`);
}

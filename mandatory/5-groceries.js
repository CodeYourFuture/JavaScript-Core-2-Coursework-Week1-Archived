/****************************************************************************************

In this exercise, you'll practice:
 - How to loop through the properties (keys) of an Object and read its values.
 - How to access an Array stored inside an Object.
 - How to access a specific property of an object and set it.

You're going shopping and you need a shopping list. 
You've already created your weekly meal plan which 
contains the missing ingredients for your menu. 
This is stored in the "weeklyMealPlan" object.

*****************************************************************************************/

let weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Bananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: [],
};

/**************************************************************************************
Exercise 1:

Loop through the weekly meal plan object to gather weekly ingredients 
into the weeklyGroceriesToBuy array. The weekly GroceriesToBuy array 
shouldn't contain any repeating items.

****************************************************************************************/

let weeklyGroceriesToBuy = [];

//return array of values (nested array)
Object.values(weeklyMealPlan).forEach((ingredientsForADay) => { //for each value set
  ingredientsForADay.forEach((ingredient) => { //for each ingredient
    if (!weeklyGroceriesToBuy.includes(ingredient)) weeklyGroceriesToBuy.push(ingredient);
  }); //if it doesn't include ingredient (already) push it to new array.
});
console.log('weeklyGroceriesToBuy: ', weeklyGroceriesToBuy);


/****************************************************************************************
Exercise 2:

Loop through your list again, but now only collect the 
weekend items into the weekendGroceriesToBuy array.

******************************************************************************************/

let weekendGroceriesToBuy = [];

//turn keys & values into array
Object.entries(weeklyMealPlan).forEach((keyValuePair) => {
  const day = keyValuePair[0]; //grab day
  const ingredientsForADay = keyValuePair[1]; //grab ingredients 
  if (day === "saturday" || day === "sunday") {
    weekendGroceriesToBuy = weekendGroceriesToBuy.concat(ingredientsForADay);
  }
});

console.log("weekendGroceriesToBuy: ", weekendGroceriesToBuy);

/***************************************************************************************
//REFERENCE  

Object.entries will evaluate each property of the object as an array of entries:
const person = { name: 'Barny', age: 22 };
Object.entries(person) = 

[
  ['name', 'Barny'],
  ['age', 22],
];

Each inner array stores a key-value pair from the original object. 
Object.entries(weeklyMealPlan);
will evaluate to

[
  ['monday', ['Cheese', 'Eggs', 'Tomato', 'Paprika', 'Leek']],
  ['tuesday', ['Wrap', 'Tuna', 'Canned beans', 'Cheese', 'Carrot', 'Aubergine']],
  ['wednesday', ['Orange Juice', 'Apple', 'Bananas', 'Black tea']],
  ['thursday', ['Lamb', 'Salt', 'Bulgur', 'Potato']],
  ['friday', ['Rice milk', 'Blueberries', 'Porridge', 'Banana', 'Cinnamon']],
  ['saturday', ['Olive oil', 'Potato', 'Salmon', 'Asparagus']],
  ['sunday', []],
];

We can then use forEach over this array of arrays and access the day of week and 
the ingredients for a given day:

Object.entries(weeklyMealPlan).forEach((keyValuePair) => {
  const day = keyValuePair[0];
  const ingredientsForADay = keyValuePair[1];
});

keyValuePair will be assigned to
['monday', ['Cheese', 'Eggs', 'Tomato', 'Paprika', 'Leek']];

*****************************************************************************************/

/****************************************************************************************
Exercise 3:

Loop through your weekly meal plan:
  - count how many ingredients you should buy each day
  - and update the corresponding properties of numberOfItemsPerWeek object.

*****************************************************************************************/

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

Object.entries(weeklyMealPlan).forEach(([day, ingredientsForADay]) => {
  numberOfItemsPerWeek[day] = ingredientsForADay.length;
});

/****************************************************************************************
NOTES: 

Is [day] accessing and updating the objects values? I don't get how this part is working.  

*****************************************************************************************/

/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern 5-groceries.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("Exercise 1 - Weekly groceries to buy contains correct items", () => {
  const expectedWeeklyGroceriesToBuy = [
    "Cheese",
    "Eggs",
    "Tomato",
    "Paprika",
    "Leek",
    "Wrap",
    "Tuna",
    "Canned beans",
    "Carrot",
    "Aubergine",
    "Orange Juice",
    "Apple",
    "Ananas",
    "Black tea",
    "Lamb",
    "Salt",
    "Bulgur",
    "Potato",
    "Rice milk",
    "Blueberries",
    "Porridge",
    "Banana",
    "Cinnamon",
    "Olive oil",
    "Salmon",
    "Asparagus",
  ];
  expect(weeklyGroceriesToBuy).toIncludeSameMembers(
    expectedWeeklyGroceriesToBuy
  );
});

test("Exercise 2 - Weekend groceries to buy contains correct items", () => {
  const expectedWeekendGroceriesToBuy = [
    "Olive oil",
    "Potato",
    "Salmon",
    "Asparagus",
  ];
  expect(weekendGroceriesToBuy).toIncludeSameMembers(
    expectedWeekendGroceriesToBuy
  );
});

test("Exercise 3 - Numer of items per week contains the correct counts", () => {
  const expectedNumberOfItemsPerWeek = {
    monday: 5,
    tuesday: 6,
    wednesday: 4,
    thursday: 4,
    friday: 5,
    saturday: 4,
    sunday: 0,
  };
  expect(numberOfItemsPerWeek).toEqual(expectedNumberOfItemsPerWeek);
});

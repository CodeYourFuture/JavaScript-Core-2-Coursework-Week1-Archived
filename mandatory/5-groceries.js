/*
As you can see, you can have an Array of Objects, and you can also store Arrays in Objects.

*********** we already had to do this in exercise 3. **********

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
  wednesday: ["Orange Juice", "Apple", "Bananas", "Black tea"],
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

// Push all shopping items into this array, without repeating ingredients. 
let weeklyGroceriesToBuy = [];

/* SOLUTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Object.values(weeklyMealPlan).forEach((ingredientsForADay) => {
  ingredientsForADay.forEach((ingredient) => {
    if (!weeklyGroceriesToBuy.includes(ingredient)) weeklyGroceriesToBuy.push(ingredient);
  });
}); 

console.log('weeklyGroceriesToBuy: ', weeklyGroceriesToBuy);

1) Object.values (weeklyMealPlan) retrieves all the values in the object and returns them as an array, 
resulting in a nested array.
2) .forEach is chained onto Object.values because we want to check each (nested array) for a condition. 
3) .forEach is chained again because we want to check each value (ingredient) in the nested array against 
the whole weeks ingredients list (weeklyGroceriesToBuy), the "!" operator is used because we want to return a 
false matching value and then push it into the array placeholder variable above. 
4) I do not understand the syntax on the line of the if-statement, or why the "!weeklyGroceriesToBuy.includes" 
works when the value of that hasn't been declared already?? I dont get it. 


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

*/

/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weekendGroceriesToBuy array.
*/
// Gather weekend item names into this array
let weekendGroceriesToBuy = [];

/*

SOLUTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let weekendGroceriesToBuy = [];
Object.entries(weeklyMealPlan).forEach((keyValuePair) => {
  const day = keyValuePair[0];
  const ingredientsForADay = keyValuePair[1];
  if (day === 'saturday' || day === 'sunday') {
    weekendGroceriesToBuy = weekendGroceriesToBuy.concat(ingredientsForADay);
  }
});

console.log('weekendGroceriesToBuy: ', weekendGroceriesToBuy); 

In this solution, we're making use of Object.entries.
This will evaluate each property of the object as an array of entries:

const person = { name: 'Barny', age: 22 };

Object.entries(person);

Then we if we call Object.entries we get something like this:

[
  ['name', 'Barny'],
  ['age', 22],
];

Each inner array is an array storing a key-value pair that was in the original object. 
So we can use Object.entries with weeklyMealPlan:

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

and so on, so we can just label these values day and ingredientsForADay,respectively.


NOTES

I didn't know Object.entries was a thing. 


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  

*/

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

SOLUTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Object.entries(weeklyMealPlan).forEach(([day, ingredientsForADay]) => {
  numberOfItemsPerWeek[day] = ingredientsForADay.length;
});

NOTES: 

is [day] accessing and updating the objects values? I don't get how this part is working. 

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  

*/

/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern 5-groceries.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("Exercise 1 - Weekly groceries to buy contains correct items", () => {
  const expectedWeeklyGroceriesToBuy = [
    'Cheese',       'Eggs',
    'Tomato',       'Paprika',
    'Leek',         'Wrap',
    'Tuna',         'Canned beans',
    'Carrot',       'Aubergine',
    'Orange Juice', 'Apple',
    'Ananas',       'Black tea',
    'Lamb',         'Salt',
    'Bulgur',       'Potato',
    'Rice milk',    'Blueberries',
    'Porridge',     'Banana',
    'Cinnamon',     'Olive oil',
    'Salmon',       'Asparagus'
  ];
  expect(weeklyGroceriesToBuy).toIncludeSameMembers(expectedWeeklyGroceriesToBuy);
});

test("Exercise 2 - Weekend groceries to buy contains correct items", () => {
  const expectedWeekendGroceriesToBuy = ["Olive oil", "Potato", "Salmon", "Asparagus"];
  expect(weekendGroceriesToBuy).toIncludeSameMembers(expectedWeekendGroceriesToBuy);
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
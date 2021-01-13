/*
As you you can have an Array of Objects, you can also store Arrays in Objects.

In this exercise, you'll practice:
 - How to loop through the properties (keys) of an Object and read its values.
 - How to access an Array stored inside an Object.
 - How to access a specific property of an array and set it.

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
  Then use console.log() to print out the list.
*/
// Gather all week item names into this array
let weeklyGroceriesToBuy = [];

// long method
// for (i = 0; i < Object.keys(weeklyMealPlan).length; i++) {
//   weeklyGroceriesToBuy += Object.values(weeklyMealPlan)[i];
// }

for (key in weeklyMealPlan) {
  weeklyGroceriesToBuy += weeklyMealPlan[key];
}

console.log(`Exercise 1\n` + weeklyGroceriesToBuy);

/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weekendGroceriesToBuy array.
  Then use console.log() to print out the list.
*/
// Gather weekend item names into this array

/* filter method */
let weekendGroceriesToBuy = Object.keys(weeklyMealPlan).filter(key =>
  (key === 'saturday' || key === 'sunday')).map(key => weeklyMealPlan[key]);

/* long method */
// let weekendGroceriesToBuy = [];
// for (i = 0; i < Object.keys(weeklyMealPlan).length; i++) {
//   if (Object.keys(weeklyMealPlan)[i] === 'saturday' || Object.keys(weeklyMealPlan)[i] === 'sunday') {
//     weekendGroceriesToBuy += Object.values(weeklyMealPlan)[i];
//   };
// };

/* for loop method */
// for (key in weeklyMealPlan) {
//   if (key === 'saturday' || key === 'sunday') {
//     weekendGroceriesToBuy += weeklyMealPlan[key];
//   };
// };

console.log(`\nExercise 2\n` + weekendGroceriesToBuy);

/*
Exercise 3:
  Loop through your weekly meal plan:
    - count how many ingredients you should buy each day
    - and update the corresponding properties of numberOfItemsPerWeek object.
  Finally use console.log() to print out the Object.
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

// console.log(Object.entries(weeklyMealPlan));
// let number = weeklyMealPlan.monday.length;
// console.log(number);

for (key in weeklyMealPlan) {
  numberOfItemsPerWeek[key] = weeklyMealPlan[key].length;
};

console.log(numberOfItemsPerWeek);
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

let weeklyMealPlan = {
  monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
  tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
  wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
  thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
  friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
  saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
  sunday: [],
};

// console.log(Object.keys(weeklyMealPlan))
//console.log(Object.values(weeklyMealPlan))
/*
Exercise 1:
  Loop through the weekly meal plan object to gather weekly ingredients into the weeklyGroceriesToBuy array.
  The weeklyGroceriesToBuy array shouldn't contain any repeating items.
  Then use console.log() to print out the list.
*/
// Gather all week item names into this array
// for (const property in weeklyMealPlan) {
//   weeklyMealPlan.map(item=>item.monday)
//   console.log(weeklyMealPlan[property])
// }

const slicedWeekly = Object.fromEntries(
    Object.entries(weeklyMealPlan).slice(0, 5)
)

let sortedGrocery = Object.values(slicedWeekly).flat(1) //.flat() merges arrays 
let weeklyGroceriesToBuy = [...new Set(sortedGrocery)]; //set removes duplicates within an array
console.log(weeklyGroceriesToBuy)


/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weekendGroceriesToBuy array.
  Then use console.log() to print out the list.
*/
// Gather weekend item names into this array
const slicedWeekend = Object.fromEntries(
    Object.entries(weeklyMealPlan).slice(5)
)

let weekendGroceriesToBuy = Object.values(slicedWeekend).flat(1); //.flat() merges arrays 
console.log(weekendGroceriesToBuy)

/*
Exercise 3:
  Loop through your weekly meal plan:
    - count how many ingredients you should buy each day
    - and update the corresponding properties of numberOfItemsPerWeek object.
  Finally use console.log() to print out the Object.
*/
// Gather daily item counts into this object
let numberOfItemsPerWeek = {
  monday: weeklyMealPlan.monday.length,
  tuesday: weeklyMealPlan.tuesday.length,
  wednesday: weeklyMealPlan.wednesday.length,
  thursday: weeklyMealPlan.thursday.length,
  friday: weeklyMealPlan.friday.length,
  saturday: weeklyMealPlan.saturday.length,
  sunday: weeklyMealPlan.sunday.length,
};
console.log(numberOfItemsPerWeek)

// let groWeek = weeklyGroceriesToBuy.length;

// for (let i=0; i<groWeek; i++){
//   let items = weeklyGroceriesToBuy[i].length;
//     console.log(i, items)
//     for (let n=0; n<items; n++){
//     console.log(weeklyGroceriesToBuy[i][n])
//   }
// }

//  for (let property in weeklyMealPlan){
//    console.log()
//  }

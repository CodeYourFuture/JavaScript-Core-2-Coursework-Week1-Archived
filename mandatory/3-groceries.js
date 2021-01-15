/*
As you you can have an Array of Objects, you can also store Arrays in Objects.

In this exercise, you'll practice:
 - How to loop through the properties (keys) of an Object and read its values.
 - How to access Array stored inside Object.
 - How to access to a specific property of an array and set it.

You're going shopping, and you need a shopping list. 
You've already created your weekly meal plan
that contains the missing ingredients to your menus. 
It is stored in the "weeklyMealPlan" object.
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
  Loop through the weekly meal plan object to gather weakly ingredients into the 
  weeklyGroceriesToBuy array.
  Then use console.log() to print out the list.
*/

/**
  create a variable that contains an array  

 */
// |__m__| |__t__||_w___| |__th__||__f__||_sa___| |_su___|  


// Gather all week item names into this array


//let weeklyGroceriesToBuy = Object.values(weeklyMealPlan);
let weeklyGroceriesToBuy = []
let gatherGroceryItems = Object.values(weeklyMealPlan)
//console.log(`test`,gatherGroceryItems);

function foodItemListIndividualArr (arr) {
  for (let i = 0; i < arr.length; i++) {
   // console.log(`test`,arr[i])
    weeklyGroceriesToBuy.push(arr[i]);
    //console.log(`test2`,weeklyGroceriesToBuy) 
  }
}

function foodItemListWholeArr() {
  for (let i = 0; i < gatherGroceryItems.length; i++) {
    foodItemListIndividualArr(gatherGroceryItems[i]);
  }
};

foodItemListWholeArr()
console.log(weeklyGroceriesToBuy)
//console.log(...weeklyGroceriesToBuy)

// ...gatherGroceryItem

/*
Exercise 2:
  Loop through your list again, but now only collect 
  the weekend items into the weeklyGroceriesToBuy array.
  Then use console.log() to print out the list.
*/
let weeklyGroceriesToBuy2 = [];
//let gatherGroceryItems2 = Object.values(weeklyMealPlan.saturday);

for (let key in weeklyMealPlan) {
  if (key == "saturday" || key == "sunday") {
    weeklyGroceriesToBuy2.push(weeklyMealPlan[key])
    //console.log(weeklyGroceriesToBuy2)
  } 
}
console.log(weeklyGroceriesToBuy2)



/*
Exercise 3:
  Loop through your weekly meal plan:
    - count how many ingredients you should buy per each day
    - and update the corresponding properties of numberOfItemsPerWeak object.
  Finally use console.log() to print out the Object.
*/
// Gather weekend item names into this object

let numberOfItemsPerWeak = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  friday: 0,
  saturday: 0,
  sunday: 0,
};

// every function should have a verb
function countNumberOfFoodItemsPerDay(weeklyMealList) {
  Object.keys(weeklyMealList).forEach(key => {
    numberOfItemsPerWeak[key] = weeklyMealList[key].length;
    
  });
  
};

/// redo this exercise as a for loop 

// Object.keys(obj).forEach((key) => {
//   console.log(key, obj[key]);
// });

countNumberOfFoodItemsPerDay(weeklyMealPlan)
console.log(numberOfItemsPerWeak);
// let weeklyMealPlan = {
//   monday: ["Cheese", "Eggs", "Tomato", "Paprika", "Leek"],
//   tuesday: ["Wrap", "Tuna", "Canned beans", "Cheese", "Carrot", "Aubergine"],
//   wednesday: ["Orange Juice", "Apple", "Ananas", "Black tea"],
//   thursday: ["Lamb", "Salt", "Bulgur", "Potato"],
//   friday: ["Rice milk", "Blueberries", "Porridge", "Banana", "Cinnamon"],
//   saturday: ["Olive oil", "Potato", "Salmon", "Asparagus"],
//   sunday: [],
// };
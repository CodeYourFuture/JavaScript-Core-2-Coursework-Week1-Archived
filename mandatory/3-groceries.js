/*
As you you can have an Array of Objects, you can also store Arrays in Objects.

In this exercise, you'll practice:
 - How to loop through the properties (keys) of an Object and read its values.
 - How to access Array stored inside Object.
 - How to access to a specific property of an array and set it.

You're going shopping, and you need a shopping list. You've already created your weekly meal plan
that contains the missing ingredients to your menus. It is stored in the "weeklyMealPlan" object.
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
  Loop through the weekly meal plan object to gather weakly ingredients into the weeklyGroceriesToBuy array.
  Then use console.log() to print out the list.
*/
// Gather all week item names into this array
let weeklyGroceriesToBuy = [];

/************************** SOLUTION *****************************/
for (let day in weeklyMealPlan) {
  if (weeklyMealPlan[day].length > 0){
    let ingredients = Object.values(weeklyMealPlan[day]);
    for (let i = 0; i < ingredients.length; i++){
      if (!weeklyGroceriesToBuy.includes(ingredients[i])) {
        weeklyGroceriesToBuy.push(ingredients[i]);
      }
    }
  }
  
}
console.log(weeklyGroceriesToBuy);
/************************** END SOLUTION *****************************/

/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weeklyGroceriesToBuy array.
  Then use console.log() to print out the list.
*/
// Gather weekend item names into this array
let weekendGroceriesToBuy = [];

/************************** SOLUTION *****************************/
let days = Object.keys(weeklyMealPlan).filter(day => (day === "saturday" || day === "sunday"));
for (let i = 0; i < days.length; i++){
  let ingredients = weeklyMealPlan[days[i]];
  if (ingredients.length > 0) { // check if we have ingredients to consider
    for (let j = 0; j < ingredients.length; j++){
      let ingredient = ingredients[j];
      if (!weekendGroceriesToBuy.includes(ingredient)) {
        weekendGroceriesToBuy.push(ingredient);
      }
    }
  }
}  
console.log(weekendGroceriesToBuy);
/************************** END SOLUTION *****************************/

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

/************************** SOLUTION *****************************/
// declare and assign values to few arrays
let daysOfInterest = Object.keys(numberOfItemsPerWeak); // get the days listed in numberOfItemsPerWeak
let daysInWeeklyMealPlan = Object.keys(weeklyMealPlan); // get the days listed in weeklyMealPlan
let affectedDays = daysOfInterest.filter((day) =>
  daysInWeeklyMealPlan.includes(day)
); // days listed in both numberOfItemsPerWeak and weeklyMealPlan

if (affectedDays.length > 0) {  // if the affectedDays array is not empty, i.e. if there are days to be considered
  let ingredientsPerDay = affectedDays.map(day => [day, weeklyMealPlan[day].length]); // collect number of ingredients in each day
  for (let i = 0; i < ingredientsPerDay.length; i++){    
    let day = ingredientsPerDay[i][0];
    numberOfItemsPerWeak[day] = ingredientsPerDay[i][1]; // update each value in numberOfItemsPerWeak
  }
}
console.log(numberOfItemsPerWeak);
/************************** END SOLUTION *****************************/
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
const days = Object.keys( weeklyMealPlan );
 days.forEach( (day) =>
{
  if ( weeklyMealPlan[day].length > 0 )
  {
    weeklyMealPlan[day].forEach( (ingredient) =>
    {
      weeklyGroceriesToBuy.push(ingredient)
    })
  }
} );

/*function getAllShoppingList( dayList )
{
  let shoppingList = []
  if ( weeklyMealPlan[dayList].length > 0 )
  {
    weeklyMealPlan[dayList].forEach( (item) =>
    {
      shoppingList.push( item )
    });
  }
  return shoppingList;
}*/
console.log( weeklyGroceriesToBuy );

/*function listItem( ingredient )
{
  if ( !weeklyGroceriesToBuy.includes( ingredient ) )
  {
    weeklyGroceriesToBuy.push( ingredient);
  }
    
}
console.log( weeklyGroceriesToBuy );*/

/*
Exercise 2:
  Loop through your list again, but now only collect the weekend items into the weekendGroceriesToBuy array.
  Then use console.log() to print out the list.
*/
// Gather weekend item names into this array
let weekendGroceriesToBuy = [];
const weekEndDays = ["saturday", "sunday"]
 weekEndDays.forEach( (day) =>
{
  if ( weeklyMealPlan[day].length > 0 )
  {
    weeklyMealPlan[day].forEach( (ingredient) =>
    {
      weekendGroceriesToBuy.push(ingredient)
    })
  }
} );

console.log( weekendGroceriesToBuy );
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
for ( day in weeklyMealPlan )
{
  numberOfItemsPerWeek[day] = weeklyMealPlan[day].length
}


console.log( numberOfItemsPerWeek );
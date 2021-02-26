/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- Title (a string), 
- Servings (a number), and 
- Ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 recipes

**/

let recipes = [{
   Title: "Creamy Pasta",
    Servings: 4,
    Ingredients: ["Pasta", "Butter", "Milk", "Flour", "Cheese"]},
    {
   Title: "Pancakes",
    Servings: 2,
    Ingredients: ["Flour", "Eggs", "Sugar", "Vanilla Essence", "Milk", "Syrup" ]},
    {
   Title: "Dalogna Coffee",
    Servings: 1,
    Ingredients: ["Coffee", "Milk", "Sugar", "Vanilla Essence"]},
    {
   Title: "African Salad",
    Servings: 4,
    Ingredients: ["Umphokoqo/Maize meal", "Maas/Sour Cream"]},
    {
   Title: "Garden salad",
    Servings: 2,
    Ingredients: ["Lettuce", "Cucumber", "Cherry Tomatoes", "Feta Cheese", "Olives", "Olive oil"]},

];

recipes.forEach(item => {
    console.log(item.Title);
    console.log(item.Servings);
    recipes.Ingredients.forEach(i => {
     console.log(i);   
    })
    
})

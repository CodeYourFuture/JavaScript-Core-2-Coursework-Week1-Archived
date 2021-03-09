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


/*
Creamy Pasta
4
/Users/admin/Desktop/GitHub/JS-1/JS-2/JavaScript-Core-2-Coursework-Week1/mandatory/5-recipes.js:53
    recipes.Ingredients.forEach(i => {
                        ^

TypeError: Cannot read property 'forEach' of undefined
    at /Users/admin/Desktop/GitHub/JS-1/JS-2/JavaScript-Core-2-Coursework-Week1/mandatory/5-recipes.js:53:25
    at Array.forEach (<anonymous>)
    at Object.<anonymous> (/Users/admin/Desktop/GitHub/JS-1/JS-2/JavaScript-Core-2-Coursework-Week1/mandatory/5-recipes.js:50:9)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/
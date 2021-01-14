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

const { title } = require("process")



let recipes = {
    title :"jollofrice",
    servings :4,
    Ingredients :["rice","scotch bonnets","chili peppers"],

    

    title :"okra soup",
    servings :2,
    Ingredients:["okra","spinach","crayfish"],
    

    title :"pancakes",
    servings :3,
    Ingredients :["raising flour","milk","eggs"],

    title:"fish and chips",
    servings :5,
    Ingredients :["potatoes","fish","vegetable oil"],


    title : "spaghetti bolognese",
    servings :6,
    Ingredients :["spaghetti","tomatoes","beef stock","garlic"]

};
console.log(recipes.title);
// console.log( "servings:" +recipes.servings);
// console.log(recipes.Ingredients);
// for(let i=0; i< recipes.length;i++){
// console.log(recipes);
// }



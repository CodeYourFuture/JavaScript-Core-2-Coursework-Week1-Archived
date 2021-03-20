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

let recipes = [
    {
        Title: "scrambled eggs",
    Servings: 2,
    Ingredients: ["eggs", "bread", "butter"]
},
    {
    Title: "boeber",
    Servings: 4, 
    Ingredients: ["Vermicelli", "Milk", "Cinnamon", "Sugar"]},  
];
for (let recipe of recipes){
console.log(recipe.Title);
}
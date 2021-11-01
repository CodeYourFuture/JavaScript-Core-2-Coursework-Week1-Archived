/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- title (a string), 
- servings (a number), and 
- ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 recipes

**/

let recipes = {
    title: "Apple Pie",
    servings: 3,
    ingredients: [
        "Granulated Sugar",
        "Thinly Sliced Apples",
        "Butter",
        "Cinnamon",
        "Double Flake Pastry",
        "Chubby Sparkling Sugar",
    ],
};

console.log(recipe.title);
console.log(`Serves ${recipe.servings}`);
console.log("Ingredients:");

recipe.ingredients.forEach(function (ingredient) {
    console.log(ingredient);
});


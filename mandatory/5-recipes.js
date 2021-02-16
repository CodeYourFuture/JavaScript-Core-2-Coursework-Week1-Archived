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
    title: "meat loaf",
    servings: 4,
    ingredients: ["500gr mince", "2 eggs", "bread-crumb", "2 onions"],
  },

  {
    title: "tomato soup",
    servings: 4,
    ingredients: ["500gr tomato", "butter", "dried-mint"],
  },
  {
    title: "meat loaf",
    servings: 4,
    ingredients: ["500gr mince", "2 eggs", "bread-crumb", "2 onions"],
  },
  {
    title: "meat loaf",
    servings: 4,
    ingredients: ["500gr mince", "2 eggs", "bread-crumb", "2 onions"],
  },
  {
    title: "meat loaf",
    servings: 4,
    ingredients: ["500gr mince", "2 eggs", "bread-crumb", "2 onions"],
  },
];
console.log(recipes.map((recipe) => recipe.title).join());
// console.log(`Serves: ${recipes.servings}`);
// console.log(`Ingredients: ${"\n"}${recipes.ingredients.join("\n")}`);

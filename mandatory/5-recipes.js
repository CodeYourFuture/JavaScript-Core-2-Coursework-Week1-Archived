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
    title: "Mole",
    servings: 2,
    ingredients: ["Cinnemon", "Cumin", "Cocoa"],
  },

  {
    title: "Pizza",
    servings: 4,
    ingredients: ["Cinnemon", "Cumin", "Cocoa"],
  },

  {
    title: "Lasagna",
    servings: 4,
    ingredients: ["Cinnemon", "Cumin", "Cocoa"],
  },

  {
    title: "sandwich",
    servings: 1,
    ingredients: ["Cinnemon", "Cumin", "Cocoa"],
  },

  {
    title: "Fish and chips",
    servings: 2,
    ingredients: ["Cinnemon", "Cumin", "Cocoa"],
  },
];
for (let singleRecipe of recipes) {
  console.log(singleRecipe.title);
  console.log(singleRecipe.servings);
  for(let ingredient of singleRecipe.ingredients) {
  console.log(ingredient);
  }
}

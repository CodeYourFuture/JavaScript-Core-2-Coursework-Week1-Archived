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
  recipeOne: {
    title: "Chicken Pie",
    servings: 4,
    ingredients: ["chicken", "salt", "flower"],
  },

  recipeTwo: {
    title: "Chicken soup",
    servings: 8,
    ingredients: ["chicken", "chicken stock", "rice"],
  },

  recipeThree: {
    title: "Strawberry cheese cake",
    servings: 2,
    ingredients: ["cream", "Strawberry", "Biscuit crumbs", "cake mix"],
  },

  recipeFour: {
    title: "Bean chilli",
    servings: 5,
    ingredients: [
      "Runner Beans",
      "Baked Beans",
      "Kidney Beans",
      "Chilli powder",
    ],
  },

  recipeFive: {
    title: "Beef Stew",
    servings: 7,
    ingredients: ["Diced beef", "Beef stock", "Onions", "water", "Salt"],
  },
};

for (let recipe in recipes) {
  console.log(`${recipes[recipe].title}`);
  console.log(`Serves: ${recipes[recipe].servings}`);
  console.log(`Ingredients:`);

  let ingredientKeys = Object.values(recipes[recipe].ingredients);

  ingredientKeys.forEach((ingredient) => {
    console.log(ingredient);
  });
}

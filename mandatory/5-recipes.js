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
    name: "Mashed potatoes",
    serves: 2,
    ingredients: ["potatoes", "butter", "milk", "pepper"],
  },
  {
    name: "Macaroni mince with cheese",
    serves: 4,
    ingredients: ["macaroni", "cheese", "mince"],
  },
  {
    name: "Pap with T-Bone",
    serves: 5,
    ingredients: ["beef", "mealie-meal", "covo"],
  },
  {
    name: "Fried egg sandwich",
    serves: 2,
    ingredients: ["eggs", "bread", "cheese", "lettuce"],
  },
  {
    name: "Red beans and rice",
    serves: 3,
    ingredients: ["red beans", "rice", "onions", "tomatoes"],
  },
];

recipes.forEach((elem) => {
  console.log(elem.name);
  console.log("Serves" + ": " + elem.serves);
  console.log("Ingridients:");
  elem.ingredients.forEach((val) => {
    console.log(val);
  });
});

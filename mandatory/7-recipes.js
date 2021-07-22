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
  spaghettiBolognese: {
    title: "Spaghetti Bolognese",
    serves: 4,
    ingredients: [
      "mince",
      "tomato puree",
      "peppers",
      "garlic",
      "mushrooms",
      "onions",
    ],
  },
  omelette: {
    title: "Omelette",
    serves: 1,
    ingredients: ["eggs", "ham", "cheese", "mushroom"],
  },
  beansOnToast: {
    title: "Beans On Toast",
    serves: 1,
    ingredients: ["bread", "butter", "beans"],
  },
  shepherdsPie: {
    title: "shepherdsPie",
    serves: 4,
    ingredients: [
      "onion",
      "carrot",
      "celery",
      "carrot",
      "beef stock",
      "onion",
      "tomato puree",
      "peas",
    ],
  },
  cheeseOnToast: {
    title: "Cheese on Toast",
    serves: 1,
    ingredients: ["bread", "cheese", "worcestershire sauce"],
  },
};

for (const recipe in recipes) {
  console.log(`${recipes[recipe].title}`);
  console.log(`Serves: ${recipes[recipe].serves}`);
  console.log("Ingredients:");
  recipes[recipe].ingredients.forEach((item) => console.log(item));
}

// console.log(recipes.title);
// console.log(`Serves: ${recipes.servings}`);
// console.log(`ingredients:\n${recipes.ingredients.join("\n")}`);

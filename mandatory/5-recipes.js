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
    title: "Porridge",
    servings: 2,
    ingredients: ["oats", "milk"],
  },
  {
    title: "Omelet",
    servings: 3,
    ingredients: ["eggs", "oil", "onions", "tomato"],
  },
  {
    title: "Beans",
    servings: 2,
    ingredients: ["canned beans", "Bread"],
  },
  {
    title: "Rice",
    servings: 2,
    ingredients: ["rice", "water", "mixed vegetable", "olive oil"],
  },
  {
    title: "Lentil Soup",
    servings: 2,
    ingredients: [
      "lentils",
      "water",
      "mixed vegetable",
      "oil",
      "garlic",
      "chili",
    ],
  },
  {
    title: "Pizza",
    servings: 2,
    ingredients: ["pizza dough", "salami", "cheese", "toppings"],
  },
];

recipes.forEach((element) => {
  console.log(element.title);
  console.log(`serves: ${element.servings}`);

  console.log("Ingredients:");
  for (var i = 0; i < element.ingredients.length; i++) {
    console.log(`${element.ingredients[i]}`);
  }
});

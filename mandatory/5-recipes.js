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
    title: "sandwich",
    serves: 2,
    ingredients: ["meat", "vegetable", "bread"],
  },
  {
    title: "pizza",
    serves: 5,
    ingredients: ["flour", "cheese", "peperoni", "tomato"],
  },
  {
    title: "salad",
    serves: 3,
    ingredients: ["lettuce", "tomato", "chicken"],
  },
  {
    title: "chips",
    serves: 2,
    ingredients: ["potato", "salt"],
  },
  {
    title: "fish & chips",
    serves: 2,
    ingredients: ["potato", "salt", "fish"],
  },
];

for (let recipe of recipes) {
  console.log(recipe.title);
  console.log(`Serves: ${recipe.serves}`);
  console.log("Ingredients: ");
  for (let ingredient of recipe.ingredients) {
    console.log(ingredient);
  }
  console.log("--------------");
}

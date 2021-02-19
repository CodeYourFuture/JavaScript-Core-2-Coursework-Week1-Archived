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
    title: "Vanilla ice cream",
    serves: 2,
    ingredients: ["double cream", "milk", "sugar", "vanilla pod", "egg yolks"],
  },
  {
    title: "Chocolate ice cream",
    serves: 4,
    ingredients: ["dark chocolate", "sugar", "double cream", "egg yolks"],
  },
  {
    title: "Lemon sorbet",
    serves: 4,
    ingredients: ["lemon juice", "lemon zest", "water", "sugar", "vodka"],
  },
  {
    title: "Mango sorbet",
    serves: 2,
    ingredients: ["ripe mangoes", "sugar", "lime juice", "water"],
  },
  {
    title: "Berry ice cream",
    serves: 3,
    ingredients: [
      "mixture of berries",
      "condensed milk",
      "double cream",
      "lemon zest",
      "lemon juice",
    ],
  },
];

for (let recipe of recipes) {
  console.log(recipe.title);
  console.log(`Serves: ${recipe.serves}`);
  console.log("Ingredients: ");
  for (let ingredient of recipe.ingredients) {
    console.log(ingredient);
  }
  console.log("");
}

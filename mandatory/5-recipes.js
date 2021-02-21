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
    title: "Fish Curry",
    servings: 4,
    ingredients: ["fish", "rice", "potatoes", "pepper", "onion", "kale"],
  },
  {
    title: "Banana Cake",
    servings: 6,
    ingredients: ["eggs", "flour", "butter", "vanilla-extract", "honey"],
  },
  {
    title: "Tiramisu",
    servings: 1,
    ingredients: ["mascarpone", "egg-whites", "biscotti", "cocoa-powder", "wine"],
  },
  {
    title: "Lentil Stew",
    servings: 3,
    ingredients: ["brown-lentils", "potatoes", "chorizo", "garlic"],
  },
  {
    title: "Vegetable Soup",
    servings: 2,
    ingredients: ["lettuce", "kale", "leek", "potato", "garlic", "onion"],
  },
];

// Got help with this

for (item of recipes) {
  console.log(item.title);
  console.log("Serves: " + item.servings);
  console.log("Ingredients: " + item.ingredients);
}

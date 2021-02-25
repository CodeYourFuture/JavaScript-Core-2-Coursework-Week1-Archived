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
    title: "Bread",
    serves: 3,
    ingredients: ["flour", "milk", "eggs"],
  },
  {
    title: "Cake",
    serves: 4,
    ingredients: ["vanilla", "baking powder", "water", "cake flour", "sugar"],
  },
  {
    title: "Chicken stew",
    serves: 2,
    ingredients: ["chicken", "oil", "tomatoes", "onions", "white vinegar"],
  },
  {
    title: "Pap",
    serves: 2,
    ingredients: ["mealie meal", "water", "salt"],
  },
  {
    title: "Porridge",
    serves: 2,
    ingredients: ["peanut butter", "porridge powder", "milk"],
  },
];

for (let recipe of recipes) {
  console.log(recipe.title);
  console.log("Serves:", recipe.serves);
  console.log("Ingredients:");
  recipe.ingredients.forEach((ingredient) => console.log(ingredient));
  console.log("");
}

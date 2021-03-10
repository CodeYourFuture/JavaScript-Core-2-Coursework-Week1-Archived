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

let recipes = {
    title: "King Prawn Stir Fry",
    servings: 2,
    ingredients: ["rice noodles", "prawns", "beansprouts", "bell peppers", "mushrooms", "onions", "stir fry sauce"]
};

console.log(recipes.title);
console.log("Serves:", recipes.servings);
console.log("Ingredients:");
for (let i of recipes.ingredients) {
  console.log(i.toString());
}

let recipe2 = {
  title: "Coconut, Lentil Curry",
  servings: 3,
  ingredients: ["red lentils", "sweet potatoes", "coconut milk", "curry powder", "spinach"]
}
console.log(recipe2.title);
console.log("Serves:", recipe2.servings);
console.log("Ingredients:");
for (let i of recipe2.ingredients) {
  console.log(i.toString());
}

let recipe3 = {
  title: "Honey Baked Salmon",
  servings: 2,
  ingredients: ["salmon", "honey", "butter", "garlic", "seasoning"]
}
console.log(recipe3.title);
console.log("Serves:", recipe3.servings);
console.log("Ingredients:");
for (let i of recipe3.ingredients) {
  console.log(i.toString());
}

let recipe4 = {
  title: "Ratatouille",
  servings: 2,
  ingredients: ["aubergine", "tomatoes", "courgette", "garlic", "mixed herbs"]
}
console.log(recipe4.title);
console.log("Serves:", recipe4.servings);
console.log("Ingredients:");
for (let i of recipe4.ingredients) {
  console.log(i.toString());
}

let recipe5 = {
  title: "Roast Vegetables",
  servings: 4,
  ingredients: ["carrots", "parsnips", "potatoes", "bell peppers", "olive oil"]
}
console.log(recipe5.title);
console.log("Serves:", recipe5.servings);
console.log("Ingredients:");
for (let i of recipe5.ingredients) {
  console.log(i.toString());
}
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

let pastaRecipe = {
    title: "Pasta",
    servings: 8,
    ingredients: ["Pasta", "mix-vegetables", "salt", "mushrooms"]
};

console.log(
  `${pastaRecipe.title}\nServes: ${
    pastaRecipe.servings
  }\nIngredients:\n${pastaRecipe.ingredients.map((x) => x).join("\n")}\n`
);


let spinachRecipe = {
  title: "Spinach",
  servings: 4,
  ingredients: ["Spinach", "oil", "cube", "onions", "garlic"],
};

console.log(
  `${spinachRecipe.title}\nServes: ${
    spinachRecipe.servings
  }\nIngredients:\n${spinachRecipe.ingredients.map((x) => x).join("\n")}\n`
);



let plantainRecipe = {
  title: "Plantain",
  servings: 3,
  ingredients: ["Plantain", "oil", "salt"],
};

console.log(
  `${plantainRecipe.title}\nServes: ${
    plantainRecipe.servings
  }\nIngredients:\n${plantainRecipe.ingredients.map((x) => x).join("\n")}\n`
);



let fishPieRecipe = {
  title: "Fish Pie",
  servings: 10,
  ingredients: ["Salmon", "Potatoes", "white pepper", "cinnamon"],
};

console.log(
  `${fishPieRecipe.title}\nServes: ${
    fishPieRecipe.servings
  }\nIngredients:\n${fishPieRecipe.ingredients.map((x) => x).join("\n")}\n`
);



let minceBeefRecipe = {
  title: "Mince Beef",
  servings: 5,
  ingredients: ["Mince Beef", "onion", "garlic", "ginger", "mix vegetables"],
};

console.log(
  `${minceBeefRecipe.title}\nServes: ${
    minceBeefRecipe.servings
  }\nIngredients:\n${minceBeefRecipe.ingredients.map((x) => x).join("\n")}`
);
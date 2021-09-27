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
  recipe1: {
    name: "Mol",
    Serves: 2,
    Ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  recipe2: {
    name: "omelette",
    Serves: 1,
    Ingredients: ["eggs", "tomato", "onion"],
  },
  recipe3: {
    name: "cinnamon tea",
    Serves: 2,
    Ingredients: ["tea bags", "sugar", "milk", "cinnamon powder", "water"],
  },
  recipe4: {
    name: "chicken rice",
    Serves: 3,
    Ingredients: ["rice", "chicken", "onion", "salt"],
  },
  recipe5: {
    name: "mango smoothie",
    Serves: 1,
    Ingredients: ["mango", "chia seeds", "milk", "yogurt", "honey"],
  },
};

for (let key in recipes) {
  console.log(recipes[key]);
}

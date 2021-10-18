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

let recipe1 = {
  title: "Guacamole",
  servings: 4,
  ingredients: [
    "2 Avocados",
    "6 tablespoons of red onion",
    "1 teaspoon salt",
    "1/2 teaspoon black pepper",
    "2 tablespoons nutritional yeast",
    "3/4 lime juice",
    "1/4 teaspoon paprika",
    "10 cherry tomatoes",
  ],
};

console.log(recipe1.title);
console.log(`Serves: ${recipe1.servings}`);
console.log("Ingredients:");
recipe1.ingredients.forEach((ingredient) => console.log(ingredient));

let recipe2 = {
  title: "Pesto",
  servings: 8,
  ingredients: [
    "50g Basil Leaves",
    "100g cashew nuts",
    "1/2 lemon juice",
    "1/2 teaspoon salt",
    "2 cloves of garlic",
    "125ml of olive oil",
  ],
};

console.log(recipe2.title);
console.log(`Serves: ${recipe2.servings}`);
console.log("Ingredients:");
recipe2.ingredients.forEach((ingredient) => console.log(ingredient));

let recipe3 = {
  title: "Beetroot Salad",
  servings: 4,
  ingredients: [
    "50g Rocket",
    "50g Spinach",
    "1/2 Avocado",
    "50g Cooked Beetroot",
    "2 tablespoons Balsamic Vinegar",
    "2 tablespoons Maple Syrup",
  ],
};

console.log(recipe3.title);
console.log(`Serves: ${recipe3.servings}`);
console.log("Ingredients:");
recipe3.ingredients.forEach((ingredient) => console.log(ingredient));

let recipe4 = {
  title: "Bravas Sauce",
  servings: 4,
  ingredients: [
    "1 chopped red onion",
    "2 cloves of garlic",
    "1 teaspoon paprika",
    "1 teaspoon chilli seeds",
    "2 tablespoons Balsamic Vinegar",
    "2 tablespoons Maple Syrup",
    "2 tablespoons water",
    "1 can chopped tomatoes",
    "2 bay leaves",
  ],
};

console.log(recipe4.title);
console.log(`Serves: ${recipe4.servings}`);
console.log("Ingredients:");
recipe4.ingredients.forEach((ingredient) => console.log(ingredient));

let recipe5 = {
  title: "Peanut Satay Sauce",
  servings: 6,
  ingredients: [
    "3 tablespoons peanut butter",
    "1 clove of garlic",
    "1 lime juice",
    "1/2 teaspoon of chipotle paste",
    "1 teaspoon soy sauce",
    "1 tablespoon Maple Syrup",
    "2 tablespoons water",
  ],
};

console.log(recipe5.title);
console.log(`Serves: ${recipe5.servings}`);
console.log("Ingredients:");
recipe5.ingredients.forEach((ingredient) => console.log(ingredient));

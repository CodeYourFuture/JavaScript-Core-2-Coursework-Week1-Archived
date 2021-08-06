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
  title: "Pizza",
  serves: 2,
  ingredients: [
    "300g strong bread flour",
    "1 tsp instant yeast",
    "1 tsp salt",
    "1 tbsp olive oil, plus extra for drizzling",
    "100ml passata",
    "handful fresh basil",
    "1 garlic clove, crushed",
    "125g ball mozzarella, sliced",
    "handful grated or shaved parmesan",
    "handful of cherry tomatoes, halved ",
    "handful of basil leaves (optional)",
  ],
};

console.log(recipes.title);
console.log("servings: " + recipes.serves);
console.log("Ingredients: ");
recipes.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});

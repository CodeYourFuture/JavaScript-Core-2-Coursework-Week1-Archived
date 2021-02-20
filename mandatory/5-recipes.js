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
  title: "Fish Curry",
  servings: 4,
  ingredients: ["fish", "rice", "potatoes", "pepper", "onion", "kale"],
};
console.log(recipes.title);
console.log(`Serves: ${recipes.servings}`);
console.log(`Ingredients:`);
// Got help with the below code line
recipes.ingredients.forEach((ingredients) => console.log(ingredients));

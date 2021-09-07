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
  title: "Porridge",
  servings: 1,
  ingredients: [
    "-> 200g oats",
    "-> 300ml oatmilk ",
    "-> cinnamon",
    "-> 2Tb's peanut butter",
    "-> a banana",
    "-> blueberries",
  ],
};

console.log(`${recipes.title}
Serves: ${recipes.servings}
Ingredients:`);
recipes.ingredients.forEach((ingredient) => console.log(ingredient));

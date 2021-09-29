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

SOLUTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let recipe = {
  title: 'Rainbow Chard Sag Aloo',
  servings: 3,
  ingredients: [
    '400g rainbow chard',
    '3 tablespoons',
    'rapeseed oil',
    '1 teaspoon black mustard seeds',
    '2 medium brown onions',
    '600g Desiree potatoes',
    '3cm ginger, peeled and grated',
    '4 cloves of garlic',
    '400g ripe tomatoes',
    '1 1/3 teaspoons chili powder',
    '1/3 teaspoon ground cumin',
    '1/3 teaspoon ground coriander',
    '1/2 teaspoon ground turmeric',
    '1 1/4 teaspoons salt',
  ],
};

console.log(recipe.title);
console.log(`Serves ${recipe.servings}`);
console.log('Ingredients:');

recipe.ingredients.forEach(function (ingredient) {
  console.log(ingredient);
});

**/

let recipes = {};


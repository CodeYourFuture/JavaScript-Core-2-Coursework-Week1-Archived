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
  title: 'PeanutButter and Jam Sandwitch',
  Serves: 1,
  ingredients: [
    '2 slices of warm home-baked bread',
    'Butter Spread',    
    'Peanutbutter (Crunchy!)',
    'Apricot Jam (Smooth)',
  ],
};

console.log(recipes.title);
console.log(`Serves ${recipes.Serves}`);
console.log('Ingredients:');

recipes.ingredients.forEach(ingredient =>
    console.log(ingredient)
);

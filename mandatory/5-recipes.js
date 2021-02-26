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

let weetbix = {
    title: 'WeetBix',
    servings: 1,
    ingredients: ['weetbix', 'milk', 'sugar']
};

let cheeseSnackwich = {
    title: 'Cheese Snackwich',
    servings: 2,
    ingredients: ['bread', 'cheese', 'oil']
};

let trifle = {
    title: 'Trifle',
    servings: 8,
    ingredients: ['jelly', 'custard', 'canned fruit', 'sponge cake']
};

let chickenSandwich = {
    title: 'Chicken Sandwich',
    servings: 4,
    ingredients: ['bread', 'chicken', 'mayonnaise']
};

let chocolateCake = {
    title: 'Chocolate Cake',
    servings: 8,
    ingredients: ['flour', 'cocoa', 'sugar', 'eggs', 'milk', 'yeast']
};

function log(obj) {
    console.log(obj.title);
    console.log(`Serves: ${obj.servings}`);
    console.log('Ingredients:')
    
    obj.ingredients.forEach(item => console.log(item));
};

log(weetbix);
log(cheeseSnackwich);
log(trifle);
log(chickenSandwich);
log(chocolateCake);

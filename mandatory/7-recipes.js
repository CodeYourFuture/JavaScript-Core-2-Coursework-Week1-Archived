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

const recipes = {
  coffee : {
    names:'Filter Coffee',
    service : 2,
    ingredients :['ground coffee', 'french press', 'hot water']
  },
  pasta : {
    names:'Spaghetti Bolognese',
    service : 2,
    ingredients :['pasta', 'bolognese souce', 'hot water','salt','yogurt']
  },
  cake : {
    names:'Cocoa Cake',
    service : 4,
    ingredients :['flour', 'sugar', 'milk', 'egg', 'oil', 'cocoa']
  },
  mole : {
    names:'Mole',
    service : 2,
    ingredients :['cinnamon', 'cumin', 'cocoa']
  },
  fish : {
    names:'Fish',
    service : 3,
    ingredients :['fish', 'onion', 'bay leaf', 'salt', 'oil', 'garlic']
  }
};

for(const recipe in recipes){
  console.log(`${recipes[recipe].names}`);
  console.log(`Serves: ${recipes[recipe].service}`);
  console.log('Ingredients');
  recipes[recipe].ingredients.forEach(element => {
    console.log(element);
  });
  console.log('**************************');
}
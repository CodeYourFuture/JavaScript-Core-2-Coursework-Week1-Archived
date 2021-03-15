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

let recipe1 = {
    title: 'Chicken curry',
    serves: 4,
    ingredients: ['chicken', 'potatoes', 'onions', 'curry spices']
};
console.log(recipe1.title);
let entries = Object.entries(recipe1);
entries.forEach(key => {
    
    if(key.includes('serves')) {
        console.log(`${key}`);
    }
});

let recipe2 = {
    title: 'Beef stew',
    serves: 6,
    ingredients: ['beef', 'potatoes', 'onions', 'veggies']
};

let recipe3 = {

    title: 'Spagetti',
    serves: 8,
    ingredients: ['mince', 'spagetti', 'tamatoes', 'pepper']
};

let recipe4 = {
    title: 'Mac and cheese',
    serves: 9,
    ingredients: ['macaroni', 'macon', 'cheese', 'milk']
};

let recipe5 = {
    title: 'Chocolate cake',
    serves: 12,
    ingredients: ['eggs', 'flour', 'milk', 'cocoa']
};

const flowers = {
    tulip: 20,
    rose: 10,
    lily: 15,
  };
  
  for (const key in flowers) {
    console.log(`${key}: ${flowers[key]}`);
  }
  
  // Prints
  // tulip: 20
  // rose: 10
  // lily: 15
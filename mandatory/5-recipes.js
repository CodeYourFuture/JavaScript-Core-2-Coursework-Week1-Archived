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

let recipes = [{
        title: 'Egg Fried Rice',
        serves: 2,
        ingredients: [
            'eggs: 2',
            'rice: 2',
            'eas: handful',
            'salt: a few pinches',
        ],
    },

    {
        title: 'Toad In Hole',
        serves: 4,
        ingredients: [
            'sausages: 8',
            'flour: 250g',
            'salt: a few pinches',
            'oil: 3 tablespoons',
        ],
    },

    {
        title: 'Layered Cake',
        serves: 8,
        ingredients: [
            'eggWhite: 5',
            'eggYork: 20',
            'flour: 500g',
            'sugar: 200g',
        ],
    },

    {
        title: 'CuppaTea',
        serves: 1,
        ingredients: [
            'teabag: 1',
            'milk: 2 teaspoons',
            'sugar: optional',
        ],
    },

    {
        title: 'lotusSoup',
        serves: 4,
        ingredients: [
            'lotusRoot: 10',
            'chickenPieces: 8',
            'peanuts: 80g',
            'salt: a few pinches',
        ],
    },
];

for (recipe of recipes) {
    console.log(recipe.title);
    console.log(`Serves ` + recipe.serves);
    console.log(`Ingredients:`);
    for (let ingredient of recipe.ingredients) {
        console.log(ingredient);
    };
    console.log(`\n`);
};
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

let recipes = [
    {
        recipe: fishAndChips,
        servings: 1,
        ingredients: ["cod fish", "oil", "chips", "dips"]
    },
    {
        recipe: VegetableSoup,
        servings: 1,
        ingredients: ["onions", "carrots", "celery", "olive oil", "tomato paste"]
    },
    {
        recipe: pancake,
        servings: 4,
        ingredients: ["eggs", "flour", "butter", "maple syrup"]
    },
    {
        recipe: pancake,
        servings: 4,
        ingredients: ["eggs", "flour", "butter", "maple syrup"]
    }
];
for (let x of recipes) {
    console.log(x.recipe);
    console.log(`Serves: ${x.servings}`);
    console.log(`Ingredients: ${x.ingredients}`);
};

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
    title: "Cheesy Chips",
    serves: 1,
    ingredients: ['chips', 'cheese']
    },
    {
        title: "scrambled egg on toast",
    serves: 1,
    ingredients:['eggs', 'Bread']
    },
    {
    title: "Taboulbeh",
    serves: 3,
    ingredients: ['cous cous', 'peppers', 'onion']
    },
    {
    title: "Cinnabuns",
    serves: 3,
    ingredients: ['Cinnamon', 'puff pastry']
    },
    {
    title: "milkshake",
    serves: 8,
    ingredients: ['milk', 'banana', 'ice cream']
    }
];
for (i of recipes) {
    console.log(i.title);
    console.log(`Serves: ${i.serves}`);
    console.log("Ingredients:");
    for (j of i.ingredients) {
        console.log(j);
    }}

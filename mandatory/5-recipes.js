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
    blackTea: { servings: 4, ingredients: { bagOfTea: 4, water: 1 } },
    cocoa: { servings: 4, ingredients: { cocoa: 4, milk: 1 } },
    coffee: { servings: 4, ingredients: { coffeePods: 4, water: 1 } },
    milk: { servings: 4, ingredients: { honeySpoons: 4, milk: 1 } },
    juice: { servings: 10, ingredients: { concentrateJuice: 4, water: 8 } }

};

for (let item of Object.keys(recipes)) {
    let str = ""
    for (let item2 of Object.entries(recipes[item].ingredients)) {
        str = str + item2 + "\n"
    }
    console.log(`${item}\nServes: ${recipes[item].servings}\nIngredients:\n${str.split(",").join(": ")}\n`)

}
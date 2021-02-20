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
    Dough: {
        Serves: 4,
        Ingredients: ["flour", "water", "sugar", "salt"]
    },
    "Lemon Juice": {
        Serves: 4,
        Ingredients: ["lemons", "ice", "mint", "sugar", "water"]
    },
    Pancakes: {
        Serves: 2,
        Ingredients: ["flour", "eggs", "milk", "oil"]
    },
    Cappuccino: {
        Serves: 1,
        Ingredients: ["milk", "coffee", "sugar"]
    },
    Salad: {
        Serves: 2,
        Ingredients: ["tomato", "cucumber", "oil", "salt", "parsley", "cumin"]
    }
};

let recipe = Object.keys(recipes);

recipe.forEach((key) => {
    console.log(key);
    console.log(`Serves: ${recipes[key].Serves}`);
    console.log(`Ingredients:`);
    recipes[key].Ingredients.forEach(key => console.log(key));
    console.log("/////")
})


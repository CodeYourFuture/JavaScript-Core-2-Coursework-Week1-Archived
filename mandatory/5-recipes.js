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
    lasagne: {
        servings: 4,
        ingredients: ["lasagne sheets", "cheese", "tomato sauce", "bechamel sauce"]
    },
    pancake: {
        servings: 4,
        ingredients: ["eggs", "flour", "butter", "maple syrup"]
    },
    fishandchips: {
        servings: 1,
        ingredients: ["cod fish", "oil", "chips", "dips"]
    },
    smoothie: {
        servings: 2,
        ingredients: ['yoghurt', "flaxseed", "bananas", "chai"]
    },
    chickensoup: {
        servings: 3,
        ingredients: ["chicken", "vegetables", "water", "chicken stock"]
    }

};
for (let recipe of Object.keys(recipes)) {
    console.log(recipe);
    console.log(`Serves:${recipes[recipe]["servings"]}`);
    console.log("Ingredients");
    for (let elem of recipes[recipe]["ingredients"]) {
        console.log(elem);

    }
    console.log("**********************************");
}
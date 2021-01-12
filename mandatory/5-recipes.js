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
    Lasagne: {
        serves: 8,
        ingredients: ["Minced Meat", "Chopped Tomato", "Bechamel Sauce", "Cheese"]
    },
    "Short Bread": {
        serves: 5,
        ingredients: ["Plain Flour", "Butter", "Caster Sugar", "Icing Sugar"]
    },
    Latte: {
        serves: 3,
        ingredients: ["Milk", "Coffee", "Hot Water", "Sugar "]
    },
    "Beef Stew": {
        serves: 6,
        ingredients: ["Diced Beef", "Chopped Tomato", "Garlic", "Onion", "Carrot"]
    },
    "Tomato Soup": {
        serves: 4,
        ingredients: ["Onion", "Chopped Tomato", "Celery", "Garlic"]
    }
};

for (let key of Object.keys(recipes)) {
    let emptySpace = "";
    for (let key2 of Object.entries(recipes[key].ingredients)) {        
        emptySpace = emptySpace + key2 + "\n";
    }
    console.log(`${key}\nServes: ${recipes[key].serves}\nIngredients:\n${emptySpace.split(",").join(": ")}\n`);
};
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
        serves: 7,
        ingredients: ["Minced Meat",
            "Chopped Tomato",
            "Pasata Sauce",
            "Cheese"
        ],
    },
    Rice: {
        serves: 15,
        ingredients: [
            "Rice Grain",
            "Onions",
            "Sweetcorn",
            "Peas"
        ],
    },
    "Duck Soup": {
        serves: 3,
        ingredients: [
            "Onion",
            "Chopped Tomato",
            "Carrots",
            "Sweetcorn",
            "Garlic "
        ],
    },
    Roti: {
        serves: 18,
        ingredients: [
            "Flour",
            "Wholegrain Flour"
        ],
    },
    "Lemon chicken": {
        serves: 13,
        ingredients: [
            "Raw Chicken",
            "Red Onions",
            "Green Chilli",
            "Mixed Masala",
            "Ginger",
            "Fresh Lemon",
        ],
    },
};
console.log(recipes);
for (let key of Object.keys(recipes)) {
    let emptySpace = "";
    for (let key2 of Object.values(recipes[key].ingredients)) {
        emptySpace = emptySpace.concat(key2).concat("\n");
    }
    console.log(
        key
        .concat("\nServes:")
        .concat(recipes[key].serves)
        .concat("\nIngredients:\n")
        .concat(emptySpace.split(",").join(": "))
    );
}
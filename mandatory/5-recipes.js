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
fuf: {
    serves: 3,
    ingredients: ["Yam", "Smoked Fish", "Stock Cube", "Chili", "Onion", "Ginger"],
},
    rice: {
    serves: 4,
    ingredients: ["Yoo", "Babo", "Stock Cube", "Chili", "pepper", "Ginger"],
    },
    ezu: {
    serves: 2,
    ingredients: ["casio", "Smoked Fish", "tomato", "Chili", "Onion", "Ginger"],
    },
    Kolico: {
    serves: 2,
    ingredients: ["Yam", "Smoked Fish", "tomato", "Chili", "Onion", "Ginger", "Oil"],
    },
    Ademe: {
    serves: 4,
    ingredients: ["periperi", "Smoked Fish", "beans", "Chili", "Onion", "Ginger"],
    }
};
for (let key of Object.keys(recipes)) {
    let strr = "";
    for (let key2 of Object.entries(recipes[key].ingredients)) {
        strr = strr + key2 + "\n";
    }
    console.log(`${key}\nServes: ${recipes[key].serves}\nIngredients:\n${strr.split(",").join(": ")}\n`);
}; 

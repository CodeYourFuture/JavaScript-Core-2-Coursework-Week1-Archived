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
        Title: "mole",
        Serves: 1,
        Ingredients: ["cinnamon", "cumin", "cocoa"],
    },
    {
        Title: "tea",
        Serves: 5,
        Ingredients: ["cinnamon", "sugar", "ground tea leaves"],
    },
    {
        Title: "spaghetti",        
        Serves: 3,
        Ingredients: ["spaghetti pasta", "tomato sauce", "parsley"],
    },
    {
        Title: "egg sandwich",        
        Serves: 2,
        Ingredients: ["eggs", "sandwich loaf", "tomato", "onion", "salt"],        
    },
    {
        Title: "oatmeal",        
        Serves: 2,
        Ingredients: ["oats", "milk", "sugar (optional)"],
    },
];

let display = function (obj) {    
    for (let key in obj) {
        if (key === "Title") {
            console.log(obj[key].toUpperCase());
        } else {
            if (Array.isArray(obj[key])) {
                console.log(key[0].toUpperCase() + key.slice(1) + ": ");
                obj[key].forEach(displayArrayValues);
            } else {
                console.log(`${key}: ${obj[key]}`);
            }
        }        
    }
    console.log("=============================\n");
}

let displayArrayValues = function(item){
    console.log("\t- "+item);
}

console.log("My Simple Recipes- Check them out below...\n")
recipes.forEach(display);
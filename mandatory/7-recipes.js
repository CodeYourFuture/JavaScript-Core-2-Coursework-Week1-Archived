/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- title (a string), 
- servings (a number), and 
- ingredients (an array of strings)

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
        title: "Mole",
        Serves: 2,
        ingredients: ["cinnamon", "cumin", "cocoa"]
    },
    {
        title: "Pan cake",
        Serves: 4,
        ingredients: ["Banana", "Egg", "Sugar", "Oats"]
    },
    {
        title: "Idly",
        Serves: 5,
        ingredients: ["Idly flour", "Salt", "Water"]
    },
    {
        title: "Beans",
        Serves: 3,
        ingredients: ["Beans", "Salt", "Coconut"]
    },
    {
        title: "Milk Sweet",
        Serves: 10,
        ingredients: ["Milk", "Ghee", "Sugar"]
    }
];

recipes.forEach(recipe => {
    console.log(recipe.title);
    console.log(`Servings: ${recipe.Serves}`);
    console.log("Ingredients: ");
    recipe.ingredients.forEach(ingredient => {
        console.log(ingredient);        
    });
    console.log("\n");
});
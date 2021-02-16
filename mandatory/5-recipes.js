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
        title: "Pancake",
        serving: 6,
        Ingredients: ["flour", "egg", "milk", "vegetable oil", "lemon", "sugar"]
    },
    {
        title: "Pasta with salmon & peas",
        serving: 4,
        Ingredients: ["butter", "wholewheat fusilli", "salmon", "peas", "lemon", "chives"]
    },
    {
        title: "3-veg mac 'n' cheese",
        serving: 6,
        Ingredients: ["butternut squash", "butter", "leek", "flour", "milk", "cheese"]
    },
    {
        title: "Prawn tikka masala",
        serving: 5,
        Ingredients: ["raw king prawns", "brown basmati rice", "tomato purée", "rapeseed oil", "tikka curry paste", "sugar"]
    },
    {
        title: "Pizza",
        serving: 8,
        Ingredients: ["flour", "cheese", "mushroom", "pepper", "tomato", "sweetcorn"]
    },

];

recipes.forEach(recipe => {
    console.log(`${recipe.title}\nServes:${recipe.serving}\nIngredients:`);
    recipe.Ingredients.forEach(ingredient => console.log(ingredient))
    console.log("");
});


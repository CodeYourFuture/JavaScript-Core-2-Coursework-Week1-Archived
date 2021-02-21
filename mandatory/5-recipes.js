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

const recipes = [
    {
        title: "Lahmacun",
        servings: 2,
        ingredients: ["beef mince", "red pepper", "parsley", "garlic", "onion", "special dought"]
    },
    {
        title: "pide",
        servings: 2,
        ingredients: ["beef mince", "red pepper", "parsley", "garlic", "onion", "special dought"]
    },
    {
        title: "tavuk shish",
        servings: 2,
        ingredients: ["breast", "red pepper", "parsley", "garlic", "onion", "special dought"]
    },
    {
        title: "doner",
        servings: 2,
        ingredients: ["beef mince", "red pepper", "parsley", "garlic", "onion", "special dought"]
    },
    {
        title: "kebab",
        servings: 2,
        ingredients: ["beef mince", "red pepper", "parsley", "garlic", "onion", "special dought"]
    }
]

recipes.forEach(recipe => {
    console.log(`${recipe.title}\nServes:${recipe.servings}\nIngredients: `)
    recipe.ingredients.forEach(ingredient => console.log(ingredient))
    console.log("");
});



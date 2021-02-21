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
        Title: "Chorizo & mozzarella gnocchi bake",
        Servings: 6,
        Ingredients: ["olive oil", "onion", "garlic", 
                    "chorizo", "tomatoes", "caster sugar",
                    "fresh gnocchi", "mozzarella", "basil"]
    },
    {
        Title: "Chicken fajitas",
        Servings: 3,
        Ingredients: ["chicken", "onion", "red pepper", 
                    "red chilli", "paprika", "coriander",
                    "tortillas", "garlic", "olive oil"]
    },
    {
        Title: "Piri-piri chicken with smashed sweet potatoes & broccoli",
        Servings: 3,
        Ingredients: ["chicken", "sweet potatoes", "oil", 
                    "red onion", "piri-piri spice mix", "long-stem broccoli"]
    },
    {
        Title: "Carrot cake",
        Servings: 10,
        Ingredients: ["natural yogurt", "eggs", "orange zested", 
                    "self-raising flour", "light muscovado sugar", "cinnamon",
                    "nutmeg"]
    },
    {
        Title: "Treacle sponge",
        Servings: 8,
        Ingredients: ["golden syrup", "lemon zest", "breadcrumb", 
                    "butter", "golden caster sugar", "eggs",
                    "self-raising flour", "milk"]
    }
];

for (recipe of recipes){
    console.log(recipe.Title);
    console.log(`Serves: ${recipe.Servings}`);
    console.log(`Ingredients: ${recipe.Ingredients}\n`);
}
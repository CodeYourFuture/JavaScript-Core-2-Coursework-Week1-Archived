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
    recipeName: "Noodle Soup",
    recipeServings: 1-4,
    recipeIngredients: ["1-4 Packs of Noodles", "Pre-made Stock(Any flavour)", "Onions", "Carrots", "Garlic", "Soup Mix", "Peri-Peri(Optional)", "Crushed Chilli(Optional)", "Milk", "Water"]
    },

    {
    recipeName: "Cheesy Fried Onion Rings",
    recipeServings: 4,
    recipeIngredients: ["Onion", "Cheese(Anything that's easy to slice)", "Breadcrumbs", "Eggs", "Milk"]
    },

{
    recipeName: "Chocolate Peanut Butter Smoothie",
    recipeServings: 4,
    recipeIngredients: ["Peanut Butter", "Milk", "Honey", "Chocolate(Any Flavour)", "Crushed Peanuts", "Almonds and/or Cashew Nuts(Optional)", "Any Fruit of your choice"]
},
{
    recipeName: "Chocolate Cake",
    recipeServings: 12,
    recipeIngredients: ["Flour", "Cake Mix", "Eggs", "Oil", "Butter", "Vanilla Essence", "Finely Chopped Chocolate"]
},

{
    recipeName: "Coleslaw",
    recipeServings: 8,
    recipeIngredients: ["Carrots", "Raisins", "Cabbage(Green or Red)", "Red Apple", "Mayonnaise", "Salt", "Pepper", "Vinegar"]
}
];


for (recipe of recipes){
    console.log(recipe.recipeName);
    console.log(`Serves: ${recipe.recipeServings}`);
    console.log(`Ingredients: ${recipe.recipeIngredients}\n`);
} 
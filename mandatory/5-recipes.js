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
        title: "mole",
        serves: 2,
        ingredients: ["cinnamon", "cummin", "cocoa"],
    },
    {
        title: "fried eggs",
        serves: 3,
        ingredients: ["eggs", "onion", "tomatoes", "mixed spice"],
    },
    {
        title: "spaghetti bolognese",
        serves: 5,
        ingredients: ["pasta", "sauce", "meatballs", "onion", "spice"],
    },
    {
        title: "puff puff",
        serves: 4,
        ingredients: ["flour", "egg", "yeast", "sugar"],
    },
    {
        title: "lasagne",
        serves: 1,
        ingredients: ["pasta sheet", "sauce", "mince meat", "mixed spice"],
    },
];

recipes.forEach(function(recipes) {
    console.log( recipes.title );
    console.log( "serves:" + recipes.serves );
    recipes.ingredients.forEach( function ( ingredients )
    {
        console.log(ingredients)
    } );
    console.log('')
});



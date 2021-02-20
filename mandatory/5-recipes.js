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
        title: "cereal",
        serving: 4,
        Ingredients: ["milk", "cereal", "banana", "strawberry"]
    },
    {
        title: "grilled cheese sandwich",
        serving: 4,
        Ingredients: ["bread", "gorgonzola cheese", "butter", "salami", "yellow cheese", "monterrey cheese"]
    },
    {
        title: "hot-coco",
        serving: 6,
        Ingredients: ["hot milk", "cocoa", "sugar", "marshmallow", "sprinkles", "pinch of salt"]
    },
    {
        title: "paella",
        serving: 5,
        Ingredients: ["spanish rice", "chorizo", "prawns", "curcuma", "onion", "peppers"]
    },
    {
        title: "sushi",
        serving: 8,
        Ingredients: ["sushi rice", "rice vinegar", "seaweed", "raw salmon", "philadephia cheese", "chives"]
    },

];

recipes.forEach(recipe => {
    console.log(`${recipe.title}\nServes:${recipe.serving}\nIngredients:`);
    recipe.Ingredients.forEach(ingredient => console.log(ingredient))
    console.log("");
});

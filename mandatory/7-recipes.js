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

let recipes = {
    recipie1 : {
        title : "Mole",
        serves : 2,
        ingredients: ["cinnamon", "cumin", "coca"],
    },
    recipie2 : {
        title : "Pizza",
        serves : 1,
        ingredients: ["dough", "tomato", "cheese"],
    },
    recipie3 : {
        title : "Chips",
        serves : 2,
        ingredients: ["potato", "salt", "oil"],
    },
    recipie4 : {
        title : "Ratatoile",
        serves : 8,
        ingredients: ["no idea", "more no idea", "a heap of luck"],
    },
    recipie5 : {
        title : "Pasta",
        serves : 3,
        ingredients: ["no idea", "more no idea", "a heap of luck"],
    },
};

var cl = console.log

for (const param in recipes) {
    cl(recipes[param].title)
    cl("Serves : " + recipes[param].serves)
    for (const innerParam in recipes[param].ingredients) {
        cl(recipes[param].ingredients[innerParam])
    }
    cl("   ")
}

// cl(recipes.recipie.title)
// cl(recipes.serves)
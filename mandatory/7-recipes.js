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
    recipe1 : {
        title: "Jollof Rice",
        servings: 2,
        ingredients: ["1 500g packet of rice", "1 can of chopped tomatoes", "1 pack of butter", "Onions", "Stock cubes", "1 pack of Chicken", "Green peas", "Salt"]
    },
    recipe2 : {
        title: "Avocado and Toast",
        servings: 3,
        ingredients: ["A loaf of bread", "Avocados", "Ground black pepper", "Eggs", "Salt"]
    },
    recipe3 : {
        title: "Coconut rice",
        servings: 5,
        ingredients: ["1 500g packet of rice", "1 pack of chicken","Stock cubes","Salt", "Onions", "Coconut milk", "Carrots", "Green peppers"]
    },
    recipe4 : {
        title : "Tomato Sauce",
        servings: 5,
        ingredients: ["1 pack of beef", "1 pack of chicken", "Onions", "Cooking oil", "1 can of chopped tomatoes", "Stock cubes", "Salt"]
    },
    recipe5: {
        title: "Cereal",
        servings: 1,
        ingredients: ["1 can of evaporated milk", "Sugar", "Blueberries", "Grapes", "Cereal"]
    } 
};

for ( let recipeObjects in recipes){
    console.log(`${recipes[recipeObjects].title}`)
    console.log(`Serves: ${recipes[recipeObjects].servings}\nIngredients: `)
    recipes[recipeObjects].ingredients.map(ingredient => {
        console.log(`${ingredient}`)
    })
}

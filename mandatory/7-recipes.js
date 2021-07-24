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
    recipeOne: {
    title: "Curry",
    serves: 2,
    ingredients: ["rice", "meat", "sauce"]
},

    recipeTwo:  {
    title: "Fajitas",
    serves: 4, 
    ingredients: ["chicken", "wraps", "spices"]
},

    recipeThree: {
    title: " Fried Rice",
    serves: 2, 
    ingredients: ["rice", "egg", "veg"]
},

     recipeFour: {
    title: "tiramisu",
    serves: 10, 
    ingredients: ["coffee", "cream", "sponge fingers"]
},

     recipeFive: {
    title: "Pizza",
    serves: 1, 
    ingredients: ["flour", "water", "yeast", "tomato", "mozarella"]
}
};


for (const recipe in recipes) {
    console.log(`title: ${recipes[recipe].title}`);
    console.log(`serves: ${recipes[recipe].serves}`);
    recipes[recipe].ingredients.map((ingredient) => {
        console.log(ingredient)
    })
};
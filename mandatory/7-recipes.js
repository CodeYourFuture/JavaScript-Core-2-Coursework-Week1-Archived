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
    title: "Cake",
    serves: 4,
    ingredients: ["lemon", "sugar", "cream", "flour"],
  },
  {
    title: "Pie",
    serves: 2,
    ingredients: ["pastry", "chicken", "mushrooms"],
  },
  {
    title: "Steak",
    serves: 3,
    ingredients: ["beef", "salt", "butter"],
  },
  {
    title: "Cheeseburger",
    serves: 2,
    ingredients: ["beef burger", "cheese", "burger bun", 'pickles'],
  },
  {
    title: "Lentil Stew",
    serves: 6,
    ingredients: ["red lentils", "salt", "water"],
  },
];

//function to log required values for 1 recipe element
let logRecipe = (recipe) => {
    console.log(recipe.title);                           //logs recipe object title value
    console.log(`Serves: ${recipe.serves}`);            //logs Serves: number of servings
    console.log(`Ingredients:`);                        //logs 'Ingredients:' string
    recipe.ingredients.map(item => console.log(item));  //loops through ingredients array, logs each separately
    console.log("\n");                                  //adds line break for readability                 
}   

recipes.map(logRecipe);                                 //loops through recipes array, logging for each recipe
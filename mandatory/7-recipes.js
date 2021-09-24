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
  Mole: {
    name: "Mole",
    Serves: 2,
    Ingredients: ["cinnamon", "cunim", "cocoa"],
  },
  Pie: {
    name: "Pie",
    Serves: 4,
    Ingredients: ["cinnamon", "butter", "flour", "sugar"],
  },
  Cookies: {
    name: "Cookies",
    Serves: 4,
    Ingredients: ["chocolate chips", "butter", "flour", "brown sugar"],
  },
  Pancake: {
    name: "Pancake",
    Serves: 2,
    Ingredients: ["eggs", "milk", "flour", "sugar"],
  },
  Cupcake: {
    name: "Cupcake",
    Serves: 2,
    Ingredients: ["eggs", "milk", "flour", "sugar","cocoa"],
  },
};
for (recipe in recipes){
console.log(recipe);
let keys= Object.keys(recipes[recipe]);
let values = Object.values(recipes[recipe]);
console.log(keys[1] + " : " + values[1]);
console.log(keys[2] +":");
let ingredientsValues = values[2];
ingredientsValues = ingredientsValues.forEach(element => {
 console.log(element);
});
}
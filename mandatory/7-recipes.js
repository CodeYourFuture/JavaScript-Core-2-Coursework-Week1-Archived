/****************************************************************************************
The Recipe Card - Never forget another recipe!

Create an object to hold information on your favorite recipe. 
It should have properties for 

- title (a string), 
- servings (a number), and 
- ingredients (an array of strings)

On separate lines (one console.log statement for each), 
log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 recipes */

let recipes = {
  yorkshirePudding: {
    title: "Yorkshire Pudding",
    serves: 2,
    ingredients: ["flour", "eggs", "milk"],
  },
  BaconSarnie: {
    title: "Bacon Sarnie",
    serves: 1,
    ingredients: ["bacon", "bread", "butter", "brown sauce"],
  },
  Cupcakes: {
    title: "Cupcakes",
    serves: 5,
    ingredients: ["chocolate", "butter", "flour", "sugar", "eggs"],
  },
  Pancake: {
    title: "Pancake",
    serves: 3,
    ingredients: ["milk", "eggs", "flour", "sugar"],
  },
  eggSarnie: {
    title: "Egg Sarnie",
    serves: 1,
    ingredients: ["egg", "bread", "butter", "oil"],
  },
};

for (recipe in recipes) { //for every nested object in outer object 
  console.log(recipe);
  let keys = Object.keys(recipes[recipe]);
  let values = Object.values(recipes[recipe]);
  console.log(keys[1] + " : " + values[1]);
  console.log(keys[2] + ":");
  let ingredientsValues = values[2];
  ingredientsValues = ingredientsValues.forEach((element) => {
    console.log(element);
  });
  console.log('\n'); //break between recipes 
}

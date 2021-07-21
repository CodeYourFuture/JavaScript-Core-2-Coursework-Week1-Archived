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
  pizza: {
    title: "Pepproni Pizza",
    serves: 4,
    size: "18 in",
    ingredients: ["pizza-base", "tomato puree", "pepperoni", "cheese", "bacon", "mushrooms", "onions"]
  },
  sandwich: {
    title: "Cheese & Jam Sandwich",
    serves: 1,
    ingredients: ["2 slices of bread", "butter", "cheese", "jam"]
  },
  roastChicken: {
    title: "Roast Chicken",
    serves: 4,
    ingredients: ["whole chicken", "garlic", "butter", "olive oil", "lemon juice", "rosemary", "parsley"]
  },
  paella: {
    title: "Spanish Paella",
    serves: 4,
    ingredients: ["prawns", "stock cube", "olive oil", "chorizo", "chicken breasts", "onion", "garlic", "rice", "peppers", "tomatoes", "peas", "lemon wedges"]
  },
  tunaPasta: {
    title: "Tuna and Pasta Bake",
    serves: 2,
    ingredients: ["tuna", "pasta", "sweetcorn", "peppers", "seasoning"]
  }
};

for(const recipe in recipes) {
  console.log(`${recipes[recipe].title}`);
  console.log(`Serves: ${recipes[recipe].serves}`);
  console.log("Ingredients:");
  recipes[recipe].ingredients.forEach(item => console.log(item));
}
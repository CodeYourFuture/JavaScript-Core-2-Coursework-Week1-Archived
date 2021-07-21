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
  curry: {
    title: "butter chicken",
    serves: 2,
    ingredients: ["chicken", "butter", "spices", "onion", "garlic"],
  },
  cake: {
    title: "black forest",
    serves: 2,
    ingredients: ["chocolate", "flour", "butter", "cream", "sugar"],
  },
  lamb_roast: {
    title: "Roasted Lamb",
    serves: 2,
    ingredients: ["Lamb", "oil", "rosemary", "onion", "garlic"],
  },
  soup: {
    title: "butter chicken",
    serves: 2,
    ingredients: ["chicken", "veg", "salt", "broth", "Pepper"],
  },
  pudding: {
    title: "butter chicken",
    serves: 2,
    ingredients: ["milk", "rice", "sugar", "honey", "salt"],
  },
};
for (const key in recipes) {
  console.log(`${recipes[key].name}`);
  console.log(`Serves : ${recipes[key].serves}`);
  console.log("Ingredients");
  recipes[key].ingredients.forEach((element) => {
    console.log(element);
  });
}

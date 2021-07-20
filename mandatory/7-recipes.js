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
  recipe1: {
    title: "Pancake",
    serving: 5,
    ingredients: ["milk", "flour", "egg"],
  },
  recipe2: {
    title: "Pizza",
    serving: 4,
    ingredients: ["olive", "flour", "egg", "olive oil", "cheese"],
  },
  recipe3: {
    title: "Fish & Chips",
    serving: 4,
    ingredients: ["salmon", "potato", "salt"],
  },
  recipe4: {
    title: "Cheese Sandwich",
    serving: 5,
    ingredients: ["bread", "cheese", "salt"],
  },
  recipe5: {
    title: "Baklava",
    serving: 8,
    ingredients: ["sugar", "flour", "egg", "hazelnut"],
  },
};


for (const key in recipes) {
    console.log(`${recipes[key].title}`);
    console.log(`Serves: ${recipes[key].serving}`);
    console.log(`Ingredients: `)
    recipes[key].ingredients.forEach((el) => console.log(el));
}


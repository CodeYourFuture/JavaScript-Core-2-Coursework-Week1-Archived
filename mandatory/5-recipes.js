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

let recipes = {
  blackTea: { servings: 8, ingredients: { bagOfTea: 1, water: 1 } },
  cocoa: { servings: 3, ingredients: { cocoa: 2, milk: 1 } },
  coffee: { servings: 2, ingredients: { coffeePods: 3, water: 1 } },
  milk: { servings: 1, ingredients: { honeySpoons: 1, milk: 1 } },
  juice: { servings: 1, ingredients: { Juice: 4, water: 8 } },
};

for (let item in recipes) {
  let str = "";
  for (let item2 of Object.entries(recipes[item].ingredients)) {
    str = str + item2 + "\n";
  }
  console.log(
    `${item}\nServes: ${recipes[item].servings}\nIngredients:\n${str
      .split(",")
      .join(": ")}\n`
  );
}

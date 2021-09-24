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
  newRecipe: function (recipeTitle, numServings, listIngredients) {
    Object.defineProperty(recipes, recipeTitle, {
      value: {
        title: recipeTitle,
        serves: numServings,
        ingredients: listIngredients,
      },
    });

    Object.defineProperty(recipes[recipeTitle], Symbol.iterator, {
      enumerable: false,
      writable: false,
      configurable: true,
      value: function () {
        var o = this; //in this example o is short for object
        var idx = 0; //short for index => can use any variable names
        var ks = Object.keys(o); // returns an array of the keys of object o, stores in ks (short for keys here)
        return {
          next: function () {
            return {
              value: o[ks[idx++]],
              done: idx > ks.length,
            };
          },
        };
      },
    });
  },
};

// adding random recipes:

recipes.newRecipe("ex1", 2, ["cinnamon", "cumin", "cocoa"]);

recipes.newRecipe("ex2", 3, ["cinnamon", "cumin", "cocoa"]);

recipes.newRecipe("ex3", 4, ["cinnamon", "cumin", "cocoa"]);

recipes.newRecipe("ex4", 5, ["cinnamon", "cumin", "cocoa"]);

recipes.newRecipe("ex5", 6, ["cinnamon", "cumin", "cocoa"]);

// Testing object iterator:

var it1 = recipes.ex1[Symbol.iterator]();

// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());

var it2 = recipes.ex2[Symbol.iterator]();

// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());

var it3 = recipes.ex3[Symbol.iterator]();

var it4 = recipes.ex4[Symbol.iterator]();

var it5 = recipes.ex5[Symbol.iterator]();

console.log(
  `${recipes["ex1"]["title"]}\nservings: ${recipes["ex1"]["serves"]}\nIngredients:\n${recipes["ex1"]["ingredients"][0]}\n${recipes["ex1"]["ingredients"][1]}`
);

for (var i = 1; i <= 5; i++) {
  let currEx = "ex" + i;
  console.log(
    `${recipes[currEx]["title"]}\nservings: ${recipes[currEx]["serves"]}\ningredients:`
  );
  for (var v of recipes[currEx]["ingredients"]) {
    console.log(`${v}`);
  }
}

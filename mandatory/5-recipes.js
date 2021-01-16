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

let recipes = [
 { Title: "Pasta",
  Serves: 5,
  Ingredients: ["Tomato", "Onion", "Sauce"],
},

{ Title: "ABC",
  Serves: 2,
  Ingredients: ["Tomato", "Onion", "Sauce"]
},

{ Title: "XYZ",
  Serves: 4,
  Ingredients: ["Tomato", "Onion", "Sauce"]
},

{ Title: "Pasta",
  Serves: 3,
  Ingredients: ["Tomato", "Onion", "Sauce"]
},

{ Title: "CDF",
  Serves: 1,
  Ingredients: ["Tomato", "Onion", "Sauce"]
},

];

recipes.forEach((recipe) => {
  console.log(recipe.Title);
  console.log(`Servings: ${recipe.Serves}`);
  recipe.Ingredients.forEach((ingredient) => {
    console.log(ingredient);
  });
  console.log("\n");
});

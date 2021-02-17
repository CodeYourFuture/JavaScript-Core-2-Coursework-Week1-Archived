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
  {
    title: "meat loaf",
    servings: 4,
    ingredients: ["500gr mince", "2 eggs", "bread-crumb", "2 onions"],
  },

  {
    title: "tomato soup",
    servings: 6,
    ingredients: ["500gr tomato", "butter", "dried-mint"],
  },
  {
    title: "kebab",
    servings: 5,
    ingredients: ["500gr lamp", "bread-crumb", "2 onions"],
  },
  {
    title: "chicken roast",
    servings: 4,
    ingredients: ["500gr chicken tight", "2 eggs", "2 patatos", "2 onions"],
  },
  {
    title: "veg soup",
    servings: 4,
    ingredients: ["500gr broccoli", "2 onions", "1 garlic", "100 gr tomato pure"],
  },
];

for (let i = 0; i < recipes.length; i++) {
  console.log(
    `${recipes[i].title}${"\n"}Serves: ${
      recipes[i].servings
    } ${"\n"}Ingredients:${"\n"}${recipes[i].ingredients.join(
      "\n"
    )}${"\n"}${"\n"}`
  );
}

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

const recipes = [
  {
    Title: "Roast chicken",
    Serves: 2,
    Ingredients: [
      "Chicken",
      "Dark soy sauce",
      "Cinnamon power",
      "Black pepper",
      "Honey",
      "Oyster sauce",
    ],
  },
  {
    Title: "Chow mein",
    Serves: 2,
    Ingredients: ["Egg noodle", "Chow mein sauce", "Red pepper", "Garlic"],
  },
  {
    Title: "Grill salmon",
    Serves: 2,
    Ingredients: ["Salmon fish", "Garlic", "Salt", "Black pepper", "Butter"],
  },
  {
    Title: "Butter prawn",
    Serves: 2,
    Ingredients: ["Prawns", "Butter", "Cereal", "Curry leaves"],
  },
  {
    Title: "Carrot juice",
    Serves: 2,
    Ingredients: ["Carrots", "Milk", "Sugar", "Ice cubes"],
  },
];

function printRecipes(object) {
  for (const key in object) {
    console.log(`${key} : ${object[key]}`);
  }
}

recipes.forEach(printRecipes);


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

let recipes = [
  {
    title: "Chilli Con Carne",
    servings: 4,
    ingredients: ["Kidney Beans", "Beef", "Chilli", "Onion", "Rice"],
  },
  {
    title: "Beans on toast",
    servings: 1,
    ingredients: [
      "Bread",
      "Beans",
      "Butter",
      "Brown sauce(optional)",
      "Cheese(optional",
    ],
  },
  {
    title: "Lasagne",
    servings: 4,
    ingredients: [
      "Lasagne sheets",
      "Beef",
      "Tomato",
      "Onion",
      "Carrot",
      "Cheese",
    ],
  },
  {
    title: "Fish and Chips",
    servings: 2,
    ingredients: ["Cod", "Potato", "Salt", "Vinegar", "Mushy Peas"],
  },
  {
    title: "Shepherd's Pie",
    servings: 4,
    ingredients: ["Lamb", "Onion", "Carrot", "Potato", "Leek"],
  },
];

recipes.forEach((element) => {
  console.log(
    `${element.title} \nServes: ${
      element.servings
    } \nIngredients: \n${element.ingredients.join("\n")}
    `
  );
});

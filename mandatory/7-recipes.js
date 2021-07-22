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
    title: "Mole",
    serves: 2,
    ingredients: ["Cinnamon", "Cumin", "Cocoa"],
  },

  {
    title: "Chicken Steak",
    serves: 4,
    ingredients: [
      "Chicken breast",
      "Mustard paste",
      "Worcestershire sauce",
      "Chili sauce",
      "Red chili powder",
      "Salt",
      "Lemon juice",
      "Garlic chopped",
      "Oil",
    ],
  },

  {
    title: "Chicken Fatayer",
    serves: 4,
    ingredients: ["Meat", "Cheese", "Spinach"],
  },

  {
    title: "Chicken And Cheese Toastie ",
    serves: 1,
    ingredients: [
      "Bread",
      "Mayonnaise",
      "Dijon mustard",
      "Grilled chicken breasts",
      "Cheese Slices",
      "Rocket Leaves",
      "Butter or Oil",
    ],
  },

  {
    title: "Chocolate Strawberry Waffles",
    serves: 1,
    ingredients: [
      "All-Purpose Flour",
      "Pure Vanilla Extract",
      "Sugar",
      "Baking Powder",
      "Strawberries",
      "Eggs",
      "Milk",
      "Butter",
      "Salt",
      "Nutella",
      "Whipped Cream",
    ],
  },
];

for (let recipe of recipes) {
  console.log(recipe.title);
  console.log(`Serves: ${recipe.serves}`);
  console.log("Ingredients:");
  for (let item of recipe.ingredients) {
    console.log(item);
  }
}

// for (let recipe in recipes) {
//   console.log(`${recipes[recipe].title}`);
//   console.log(`Serves: ${recipes[recipe].serves}`);
//   console.log("Ingredients:");
//   recipes[recipe].ingredients.forEach((element) => console.log(element));
// }

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
  Brownie: {
    title: "Best Brownies",
    servings: 16,
    ingredients: [
      "1/2 cup butter",
      "1 cup white sugar",
      "2 eggs",
      "1 teaspoon vanilla",
      "1/3 cup cocoa powder",
      "1/2 cup flour",
      "1/4 teaspoon salt",
      "1/4 teaspoon baking powder",
    ],
  },
  Cookie: {
    title: "Whipped Cookies",
    servings: 36,
    ingredients: [
      "1 cup butter",
      "1 cup flour",
      "1/2 cup sugar",
      "1/4 cup green cherries",
      "1/4 cup red cherries",
    ],
  },
  Chicken: {
    title: "Greek Chicken",
    servings: 4,
    ingredients: [
      "1/4 cup lemon juice",
      "1 teaspoon Greek seasoning",
      "1 tablespoon garlic",
      "1 lemon, zested",
      "1 teaspoon ground black pepper",
      "1/2 teaspoon dried thyme",
      "3 skinless, boneless chicken breasts",
    ],
  },
  BreakfastOne: {
    title: "Quick Quiche",
    servings: 6,
    ingredients: [
      "8 slices bacon",
      "4 ounces shredded Swiss cheese",
      "2 tablespoons butter, melted",
      "4 eggs, beaten",
      "1 teaspoon salt",
      "1/4 cup flour",
      "1/4 cup finely chopped onion",
    ],
  },
  BreakfastTwo: {
    title: "Breakfast Biscuits",
    servings: 10,
    ingredients: [
      "1 biscuit dough",
      "1 pound bacon",
      "5 eggs",
      "1/4 cup milk",
      "3 tablespoons butter",
      "10 slices Cheddar cheese",
    ],
  },
};

for (const recipe in recipes) {
    console.log(`${recipe}: ${recipes[recipe].title}`);
    console.log(`Serves: ${recipes[recipe].servings}`);
    console.log(`Ingredient: `);
    recipes[recipe].ingredients.forEach(elem => {console.log(elem)});
    console.log("");
}
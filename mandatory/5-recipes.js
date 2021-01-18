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
    Title: "Pizza",
    Serves: 2,
    Ingredients: ["Flour", "Chicken", "Pizza Sauce"],
  },
  {
    Title: "Egg",
    Serves: 4,
    Ingredients: ["Egg", "salt", "Oil"],
  },
  {
    Title: "Pasta",
    Serves: 3,
    Ingredients: ["Pasta Sauce", "Pasta", "Vegetables"],
  },
  {
    Title: "Chicken Tikka",
    Serves: 5,
    Ingredients: ["Chicken", "Tikka Powder", "Yogurt"],
  },
  {
    Title: "Fried Rice",
    Serves: 6,
    Ingredients: ["Rice", "Veggies", "Oil"],
  },
];


for (let i = 0; i < recipes.length; i++) {
  for (let key in recipes[i]) {
      if (key === "Serves") {
      console.log("Serves:", recipes[i][key]);

      } else if (key === "Ingredients") {
      console.log("Ingredients:");
      for (let j = 0; j < recipes[i][key].length; j++) {
        console.log(recipes[i][key][j]);
      }

    } else {
      console.log(recipes[i][key]);
    }
  }

}
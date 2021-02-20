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
    name: "Pasta",
    servings: 3,
    ingredients: ["pasta", "cream", "chicken"],
  },
  {
    name: "Pizza",
    servings: 2,
    ingredients: ["cheese", "Paprika", "Peperoni"],
  },
  {
    name: "soup",
    servings: 4,
    ingredients: ["chicken", "tomato", "parsley", "carrots"],
  },
  {
    name: "salad",
    servings: 2,
    ingredients: ["lettuce", "cucumber", "tomato", "sauce", "olives"],
  },
  {
    name: "mashed-potato",
    servings: 2,
    ingredients: ["potato", "butter", "salt"],
  },
];

for (let ele of recipes) {
  console.log(ele.name);
  console.log("Serves:", ele.servings);
  console.log("Ingredients:");
  ele.ingredients.map((x) => console.log(x));
  console.log("");
}

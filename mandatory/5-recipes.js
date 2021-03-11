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

let recipes  = [
  {
  name: "Pancake",
  serves:    7,
  ingredients: ["self-raising flour", "sugar", "eggs", "milk",  "vanilla", "butter" ],
},
 {
  name: "Pizza",
  serves:    4,
  ingredients: ["self-raising flour", "sugar", "eggs" ],
},
{
  name: "Lime Cake",
  serves:    2,
  ingredients: ["plain flour", "sugar", "eggs", "milk", "cinnamon", "vanilla", "butter" ],
},
{
  name: "Pasta",
  serves:    8,
  ingredients: ["sugar", "eggs", "milk", "cinnamon", "butter" ],
},
{
  name: "Ice Cream",
  serves:    6,
  ingredients: ["sugar", "eggs", "milk", "cinnamon", "vanilla"],
},
]

recipes.forEach((recipe)=>{
  console.log(recipe.name);
  console.log(`Serves: ${recipe.serves}`);
  console.log(`Ingredients:`)
  recipe.ingredients.forEach((ingredient)=>{
    console.log(ingredient);
  }) 
  console.log("\n")
})
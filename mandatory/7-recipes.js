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
  { title: "Mole", servings: 2, ingredients: ["cinnamon", "cumin", "cocoa"] },
  { title: "Pizza", servings: 2, ingredients: ["dough", "tomato", "cheese"] },
  { title: "Salad", servings: 2, ingredients: ["lettuce", "tomato", "cheese"] },
  { title: "Pancakes", servings: 2, ingredients: ["flour", "egg", "milk"] },
  { title: "Cake", servings: 2, ingredients: ["flour", "egg", "milk"] },
];

// recipes.forEach((recipe) => {
//   console.log(recipe.title);
//   console.log(`Serves: ${recipe.servings}`);
//   console.log(`Ingredients:`);
//   recipe.ingredients.forEach((ingredient) => {
//     console.log(ingredient);
//   });
// });

for(let recipe of recipes){
  console.log(recipe.title);
    console.log(`Serves: ${recipe.servings}`);
    console.log(`Ingredients:`);
    for(ingredient of recipe.ingredients){
        console.log(ingredient);
    }
    console.log("\n");
}


// console.log("*****");
// console.log(
//   recipes[0].title +
//     "\n" +
//     "Serves: " +
//     recipes[0].servings +
//     "\n" +
//     "Ingredients: " +
//     "\n" +
//     recipes[0].ingredients[0] +
//     "\n" +
//     recipes[0].ingredients[1] +
//     "\n" +
//     recipes[0].ingredients[2]
// );
// console.log("*****");
// console.log(
//   recipes[1].title +
//     "\n" +
//     "Serves: " +
//     recipes[1].servings +
//     "\n" +
//     "Ingredients: " +
//     "\n" +
//     recipes[1].ingredients[0] +
//     "\n" +
//     recipes[1].ingredients[1] +
//     "\n" +
//     recipes[1].ingredients[2]
// );

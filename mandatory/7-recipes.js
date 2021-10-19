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
*/

var recipes = [
  {
    title: "Mole",
    serves: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  {
    title: "Pizza",
    serves: 3,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  {
    title: "Pizza1",
    serves: 3,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  {
    title: "Pizza2",
    serves: 3,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  {
    title: "Pasta",
    serves: 3,
    ingredients: ["cinnamon", "cumin", "cocoa"],
  },
];
 
recipes.forEach(function(recipe, index) {
// console.log(index + ": " +recipe.title);
// console.log(recipe.serves);
// console.log(recipe.ingredients);
console.log(`${index}. Name: ${recipe.title}, Serves: ${recipe.serves}`);
console.log(recipe.ingredients.join("\n"));
console.log("\n");
});



for( i = 0; i < recipes.length; i++) {
    // console.log(recipes[i]);
    console.log(recipes[i].title);  

var recipe = srecipes[i];

  for ( i = 0; i < recipe.ingredients.length; i++) {
      console.log(recipe.ingredients[i]);
      
  }

}







    






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

let recipes = {
    Title: "Mole",
    Servings: 2,
    Ingredients: ["cinnamon", "cumin", "cocoa"]

};
console.log(recipes.Title)
console.log(`Serves: ${recipes.Servings}`)
console.log(`Ingredients: 
${recipes.Ingredients[0]}
${recipes.Ingredients[1]}
${recipes.Ingredients[2]}
 `)

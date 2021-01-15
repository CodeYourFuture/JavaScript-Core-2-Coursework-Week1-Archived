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

let recipes =
[ {
    title: "Jolof",
    serves: 3,
    Ingredients:["onions", "peppers", "leaks"]

} ];
// console.log(recipes[0].title);
// console.log(recipes[1].serves);
// recipes.forEach();
console.log(Object.values(recipes));

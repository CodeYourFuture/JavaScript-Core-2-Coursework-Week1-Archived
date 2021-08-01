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
 recipe1 : {
  title : "mole1",
  servings : 2,
  ingredients : ["cinnamon", "cumin", "cocoa"]
 },
 recipe2: {
  title : "mole2",
  servings : 3,
  ingredients : ["cardamom", "black pepper", "vanilla"]
 },
 recipe3: {
  title : "mole3",
  servings : 4,
  ingredients : ["clove", "maggie", "mango"]
 },
 recipe4: {
  title : "mole4",
  servings : 3,
  ingredients : ["bread", "Apple juice", "strawberry"]
 },
 recipe5: {
  title : "mole5",
  servings : 3,
  ingredients : ["chicken", "laureate paper", "cocoa"]
 }
};
for (let key in recipes){
 console.log(recipes[key])
}

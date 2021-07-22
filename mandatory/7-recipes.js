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
let recipe1 = {
  title: "Pulao",
  Serves: 4,
  Ingredients: ["rice", "meat", "masala"],
};

let recipe2 = {
  title: "Biryani",
  Serves: 4,
  Ingredients: ["rice", "meat", "masala"],
};
let recipe3 = {
  title: "Qorma",
  Serves: 4,
  Ingredients: ["chicken", "bread", "masala"],
};
let recipe4 = {
  title: "Stew",
  Serves: 4,
  Ingredients: ["beef", "bread", "gravy"],
};
let recipe5 = {
  title: "Lasagna",
  Serves: 4,
  Ingredients: ["lasagna strips", "cheese", "mince meat"],
};
let recipes = { recipe1, recipe2, recipe3, recipe4, recipe5 };

for (const recipe in recipes) {
  console.log(`${recipes[recipe].title}`);
  console.log(`serves: ${recipes[recipe].Serves}`);
  recipes[recipe].Ingredients.map((ingredient) => {
    console.log(ingredient);
  });
}

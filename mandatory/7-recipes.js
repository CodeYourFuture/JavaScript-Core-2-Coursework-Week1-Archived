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
  recipe1: {
    name: "Mol",
    Serves: 2,
    Ingredients: ["cinnamon", "cumin", "cocoa"],
  },
  recipe2: {
    name: "smallEnglishBreakfast",
    Serves: 2,
    Ingredients: ["egg", "toast", "beans"],
  },
  recipe3: {
    name: "largeEnglishBreakfast",
    Serves: 4,
    Ingredients: [
      "Boiled-egg",
      "toast",
      "beans",
      "sausage",
      "tea",
      "Orange juice",
      "fruits",
      "Omelette",
    ],
  },
  recipe4: {
    name: "turkishDinner",
    Serves: 4,
    Ingredients: [
      "Boiled-rice",
      "Naan",
      "beans",
      "tikka",
      "tea",
      "Orange juice",
      "Coke",
      "Doner-kebab",
    ],
  },
  recipe5: {
    name: "turkishLunch",
    Serves: 4,
    Ingredients: ["Naan", "tikka", "Coke", "Doner-kebab", "Fries"],
  },
};

// Object.keys(recipes).forEach((recipe) => {
//   console.log(
//     `${recipe} : ${recipes.recipe[Serves]} : ${recipes.recipe[Ingredients]}`
//   );
// });
for (let name in recipes) {
  console.log(recipes[name]);
}

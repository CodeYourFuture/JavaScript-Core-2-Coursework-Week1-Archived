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
    title: "Mole",
    serves: 2,
    ingredients: ["cinnamon", " cumin", " cocoa"]
  },
  {
    title: "Chicken Parm Lasagna",
    serves: 10,
    ingredients: ["chicken", " flour", " pepper"]
  },
  {
    title: "pizza",
    serves: 8,
    ingredients: ["dough", " cheese", " polony"]
  },
  {
    title: "Strawberry cake",
    serves: 10,
    ingredients: ["flour", " strawberry"]
  },
  {
    title: "noodles",
    serves: 1,
    ingredients: ["noodles", " pepper"]
  }
];

recipes.forEach((element) => {
  let title = element.title;
  let serves = element.serves;
  let ingredients = element.ingredients;

  console.log(`Title: ${title} \nServes: ${serves}\nIngredients: ${ingredients}\n`);
});

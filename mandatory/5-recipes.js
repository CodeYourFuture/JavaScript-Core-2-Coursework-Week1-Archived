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
    title: "Salad",
    serves: 2,
    ingredients: ["lettuce", "tomato", "cucumber", "carrot", "beetroot", "parsley"] 
  },
  {
    title: "Tomato Soup",
    serves: 4,
    ingredients: ["tomato paste", "olive oil", "cream", "water", "flour"] 
  },
  {
    title: "Pizza",
    serves: 4,
    ingredients: ["flour", "cheese", "tomato paste", "pepperoni", "mushroom", "sweetcorn","spinach"] 
  },
  {
    title: "Chicken Wrap",
    serves: 4,
    ingredients: ["chicken breast", "wrap", "tomato", "onion", "parsley" ] 
  },
  {
    title: "Meatball",
    serves: 4,
    ingredients: ["minced meat", "bread", "egg", "onion", "spice" ] 
  },
]
    


recipes.forEach((recipe) => {
    console.log(`${recipe.title} \nServes: ${recipe.serves} \nIngredients:`);
    recipe.ingredients.forEach((ingredient) => console.log(ingredient))
});

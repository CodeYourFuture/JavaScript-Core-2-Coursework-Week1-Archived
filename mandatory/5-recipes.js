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
		title: "Poor Man's Meal",
		servings: 4,
		ingredients: [
			"cheese",
			"beans",
			"potato",
		]
    },
    {
		title: "Fish & Chips",
		servings: 1,
		ingredients: [
			"Cod Fish",
			"Peas",
			"Potato",
		]
    },
    {
		title: "Quick Breakfast",
		servings: 1,
		ingredients: [
			"milk",
			"corn flakes",
			"sugar",
		]
    },
    {
		title: "Easy Dessert",
		servings: 4,
		ingredients: [
			"Madeira Cake",
			"Pineapple Chunks",
			"Double Cream",
		]
    },
    {
		title: "Pizza",
		servings: 4,
		ingredients: [
			"pizza",
			"microwave",
		]
	},
];

recipes.forEach(function(recipe) {
  console.log(recipe.title);
  console.log("Serves:" + recipe.servings);
  recipe.ingredients.forEach(function(ingredient) {
    console.log(ingredient);
  });
  console.log("");
});

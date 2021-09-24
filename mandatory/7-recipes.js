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
  {
    title: "Apple Crumble Smoothie",
    servings: 4,
    ingredients: [
      "4 Apples",
      "1 tsp ground cinnamon",
      "1 pinch ground nutmeg",
      "80 g rolled oats",
      "40 g blanched almonds",
      "800 g milk",
      "200 g ice cubes"
    ]
  },

  {
      title: "Chocolate Sauce",
      servings: "4",
      ingredients: [
          "225g dark chocolate",
          "100g double cream",
          "40g golden syrup",
          "20g butter",
          "1 pinch fine sea salt"
      ]
  },

  {
      title: "Olive Spread",
      servings: "2",
      ingredients: [
          "120g pitted olives",
          "45g pecan nuts",
          "170g cream cheese",
          "95g mayo"
      ]
  },
  {
      title: "Ice Cream",
      servings: "4",
      ingredients: [
          "70g sugar",
          "1/2 tsp vanilla extract",
          "300g frozen berries",
          "150g soya yoghurt"
      ]
  },

  {
      title: "Fruit and Yoghurt Puree",
      servings: "2",
      ingredients: [
          "150g plain yoghurt",
          "1 baby biscuit",
          "90g oranges",
          "90g apples"
      ]
  }
]; 


recipes.forEach(recipe => {
    console.log(recipe.title);
    console.log(`Serves: ${recipe.servings}`)
    console.log("Ingredients: ")
    recipe.ingredients.forEach((i) => console.log(i));
    console.log('\n')
})
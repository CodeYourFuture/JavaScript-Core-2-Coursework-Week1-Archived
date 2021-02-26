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
      Title: "Meat and fish",
      Servings: 15,
      Ingredients: ["chicken breast", "port loin or salmon fillets", "protein"]
    },
    {
      Title: "bread",
      Servings: 7,
      Ingredients: [
        "flour",
        "half cup of water",
        "one cup of Milk",
        "half spoon of salt"
      ]
    },
    {
      Title: "Vanilla cup cakes",
      Servings: 12,
      Ingredients: [
        "two cup of flour",
        "half  teaspoon salt",
        "two teaspoon baking powder",
        "two eggs",
        "one cup of milk",
        "one teaspoon vanilla essence"
      ]
    },
    {
      Title: "Cornflake",
      Servings: 5,
      Ingredients: ["Boiling milk", "sugar"]
    },
    {
      Title: "Fried eggs",
      Servings: 4,
      Ingredients: ["buy the best eggs", "salt", "cubes"]
    }
  ];
  for (let keys in recipes) {
    console.log(recipes[keys].Title);
    console.log(`Serves: ${recipes[keys].Servings}`);
    console.log("Ingredients");
    recipes[keys].Ingredients.forEach((element) => {
      console.log(element);
    });
  }
  
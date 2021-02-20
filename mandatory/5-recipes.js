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
    Title: "ghormeh",
    Serves: 4,
    Ingredients: ["Dill", "Meat", "beans"],
  },
  {
    Title: "kateh",
    Serves: 8,
    Ingredients: ["Dill", "rice", "oil"],
  },
  {
    Title: "gheime",
    Serves: 5,
    Ingredients: ["denital", "Meat", "potato"],
  },
  {
    Title: "fish",
    Serves: 2,
    Ingredients: ["fish", "oil", "parslay"],
  },
  {
    Title: "homos",
    Serves: 14,
    Ingredients: ["tahini", "bean", "garlic"],
  },
  {
    Title: "coffee",
    Serves: 6,
    Ingredients: ["coffee", "milk", "honey"],
  },
];
recipes.forEach((Element)=>{
    console.log(Element.Title);
    console.log("Serves: " + Element.Serves);
    console.log("Ingredients:");
    for (Ingredient in Element.Ingredients) console.log(Element.Ingredients[Ingredient]);
    console.log("\n");
})
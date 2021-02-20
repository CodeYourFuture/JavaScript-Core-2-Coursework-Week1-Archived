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
    Title: "Mole",
    Serves: 2,
    Ingredients:
    ["cinnamon",
    "cumin",
    "cocoa"]
    },
    {
    Title: "Hemp Milk",
    Serves: 4,
    Ingredients:
    ["vanilla extract",
    "hemp powder",
    "water",
    "ice",
    "sugar syrup"]
    },
    {
    Title: "Tomato Pasta",
    Serves: 2,
    Ingredients:
    ["pasta",
    "passata",
    "carrot",
    "celery",
    "white vinegar"]
    },
    {
    Title: "Jam on toast",
    Serves: 2,
    Ingredients:
    ["bread",
    "coconut oil",
    "strawberry jam"]
    },
    {
    Title: "Porridge",
    Serves: 2,
    Ingredients:
    ["oats",
    "protein powder",
    "banana"]
    },
];
for (let i of recipes) {
  console.log(i.Title);
  console.log("Serves:",i.Serves);
  console.log("Ingredients:");
  i.Ingredients.forEach(x=>console.log(x));
  console.log("");
}
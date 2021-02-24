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
        Title: "Menemen",
        Serves: 2,
        Ingredients: ["egg", "tomato", " green pepper"],

    },
    {
        Title: "Easy butter chicken",
        Serves: 3,
        Ingredients: ["chicken", "potato", "mix veggies"]

    },
    {
        Title: "Easy pancakes",
        Serves: 2,
        Ingredients: ["2 eggs", "milk", "flour"]

    },
    {
        Title: "Hard pancakes",
        Serves: 2,
        Ingredients: ["4 eggs", " 2 milks", "flour"]
    },
    {
        Title: "Easy meatballs",
        Serves: 4,
        Ingredients: ["500g lean beef mince", "tomato", " green pepper"]
    }
];

console.log(recipes);

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

let recipes = [{
    title: "Chocolate Cake",
    servings: 2,
    ingredients: [
        "chocolate",
        "sponge",
        "whipping cream",
        "oven"
    ]
},
{
    title: "tiramisu",
    servings: 4,
    ingredients: [
        "mascarpone",
        "marsala wine",
        "eggs",
        "lady fingers",
        "coffee"
    ]
},
{
    title: "banofee pie",
    servings: 5,
    ingredients: [
        "bananas",
        "biscuits",
        "caramel",
        "whipping cream",
        "butter"
    ]
},
{
    title: "tomato soup",
    servings: 5,
    ingredients: [
        "tomato paste",
        "sugar",
        "salt",
        "basil",
        "water"
    ]
},
{
    title: "burger",
    servings: 1,
    ingredients: [
        "mince meat",
        "burger bread",
        "burger sauce",
        "salt",
        "pepper"
    ]
}
];

recipes.map(item => {console.log(item.title);
    console.log(`Serves: ${item.servings}`);
    console.log("Ingredients: ")
    item.ingredients.map(item1 => console.log(item1))
    console.log(`\n`)
});


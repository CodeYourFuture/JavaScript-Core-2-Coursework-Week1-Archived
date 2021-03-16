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

let recipes = [{
        Title: "Curry",
        Servings: 6,
        Ingredients: ["Onions", 'Potatoes', 'Chicken', 'Tomatoes', 'Peas', 'Coconut Milk', 'Rice', 'olive oil']

    },
    {
        Title: "Chicken fajitas",
        Servings: 3,
        Ingredients: ["chicken ", "onion ", "red pepper ",
            "red chilli ", "paprika ", "coriander ",
            "tortillas ", "garlic ", "olive oil"
        ]
    },
    {
        Title: "Carrot cake",
        Servings: 10,
        Ingredients: [" plain yogurt", "6 eggs", "orange zested",
            "self-raising flour", "light muscovado sugar", "cinnamon",
            "nutmeg", 'peeled carrots', 'mixed raisins'
        ]
    },
    {
        Title: "Chocolate Cake",
        Servings: 8,
        Ingredients: ['Flour', 'Cocoa Powder', '5 eggs', 'baking powder', 'olive oil', 'water']
    }
];

for (recipe of recipes) {
    console.log(recipe.Title);
    console.log(`Serves: ${recipe.Servings}`);
    console.log(`Ingredients: ${recipe.Ingredients}\n`);
}
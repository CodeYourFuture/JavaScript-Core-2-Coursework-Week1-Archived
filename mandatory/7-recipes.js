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

let recipes = {
    steakAndChips : {
        title : "Steak and Chips",
        servings : 2,
        ingredients : [
            "Ribeye steaks",
            "Onions",
            "Green and Red Peppers",
            "Salt",
            "Pepper",
            "Paprika",
            "Butter",
            "Brown Sugar"
        ]
    },
    icedCoffee : {
        title : "Iced Coffee",
        servings : 5,
        ingredients : [
            "Instant Coffee",
            "Brown Sugar",
            "Milk",
            "Ice",
            "Water"
        ]
    },
    scrambledEggOnToast : {
        title : "Scrambled Egg on Toast",
        servings : 1,
        ingredients : [
            "Bread",
            "Eggs",
            "Milk",
            "Butter",
            "Salt",
            "Pepper"
        ]
    },
    baconAndEggSandwich : {
        title : "Bacon and Egg Sandwich",
        servings : 1,
        ingredients : [
            "Bacon",
            "Bread",
            "Mustard",
            "Butter",
            "Eggs"
        ]
    },
    fishAndChips : {
        title : "Fish and Chips",
        servings : 2,
        ingredients : [
            "Fresh Cod",
            "Potatoes",
            "Lemon",
            "Salt",
            "Pepper"
        ]
    }
};

//separate recipe listings, each as their own "console.log();" :

//Steak and Chips
console.log(`${recipes.steakAndChips.title}
Serves: ${recipes.steakAndChips.servings}
Ingredients:
${recipes.steakAndChips.ingredients[0]}
${recipes.steakAndChips.ingredients[1]}
${recipes.steakAndChips.ingredients[2]}
${recipes.steakAndChips.ingredients[3]}
${recipes.steakAndChips.ingredients[4]}
${recipes.steakAndChips.ingredients[5]}
${recipes.steakAndChips.ingredients[6]}
${recipes.steakAndChips.ingredients[7]}

`);

//Iced Coffee
console.log(`${recipes.icedCoffee.title}
Serves: ${recipes.icedCoffee.servings}
Ingredients:
${recipes.icedCoffee.ingredients[0]}
${recipes.icedCoffee.ingredients[1]}
${recipes.icedCoffee.ingredients[2]}
${recipes.icedCoffee.ingredients[3]}
${recipes.icedCoffee.ingredients[4]}

`);

//Scrambled Egg on Toast
console.log(`${recipes.scrambledEggOnToast.title}
Serves: ${recipes.scrambledEggOnToast.servings}
Ingredients:
${recipes.scrambledEggOnToast.ingredients[0]}
${recipes.scrambledEggOnToast.ingredients[1]}
${recipes.scrambledEggOnToast.ingredients[2]}
${recipes.scrambledEggOnToast.ingredients[3]}
${recipes.scrambledEggOnToast.ingredients[4]}
${recipes.scrambledEggOnToast.ingredients[5]}

`);

//Bacon and Egg Sandwich
console.log(`${recipes.baconAndEggSandwich.title}
Serves: ${recipes.baconAndEggSandwich.servings}
Ingredients:
${recipes.baconAndEggSandwich.ingredients[0]}
${recipes.baconAndEggSandwich.ingredients[1]}
${recipes.baconAndEggSandwich.ingredients[2]}
${recipes.baconAndEggSandwich.ingredients[3]}
${recipes.baconAndEggSandwich.ingredients[4]}

`);

//Fish and Chips
console.log(`${recipes.fishAndChips.title}
Serves: ${recipes.fishAndChips.servings}
Ingredients:
${recipes.fishAndChips.ingredients[0]}
${recipes.fishAndChips.ingredients[1]}
${recipes.fishAndChips.ingredients[2]}
${recipes.fishAndChips.ingredients[3]}
${recipes.fishAndChips.ingredients[4]}

`);
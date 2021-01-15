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

let recipes = {
  Biscuit: {
    Serves: 5,
    Ingredients: [
      "flour",
      "sugar",
      "milk",
      "butter",
      "bakingSoda",
      "bakingPowder",
    ],
  },

  Shake: {
    Serves: 5,
    Ingredients: ["milk", "bananas"],
  },

  Rice: {
    Serves: 4,
    Ingredients: ["rice", "onions", "butter", "water"],
  },

  Chapati: {
    Serves: 10,
    Ingredients: ["flour", "water"],
  },

  Pasta: {
    Serves: 6,
    Ingredients: ["pasta", "vegetables", "sauce"],
  },
};

for (let key of Object.keys(recipes)) {
    let emptySpace = "";	 
    for (let key2 of Object.values(recipes[key].Ingredients)) {
        emptySpace = emptySpace + key2 + "\n";
    }	
    console.log(`${key}\nServes: ${recipes[key].Serves}\nIngredients:\n${emptySpace.split(",").join(": ")}\n`);   
 };
    

/*for (var i in recipes) 
{
   console.log(i);
   for (var j in recipes[i]) 
     {
      console.log(" " + recipes[i] + "\n" + [j]);;
     }
}*/
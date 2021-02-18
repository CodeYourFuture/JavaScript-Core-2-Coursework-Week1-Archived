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
        Title: "Pizza",
        Servings: 2,
        Ingredients:["cheese","tomato","greenPepper"],
   },

    {
   
        Title: "CarrotCake",
        Servings: 5,
        Ingredients:["carrot","sugar","vanilla"]
    },

    { 
    
        Title: "HamBurger",
        Servings: 4,
        Ingredients:["lettuce","fresh tomato","burger"]
    
    },

    { 
        Title: "FishAndChips",
        Servings: 7,
        Ingredients:["Fish","sauce","chips"]
    },

    { 
  
        Title: "DonnerKebab",
        Servings: 3,
        Ingredients:["lamb","red cabbage","cucumber"]
        }

];



recipes.forEach(recipe =>{
  console.log(recipe.Title);
  console.log("Serves:" , recipe.Servings);
  recipe.Ingredients.forEach(ingredient => {
    console.log(ingredient);
  });
 console.log("\n");
});
/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favourite recipe. 

It should have properties for 

- Title (a string), 
- Servings (a number), and 
- Ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe 
information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 PancakeRecipe

**/

 

// console.log(Object.Keys.Ingredients)
let ingredientsContainer = []
//let recipeArray = Object.values(PancakeRecipe.Ingredients)

function getsListOFIngredients(recipeArray) {
    for (let i = 0; i <recipeArray.length; i++) {
        ingredientsContainer.push(recipeArray[i])
                console.log(`${recipeArray[i]}`); 

    }
}

let PancakeRecipe = {
 Title:"Pancakes",
 Servings: 2,
 Ingredients: ["milk","butter","eggs","flour","sugar"]
};

let sandwichRecipe = {
  Title: "Cheese Sandwich",
  Servings: 2,
  Ingredients: ["butter", "Cheddar cheese", "olives", "cucumber", "oregano"],
};


let riceRecipe = {
  Title: "Rice",
  Servings: 2,
  Ingredients: ["rice", "Carrots", "Onions", "Olive oil", "salt"],
};

let fruitSalad = {
  Title: "Fruit Salad",
  Servings: 2,
  Ingredients: ["apples","honey", "pear", "pineapple", "bananas"],
};
let spanishChicken = {
  Title: "Spanish Chicken",
  Servings: 2,
  Ingredients: ["chicken breast", "egg whites", "salt", "breadcrumbs"],
};




let recipes = [PancakeRecipe, sandwichRecipe, riceRecipe, fruitSalad, spanishChicken];

recipes.map(item => {
    console.log(item.Title)
    console.log("serves: ", item.Servings)
    console.log("Ingredients: ")
    
    item.Ingredients.map(Ingredient => console.log(Ingredient))
    console.log(" ")
})




//console.log(PancakeRecipe.Title)
//console.log("Serves:", PancakeRecipe.Servings)
//console.log("Ingredients:")
//console.log(Object.keys(PancakeRecipe)[2])
//console.log(Object.keys(PancakeRecipe[2]))
//getsListOFIngredients(recipeArray)
//console.log("Array", recipeArray);
//console.log(getsListOFIngredients(recipeArray))
//console.log("Ingredients:", ...PancakeRecipe.Ingredients)


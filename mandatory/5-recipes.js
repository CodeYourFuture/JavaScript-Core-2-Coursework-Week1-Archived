/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipes. 

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
        Title: "Scrambled eggs",
    Servings: 2,
    Ingredients: ["eggs", "bread", "butter"]
},
    {
    Title: "Boeber",
    Servings: 4, 
    Ingredients: ["Vermicelli", "Milk", "Cinnamon", "Sugar","Sago"]
},
 {
    Title: "Koesisters",
    Servings: 6, 
    Ingredients: ["Cake Flour", "Milk", "Aniseed", "Sugar", "Baking powder","Water"]
},
{
    Title: "Spaghetti bolognese",
    Servings: 4, 
    Ingredients: ["Spaghetti", "Mince", "Tomato Paste", "Sugar", "Cinnamon Sticks","Black Pepper","Salt","Tomatoes","Basil","Bay leaves","Pimento"]
},
{
    Title: "Chicken curry masala",
    Servings: 4, 
    Ingredients: ["Skinless chicken breasts", "Onion", "Salt", "Curry powder","Bay leaves","Tumeric powder","Masala powder","Basmati rice","Tomato salad"]
},

];

let recipeCard = function (recipeArr){
for (let recipe of recipeArr){
console.log(recipe.Title);
console.log("Serves: ", recipe.Servings);
console.log("Ingredients: ");
recipe.Ingredients.forEach(element => {
    console.log(element);
});
console.log(" ");
}
};

recipeCard(recipes);
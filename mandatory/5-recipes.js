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
        tittle: "pap",
        serves: 2,
        ingridients: ["flour", "water", "vegetables"],
    },
    {
        title: "cake",
        serves: 2,
        ingridients: ["cake-flour", "baking powder", "eggs", "butter"],
    },
    {
        tittle: "mash potato",
        serves: 2,
        ingridients: ["potato", "water", "chees", "molk"],
    },
    {
        tittle: "potato salad",
        serves: 2,
        ingridients: ["cooked potato", "cucumber", "carrot", "pepper", "mayonise"],
    },
    {
        tittle: "beef pie",
        serves: 2,
        ingridients: ["cake flour", "beef", "vegetables"],
    }
    

];

console.log(recipes);

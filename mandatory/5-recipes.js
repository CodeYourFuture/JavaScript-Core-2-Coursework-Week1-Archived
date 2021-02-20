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
    title:'Jollof',
    servings: 5,
    ingredients: ['Rice', 'Tomato', 'Onions', 'Spices', 'Olive Oil']
    },
    {
    title:'Beans',
    servings: 5,
    ingredients: ['Beans', 'Palm Oil', 'Pepper']
    },
    {
    title:'Greek Salad',
    servings: 5,
    ingredients: ['Cucumber', 'Tomato', 'Onions', 'SBlack Olives', 'Olive Oil']
    },
    {
    title:'Egusi',
    servings: 5,
    ingredients: ['Melon', 'Palm Oil', 'Locust Beans', 'Beef']
    },
    {
    title:'Spaghetti Bolognese',
    servings: 5,
    ingredients: ['Spaghetti', 'Tomato', 'Onions', 'Olive Oil']
    }
]

let recipeLen = recipes.length;

for (let i=0; i<recipeLen; i++){
    for (let recipe in recipes[i]){
        console.log(recipes[i].title);
        console.log(`Serves: ${recipes[i].servings}`);
        //let items = recipes[i].ingredients.length;
            console.log(`Ingredients: ${recipes[i].ingredients}`);
    }
}



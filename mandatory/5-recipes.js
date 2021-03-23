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
        Title: "Black tahini noodles",
        Servings: 2,
        Ingredients: ["fine rice noodle","limes","punnet of cress","black sesame seeds","teriyaki sauce"]
    },
    {
        Title: "Liver, macon & onions",
        Servings: 3,
        Ingredients: ["red onion","sage","sourdough bread","macon","liver"]
    },
    {
        Title: "Lentil salad",
        Servings: 4,
        Ingredients: ["anchovies","lemon","broccoli","chillies","lentils"]
    },
    {
        Title: "Lamb stew",
        Servings: 5,
        Ingredients: ["rosemary","lamb","olives","onions","tomatoes"]
    },
    {
        Title: "Tuna pasta",
        Servings: 6,
        Ingredients: ["pasta shells","capers","tomatoes","black oregano","tuna"]
    }
];

for (recipe of recipes){
    console.log(recipe.Title);
    console.log('Serves: ${recipe.Servings}');
    console.log('Ingredients: ${recipe.Ingredients}\n');
}
    


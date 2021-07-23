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
    Bolany:{
        Title : "Bolany",
        Serves: 4,
        Ingredients: ["potato","onion","salt", "pepper","oil", "puff pastry"]
    },
    Mantoo: {
        Title: "Mantoo",
        Serves: 10,
        Ingredients: ["onion","mince meat","garlic yogurt","fresh past"]
    },
        Samosa: {
        Title: "Samosa",
        Serves: 20,
        Ingredients: ["onion","mince meat","potatoe","puff pastry"]
    },
        Jelaibee: {
        Title: "Jelaibee",
        Serves: 5,
        Ingredients: ["jelaibee mix","syrup","piping bag","lot of oil"]
    },
        "Speghetti Marinara" : {
        Title: "Speghetti Meatballs",
        Serves: 4,
        Ingredients: ["onion","garlic","marinara sauce","fresh speghetti","meat balls"]
    }

};
for(const mealPlan in recipes){
 console.log(mealPlan);
 console.log('Serves:' + recipes[mealPlan].Serves);
 console.log('Ingredients:');
 recipes[mealPlan].Ingredients.forEach(element => {
   console.log(element);
 });}


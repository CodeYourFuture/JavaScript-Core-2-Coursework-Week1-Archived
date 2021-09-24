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
    recipe1 : {
        title : "ChickenCurry",
        servings : 2,
        ingredients : ["chicken", "Curry paste", "Onion" , "Mango chutney"]
       },
       recipe2: {
        title : "CousCous ",
        servings : 3,
        ingredients : ["Cous Cous", "Harissa paste", "Potatoes", "Sweet potatos"]
       },
       recipe3: {
        title : "burger",
        servings : 4,
        ingredients : ["Burger Buns", "beef patty", "lettuces ", "tomatoes"]
       },
       recipe4: {
        title : "hot dog",
        servings : 3,
        ingredients : ["bread", "hot dog", "ketchup"]
       },
       recipe5: {
        title : "Pasta",
        servings : 3,
        ingredients : ["pasta", "chicken", "passata sauce", "cheese" , "double cream"]
       }
};

for (let key in recipes){
    console.log(recipes[key])
   };
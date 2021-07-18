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
    title: "",
    serves: 0,
    ingredients: [],

 titlef: function(title) {
    
    return this.title = title;
    
},
servef: function(serve) {
    
    return this.serves =serve;
    
},
 ing: function(ingredients) {
    
     this.ingredients = ingredients;
    this.ingredients.forEach(element => { console.log(`${element}`) }
         
  ); 
}


};



console.log(recipes.titlef("mole"));
console.log(recipes.servef(2));
recipes.ing(["mole","dfg ","fdg","dfg"]);

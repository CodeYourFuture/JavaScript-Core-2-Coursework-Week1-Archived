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
    title:'Nutty chicken satay strips',
    serves: 2, 
    ingredients: [' 2 tbsp chunky peanut butter',
                 '1 garlic clove',
                 '1 tsp Madras curry powder',
                 'few shakes soy sauce',
                 '2 tsp lime juice',
                 '2 skinless chicken breast',
                 'cucumber cut into fingers'
                  ]    
};

console.log(recipes.title);
console.log(`Serves ${recipes.serves}`);
console.log('Ingredients:');
recipes.ingredients.forEach(function (ingredient) {
  console.log(ingredient);
});


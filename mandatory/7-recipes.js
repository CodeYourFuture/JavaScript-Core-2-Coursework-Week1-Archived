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

const recipes = {
    pizza: {
        title: 'Margarita',
        service: 6,
        ingredients: ['dough', 'mozzarella', 'tomato paste']
    },
    soup: {
        title: 'Lentil Soup',
        service: 8,
        ingredients: ['red lentils', 'onion', 'cumin', 'water', 'salt'] 
    },
    salads: {
        title: 'Four Seasons',
        service: 4,
        ingredients: ['lettuce', 'red onion', 'cucumber', 'red pepper', 'olive oil', 'vinegar', 'salt'] 
    },
    dessert: {
        title: 'Chocolate Souffle',
        service: 4,
        ingredients: ['dark chocolate', 'eggs', 'cocoa', 'milt', 'flour', 'butter'] 
    }
};

for ( const menu in recipes) {
    console.log(`** ${recipes[menu].title} **`);
    console.log('-------------------')
    console.log(`serves: ${recipes[menu].service}`);
    console.log(`Ingredients:`);
    recipes[menu].ingredients.forEach(element => {
        console.log(element);
    });
    console.log('=====================')
}

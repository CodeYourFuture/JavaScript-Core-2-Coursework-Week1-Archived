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

    title:'Soup',
    serves : 4,
    ingredients:['lentil','tomato paste','salt','water']
    },
      { 

    title:'Pizza',
    serves : 5,
    ingredients:['dough','sausage','cheese']
    },
      { 

    title:'Kebab',
    serves : 5,
    ingredients:['meat','pepper','salt','spices']
    },
      { 

    title:'Pasta',
    serves : 3,
    ingredients:['pasta','tomato paste','yoghurt']
    },
      { 

    title:'Cake',
    serves : 4,
    ingredients:['dough','sugar','milk','egg']
    }


];

for (let argument of recipes) {
  console.log(argument.title);
  console.log(`Serves: ${argument.serves}`);
  console.log('Ingredients: ');
  for (let food of argument.ingredients) {
    console.log(food);
    
  }
console.log('\n');
}


// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
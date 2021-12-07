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
    spaghetti : {
      title :'Classic spaghetti',
      serves : 8,
      ingredients :['medium onion', 'olive oil', 'garlic cloves','chopped tomatoes','mozzarella','dried spaghetti']
    },
    Bread : {
      title :'Garlic Bread',
      serves : 5,
      ingredients :['ciabatta loaves', 'butter', 'garlic cloves','salt','handful parsley']
    },
    fish : {
      title :'Fish & Chips',
      serves : 4,
      ingredients :['olive oil', 'lemon juice', 'cornflour', 'fish']
    },
    kebab : {
      title :'Greek chicken kebab',
      serves : 6,
      ingredients :['skinless chicken thighs', 'garlic cloves', 'lemon juice','paprika']
    },
    stack : {
      title :'Stack',
      serves : 3,
      ingredients :['lean beef mince', 'onion', 'paprika', 'salt', 'oil', 'garlic','chopped tomatoes']
    }
  };
  
  for(const key in recipes){
    console.log(`${recipes[key].title}`);
    console.log(`Serves: ${recipes[key].Serves}`);
    console.log('Ingredients:');
    recipes[key].ingredients.forEach(element => {
      console.log(element);
    });
    console.log('^^^^^^^^^^^^^^^^^^^^');
  } 


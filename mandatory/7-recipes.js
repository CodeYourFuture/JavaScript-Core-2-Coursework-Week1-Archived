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
  steak : {
    names:'Sirloin Steak',
    service : 2,
    ingredients :['Sirloin Beef', 'French fires', 'Garlic butter']
  },
  pasta : {
    names:'Pasta Alfredo',
    service : 3,
    ingredients :['Penne', 'cream', 'chicken','mashroom','Parmigiano']
  },
  spagethi : {
    names:'Spaghetti Carbonara',
    service : 4,
    ingredients :['spaghetti', 'bacon', 'pecorino cheese', 'eggs', 'parmesan', 'unsalted butter']
  },
  salmon : {
    names:'Teriyaki salmon',
    service : 2,
    ingredients :['salmon fillet', 'dark soy sauce', 'egg noodles', 'ginger']
  },
  burger
 : {
    names:'Cheeseburger',
    service : 1,
    ingredients :['burger', 'french fries', 'Goda cheese', 'oil']
  }
};

for(let recipe in recipes){
  console.log(`${recipes[recipe].names}`);
  console.log(`Serves: ${recipes[recipe].service}`);
  console.log('Ingredients');
  recipes[recipe].ingredients.forEach(element => {
    console.log(element);
  });
  console.log('######## Maziar\'s recepies ################');
}


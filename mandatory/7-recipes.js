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
  title: '',
  serves: 0,
  ingredients: [],

  getTitle: function (title) {
    return (this.title = title)
  },
  getServings: function (serves) {
    return (this.serves = serves)
  },
  getIngredients: function (ingredients) {
    this.ingredients = ingredients
    this.ingredients.forEach(element => {
      console.log(`${element}`)
    })
  }
}

///////////////////////////////1

console.log(recipes.getTitle('Mole'))
console.log(`Serves: ${recipes.getServings(2)}`)
console.log('Ingredients:')
recipes.getIngredients(['cinnamon', 'cumin', 'cocoa'])
/////////////////////////////////////2
console.log('\n')
console.log(recipes.getTitle('Custard'))
console.log(`Serves: ${recipes.getServings(2)}`)
console.log('Ingredients:')
recipes.getIngredients(['custardpowder', 'milk', 'banana'])
/////////////////////////////////////3

console.log('\n')
console.log(recipes.getTitle('Pizza'))
console.log(`Serves: ${recipes.getServings(4)}`)
console.log('Ingredients:')
recipes.getIngredients(['pizzacrust', 'toppings', 'oregano', 'sauce'])
/////////////////////////////////////4

console.log('\n')
console.log(recipes.getTitle('Omelette'))
console.log(`Serves: ${recipes.getServings(3)}`)
console.log('Ingredients:')
recipes.getIngredients(['eggs', 'mashrooms', 'spices', 'garnishings'])
/////////////////////////////////////5

console.log('\n')
console.log(recipes.getTitle('CheeseSandwich'))
console.log(`Serves: ${recipes.getServings(2)}`)
console.log('Ingredients:')
recipes.getIngredients(['cheese', 'toast', 'lettuce', 'tomatoes', 'mayo'])

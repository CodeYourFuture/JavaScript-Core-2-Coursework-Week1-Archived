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
let recipes=[
 {
  title: 'Mole',
  serves: 2,
  ingredients: ['cinnamon','cocoa','cumin' ]},
 {
  title: 'Custard',
  serves: 5,
  ingredients: ['milk','banana','custardpowder' ]},
{
 title: 'sandwich',
  serves: 2,
  ingredients: ['sandwich','chicken','lettuce','mayo' ]},

 {
  title: 'Soup',
  serves: 2,
  ingredients: ['sweetcorn','chicken','cornflour','soyasauce','egg' ]},

 {
  title: 'Omlette',
  serves: 4,
  ingredients: ['eggs','mashrooms','spices' ]}]


 
    recipes.forEach(element => {
      console.log(`${element.title}`)
      console.log(`${element.serves}`)
      element.ingredients.forEach(element=>console.log(element))
    })


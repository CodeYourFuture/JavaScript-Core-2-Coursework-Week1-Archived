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
   title: 'Pizza',
   serves: 2,
   ingredients: ['pizza dough', 'Mozarella', 'Pizza sauce'],

},
{
    title: 'Beans on toast',
    serves: 1,
    ingredients: ['Beans', 'Bread', 'Butter'],
},
{
    title: 'Pasta Bake',
    serves: 4,
    ingredients: ['Pasta', 'Pasta sauce', 'Cheese'],
},

{
    title: 'Bangers and mash',
    serves: 2,
    ingredients: ['Sausages', 'Potatoes', 'Gravy'],
},

{
    title: 'Apple pie and custard',
    serves: 2,
    ingredients: ['Apples', 'Custard', 'Shortcrust pastry'],

}
];

for (i of recipes) {
	console.log(i.title);
	console.log(`Serves: ${i.serves}`);
	console.log("Ingredients:");
	for (j of i.ingredients) {
		console.log(j);
	}
}
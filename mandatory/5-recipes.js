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
    title: "Hot Chocolate",
    serves: 1,
    ingredients: ['cocoa', 'milk']
    },

    {
        title: "Beans On Toast",
    serves: 1,
    ingredients:['beans', 'toast']
    },
    {
    title: "Cheese On Toast",
    serves: 3,
    ingredients: ['cheese', 'toast']
    },
    {

    title: "apples",
    serves: 3,
    ingredients: ['apple', 'cinnamon']
    },
    {

    title: "cake",
    serves: 8,
    ingredients: ['flour', 'sugar', 'butter']
    }

];

for (i of recipes) {
	console.log(i.title);
	console.log(`Serves: ${i.serves}`);
	console.log("Ingredients:");
	for (j of i.ingredients) {
		console.log(j);
	}}
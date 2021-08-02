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

let recipe1 = {
	title: 'Pizza',
	servings: 6,
	ingredients: ['dough', 'water', 'salt', 'sugar', 'yeasts', 'olive oil'],
};

console.log(recipe1.title);
console.log('Serves:', recipe1.servings);
console.log('Ingredients:');
recipe1.ingredients.forEach((ingredient) => console.log(ingredient));
console.log('');

let recipe2 = {
	title: 'Tea',
	servings: 1,
	ingredients: ['tea', 'water'],
};

console.log(recipe2.title);
console.log('Serves:', recipe2.servings);
console.log('Ingredients:');
recipe2.ingredients.forEach((ingredient) => console.log(ingredient));
console.log('');

let recipe3 = {
	title: 'Coffee',
	servings: 1,
	ingredients: ['coffee', 'water'],
};

console.log(recipe3.title);
console.log('Serves:', recipe3.servings);
console.log('Ingredients:');
recipe3.ingredients.forEach((ingredient) => console.log(ingredient));
console.log('');

let recipe4 = {
	title: 'Pasta',
	servings: 1,
	ingredients: ['pasta', 'water', 'salt', 'oil'],
};

console.log(recipe4.title);
console.log('Serves:', recipe4.servings);
console.log('Ingredients:');
recipe4.ingredients.forEach((ingredient) => console.log(ingredient));
console.log('');

let recipe5 = {
	title: 'Salad',
	servings: 1,
	ingredients: ['cucumber', 'tomato', 'onion', 'salt', 'oil'],
};

console.log(recipe5.title);
console.log('Serves:', recipe5.servings);
console.log('Ingredients:');
recipe5.ingredients.forEach((ingredient) => console.log(ingredient));
console.log('');
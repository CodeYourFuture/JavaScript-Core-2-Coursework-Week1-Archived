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
    Title: 'spaghetti',
    Servings: 3,
    Ingredients: [
        'brown onions',
        'olive oil',
        'tomato',
        'basil',
        'garlic',
        'oregano',
        'pasta',
    ]
};
// console.log(recipes.Title, Object.entries(recipes.Servings), recipes.Ingredients);
console.log(recipes.Title);
console.log(`Servings: ${recipes.Servings}`);
console.log('Ingredients:');
console.log(recipes.Ingredients[0]);
console.log(recipes.Ingredients[1]);
console.log(recipes.Ingredients[2]);
console.log(recipes.Ingredients[3]);
console.log(recipes.Ingredients[4]);
console.log(recipes.Ingredients[5]);
console.log(recipes.Ingredients[6]);

console.log('\n');

let recipes2 = {
    Title: 'Garlic fried rice with crispy pork',
    Servings: 2,
    Ingredients: [
        'peanut oil',
        'garlic cloves', 
        'minced pork',
        'chilli bean sauce',
        'cooked jasmine rice',
    ]
}
console.log(recipes2.Title);
console.log(`Servings: ${recipes2.Servings}`);
console.log('Ingredients:');
console.log(recipes2.Ingredients[0]);
console.log(recipes2.Ingredients[1]);
console.log(recipes2.Ingredients[2]);
console.log(recipes2.Ingredients[3]);
console.log(recipes2.Ingredients[4]);

console.log('\n');

let recipes3 = {
    Title: 'Peach and pancetta salad',
    Servings: 1,
    Ingredients: [
        'red wine',
        'vinegar',
        'peaches', 
        'mint',
        'parsley',
        'basil',
        'cheese',
    ]
}
console.log(recipes3.Title);
console.log(`Servings: ${recipes2.Servings}`);
console.log('Ingredients:');
console.log(recipes3.Ingredients[0]);
console.log(recipes3.Ingredients[1]);
console.log(recipes3.Ingredients[2]);
console.log(recipes3.Ingredients[3]);
console.log(recipes3.Ingredients[4]);
console.log(recipes3.Ingredients[5]);
console.log(recipes3.Ingredients[6]);

console.log('\n');

let recipes4 = {
    Title: 'Chopped chilli chicken stir fry',
    Servings: 4,
    Ingredients: [
        'sunflower oil',
        'purple eggplants',
        'spring onion', 
        'chilli sauce',
        'Free Range Chicken Mince',
        'Steamed rice',
    ]
}
console.log(recipes4.Title);
console.log(`Servings: ${recipes2.Servings}`);
console.log('Ingredients:');
console.log(recipes4.Ingredients[0]);
console.log(recipes4.Ingredients[1]);
console.log(recipes4.Ingredients[2]);
console.log(recipes4.Ingredients[3]);
console.log(recipes4.Ingredients[4]);
console.log(recipes4.Ingredients[5]);

console.log('\n');

let recipes5 = {
    Title: 'Raw pad Thai',
    Servings: 3,
    Ingredients: [
        'zucchini',
        'carrots',
        'white cabbage', 
        'snow peas',
        'Thai basil leaves',
    ]
}
console.log(recipes5.Title);
console.log(`Servings: ${recipes2.Servings}`);
console.log('Ingredients:');
console.log(recipes5.Ingredients[0]);
console.log(recipes5.Ingredients[1]);
console.log(recipes5.Ingredients[2]);
console.log(recipes5.Ingredients[3]);
console.log(recipes5.Ingredients[4]);

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

let recipes = [
    {
    title : "Mole",
    serves : 2,
    ingredients : [
        "cinnamon", 
        "cumin", 
        "cocoa"]
    },

    {
        title : "Pizza",
        serves : 2,
        ingredients : [
            "Flour",
            "Water",
            "Tomato sauce",
            "Cheese",
            "Chicken",
            "Onions",
        ]
    },

    {
        title : "Omellete",
        serves : 1,
        ingredients : [
            "Eggs",
            "Salt",
            "Any other seasoning of your choice",
            "Oil"
        ]
    },

    {
        title : "Biryani",
        serves : "Everyone", 
        ingredients : [
            "Rice",
            "Water",
            "chicken",
            "Onions",
            "Tomatos",
            "Oil",
            "Chicken biryani masala/seasoning",
        ]
    },

    {
        title : "Beef Sirloine",
        serves: 1,
        ingredients: [
            "Beef steak",
            "Salt",
            "Pepper",
            "Seasoning of your choice"
        ]
    }
];

for(let key in recipes){
    console.log(`The recipe for ${recipes[key].title}`);
    console.log(`It serves ${recipes[key].serves}`);
    console.log('Ingredients');
    recipes[key].ingredients.forEach(item => {
        console.log(item);
    });
};

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
        title: "Noodles",
        serves: 1,
        ingredients: ["packet of Noodles", "hot water"],
    },
     {
        title: "Maarcis's Dinner",
        serves: 2,
        ingredients: ["chicken", "mackerel", "mushroom", "black pudding", "broccoli"],
    },
     {
        title: "Chorizo Sandwich",
        serves: 1,
        ingredients: ["bread", "chorizo"],
    },
     {
        title: "Tasty Rice",
        serves: 2,
        ingredients: ["rice", "tandoori sauce"],
    },
     {
        title: "Chips",
        serves: 4,
        ingredients: ["potatoes", "vegetable oil"],
    },
];

/*Noodles*/
console.log(recipes[0].title);
console.log(recipes[0].serves);
console.log(recipes[0].ingredients[0]);
console.log(recipes[0].ingredients[1]);

/*Maarcis's Dinner*/
console.log(recipes[1].title);
console.log(recipes[1].serves);
console.log(recipes[1].ingredients[0]);
console.log(recipes[1].ingredients[1]);
console.log(recipes[1].ingredients[2]);
console.log(recipes[1].ingredients[3]);
console.log(recipes[1].ingredients[4]);

/*Chorizo Sandwich*/
console.log(recipes[2].title);
console.log(recipes[2].serves);
console.log(recipes[2].ingredients[0]);
console.log(recipes[2].ingredients[1]);

/*Tasty Rice*/
console.log(recipes[3].title);
console.log(recipes[3].serves);
console.log(recipes[3].ingredients[0]);
console.log(recipes[3].ingredients[1]);

/*chips*/
console.log(recipes[4].title);
console.log(recipes[4].serves);
console.log(recipes[4].ingredients[0]);
console.log(recipes[4].ingredients[1]);
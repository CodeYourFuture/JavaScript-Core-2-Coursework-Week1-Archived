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
    Title: "Mac n Cheese",
    Serves:4,
    Ingredients: "Cheese, pasta, milk, flour, butter"
 },
 {
    Title: "Cake",
    Serves:6,
    Ingredients: "eggs, flour, butter, sugar,"
 },
 {
    Title: "Lasagne",
    Serves:7,
    Ingredients: "minced meat, tomato sauce, white sauce, lasagne sheets"
 },
 {
    Title: "Pancakes",
    Serves:4,
    Ingredients: "flour, eggs, milk, sugar"
 },
 {
    Title: "Chicken salad",
    Serves:4,
    Ingredients: "chicken, lettuce, olive oil, mayonnaise, parmesan"
 }
]

for (item of recipes){
    console.log(item.Title);
    console.log("Serves: " + item.Serves);
    console.log("Ingredients: " + item.Ingredients);
}
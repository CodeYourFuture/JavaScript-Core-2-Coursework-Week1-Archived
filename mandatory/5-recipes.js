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

let recipes = [{
    title: "Kebba",
    serves: 4,
    Ingredients: ["Bulgur", "Meat", "Salt", "Onions"]}, 
 {
    title: "Rice",
    serves: 2,
    Ingredients: ["Ricw", "Oil", "Salt", "Vermicelli"]},
    {
    title: "Biryani",
    serves: 3,
    Ingredients: ["Rice", "Chicken", "Salt", "Onions"]},
    {
    title: "Fish",
    serves: 1,
    Ingredients: ["Fish", "Potato", "Salt", "Onions"]},
    {
    title: "Beans",
    serves: 5,
    Ingredients: ["Rice", "Beans", "Tomato", "Potato"]}
];

recipes.forEach(receip => { 
    console.log(receip.title);
    console.log("serves:", receip.serves);
    console.log("Ingredients:");
    receip.Ingredients.map(ingr => console.log(ingr)) 
    console.log("----------------------")
}
)


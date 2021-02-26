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
    Title: "Noodles",
    Serves: 2,
    Ingredients:["packet of instant Noodles", " hot water"]
},
{
    Title: "Macaroni",
    Serves: 8,
    Ingredients:["500g dried pasta",
    " 1 tbsp butter",
    " 1 tbsp flour",
    " 1/2 cups whole milk",
    " 4 cups grated medium sharp cheddar cheese",
    " 1/2 Tbsp. salt",
    " 1/2 tsp. black pepper"]
},
{
    Title:"Cheese Cake",
    Serves: 5,
    Ingredients:["1L Yogurt", " 1 tin of condensed milk", " Tennis biscuits"]
},
{
    Title:"Lemon butter sauce",
    Serves: 6,
    Ingredients:["150gr margarine", " 250ml Fresh cream", " 2 tbsp lemon juice", " 1/4 tsp parsely"]
},
{
    Title:"Pizza",
    Serves: 4,
    Ingredients:["Dough", " jalapeno", " Sauce", " Cheese"]
}
];

recipes.forEach((element) => {
    let Title = element.Title;
    let Serves = element.Serves;
    let Ingredients = element.Ingredients;
    console.log(`Title: ${Title}\nServes: ${Serves}\nIngredients: ${Ingredients}\n `)
});
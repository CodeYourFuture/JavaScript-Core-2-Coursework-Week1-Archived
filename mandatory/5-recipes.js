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

    title: "Pancakes",
    serves: 2,
    ingredients: ["water","flower","two eggs","surger","milk","cinnamon",]

 },
 {
    title: "French Omelette",
    serves: 1,
    ingredients: ["6 eggs ", "avocado", "fried bacon","chives","Spinach","tomato","feta","Parmesan"],
  },
  {
    title: "Butternut Soup",
    serves: 6,
    ingredients: ["brown onions","butternut", "pumpkin", "full cream milk", "spices"],
  },
  {
    title: "Braai Pie",
    serves: 8,
    ingredients: ["two rolls of puff pastry ", "sautéed sliced mushrooms", "cheese", "cooked onion", "pepper seasoning","pne whisked egg"],
  },
  {
    title: "Stuffed Ham & Egg Bread",
    serves: 4,
    ingredients: ["diced tomatoes", "6 large eggs", "cooked ham", "crusty French loaf","cheddar cheese"],

  },
];


for (let elem of recipes) {
    console.log(elem.title);
    console.log("serves:", elem.serves);
    console.log("ingredients:");
    elem.ingredients.map((x) => console.log(x));
    console.log("");
  }

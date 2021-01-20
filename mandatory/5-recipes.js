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
    Title: "Fried Rice",
    Serves: 4,
    Ingredients: ["Rice", "Carrot", "Sweet Corn"],
  },
  {
    Title: "Yamarita",
    Serves: 4,
    Ingredients: ["Yam", "Egg", "Flour"],
  },
  {
    Title: "Beans",
    Serves: 4,
    Ingredients: ["Beans", "Red pepper", "Palm o"],
  },
  {
    Title: "Jollof Rice",
    Serves: 4,
    Ingredients: ["Rice", "Carrot", "Sunflower oil"],
  },
  {
    Title: "Goatmeat Rice",
    Serves: 4,
    Ingredients: ["Rice", "meat", "Green pepper"],
  },
];

for (let i = 0; i < recipes.length; i++) {
  for (let key in recipes[i]) {
      if (key === "Serves") {
      console.log("Serves:", recipes[i][key]);
    
      } else if (key === "Ingredients") {
      console.log("Ingredients:");
      for (let j = 0; j < recipes[i][key].length; j++) {
        console.log(recipes[i][key][j]);
      }
    
    } else {
      console.log(recipes[i][key]);
    }
  }
  
} 

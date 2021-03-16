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

let recipe1 = {
  title: "Chicken curry",
  serves: 4,
  ingredients: ["chicken", "potatoes", "onions", "curry spices"],
};

console.log(recipe1.title);
Object.keys(recipe1).forEach((key) => {    
  if (key === "serves") {
    console.log(`${key}: ${recipe1[key]}`);
  }
  if (key === "ingredients") {
    console.log("Ingredients:");
    recipe1[key].forEach((item) => console.log(item));
  }
});

let recipe2 = {
  title: "Beef stew",
  serves: 6,
  ingredients: ["beef", "potatoes", "onions", "veggies"],
};

console.log(recipe2.title);
Object.keys(recipe2).forEach((key) => {
  if (key === "serves") {
    console.log(`${key}: ${recipe2[key]}`);
  }
  if (key === "ingredients") {
    console.log("Ingredients:");
    recipe2[key].forEach((item) => console.log(item));
  }
});

let recipe3 = {
  title: "Spagetti",
  serves: 8,
  ingredients: ["mince", "spagetti", "tamatoes", "pepper"],
};

console.log(recipe3.title);
Object.keys(recipe3).forEach((key) => {
  if (key === "serves") {
    console.log(`${key}: ${recipe3[key]}`);
  }
  if (key === "ingredients") {
    console.log("Ingredients:");
    recipe3[key].forEach((item) => console.log(item));
  }
});

let recipe4 = {
  title: "Mac and cheese",
  serves: 9,
  ingredients: ["macaroni", "macon", "cheese", "milk"],
};

console.log(recipe4.title);
Object.keys(recipe4).forEach((key) => {
  if (key === "serves") {
    console.log(`${key}: ${recipe4[key]}`);
  }
  if (key === "ingredients") {
    console.log("Ingredients:");
    recipe4[key].forEach((item) => console.log(item));
  }
});

let recipe5 = {
  title: "Chocolate cake",
  serves: 12,
  ingredients: ["eggs", "flour", "milk", "cocoa"],
};

console.log(recipe5.title);
Object.keys(recipe5).forEach((key) => {
  if (key === "serves") {
    console.log(`${key}: ${recipe5[key]}`);
  }
  if (key === "ingredients") {
    console.log("Ingredients:");
    recipe5[key].forEach((item) => console.log(item));
  }
});
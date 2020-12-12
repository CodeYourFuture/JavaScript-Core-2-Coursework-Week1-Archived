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
		title: "Tiramisu",
		servings: 5,
		ingredients: [
			"mascarpone",
			"eggs",
			"coffee",
			"chocolate"
		]
	},
	{
		title: "Pizza",
		servings: 1,
		ingredients: [
			"flour",
			"water",
			"passata"
		]
	},
	{
		title: "Millefoglie",
		servings: 4,
		ingredients: [
			"custard cream",
			"flour",
			"icing sugar"
		]
	}, 
	{
		title: "Piadina",
		servings: 1,
		ingredients: [
			"Piadina",
			"stracchino",
			"Parma ham"
		]
	},
	{
		title: "Stew",
		servings: 6,
		ingredients: [
			"onions",
			"bay leaves",
			"random vegetables"
		]
	}
];

for (i of recipes) {
	console.log(i.title);
	console.log(`Serves: ${i.servings}`);
	console.log("Ingredients:");
	for (j of i.ingredients) {
		console.log(j);
	}
	console.log();
}

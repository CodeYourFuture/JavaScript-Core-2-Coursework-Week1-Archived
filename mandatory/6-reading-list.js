/**

The Reading List
Keep track of which books you read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 recipes



=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you read it yet or not. 

If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [
	{
		title: "The Hobbit",
		author: "J.R.R. Tolkien",
		read: true
	},
	{
		title: "Algorithms",
		author: "Skiena",
		read: false
	},
	{
		title: "War and Peace",
		author: "L. Tolstoj",
		read: true
	},
	{
		title: "Historical dynamics",
		author: "Turchin",
		read: false
	},
	{
		title: "Macroalgas y fanerogamas marinas del Mediterraneo occidental",
		author: "C. Roriguez-Prieto",
		read: false
	}
];

for (i of books) {
	console.log(`${i.title} by ${i.author}`);
}
console.log();
for (i of books) {
	if (i.read) {
		console.log(`You already read "${i.title}" by ${i.author}`);
	} else {
		console.log(`You still need to read "${i.title}" by ${i.author}`);
	}
}
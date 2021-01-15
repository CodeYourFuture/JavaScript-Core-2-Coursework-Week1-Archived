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
    title: "Feel the fear and do but anyway",
    Author: "Susan Jeffers",
    read: true
    },

    {
    title: "Chicken Soup is good for the soul",
    Author: "various",
    read: true
    },

    {
    title: "Javascript for Dummies",
    Author: "Emily Vander Veer",
    read: false
    },

    {
    title: "The Little book of Life",
    Author: "unknown",
    read: false
    },

    {
    title: "Men are from Mars, Women are from Venus",
    Author: "John Gray",
    read: true
    },
];

for (i of books) {
    console.log(i.title);
    console.log(i.Author);
}

for (i of books) {
    if (i.read === true) {
        console.log(`You have read ${i.title} by ${i.Author}`);
    } else {
        console.log(`You still need to read ${i.title} by ${i.Author}`);
    }}

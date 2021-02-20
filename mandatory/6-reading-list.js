/**

The Reading List
Keep track of which books you've read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books
*
=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [
    { title: "The Davinci Code", author: "Dan Brown", isRead: true },
    { title: "Angels & Demons", author: "Dan Brown", isRead: true },
    { title: "The Lost Symbol", author: "Dan Brown", isRead: false },
    { title: "Inferno", author: "Dan Brown", isRead: false },
    { title: "Deception Point", author: "Dan Brown", isRead: true }
];
for (let literature of books) {
    console.log(`${literature.title} by ${literature.author}`)
    if (literature.isRead === true) {
        console.log(`You've already read ${literature.title} by ${literature.author}`);
    }
    else{ 
        console.log(`You still need to read ${literature.title} by ${literature.author}`);
    }
}
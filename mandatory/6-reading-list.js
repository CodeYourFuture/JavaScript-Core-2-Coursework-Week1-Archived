/**

The Reading List
Keep track of which books you've read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        read: true,
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        read: true,  
    },
    {
        title: "Blackberry Winter",
        author: "Sarah Jio",
        read: false, 
    },
    {
        title: "The Violets of March",
        author: "Sarah Jio",
        read: false,  
    },
    {
        title: "Farewell",
        author: "Ayse Kulin",
        read: true, 
    }
];

let logTheBooks = books.forEach((books) => {
console.log(`"${books.title} by ${books.author}"`);
 });



let readMessage = books.forEach((books) => { 
    if  (books.read === true) {
        console.log(`"You have already read "${books.title}" by ${books.author}."`);
    } else {
    return console.log(`"You still need to read "${books.title}" by ${books.author}."`);
    }
})


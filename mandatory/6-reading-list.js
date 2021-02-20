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
        title: "Peter Pan",
        author: "Andy Mangels",
        isRead: true
    },
    {
        title: "The Hundred and One Dalmatians",
        author: "Dodie Smith",
        isRead: false
    },
    {
        title: "Cinderella",
        author: "Brothers Grimm",
        isRead: false
    },
    {
        title: "The Little Mermaid",
        author: "Hans Christian Andersen",
        isRead: true
    },
    {
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        isRead: true
    }
];

//Find solution 1 below
books.forEach(book => console.log(`${book.title} by ${book.author}`));
//Find solution 1 above

//Find solution 1 below
//PENDING
//Find solution 1 above
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
        title: "Digital Fortress",
        author: "Dan Brown",
        isRead: true
    },
    {
        title: "Doctors Who Kill",
        author: "Carol Anne Davis",
        isRead: false
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        isRead: false
    },
    {
        title: "Les Miserables",
        author: "Victor Hugo",
        isRead: true
    },
    {
        title: "Kendine Hodgeldin",
        author: "Mirac Cagri Aktas",
        isRead: true
    }
];

// Exercise - 1
books.forEach(book => console.log(`${book.title} by ${book.author}`));

// Exercise - 2
books.forEach(book => book.isRead ? console.log(`I've already read ${book.title} by ${book.author}.`) : console.log(`I still need to read ${book.title} by ${book.author}.`))
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
        title: "Open",
        author: "Andre Agassi",
        read: true,
    },
    {
        title: "Rafa",
        author: "Rafael Nadal",
        read: true,
    },    
    {
        title: "Serena",
        author: "Serena Williams",
        read: false,
    },
    {
        title: "Fedegraphica",
        author: "Roger Federer",
        read: false,
    },
    {
        title: "The Inner Game of Tennis",
        author: "Timothy Galway",
        read: true,
    },
];

// exercise 1
// books.forEach(function (book) {
//   console.log(`${book.title} by ${book.author}`);
// });

// exercise 2
books.forEach(book =>{
  if (book.read) {
    console.log(`You've already read ${book.title} by ${book.author}`);
  } else {
    console.log(`You still need to read ${book.title} by ${book.author}.`);
  }
});
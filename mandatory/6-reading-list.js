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
    title : "The Hobbit",
    author : "J.R.R. Tolkien",
    read : false,
  },
  {
    title : "The Polar Bear Explorers' Club",
    author : "Alex Bell",
    read : true,
  },
  {
    title : "The Thief",
    author : "Megan Whalen Turner",
    read : true,
  },
  {
    title : "The Name of the Wind",
    author : "Patrick Rothfuss",
    read : false,
  },
  {
    title : "The Invisible Life of Addie LaRue",
    author : "V. E. Schwab",
    read : false,
  },
];

// display all the books
books.forEach(function(book) {
  console.log(`${book.title} by ${book.author}`);
});

// display if the book has been read or not
books.forEach(function(book) {
  if(book.read === true)
    console.log(`You've already read "${book.title}" by ${book.author}`);
  else
    console.log(`You still need to read "${book.title}" by ${book.author}`);
});
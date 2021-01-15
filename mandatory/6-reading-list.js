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
    title : "One Hobbit",
    author : "Mr 1",
    read : false,
  },
  {
    title : "Two Hobbit",
    author : "Ms 2",
    read : false,
  },
  {
    title : "Three Hobbit",
    author : "Dr 3",
    read : true,
  },
  {
    title : "Four Hobbit",
    author : "Prof. 4",
    read : true,
  },
  {
    title : "Five Hobbit",
    author : "Rev. 5",
    read : false,
  },
];


for (i = 0; i < books.length; i++) {
    console.log(`${books[i].title} by ${books[i].author}`);
};


books.forEach(function(book) {
  if(book.read === true)
    console.log(`You've already read "${book.title}" by ${book.author}`);
  else
    console.log(`You still need to read "${book.title}" by ${book.author}`);
});

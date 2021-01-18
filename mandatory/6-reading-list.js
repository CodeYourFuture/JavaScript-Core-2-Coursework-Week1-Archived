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
    Author: "John",
    bookTitle: "CCC",
    read: false,
  },
  {
    Author: "Ali",
    bookTitle: "PAK",
    read: true,
  },
  {
    Author: "Sarah",
    bookTitle: "ZZZ",
    read: false,
  },
  {
    Author: "Kalam",
    bookTitle: "YYY",
    read: false,
  },
  {
    Author: "Robi",
    bookTitle: "RTS",
    read: true,
  },
];



let titleAuthor = books.map((elem) => `${elem.bookTitle} by ${elem.Author}`);
console.log(titleAuthor);


books.map((elem) => {
  if (elem.read) {
    console.log(`I already read ${elem.bookTitle} by ${elem.Author}.`);
  }
  console.log(`I still need to read ${elem.bookTitle} by ${elem.Author}.`);
});


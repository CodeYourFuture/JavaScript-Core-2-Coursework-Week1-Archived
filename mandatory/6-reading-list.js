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
    fullName: "J.R.R. Tolkien",
    bookTitle: "The Hobbit",
    read: false,
  },
  {
    fullName: "John Grisham",
    bookTitle: "The Last Juror",
    read: true,
  },
  {
    fullName: "Richard B. Sobol",
    bookTitle: "Bending The Law",
    read: false,
  },
  {
    fullName: "Jonathan Harr",
    bookTitle: "A Civil Action",
    read: false,
  },
  {
    fullName: "John C. Tucker",
    bookTitle: "May God Have Mercy",
    read: true,
  },
];


// Exercise 1

let titleAuthor = books.map(elem => `${elem.bookTitle} by ${elem.fullName}`);
console.log(titleAuthor);


//Exercise 2

books.map((elem) => {
  if (elem.read) {
    console.log(`I already read ${elem.bookTitle} by ${elem.fullName}.`);
  }
  console.log(`I still need to read ${elem.bookTitle} by ${elem.fullName}.`);
});


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
    author: "J.R.R Tolkien",
    isRead: false
  },
  {
    title: "The Way Of The Bow",
    author: "Paulo Coelho",
    isRead: true
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    isRead: true
  },
  {
    title: "Civil War Prose Novel",
    author: "Stuart Moore",
    isRead: false
  },
  {
    title: "Batman: The Dark Knight Returns",
    author: "Frank Miller",
    isRead: false
  },
];

console.log(`Exercise 1`)
books.forEach((book) => console.log(`${book.title} by ${book.author}`));
console.log(`\nExercise 2`)
books.forEach((book) => book.isRead ? console.log(`You've already read "${book.title}" by ${book.author}`)
: console.log(`You still need to read "${book.title}" by ${book.author}.`)
);

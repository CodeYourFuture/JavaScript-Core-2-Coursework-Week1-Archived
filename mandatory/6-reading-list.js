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
    isRead: false,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isRead: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isRead: true,
  },
  {
    title: "The Book: On the Taboo Against Knowing Who You Are",
    author: "Alan Watts",
    isRead: false,
  },
  {
    title: "The Art of Happiness: A Handbook for Living",
    author: "14th Dalai Lama and Howard Cutler",
    isRead: false,
  },
];

for (let book of books) {
  console.log("");
  console.log(`${book.title} by ${book.author}`);
  if (book.isRead) {
    console.log(`You've already read ${book.title} by ${book.author}`);
  } else {
    console.log(`You still need to read ${book.title} by ${book.author}`);
  }
}

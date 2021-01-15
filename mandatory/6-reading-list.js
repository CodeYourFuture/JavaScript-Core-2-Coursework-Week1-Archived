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
  { title: "Into Tech", author: "Nirmeet Baweja", read: true },

  { title: "Get Fridge", author: "Sleymani Jak", read: false },

  { title: "Rip me", author: "Jack Ma", read: false },

  { title: "Send the sun", author: "Amanuel", read: true },

  {
    title: "Ta's boss",
    author: "Meedaxa",
    read: true,
  },
];
// console.log(books[0]);
// console.log(books[0].title);
// console.log(books[1].title);
// console.log(books[1].title)
// console.log(books[4].author);

books.forEach((book) => {
  console.log(`${book.title} by ${book.author}`);
});

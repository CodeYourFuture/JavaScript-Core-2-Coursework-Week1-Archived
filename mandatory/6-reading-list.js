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
        tittle: "Things Fall Apart",
        author: "Chinuwa Achebe",
        read: true
    },
    {
       tittle: "In Search Of Lost Time",
       author: "Marcel Proust", 
       read: false
    },
    {
        tittle: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        read: false
    },
    {
        tittle: "War and Peace",
        author: "Leo Tolstoy",
        read: false
    },
    {
        tittle: "Petals Of Blood",
        author: "Ngugi wa Thiong'i",
        read: true
    },

];
console.log(books);
for (let book of books) {
  if (book.read) {
    console.log(`You've already read ${book.title} by ${book.author}`);
  } else {
    console.log(`You still need to read ${book.title} by ${book.author}`);
  }
}

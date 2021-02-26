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
      title: "Cry, The Beloved Country", 
      author: "Alan Paton", 
      read: true 
    },

  { 
      title: "Things Fall Apart", 
      author: "Chinua Achebe", 
      read: true 
    },

  { title: "We are going to need more wine", 
    author: "Gabrielle Union", 
    read: false 
    },

  { 
      title: "Spilt Milk", 
      author: "Matlwa Kopano", 
      read: true 
    },

  {
    title: "Eat, pray, love",
    author: "Elizabeth Gilbert",
    read: false
  },
  {
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    read: true
  },

];

// books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
// });

books.forEach((book) => {
    if(book.read) {
        console.log(`You've already read ${book.title} by ${book.author}.`);
    } else console.log(`You still need to read ${book.title} by ${book.author}`);
});

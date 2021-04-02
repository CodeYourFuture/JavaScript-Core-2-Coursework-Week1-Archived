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
      title: "Pride and Prejudice ",
      author: "Jane Austen",
      pages: 594,
      publishedDate: 2010,
      read: true
    },
    {
      title: "The Red and the Black",
      author: "Stendhal",
      pages: 280,
      publishedDate: 2011,
      read: false
    },
    {
      title: "Le Père Goriot ",
      author: "Honoré de Balzac",
      pages: 300,
      publishedDate: 1982,
      read: true
    },
    {
      title: "David Copperfield ",
      author: "Charles Dickens",
      pages: 1900,
      publishedDate: 1972,
      read: false
    },
    {
      title: "Madame Bovary",
      author: " Gustave Flaubert",
      pages: 1000,
      publishedDate: 2006,
      read: true
    }
];
for (let book of books) {
    book.read !== false
      ? console.log(`You've already read ${book.title} by ${book.author}`)
      : console.log(`You still need to read ${book.title} by ${book.author}`);
}

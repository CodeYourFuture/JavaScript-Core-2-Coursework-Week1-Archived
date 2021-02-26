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
      title: "The Fallen",
      author: "Lauri Aston",
      pages: 564,
      years: 2011,
      read: false
    },
    {
      title: "Bonjour Tristesse",
      author: "Francoise Sagan",
      pages: 300,
      years: 2010,
      read: true
    },
    {
      title: "Band of Brothers",
      author: "Stephen Ambrose",
      pages: 450,
      years: 1992,
      read: true
    },
    {
      title: "Dark Tower",
      author: "Stephen King",
      pages: 1000,
      years: 1982,
      read: false
    },
    {
      title: "Mortal Engines",
      author: "Phillip Reeve",
      pages: 1000,
      years: 2006,
      read: true
    }
  ];
  // exercise 1 Solution
  // for (let book of books){
  //     console.log(`${book.title} by ${book.author}`)
  // }
  // exercise 2 solution
  for (let book of books) {
    book.read !== false
      ? console.log(`You've already read ${book.title} by ${book.author}`)
      : console.log(`You still need to read ${book.title} by ${book.author}`);
    // using the if else statement
    // if(book.read !== false){
    //     console.log(`You've already read ${book.title} by ${book.author}`)
    // }
    // else{
    //     console.log(`You still need to read ${book.title} by ${book.author}`)
    // }
  }
  
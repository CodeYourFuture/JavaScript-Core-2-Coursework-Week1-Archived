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
      title: "Only Time Will Tell",
      author: "Jeffrey Archer",
      isRead: false
    },
    {
      title: "The Litigators",
      author: "John Grisham",
      isRead: true
    },
    {
      title: "Wolf Brother",
      author: "Michelle Paver",
      isRead: true
    },
    {
      title: "Never Let Me Go",
      author: "Kazuo Ishiguro",
      isRead: false
    },
    {
      title: "The Summons",
      author: "John Grisham",
      isRead: false
    },
  ];
  console.log("Exercise 1")
  books.forEach((book) => console.log(`${book.title} by ${book.author}`));
  
  console.log("\nExercise 2")
  books.forEach((book) => book.isRead ? console.log(`You've already read "${book.title}" by ${book.author}`)
  : console.log(`You still need to read "${book.title}" by ${book.author}.`)
  );

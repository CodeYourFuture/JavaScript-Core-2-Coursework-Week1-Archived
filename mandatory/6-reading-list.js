/**

The Reading List
Keep track of which books you've read and which books you want to read!

**/

let books = [
  {
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    read: true,
  },
  {
    title: "Tell No One",
    author: "Harlan Coben",
    read: true,
  },
  {
    title: "Absolute Power",
    author: "David Baldacci",
    read: false,
  },
  {
    title: "A Kind Worth Killing",
    author: "Peter Swanson",
    read: false,
  },
  {
    title: "Shopaholic Abroad",
    author: "Sophie Kinsella",
    read: true,
  },
];

/*

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books

*/

books.forEach(function (arrayItem) {
  let message = `${arrayItem.title} by ${arrayItem.author}`;
  console.log(message);
});

/*

=====
Exercise 2
=====

Now use an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

*/

books.forEach(function (arrayItem) {
  if (arrayItem.read) {
    let messageRead = `You've already read "${arrayItem.title}" by ${arrayItem.author}.`;
    console.log(messageRead);
  } else {
    let messageNotRead = `You still need to read "${arrayItem.title}" by ${arrayItem.author}.`;
    console.log(messageNotRead);
  }
});

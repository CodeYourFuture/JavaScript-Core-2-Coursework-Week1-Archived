/**

The Reading List
Keep track of which books you read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you read it yet or not. 

If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [
  {
    title: "Book_1_Title",
    author: "Book_1_Author",
    isRead: true,
  },
  {
    title: "Book_2_Title",
    author: "Book_2_Author",
    isRead: false,
  },
  {
    title: "Book_3_Title",
    author: "Book_3_Author",
    isRead: true,
  },
  {
    title: "Book_4_Title",
    author: "Book_4_Author",
    isRead: true,
  },
  {
    title: "Book_5_Title",
    author: "Book_5_Author",
    isRead: false,
  },
];

/********************* Exercise 1 Solution *******************/
let display = function (book) {
    console.log(`${book.title} by ${book.author}`);
}
console.log("***List of your favourite books***\n");
books.forEach(display);
console.log("\n**********************************\n");

/********************* Exercise 2 Solution ******************/
let isReadOrNot = function (book) {
    let read = book.isRead;
    if (read) {
        console.log(`You already read "${book.title}" by ${book.author}.`);
    } else {
        console.log(`You still need to read "${book.title}" by ${book.author}.`)
    }    
}
console.log("***Logging the books you read and those I still need to read***\n");
books.forEach(isReadOrNot);
console.log("\n***************************************************************\n");
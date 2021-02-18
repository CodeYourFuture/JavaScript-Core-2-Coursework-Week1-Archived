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
     title: "node.js",
     Author: "Mosh Hamedani",
     ReadStatus: true
    },

      {
     title: "mysql database",
     Author: "brad travecy",
     ReadStatus: false 
    },

   {
    title: "php programming",
    Author: "alex anderson",
    ReadStatus: true 
    },

    {
     title: "UX/UI design",
     Author: "don norman",
     ReadStatus: true 
    },

       {
     title: "advance javascript",
     Author: "kyle simon",
     ReadStatus: false
    },
];


  books.forEach(bookList =>{
     console.log(`the ${bookList.title} by ${bookList.Author}`);
     //console.log( book.ReadStatus === true ? `You've already read ${book.title} by ${book.Author}` : `Yet to read this book`)
    // 
  })  
    console.log('\n################Book Status#####################');
    console.log('\n');
  books.forEach(book =>{
    console.log( book.ReadStatus === true ? `You've already read ${book.title} by ${book.Author}` : `You still need to read ${book.title}`)
    console.log('\n') 
})
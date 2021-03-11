
let books = [
  {
      title: "If I Never Met You",
      author: "Mhairi McFarlane",
      isRead: false,
  },
  {
      title: "The Cat Came Back",
      author: "Louise Clark",
      isRead: false,
  },
  {
      title: "Summer at Orchard House",
      author: "Ellyn Oaksmith",
      isRead: true,
  },
  {
      title: "Prophecy",
      author: "Amanda Lynn Petrin",
      isRead: false,
  },
  {
      title: "Wrangling a Groom",
      author: "DJ Jamison",
      isRead: true,
  }
]

// for (let key in books) {
//     console.log (key)
// }

books.forEach((book) => {
console.log(`${book.title} by ${book.author}`) 
    if (book.isRead === true) {
        console.log(`You've already read ${book.title} by ${book.author}`)
    } else{
        console.log(`You still need to read ${book.title} by ${book.author}`)
    }
} )

// const bookList = Object.keys(books2);
// console.log(bookList)

// books.forEach(book => {
//     console.log(books);
// }); 
/**

The Reading List
Keep track of which books you've read and which books you want to read!


=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books
**/



/**
=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/
 


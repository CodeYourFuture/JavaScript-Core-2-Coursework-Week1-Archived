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
        Title: "Harry Potter and the Philosopher's Stone",
        Author: "J. K. Rowling",
        Read: true,
    },
    {
        Title: "Harry Potter and the Chamber of Secrets",
        Author: "J. K. Rowling",
        Read: true,
    },
    {
        Title: "Harry Potter and the Prisoner of Azkaban",
        Author: "J. K. Rowling",
        Read: true,
    },
    {
        Title: "Harry Potter and the Goblet of Fire",
        Author: "J. K. Rowling",
        Read: false,
    },
    {
        Title: "Harry Potter and the Order of the Phoenix",
        Author: "J. K. Rowling",
        Read: false,
    },
    {
        Title: "Harry Potter and the Half-blood Prince",
        Author: "J. K. Rowling",
        Read: false,
    },
    {
        Title: "Harry Potter and the Deathly Hallows",
        Author: "J. K. Rowling",
        Read: false,
    },
];

function bookList (bookArr){
    for(let book of bookArr){
        console.log(`${book.Title} by ${book.Author}`);
        if (book.Read){
            console.log(`You have read ${book.Title}`);
        }else{
            console.log(`You still need to read ${book.Title}`);
        }
        console.log(" ");
    }
};

bookList(books);


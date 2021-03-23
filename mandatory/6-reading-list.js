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

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', True
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'  False

**/

let books = [
    {
        bookTitle: "To Kill a MockingBird",
        bookAuthor: "Harper Lee",
        haveRead: true,
    }, 
    
    {
        bookTitle: "Lord of the Flies",
        bookAuthor: "William Golding",
        haveRead: true,
    }, 
    
    {
        bookTitle: "Skulduggery Pleasant Novels",
        bookAuthor: "Derek Landy",
        haveRead: false,
    }, 
    
    {
        bookTitle: "Pride and Prejudice",
        bookAuthor: "Jane Austen",
        haveRead: false,
    }, 
    
    {
        bookTitle: "Animal Farm",
        bookAuthor: "George Orwell",
        haveRead: false,
    }
];

for (book of books){
    if (book.haveRead === true) {
    console.log(`You've already read ${book.bookTitle} by ${book.bookAuthor}`);
    }
    else {
        console.log(`You still need to read ${book.bookTitle} by ${book.bookAuthor}`);
    }
} 

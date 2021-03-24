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
        Title: "The Book Thief",
        Author: "Markus Zusak",
        Read: true
    },
    {
        Title: "Fahrenheit 451",
        Author: "Ray Bradbury",
        Read: false
    },
    {
        Title: "Animal Farm",
        Author: "George Orwell",
        Read: false
    },
    {
        Title: "The Kite Runner",
        Author: "Khaled Hosseini",
        Read: true
    },
    {
        Title: "A Tale of Two Cities",
        Author: "Charles Dickens",
        Read: true
    },
];

for (book of books){
    if (book.read === true){
        console.log(`You've already read ${book.Title} by ${book.Author}`);
    }
    else {
        console.log('You still need to read ${book.Title} by ${book.Author}');
    }
}

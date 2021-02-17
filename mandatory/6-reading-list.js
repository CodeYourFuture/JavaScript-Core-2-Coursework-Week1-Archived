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
        title: "Wide Sargasso Se",
        author: "Jean Rhys",
        read: false
    },
    {
        title: "When Breath Becomes Air",
        author: "Paul Kalanithi",
        read: false
    },
    {
        title: "Game of Thrones",
        author: "George R.R. Martin",
        read: true
    },
    {
        title: "A Girl Like I",
        author: "Anita Loos",
        read: false
    },
    {
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        read: true
    }
];

books.forEach(books => { 
    console.log("Title: ", books.title);
    console.log("Author: ", books.author);
    if (books.read)
        console.log(`You've already read ${books.title} by ${books.author}`);
    else
        console.log(`You still need to read ${books.title} by ${books.author}`);
    console.log("----------------------")
})
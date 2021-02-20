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
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    haveRead: false
    },
    {
    title: 'The Alchemist',
    author: 'Paul Coelho',
    haveRead: true
    },
    {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    haveRead: true
    },
    {
    title: 'Purple hibiscus',
    author: 'Chimamanda',
    haveRead: false
    },
    {
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda',
    haveRead: true
    }
];

for(let book in books){
    if(books[book].haveRead === true){
        console.log(`I've already read ${books[book].title} by ${books[book].author}`)
    } else {
        console.log(`I still need to read ${books[book].title} by ${books[book].author}`)
    }
};


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
        title: 'Alex Rider',
        author: 'Anthony Horowitz',
        hadRead: true
    },
    {
        title: 'NOS 4R2',
        author: 'Joe Hill',
        hadRead: true
    },
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        hadRead: false
    },
    {
        title: 'The Maze Runner',
        author: 'James Dashner',
        hadRead: true
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
        hadRead: true
    },
];

books.forEach( book => console.log(`The ${book.title} by ${book.author}`));

books.forEach( book => {
    if (book.hadRead) console.log(`You've already read "${book.title}" by ${book.author}.`);
    else console.log(`You still need to read "${book.title}" by ${book.author}.`)
});

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
        title: 'Eloquent Javascript',
        author: 'Marijn Haverbeke',
        toRead: true
    },
    {
        title: 'You don\'t know JS',
        author: 'Kyle Simpson',
        toRead: true
    },
    {
        title: 'The power of habit',
        author: 'Charles Duhigg',
        toRead: false
    },
    {
        title: 'How to win friends and influence people',
        author: 'Dale Carnegie',
        toRead: false
    },
    {
        title: 'Man\'s search for meaning',
        author: 'Viktor E. Frankl',
        toRead: true
    }
];
for (let elem of books) {
    console.log(`${elem.title} by ${elem.author}`);
}

for (let elem of books) {
    if (elem.toRead) {
        console.log(`You still need to read "${elem.title}" by ${elem.author}`);
    } else console.log(`You\'ve already read "${elem.title}" by ${elem.author}`);
}
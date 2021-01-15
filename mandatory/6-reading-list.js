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

const { title } = require("process");

let books = [
    {
        title: 'As a Man Thinkth',
        author: 'James Allen',
        isRead: 'yes',
    },
    {
        title: 'Emotional Intelligence',
        author: 'Daniel Goleman',
        isRead: 'yes',
    },
    {
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        isRead: 'yes',
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        isRead: 'yes',
    },
    {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt.',
        coauthor: 'David Thomas',
        isRead: 'no',
    },

];

let booksAndAuthors = books.map(entry => `${entry.title} by ${entry.author}`);

console.log(booksAndAuthors);

let checkIfIHaveReadIt = books.map((entry) => {
    if (entry.isRead === 'yes') {
        return `I have already read ${entry.title} by ${entry.author}`; 
    } else {
        return `I still need to read ${entry.title} by ${entry.author}`;
    }
});

console.log(checkIfIHaveReadIt);
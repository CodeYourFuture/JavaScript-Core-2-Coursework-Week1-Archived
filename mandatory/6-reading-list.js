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

const { read } = require("fs");

let books = [{
    title: 'Roll of Thunder, Hear My Cry',
    author: 'Mildred D. Taylor',
    read: true
}, {
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K Rowling',
    read: true
}, {
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    read: false
}, {
    title: 'Who Moved my Cheese',
    author: 'Spencer Johnson',
    read: true
}, {
    title: 'The Seat of the Soul',
    author: 'Gary Zukav',
    read: false
}

];

for (let i=0; i<books.length; i++){
    console.log(`${books[i].title} by ${books[i].author}`);
    if (books[i].read) {
        console.log(`You've already read "${books[i].title}" by, ${books[i].author}`)
    } else {
        console.log(`You still need read "${books[i].title}" by, ${books[i].author}`)
    }
}



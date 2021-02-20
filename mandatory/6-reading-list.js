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
        Title: "The Intelligent Investor",
        Author: "Benjamin Graham",
        Read: true
    },
    {
        Title: "Capital in the Twenty-First Century",
        Author: "Thomas Piketty",
        Read: true
    },
    {
        Title: "Piranesi",
        Author: "Susanna Clarke",
        Read: true
    },
    {
        Title: "The Art of War",
        Author: "Sun Tzu",
        Read: true
    },
    {
        Title: "The Blind Watchmaker",
        Author: "Richard Dawkins",
        Read: false
    }
];

// Exercise 1
for (let i of books){
    console.log(`${i.Title} by ${i.Author}`);
}

// Separating exercise outputs with a new line
console.log("") 

// Exercise 2
for (let i of books){
    if (i.Read===true){
        console.log(`You've already read ${i.Title} by ${i.Author}`)
    }
    else
    {
        console.log(`You still need to read ${i.Title} by ${i.Author}`)
    }
};

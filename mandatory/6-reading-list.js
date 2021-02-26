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
        title: "All Passion Spent",
        author: "Vita Sackville-West",
        readBook: true
    },
    {
        title: "All the King's Men",
        author: "Robert Penn Warren",
        readBook: false
    },
     {
        title: "Alone on a Wide, Wide Sea",
        author: "Michael Morpurgo",
        read: true
    },
    {
        title: "An Acceptable Time",
        author: "Madeleine L'Engle",
        readBook: true
    },
     {
        title: "Antic Hay",
        author: "Aldous Huxley",
        read: true
    },
    {
        title: "An Evil Cradling",
        author: "Brian Keenan",
        readBook: false
    }
]; 

for (let i = 0; i < books.length; i++) {   
    console.log(`${books[i].title} by ${books[i].author}`)
}

for (let i = 0; i < books.length; i++) {   
    if (books[i].readBook === true) {
         console.log(`You've already read "${books[i].title}" by ${books[i].author}`)
    }else{
        console.log(`You still need to read "${books[i].title}" by ${books[i].author}`)
    }
}

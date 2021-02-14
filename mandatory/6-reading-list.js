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
    { title: "Tajwid Rules",
      author: "Hassan Idris", 
      read: true,
        
    },
    {
        title: "40 Hadith",
        author: "Abu Ameenah",
        read: true,
    },
    {
        title: "The Sealed Nectar",
        author: "Safiur- Rahman",
        read: false,
    },
    {
        title: "Now you are a mother",
        author: "Du'aa' Ra'oof",
        read: true,
    },
    {
        title: "The biography of Nasiruddin Al-Albani",
        author: "Abu Nasir and Abu Maryam",
        read: false,
    },
    
];

books.forEach(function(book){
    let myBooks = book["title"]
    let myAuthor = book["author"]
// console.log(`${myBooks} by ${myAuthor}`)
if (book["read"] === true){
    console.log(`You've already read ${myBooks} by ${myAuthor}`)
}else{ 
    console.log(`You still need to read ${myBooks} by ${myAuthor}` )
}

})

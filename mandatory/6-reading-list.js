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
    { title: "The Intelligent Investor", author: "Benjamin Graham", isRead: false },
    { title: "Complete works of Shakespear", author: "William Shakespear", isRead: false },
    { title: "You don't know JS yet", author: "Kylie Simplson", isRead: true },
    { title: "Javascript and JQuery", author: "Jon Duckett", isRead: false },
    { title: "Charlie and the Chocolate factory", author: "Lewis Carol", isRead: true }
];

for (let book of books) {
    console.log(`" ${book.title} " by ${book.author}`)
    if (book.isRead) {
        console.log(`You've already read "${book.title} " by ${book.author}`)
    }
    else {
        console.log(`You still need to read "${book.title} " by ${book.author}`)
    }
    // console.log(book);

}
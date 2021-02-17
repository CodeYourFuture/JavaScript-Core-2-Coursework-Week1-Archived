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
//Exercise 1
let books = [
  { name: "War and Peace", author: "Tolstoy", didRead: true },
  { name: "Song of Solomon", author: "Morrison", didRead: false },
  { name: "Shadow of the wind", author: "Zafon", didRead: false },
  { name: "The lord of the rings", author: "Tolkien", didRead: true },
  { name: "Don Quixote ", author: "Cervantes", didRead: true },
];
books.forEach((book) => {
  console.log(`${book.name} by ${book.author}`);
});

//Exercise 2
books.forEach((book)=>{
if (book.didRead){
    console.log(`You've already read "${book.name}" by ${book.author}`);
} else {
    console.log(`You still need to read "${book.name}" by ${book.author}`);
}
})

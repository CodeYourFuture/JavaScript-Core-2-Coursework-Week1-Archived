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
    title: 'Born a Crime',
    author: 'Trevor Noah',
    read: true,
  },

  {
    title: 'Theory of Everything',
    author: 'Stephen Hawking',
    read: true,
  },

  {
    title: 'Invisible Man',
    author: 'Ralph Ellison',
    read: false
  },

  {
    title: 'The Black Unicorn',
    author: 'Tiffany Haddish',
    read: true,
  },

  {
    title: '12 Rules For Life',
    author: 'Jordan B.Peterson',
    read: false,
  },

];

// --Exe-1
books.forEach(book => console.log(`"${book.title} by ${book.author}"`));
console.log("\n");

//--Exe-2
books.forEach(book => {
  if(book.read === true){
    console.log(`"I have already read ${book.title} by ${book.author}"`);
 }
 else{
  console.log(`"I still need to read ${book.title} by ${book.author}"`);
 }

});
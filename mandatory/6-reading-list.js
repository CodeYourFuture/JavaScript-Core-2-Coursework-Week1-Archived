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
    name: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    read: true,
  },
  { name: "Ulysses", author: "James Joyce", read: false },
  { name: "Anna Karenina", author: "Leo Tolstoy", read: false },
  { name: "Catch-22", author: "Joseph Heller", read: true },
  { name: "The Stranger", author: "Albert Camus", read: true },
];
for (let ele of books) {
  console.log(`${ele.name} by ${ele.author}`);
}
for (let ele of books) {
  if (ele.read) {
    console.log(`You've already read ${ele.name} by ${ele.author}`);
  } else {
    console.log(`You still need to read ${ele.name} by ${ele.author}`);
  }
}

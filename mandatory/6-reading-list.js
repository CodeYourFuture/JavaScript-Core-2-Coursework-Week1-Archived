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
         title: "The Kite Runner", 
         author: "Khaled Hosseini",
         read: "yes"
     },
     {
          title: "A Thousand Splendid Suns",
          author: "Khaled Hosseini",
          read: "yes"
     },
     {
          title: "The Power of Now",
          author: "Eckhart Tolle",
          read: "no"
     },
     {
          title: "The Four Agreements",
          author: "Don Miguel Ruiz",
          read: "no"
     },
     {
          title: "Normal People",
          author: "Sally Rooney",
          read: "yes"
     }
       ]

for (let i of books) {
     console.log(`${i.title} by ${i.author}`);
     if (i.read === "yes") {
          console.log(`You've already read ${i.title} by ${i.author}`)
     } else if (i.read === "no") {
          console.log(`You still need to read ${i.title} by ${i.author}`)
     }
}

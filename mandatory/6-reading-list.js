/**

The Reading List
Keep track of which books you read and which books you want to read!

Aegypt series by John Crowley
Beyonders: A World Without Heroes by Brandon Mull
Beyond the Spiderwick Chronicles by Holly Black
The BFG by Roald Dahl
The City of Brass (novel) by S. A. Chakraborty
The Claidi Journals by Tanith Lee
 by 
 by 


let fantasyB
=====
Exercise 1
=====

Loop through the array of books. For each book,
 log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books

=====
Exercise 2
=====
Now use an if/else statement to change the output 
depending on whether you read it yet or not. 

If you read it, log a string like 'You already read 
"The Hobbit" by J.R.R. Tolkien', and if not, log a string 
like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/
/**
 console
 */
//const map1 = array1.map(x => x * 2);

let books = [
    {
        title:"Abhorsen Trilogy",
        author: "Garth Nix",
        read:true
    },
    {
        title:"Acacia: The War With The Mein",
        author: "David Anthony Durham",
        read:false
    },  
    {
        title:"Cold Tom",
        author: "Sally Prue",
        read:true
    },
    {
        title:"Coldfire Trilogy",
        author: "Celia S. Friedman",
        read:false
    },
    {
        title:"The Hobbit",
        author: "J.R.R.Tolkien",
        read:true
    }
];

let functionOfBooks = books.map((book) =>
  console.log(`"${book.title}" by ${book.author}`)
); 
//=================== exercise 2 ====================
let haveYouReadThisBook = books.map((book) =>{
   if (book.read == false) {
    console.log(`You still need to read "${book.title}" by ${book.author}`)
} else {
      console.log(`You have already read "${book.title}" by ${book.author}`)
}}); 
//'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
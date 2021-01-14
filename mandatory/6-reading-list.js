/**

The Reading List
Keep track of which books you read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 recipes

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you read it yet or not. 

If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and 
if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [
    {
        book: "Cat in the hat",
        author: "Dr Seuss",
        read: true
    },
    {
        book: "Harry Potter",
        author: "J K Rowling's",
        read: true
    },
    {
        book: "The lion the witch and wardrobe",
        author: "C S Lewis",
        read: true
    },
    {
        book: "The Alchemist",
        author: "Paulo Cohio",
        read: false
    },
    {
        book: "Percy Jackson and the lightning thief",
        author: "Rick Riordan",
        read: false
    }
];
//exercise 1
for (i of books) {
    console.log(i.book);
    console.log(i.author);
}

//exercise 2

for (i of books) {
    if (i.read === true) {
        console.log(`You have read ${i.book} by ${i.author}`);
    } else {
        console.log(`You still need to read ${i.book} by ${i.author}`);
    }}
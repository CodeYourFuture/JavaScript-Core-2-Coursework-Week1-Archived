/*
The Reading List
Keep track of which books you have read and which books you want to read!
=====
Exercise 1
=====
Loop through the array of books. For each book, log the book title and book author like so: 
"The Hobbit by J.R.R. Tolkien"
*/
let books = [{
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        read: false
    },
    {
        title: "One Hundred Years of Solitude",
        author: "Gabriel Garcia Marquez",
        read: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        read: false
    },
    {
        title: "Hamlet",
        author: "William Shakespeare",
        read: true
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoyevsky",
        read: true
    }
];

for (i = 0; i < books.length; i++) {
    console.log(`${books[i].title} by ${books[i].author}`);
};
/*
=====
Exercise 2
=====
Now use an if / else statement to change the output depending on whether you read it yet or not.
If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and
if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
**/
console.log(`*`.repeat(60));

books.forEach(item => {
    if (item.read) {
        console.log(`You already read ${item.title} by ${item.author}`);
    }
    console.log(`You still need to read  ${item.title} by ${item.author}`);
});
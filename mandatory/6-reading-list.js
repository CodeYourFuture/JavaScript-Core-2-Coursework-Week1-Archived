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


let books = [{
        title: "Mafia",
        author: "J.R.R. Tolkien",
        read: false
    },
    {
        title: "Love",
        author: "Antonio",
        read: true
    },
    {
        title: "The Boy",
        author: "Milk Man",
        read: false
    },
    {
        title: "The Girl Next Door",
        author: "Fifi Camouzo",
        read: true
    },
    {
        title: "Lost",
        author: "Kenyata",
        read: true
    }
];

for (i = 0; i < books.length; i++) {
    console.log(`${books[i].title} by ${books[i].author}`);
};

/*Exercise 2
=====
Now use an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

*/
console.log(`*`.repeat(60));

books.forEach(item => {
    if (item.read) {
        console.log(`You already read ${item.title} by ${item.author}`);
    }
    console.log(`You still need to read  ${item.title} by ${item.author}`);
}); 
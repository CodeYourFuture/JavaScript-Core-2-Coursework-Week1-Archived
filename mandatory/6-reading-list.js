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
    title: 'Les Miserables',
    author : 'Victor Hugo',
    read : true

    },

    {
    title: '1984',
    author : 'George Orwell',
    read : true
    },

    {
    title: 'Crime and Punishment',
    author : 'Dostoyevski',
    read: false

    },

    {
    title: 'Utopia',
    author : 'Thomas More',
    read : true

    },

    {
    title: 'The Republic',
    author : 'Platon',
    read: false
    },

];

for(let argument of books){
    console.log(`"${argument.title} by ${argument.author}"`);
    
    if(argument.read){
        console.log(`You've already read ${argument.title} by ${argument.author}`)

    }
    else {
        console.log( `You still need to read ${argument.title} by ${argument.author}`);
    }

}

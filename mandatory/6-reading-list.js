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

If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [
    {
        title : "I know why the cage birds sings",
    author :"Maya Angelou",
    alreadyRead : true
    },
    {
        title :"Audacity of hope",
        author :"obama",
        alreadyRead :true
    },
    {
        title : "Dream from my father",
        author :"Obama",
        alreadyRead : true
    },
    {
        title : "A promised land",
        author : "Obama",
        alreadyRead : false
    },
    {
        title : "Becoming",
        author : "Michelle",
        alreadyRead : false

    }
];
for(let i = 0;i < books.length;i++){
    let book = books[i];
    let bookStory = `${book.title} by ${book.author}`;
    if(book.alreadyRead){
        console.log("You already read:" ,  `${bookStory}`);
    }else{
        console.log("You still need to read:"  ,`${bookStory}`);
    }
}
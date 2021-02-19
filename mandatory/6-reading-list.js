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
        Title: "The Hobbit",
        Author: "J.R.R. Tolkien",
        Read: "No"
    },
    {
        Title: "The Checklist Manifesto",
        Author: "Atul Gawande",
        Read: "Yes"
    },
    {
        Title: "The Last Lecture",
        Author: "Randy Pausch",
        Read: "Yes"
    },
    {
        Title: "If I could tell you just one thing...",
        Author: "Richard Reed",
        Read: "Yes"
    },
    {
        Title: "Secrets of Divine Love",
        Author: "A. Helwa",
        Read: "No"
    }
];

for(item of books){
    console.log(item.Title +" by "+ item.Author);
}

books.forEach((item) =>{
    if(item.Read === "Yes"){
        console.log("You've already read "+ item.Title +" by "+ item.Author);
    } else{
        console.log("You still need to read " + item.Title +" by "+ item.Author);
    }
        
});

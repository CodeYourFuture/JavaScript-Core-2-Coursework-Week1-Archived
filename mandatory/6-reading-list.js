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
        bookTitle: "Sapiens",
        Writer: "Yuval Noah Harari",
        Read: false

    },
    {
        bookTitle: "Kirke",
        Writer: "Madeline Miller",
        Read: true
    },
    {
        bookTitle: "Dusunce Gucuyle Tedavi",
        Writer: "Louise Hay",
        Read: true
    },
    {
        bookTitle: "Alamut",
        Writer: "Vladimir Bartol",
        Read: true
    },
    {
        bookTitle: "Simyaci",
        Writer: "Paulo Coelho",
        Read: true
    }

];

function bookAndWriters(arr){
    for(let i = 0; i < arr.length; i++) {
        console.log(`${arr[i].bookTitle} by ${arr[i].Writer}`);
    }


}

bookAndWriters(books);

function readBooks(arr){
    for(let i = 0; i < arr.length ; i++){
        if(arr[i].Read) {
            console.log(`You've already read "${arr[i].bookTitle}" by ${arr[i].Writer}`)
        } else console.log(`You still need to read "${arr[i].bookTitle}" by ${arr[i].Writer}.`)
    }

}

readBooks(books);


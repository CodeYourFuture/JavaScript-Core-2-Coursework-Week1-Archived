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
];
function bookCreator() {
    for (i = 0; i < 20; i++) {
        books.push({
            author: `Author${i}`,
            title: `title${i}`,
            read: Math.floor(Math.random() * 10) < 5 ? true : false,
        })

    }
};

bookCreator()

books.forEach(item => {
    if (item.read) {
        console.log(`You already read ${item.title} by ${item.author}`)
    }
    console.log(`You still need to read  ${item.title} by ${item.author}`)
})


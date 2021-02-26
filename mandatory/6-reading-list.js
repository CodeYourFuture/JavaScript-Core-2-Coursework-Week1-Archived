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
         bookName: "Brighton Rock.", author: "by Graham Greene.", read: true,
       
        },
      { 
        bookName: "Spinning Silver.", author: "Naomi Novik.", read: false

         },
      { 
        bookName: "Anna Karenina", author: "Leo Tolstoy", read: false

        },
      {
        bookName: "The Many-Coloured Land.", author: "Julian May.", read: false

        },
      { 
        bookName: "Kick the Moon.", author: "Muhammad Khan.", read: true 

        },
    ];


    for (let elem of books) {

        console.log(`${elem.name} by ${elem.author}`);
    }
    for (let elem of books) {

        if (elem.read) {

        console.log(`You've already read ${elem.name} by ${elem.author}`);
    }else {

    console.log(`You still need to read ${elem.name} by ${elem.author}`);
  }
};

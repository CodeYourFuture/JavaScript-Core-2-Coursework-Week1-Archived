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
    title: "Master Of The Game",
    author: "Sydney Sheldon",
    isRead: true,
  },
  {
    title: "Never Say Never",
    author: "Prim Shea",
    isRead: true,
  },
  {
    title: "Open Secret",
    author: "James Leasor",
    isRead: false,
  },
  {
    title: "The Hundred And One Dalmatians",
    author: "Dodie Smith",
    isRead: false,
  },
  {
    title: "Girl On A Plane",
    author: "Miriam Moss",
    isRead: false,
  },
  {
    title: "Let Love Come Last",
    author: "Taylor Caldwell",
    isRead: true,
  },
];
// exercise 1
books.forEach((element) =>
  console.log(`${element.title} by ${element.author}`)
);
//exercise  2

books.map((element) => {
  if (element.isRead === true) {
    console.log(`You already read "${element.title}" by ${element.author}`);
  } else {
    console.log(
      `You still need to read "${element.title} by ${element.author}"`
    );
  }
});

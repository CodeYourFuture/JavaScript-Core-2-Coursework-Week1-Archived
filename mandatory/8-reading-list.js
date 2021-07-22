/**

The Reading List
Keep track of which books you've read and which books you want to read!

=====
Exercise 1
=====

Create an array of objects, where each object describes a book and has properties for:
- The title (a string)
- Author (a string)
- and alreadyRead (a boolean indicating if you read it yet)

Write a funciton that loops through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books. 

You should modify the tests so that they contain the values that correspond to your books.
In this style of testing it is typical to write out as strings exactly what you expect your output to be, 
without using any variables or any logic like loops, template strings or if statements.

*/

const books = [
  {
    title: "For Whom the Bell Tolls",
    author: "Ernest Hemingway",
    alreadyRead: false,
  },
  {
    title: "The Curious Incident of the Dog in the Night-Time",
    author: " Mark Haddon",
    alreadyRead: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    alreadyRead: false,
  },
  {
    title: "A Clockwork Orange",
    author: "Anthony Burgess",
    alreadyRead: false,
  },
  {
    title: "How to Lose Friends and Alienate People",
    author: "Toby Young",
    alreadyRead: false,
  },
];
  
// exercise 1
function logBooks() {
  books.map(book => console.log(`${book.title} by ${book.author}`))
}    //logs
  

/*

=====
Exercise 2
=====
Now modify the function, using an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

You will need to modify the tests to check the correct output. If you have already learnt about red-green refactoring,
remember to practice:
- first change the test to the value that should be output, 
- run the test to check that your test goes red
- now change your code to make the test pass

As an example for this exercise, you might do the following steps
- Modify the tests so that they all say 'You've already read <name> by <author>'
- Run the test (they will all fail)
- Modify your code so that it logs 'You've already read <name> by <author>'
- Run the test (they will all pass again)
- Modify your code making all the books alreadyRead:false and adding the if/else so that it logs 'You still need to read <name> by <author>'
- Run the test (they will all fail)
- Modify the tests to contain the correct list of statements (whether you've read the book or not)
- Run the test (the test will fail but there will be some successful results)
- Modify the books so that they have the correct alreadyRead value
- All tests should turn green!!

**/

/* ======= TESTS - DO MODIFY (!!!) =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 8-reading-list.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/
//Changed book titles to match books array. Test not passing 
test("books are logged", function() {
 expectLogBooksToLog([
   "For Whom the Bell Tolls by Ernest Hemingway",
   "The Curious Incident of the Dog in the Night-Time by Mark Haddon",
   "To Kill a Mockingbird by Harper Lee",
   "A Clockwork Orange by Anthony Burgess",
   "How to Lose Friends and Alienate People by Toby Young",
 ]);
});

/* ======= TESTS - DO NOT MODIFY ===== */
/*
* Assert that when the function logBooks is called, the values in the expectedValues array are logged in order via console.log.
*
* - If the number of calls to console.log does not match the number of elements in the array, the test will fail
* - If the calls to console.log do not contain the strings in the expectedValue array, the test will fail
*
* You do not need to understand how this function works to successfully complete the exercise.
*/
function expectLogBooksToLog(expectedValues) {
    const consoleLogSpy = jest.spyOn(console, 'log');
    logBooks();
    expect(consoleLogSpy).toBeCalledTimes(expectedValues.length);
    expectedValues.forEach((value, i) => {
      expect(consoleLogSpy).nthCalledWith(i+1, value);
    });
    consoleLogSpy.mockRestore();
};
/*
  This exercise may look familiar!
  In JS1 week 3 we had an exercise called eligible-students,
  where we stored each student's name and score in an array.

  This is the same exercise again, but we've stored each student's
  information in an object instead of an array.

  After you complete the exercise, compare your solution to your previous one.
  Can you see how using objects leads to more clear code?


  LAST WEEKS SOLUTION 
  
  const getEligibleStudents = arr => arr.filter((item => item[1] >= 8)).map(item => item[0]);

  -------------------------------------------------------------------------

  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
 */



function eligibleStudents(attendances) {
  return attendances
    .filter((student) => student.attendance >= 8)
    .map((student) => student.name);
}

// As we have an ***array of objects*** we can use the array method .filter to filter out only the array
// values we wish to return. The .filter method filters the values but it does not return an array so we can 
// chain the method .map to return a new array containing only the student names of the filtered results. 
// My code is almost the same as last weeks, except rather than filtering nested array values we are
// filtering object values. I'm unsure if this is any easier or what the specific benefits are. 


/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern 2-eligible-students.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

const attendances = [
  { name: "Ahmed", attendance: 8 },
  { name: "Clement", attendance: 10 },
  { name: "Elamin", attendance: 6 },
  { name: "Adam", attendance: 7 },
  { name: "Tayoa", attendance: 11 },
  { name: "Nina", attendance: 10 },
];

test("eligibleStudents function works", () => {
  expect(eligibleStudents(attendances)).toEqual([
    "Ahmed",
    "Clement",
    "Tayoa",
    "Nina",
  ]);
});

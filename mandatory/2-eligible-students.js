/*
  This exercise may look familiar!
  In JS1 week 3 we had an exercise called eligible-students,
  where we stored each student's name and score in an array.

  This is the same exercise again, but we've stored each student's
  information in an object instead of an array.

  After you complete the exercise, compare your solution to your previous one.
  Can you see how using objects leads to more clear code?

  -------------------------------------------------------------------------

  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
 */
var students = [
  { name: "Ahmed", attendance: 8 },
  { name: "Clement", attendance: 10 },
  { name: "Elamin", attendance: 6 },
  { name: "Adam", attendance: 7 },
  { name: "Tayoa", attendance: 11 },
  { name: "Nina", attendance: 10 },
];
// var studentAttendence = students.filter(function eligibleStudents(element) {
//   var students = [];
//   if (element.attendance >= 8) {
//     return students.push(element.name);
//   }
// });

function eligibleStudents(studentsArray) {
  let studentAttendance = [];
  for (var i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i].attendance >= 8) {
      studentAttendance.push(studentsArray[i].name);
    }
  }
  return studentAttendance;
}

console.log(eligibleStudents(students));

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

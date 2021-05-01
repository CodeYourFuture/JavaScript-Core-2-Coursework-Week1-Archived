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

function eligibleStudents(attendance) {
}

/* ======= TESTS - DO NOT MODIFY ===== */

const attendances = [
    {name: "Ahmed", attendance: 8},
    {name: "Clement", attendance: 10},
    {name: "Elamin", attendance: 6},
    {name: "Adam", attendance: 7},
    {name: "Tayoa", attendance: 11},
    {name: "Nina", attendance: 10},
];
  
const util = require('util');
  
function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }
  
    console.log(`${test_name}: ${status}`);
}
  
test("eligibleStudents function works",
    eligibleStudents(attendances),
    ["Ahmed", "Clement", "Tayoa", "Nina"]
);
 
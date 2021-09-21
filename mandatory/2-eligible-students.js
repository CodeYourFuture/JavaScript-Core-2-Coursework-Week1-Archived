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

function eligibleStudents(attendances) {                          //declares the function with a parameter 
    return attendances.filter((student) =>student.attendance >=8) //code bloc of function requires code to RETURN the parameter attendances of each student via .filter.
                                                                  // and only if attendance is over 8.
                      .map((student)=>student.name);              // .map is a method that returns a new array containing the newly filtered students. 
}

/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern 2-eligible-students.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

const attendances = [
    {name: "Ahmed", attendance: 8},
    {name: "Clement", attendance: 10},
    {name: "Elamin", attendance: 6},
    {name: "Adam", attendance: 7},
    {name: "Tayoa", attendance: 11},
    {name: "Nina", attendance: 10},
];
  
test("eligibleStudents function works", () => {
    expect(eligibleStudents(attendances)).toEqual(["Ahmed", "Clement", "Tayoa", "Nina"]);
});
 
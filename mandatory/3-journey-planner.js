/*
  This exercise was also in JS1 week 3, but you didn't know about objects yet.
  It's more clear with objects than with arrays!
  Feel free to look at your solution to that one to help you out - you already did this once!

  -----------------------------------------------------------------------

  Write a function journeyPlanner that:

  - Accepts two paramters:
    1) An object where the keys are locations and the values are arrays of the transportation modes you can use to get there.
       e.g.
       {
           Angel: ["tube", "bus"],
           "London Bridge": ["tube", "river boat"],
       }

    2) A string containing a transport mode
       e.g. "bus"

  - Returns an array of where I can go if I only want to use a specific mode of transport.

  NOTE: Only the location names should be returned, as strings.

  When you finish the exercise, think about how this solution is different to your last solution.
  What's better about each approach?
*/
function journeyPlanner(locations, transportMode) {
}

/* ======= TESTS - DO NOT MODIFY ===== */

const londonLocations = {
    "Angel": ["tube", "bus"],
    "London Bridge": ["tube", "river boat"],
    "Tower Bridge": ["tube", "bus"],
    "Greenwich": ["bus", "river boat"],
};

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "journeyPlanner function works - case 1",
  arraysEqual(journeyPlanner(londonLocations, "river boat"), [
    "London Bridge",
    "Greenwich",
  ])
);

test(
  "journeyPlanner function works - case 2",
  arraysEqual(journeyPlanner(londonLocations, "bus"), [
    "Angel",
    "Tower Bridge",
    "Greenwich",
  ])
);

test(
  "journeyPlanner function works - case 3",
  arraysEqual(journeyPlanner(londonLocations, "tube"), [
    "Angel",
    "London Bridge",
    "Tower Bridge",
  ])
);
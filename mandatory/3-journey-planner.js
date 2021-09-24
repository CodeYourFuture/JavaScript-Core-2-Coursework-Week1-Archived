/*
  This exercise was also in JS1 week 3, but you didn't know about objects yet.
  It's more clear with objects than with arrays!
  Feel free to look at your solution to that one to help you out - you already did this once!

  -----------------------------------------------------------------------

  Write a function journeyPlanner that:

  - Accepts two parameters:

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

  HOW TO FILTER [OBJECTS THAT CONTAIN ARRAYS]?? THE INVERSE OF THE LAST EXERCISE [ARRAY OF OBJECTS]
*/

//use filter or includes, or both? 

// function journeyPlanner(locations, transportMode) {
//    return Object.keys(locations).find(key => locations[key] === transportMode);
//  } 

 let locationKeys = Object.keys(locations); //create an array of the object keys. 

  let validLocations = []; //new empty array placeholder. 

  locationKeys.forEach( element => {
    let transportMethods = locations[element]; // stores all object keys ?????? 
    let filtered = transportMethods.filter(value => value === transportMode); //filtering something based on 
    //if the transportmode - OH I GIVE UP NONE OF THIS MAKES SENSE. 
    if (filtered.length > 0) {
      validLocations.push(element); //pushing values into new array. 
    }

  });

  return validLocations;
}

/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern 3-journey-planner.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/
const londonLocations = {
    "Angel": ["tube", "bus"],
    "London Bridge": ["tube", "river boat"],
    "Tower Bridge": ["tube", "bus"],
    "Greenwich": ["bus", "river boat"],
};

test("journeyPlanner function works - case 1", () => {
  expect(journeyPlanner(londonLocations, "river boat")).toEqual([
    "London Bridge",
    "Greenwich",
  ]);
});

test("journeyPlanner function works - case 2", () => {
  expect(journeyPlanner(londonLocations, "bus")).toEqual([
    "Angel",
    "Tower Bridge",
    "Greenwich",
  ]);
});

test("journeyPlanner function works - case 3", () => {
  expect(journeyPlanner(londonLocations, "tube")).toEqual([
    "Angel",
    "London Bridge",
    "Tower Bridge",
  ])
});
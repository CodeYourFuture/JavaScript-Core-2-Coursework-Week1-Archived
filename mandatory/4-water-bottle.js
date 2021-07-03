/*
Create an object that acts a water bottle.

It will need a volume property to store how full or empty the bottle is. 

Volume will be 100 when bottle is full and 0 when empty. 

Give your water bottle methods for 
  - filling it up
  - pouring 10 units of water into it
    Note: You cannot exceed the bottle capacity.
  - drinking 10 units from it
    Note: You cannot drink more than its actual contents.
  - and telling if the bottle is full
  - and telling if the bottle is empty

We made a start on this here by giving you the skeleton of our object.

You have to implement the missing features according to the specification.
*/

// Here is your starting point:
let bottle = {
  volume: 0,
  fillUp: function () {
    // calling this function should completely fill your bottle (volume = 100);
  },
  pour: function () {
    // calling this function should increase your bottle volume by 10 units;
  },
  drink: function () {
    // calling this function should decrease your bottle volume by 10 units;
  },
  isFull: function () {
    // this function should return true if your bottle is full;
  },
  isEmpty: function () {
    // this function should return true if your bottle is empty;
  },
};

/*
TIP:
  Remember that for changing properties on the current object inside one of its
  methods you can refer to it by its variable name: `bottle` or by using the keyword `this`.
*/

/*
Extra question:
  Why do you think it is preferred to use `this` inside the object rather than its variable name, in our case `bottle`?
  Leave your answer below:
*/

// Write you answer to the question here

/*
Once you have completed your object run the following 
and see if your answer matches the expected result at the bottom :)
*/

/* ======= TESTS - DO NOT MODIFY =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 4-water-bottle.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("When filled up, bottle is full", () => {
  bottle.volume = 0;
  bottle.fillUp();
  expect(bottle.isFull()).toEqual(true);
});

test("When filled up, bottle is not empty", () => {
  bottle.volume = 0;
  bottle.fillUp();
  expect(bottle.isEmpty()).toEqual(false);
});

test("When emptied, bottle is not full", () => {
  bottle.volume = 0;
  expect(bottle.isFull()).toEqual(false);
});

test("When emptied, bottle is empty", () => {
  bottle.volume = 0;
  expect(bottle.isEmpty()).toEqual(true);
});

test("When partially filled, bottle is not empty", () => {
  bottle.volume = 40; // arbitrary amount
  expect(bottle.isEmpty()).toEqual(false);
});

test("When partially filled, bottle is not full", () => {
  bottle.volume = 40; // arbitrary amount
  expect(bottle.isFull()).toEqual(false);
});

test("Given a full bottle, when pour is called, then the volume does not increase", () => {
  bottle.volume = 100;
  bottle.pour();
  expect(bottle.volume).toEqual(100);
});

test("Multiple calls to drink reduce the volume correctly", () => {
  bottle.volume = 100;
  // arbitrary number of calls to drink
  bottle.drink();
  bottle.drink();
  bottle.drink();
  expect(bottle.volume).toEqual(70);
});

test("Given a full bottle, when drink has been called, then it is neither full nor empty", () => {
  bottle.volume = 100;
  // arbitrary number of calls to drink
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  expect(bottle.isEmpty()).toEqual(false);
  expect(bottle.isFull()).toEqual(false);
});

test("Given a full bottle, when drink called 10 times, then bottle is empty", () => {
  bottle.volume = 100;
  for (var i = 0; i < 10; i++) {
    bottle.drink();
  }
  expect(bottle.isEmpty()).toEqual(true);
});

test("Given an empty bottle, when drink is called, then the volume does not decrease", () => {
  bottle.volume = 0;
  bottle.drink();
  expect(bottle.volume).toEqual(0);
});

test("Given an empty bottle, when pour is called, then the volume increases", () => {
  bottle.volume = 0;
  bottle.pour();
  expect(bottle.volume).toEqual(10);
});

test("Given an empty bottle, calling pour then drink, then the bottle is empty", () => {
  bottle.volume = 0;
  bottle.pour();
  bottle.drink();
  expect(bottle.volume).toEqual(0);
});
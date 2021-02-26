//Exercise 4
/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

let person1 = {
  name: "Alice",
  friends: ["John", "Nina"],
  makeFriend(friend) {
    this.friends.push(friend);
  }  
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person1.makeFriend("Bob");

console.log(
  `Expected result: 'John,Nina,Bob'. Actual result: ${person1.friends}`
  );

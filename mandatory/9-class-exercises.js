/**
 * exercise1
 * Describe your own laptop as a JavaScript object. Try to think of as many properties as you can!
 */
let desktop = {
    caseType: "Tower",
    mouse: "Ifrared",
    screenSize: 25,
    brand: "Dell",
    camera: false,
    speakers: true,
};

/**
 * exercise2
 * Exercise (2)
 * Think of 5 different real world "things" that you can describe with a JavaScript object
 * Assign each of them to a separate variable
 */
let transport = {
    type: "bicycle",
    distance: "20km",
    timesPerWeek: 5,
    reason: "it's what I can afford.",
};
console.log(`I own a ${transport.type} and I cover ${transport.distance}, ${transport.timesPerWeek} times per week because ${transport.reason}`);

let person = {
    name: "Douglas",
    surname: "Van Der Merwe",
    hairTypeAndColor: "curly, black",
    eyes: "yes",
    hasTwoArms: true,
    hasTwoLegs: "yes",
    hasPaws: false,
};
console.log(`Hi my name is ${person.name} and my surname is ${person.surname}. I have ${person.hairTypeAndColor} hair.`);

let cyf = {
    whoIsWelcome: "the marginalised",
    cost: "'free 99'",
    remoteLearning: true,
    techRequirements: "workstation, 4mbps+ internet-connection",
    hoursCommitmentPerWeek: 40,
};
console.log(`CodeYourFuture invites ${cyf.whoIsWelcome} at a cost of ${cyf.cost}. All you need is ${cyf.techRequirements} and ${cyf.hoursCommitmentPerWeek} hours per week.`);

/**
 * exercise3
 * The objects below have some syntax issues - try and fix them all!
 */
let kitten = {
    furColour: "orange",
    age: "23",
};

let laptop = {
    brand: "Lenovo",
    ram: "5GB",
};

let phone = {
    operatingSystem: "iOS",
    hasStylus: true,
    megapixels: 12,
    batteryLife: "24 hours",
};
console.log(`The ${kitten.furColour} kitten is ${kitten.age} years old.`);
console.log(`The ${kitten.age} years old, ${kitten.furColour} kitten owns a ${laptop.brand} laptop with ${laptop.ram} of ram.`);
console.log(`The ${kitten.age} years old, ${kitten.furColour} kitten owns an ${phone.operatingSystem} phone with ${phone.batteryLife}
 of battery life and a ${phone.megapixels} megapixel front camera.`);

/**
 * Objects Get and Set# - Getting the value of an object's property#
 */
let Laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
};
console.log(laptop.brand);      //access a property value with dot notation//
console.log(laptop["brand"]);   //access a property value with bracket notation//

/*
Console.log the values of each property of "kitten"
*/
// Exercise 1
let kittens = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
};

console.log(kittens.ageMonths);
console.log(kittens.isFemale);
console.log(kittens.furColour);

/*
The following code contains syntax errors - try and fix them!
Once you fix them, run the code, it should output the correct values!
*/

// Exercise 2
let phone1 = {
  brand: 'iPhone',
  model: 'iPhone X',
  launchYear: 2017,
  isUnlocked: true,
};

let phoneBrand = phone1.brand;
let phoneLaunchYear = phone1["launchYear"];

console.log(phoneBrand);
console.log(phoneLaunchYear);

// -> it should output:
// iPhone
// 2017

/** Setting the value of a property */

// Exercise 1
/*
Write code in the space provided so that it outputs "Gilbert"
*/

// WRITE CODE BELOW THIS
kitten.name = "Gilbert";
// WRITE CODE ABOVE THIS

console.log(kitten.name);
// -> it should output: "Gilbert"

// Exercise 2
/*
Write code in the space provided so that the expected values output
*/

let dog = {
  name: "Billy",
  wantsToPlay: false,
};

// WRITE CODE BELOW THIS LINE
dog.name = "Rex";
dog.wantsToPlay = true;
// WRITE CODE ABOVE THIS LINE

console.log(dog.name);
console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true
/----------------------------------------------------------------------------------/
/* More Complex Objects */
// Exercise 1
/*
Given the following house - follow the instructions below.
Make sure you run the file after and it outputs the correct results.
*/

let house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/
// - change the address of "house" to '51 Berkley Road'
house.address = "51 Berkley Road"
// - change the previous owners of "house" to ["Brian M.", "Fiona S."]
house["previousOwners"] = ["Brian M.", "Fiona S."]
// - change the last name of the current owner of "house" to "Montgomery"
house.currentOwner.lastName = "Montgomery";

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Expected result: 51 Berkley Road. Actual result: ${house.address}`
);
console.log(
  `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
);
console.log(
  `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
);
/---------------------------------------------------------------------------/
// Exercise 2
/*
Given the same "house" object again

Follow the instructions below and then run the file and make sure it outputs the correct results
*/

let house1 = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
  },
};

let newCurrentOwner = {
  firstName: "Georgina",
  lastName: "Hernandez",
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
house1.currentOwner = newCurrentOwner;
// - from the list of previous owners, replace only "John A." with "Stephen B."
house1.previousOwners[1] = "Stephen B.";
// - give the house a new property called 'isForSale' with the value 'false'
house1["isForSale"] = false;
/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
    house1.currentOwner === newCurrentOwner
  }`
);
console.log(
  `Expected result: Claire M., Stephen B. Actual result: ${house1.previousOwners.toString()}`
);
console.log(`Expected result: false. Actual result: ${house1.isForSale}`);
/-------------------------------------------------------------------------------/
// Exercise 3
/*

Given the same "house" object again

Write the code for the functions as per the description above them

*/

let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};

let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
  return (`${house.currentOwner.firstName} ${house.currentOwner.lastName}`);
}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
  return (`${house1.currentOwner.email}, ${house2.currentOwner.email}`)
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
  if (`${house1.price}` > `${house2.price}`) {
    return `${house2.address}`
  }
}  
/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
    kinningParkHouse
  )}`
);
console.log(
  `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
    kinningParkHouse,
    parkAvenueHouse
  )}`
);
console.log(
  `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
    parkAvenueHouse,
    kinningParkHouse
  )}`
);

/-----------------------------------------------------------------------------------------------------------/
/* Object Methods */
//Exercise 1

/*

A person named Alice is defined below.
  1. Add a method "greet" so this person can say hello.
  2. Add a method "sayName" so this person can say their own name. Hint: use 'this' keyword to access the name property.

*/

let person2 = {
  name: "Alice",
  age: 25,
  greet: function () {
    return "Hello everybody";
  },
  sayName: function () {
    return `My name is ${this.name}`;
  },
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Expected result: Hello everybody. Actual result: ${person2.greet()}`
);
console.log(
  `Expected result: 'My name is Alice'. Actual result: ${person2.sayName()}`
);
  
/---------------------------------------------------------------------------------------------------/
// Exercise 3
/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let personX = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
  changeAddress: function (newAddress) {
      return currentAddress = newAddress;
    },
    celebrateBirthday: function () {
      return that.age = that.age + 1;
    }
};
/---------------------------------------------------------------------------------------------------/
//Exercise 4
/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

let person1 = {
  name: "Alice",
  friends: ["John", "Nina"],
  makeFriend(friend) {
    return this.friends.push(friend);
  }  
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person1.makeFriend("Bob");

console.log(
  `Expected result: 'John,Nina,Bob'. Actual result: ${person1.friends}`
  );
  
  /---------------------------------------------------------------------------------------------------/
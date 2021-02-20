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

let kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
};
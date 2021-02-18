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
    reason: "It's what I can afford.",
}
console.log(`I own a ${transport.type} and I cover ${transport.distance}, ${transport.timesPerWeek} times per week because ${transport.reason}`);

let person = {
    name: "Douglas",
    surname: "Van Der Merwe",
    hairTypeAndColor: "curly, black",
    eyes: "yes",
    hasTwoArms: true,
    hasTwoLegs: "yes",
    hasPaws: false,
}
console.log(`Hi my name is ${person.name} and my surname is ${person.surname}. I have ${person.hairTypeAndColor} hair.`)

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
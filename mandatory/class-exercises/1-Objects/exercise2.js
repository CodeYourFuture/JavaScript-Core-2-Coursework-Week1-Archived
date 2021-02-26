//  Exercise (2)
/*
Think of 5 different real world "things" that you can describe with a JavaScript object
Assign each of them to a separate variable
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

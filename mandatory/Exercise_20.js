const greekGods = [
  "Aphrodite",
  "Ares",
  "Artemis",
  "Athena",
  "Poseidon",
  "Zeus",
];

// before running the code in your browser, discuss the expected order of each loop

// synchronous - loop through the array of greek gods and print the index numbers and values to the console, e.g. '1. Ares'
for (var i = 0; i < greekGods.length; i++) {
    var currentGod = greekGods[i];
    console.log(i + ". " + currentGod);
}


// asynchronous - same as before but the index and the value of the god at position 2 in array should be printed after 2 seconds. Use: setTimeout()
for (var i = 0; i < greekGods.length; i++) {
     var currentGod = greekGods[i];
     if (i === 2) {
         setTimeout(() => {
             console.log(2 + ". " + greekGods[2]);
         }, 2000);
     } else {
    console.log(i + ". " + currentGod)};
}




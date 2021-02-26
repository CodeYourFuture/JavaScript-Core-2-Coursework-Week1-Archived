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
let array1 = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

// let sum = array1.map(elem => elem.budget + elem.budget);
// console.log(sum); //[ 46000, 80000, 5400 ]

// let sum = array1.map(elem => elem.budget);
// console.log(sum); // [ 23000, 40000, 2700 ]

// let sum = array1.map(object => Object.budget);
// console.log(sum); // [ 23000, 40000, 2700 ]

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// let mappedObjects = array1.map(object => object.budget {
// console.log(array1.reduce(reducer, 23000))});

function getBudgets(array1) {
  return array1
    .map((obj) => Object.values(obj)[2])
    .reduce((acc, curr) => acc + curr);
}
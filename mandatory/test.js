let setOne = [
  { name: "Turkey", price: 28.99 },
  { name: "Chicken", price: 13.99 },
  { name: "Lobster", price: 100.99 },
];


//console.log(Math.min(setOne[0].price)); //gives 28.99

//  for (let price of setOne) {
//    console.log(Math.min(setOne[price])) //NaN
//  }

// function get2ndCheapest (array) {
//   return array.map((obj) => Object.values(obj)[1]); 
// }
// console.log(getCheapest(setOne)); //[ 28.99, 13.99, 10.99 ]

// function get2ndCheapest (array) {
//   let mealPriceArr = array.map((obj) => Object.values(obj)[1]);
//   return mealPriceArr; //[ 28.99, 13.99, 10.99 ]
// }
// console.log(get2ndCheapest(setOne)); //[ 28.99, 13.99, 10.99 ]
//----------------------------------------------------------------------
// function get2ndCheapest (array) {
//   let mealPriceArr = array.map((obj) => Object.values(obj)[1]);
//   return Math.min(mealPriceArr); //
// }
// const array1 = [11.4, 3.8, 40.5, 21, 100.6];

// console.log(Math.min(11.4, 3.8, 40.5)); //works
// console.log(Math.min(...array1)); // 3.8
//---------------------------------------------------------------------

//Gets cheapest number!
// function getCheapest (array) {
//   let mealPriceArr = array.map((obj) => Object.values(obj)[1]);
//   return Math.min(...mealPriceArr); //
// }
// console.log(getCheapest(setOne));

//-------2nd lowest using sort
// let num = [40, 124];
// let sort = num.sort((a, b) => {
//   return a - b;
// });
// console.log(sort[1]);


// //Test for 2nd cheapest using Sort
// function getCheapest(array) {
//   let mealPriceArr = array.map((obj) => Object.values(obj)[1]);
//   let sort = mealPriceArr.sort((a, b) => {
//    return a - b;
// })
//   return sort[1];  //returns 2nd lowest element from sorted sort array
// }
// console.log(getCheapest(setOne)); //gives 28.99



function getCheapest(array) {
  let mealPriceArr = array.map((obj) => Object.values(obj)[1]);
  let sort = mealPriceArr.sort((a, b) => {
   return a - b;
})
   if (sort[1] > 1) {
     return Object.values(obj)[0];

  };  //returns 2nd lowest element from sorted sort array
}
console.log(getCheapest(setOne)); 





const array1 = [11.4, 3.8, 40.5, 21, 100.6];

// console.log(Math.min(11.4, 3.8, 40.5)); //works
// console.log(Math.min(...array1)); //works

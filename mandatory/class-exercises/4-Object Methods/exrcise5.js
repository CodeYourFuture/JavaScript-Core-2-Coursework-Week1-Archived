// Exercise 5
/*
A coffee machine is defined below.
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee
only if the inserted amount is greater or equal than the price of the coffee!
*/

let coffeeMachine = {
  brand: "Super Coffee",
  prices: {
    cappuccino: 2.4,
    blackCoffee: 1.5,
    flatWhite: 3.0,
  },
  insertedAmount: 0,
  insertMoney: function (amount) {
    this.insertedAmount = amount;     // passing user input "amount" to the key "inserted amount".
  },
  getCoffee: function (coffee) {
    // let result = "";
    Object.entries(this.prices).map(yourCoffee => {                                    // .entries - returns an array of object keys and values.
      if (this.insertedAmount >= yourCoffee[1] && coffee === yourCoffee[0] ) {         // comparing the inserted "coffee" value to the inserted amount, when the input is the same as a key of the "prices" object.
        // console.log(yourCoffee[0]);                                                 // checking result of the if statement.
        return result =  `Please take your ${yourCoffee[0]}`;                          // = true - return this statement.
      } else if (this.insertedAmount < yourCoffee[1] && coffee === yourCoffee[0]) {    // = true - return this statement. less than insert edamount.
        return result = `Sorry you don't have enough money for a ${yourCoffee[0]}`;
      }
    })
    return result;    
  }
};
     

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee(
    "cappuccino"
  )}`
);

coffeeMachine.insertMoney(1.5);
console.log(
  `Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee(
    "blackCoffee"
  )}`
);

coffeeMachine.insertMoney(4.0);
console.log(
  `Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);

coffeeMachine.insertMoney(2.4);
console.log(
  `Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee(
    "flatWhite"
  )}`
);


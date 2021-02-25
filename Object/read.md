 What is an Object?
-An object is used to store collection of various data.And it has property(also known as keys) that describe how they are unique and values and methods. The type of values that can be assign to a property of an object are:
- Primitive Data Type : string, numbers, boolean,undefined, and null
-Methods (function)
-Array []
-Objects {}

How would we describe the above laptop as a JavaScript object?

let laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
};

/* --------Accessing an Object's property  -------
- Make use d the dot notation: laptop.brand 
-OR make use of the bracket notation: laptop["brand"]. but the bracket notation is good practice when there are space between property name. eg. 'screen size' = 13; laptop["screen size"].
 
let laptop = {
    brand: "Lenovo",
    'screen Size': 13,
    isTouchscreen: true,
    launchYear:2018
  };
  console.log(laptop.brand) // Lenovo
  console.log(laptop['screen Size']) // 13
  console.log(laptop.isTouchscreen) // true
*/ 

/* --------Adding or Updating a property's value  -------
let said we want to update the both brand and launch year. It's strongly recommended to always use the same data type when re-assigning an object's property (if it was a string before, keep it a string - and so on). Meaning you can not update a string by a number
phone.brand ="Nokia";  // How to update the value of an object: objectName.property = new value;
console.log(phone.brand) // Nokia
phone['launchYear']=2016;
console.log(phone.launchYear)// 2016

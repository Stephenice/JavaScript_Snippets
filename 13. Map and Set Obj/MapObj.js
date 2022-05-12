"use strict";

const myMapObj = new Map();

// add keys and values
myMapObj.set("firstName", "john");
console.log(myMapObj);
// chaining the set method
myMapObj.set("lastName", "bill").set("age", 27).set(3, "friends");
console.log(myMapObj);

//getting value from keys
const getName = myMapObj.get("lastName");
console.log(getName);

//To check if a Map has a key use: has(key name)-
const checkAge = myMapObj.has("age");
console.log(checkAge);

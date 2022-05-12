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

// To delete a property in Map use: delete(key name)
// console.log(myMapObj.delete("age"));
console.log(myMapObj);

// To check the size or length of Map use: size
console.log(myMapObj.size);

// to clear the Map Object use: clear()
// console.log(myMapObj.clear()); //return undefined
console.log(myMapObj); //return 0

// How to use Array and Object as key and called the array value
const friend = ["james", "mary", "william"];
myMapObj.set(friend, true);
const result = myMapObj.get(friend);
console.log(myMapObj);

// How to create a Map and set multiple key and value.
// Convert Object to Map use: Object.entries(object name)
// Looping Map
// Convert Map to array use: [...map name]

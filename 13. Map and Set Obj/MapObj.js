"use strict";

const myMapObj = new Map();

// add keys and values
myMapObj.set("firstName", "john");
// console.log(myMapObj);
// chaining the set method
myMapObj.set("lastName", "bill").set("age", 27).set(3, "friends");
// console.log(myMapObj);

//getting value from keys
const getName = myMapObj.get("lastName");
// console.log(getName);

//To check if a Map has a key use: has(key name)-
const checkAge = myMapObj.has("age");
// console.log(checkAge);

// To delete a property in Map use: delete(key name)
// console.log(myMapObj.delete("age"));
// console.log(myMapObj);

// To check the size or length of Map use: size
// console.log(myMapObj.size);

// to clear the Map Object use: clear()
// console.log(myMapObj.clear()); //return undefined
// console.log(myMapObj); //return 0

// How to use Array and Object as key and called the array value
const friend = ["james", "mary", "william"];
myMapObj.set(friend, true);
const result = myMapObj.get(friend);
// console.log(myMapObj);

// How to create a Map and set multiple key and value.
const question = new Map([
  ["question", "what is the best programming language?"],
  [1, "java"],
  [2, "c++"],
  [3, "javascript"],
  [true, "correct"],
  [false, "try again!"],
  ["correct", 3],
]);
console.log(question);

// Convert Object to Map use: Object.entries(object name)
const openingHours = {
  thur: { open: 12, close: 22 },
  fri: { open: 12, close: 22 },
};
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(hoursMap.get("thur"));

// Looping Map
console.log(typeof 23); //return string
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value} ?`);
  }
}

const yourAns = 3;

console.log(question.get(yourAns === question.get("correct")));

// Convert Map to array use: [...map name]
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

// Set
const setArray = ["rice", "bean", "bread", "rice", "bean", "bread"];
// How to create Set use: new Set();
const uniqueFood = new Set(setArray);
console.log(uniqueFood);

console.log(uniqueFood.size);
console.log(uniqueFood.has("rice"));
console.log(uniqueFood.add("pizza"));
// console.log(uniqueFood.delete("rice"));
// console.log(uniqueFood.clear());
console.log(uniqueFood);

// looping set
for (const set_values of uniqueFood) {
  console.log(set_values);
}

//Convert Set to Array- spreed operator work on all Iterables
const set_to_array = [...uniqueFood];
console.log(set_to_array);

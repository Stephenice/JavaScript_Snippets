"use strict";

/****************** Primitive *********/
let a = 21;
let b = a;
a = 61;
console.log(a);
console.log(b);

/****************** Reference *********/
const person = {
  first_name: "mary",
  last_name: "william",
  age: 21,
};

//this not copying object bcos its a reference
const married = person;
married.last_name = "bill";
console.log("before", person);
console.log("after", married);

/****************** Copying object shallow copy *********/

const person2 = {
  first_name: "mary",
  last_name: "william",
  age: 21,
  family: ["father", "mother", "sister"],
};

const married2 = Object.assign({}, person2);
married2.last_name = "bill";
married2.family.push("father in_law");
console.log("before", person2);
console.log("after", married2);

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

const married = person;
married.last_name = "bill";
console.log("before", person);
console.log("after", married);

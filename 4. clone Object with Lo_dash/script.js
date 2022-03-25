"use strict";
//const _ = require("lodash");

// const ver = _.VERSION;
// console.log(ver);

const person2 = {
  first_name: "mary",
  last_name: "william",
  age: 21,
  family: ["father", "mother", "sister"],
};

const married2 = _.cloneDeep(person2);
married2.last_name = "bill";
married2.family.push("father in_law");
console.log("before", person2);
console.log("after", married2);

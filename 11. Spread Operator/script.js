"use strict";

const arr = [1, 5, 7, 3, 4];
const arr2 = [99, 33, 55, 22, 11];
const numbers = [...arr];

//seperated by space
console.log(...numbers);

//shallow copy
numbers.push(2);
console.log(numbers);
console.log(arr);

//join 2 array
const arrNew = [...arr, ...arr2];
console.log(arrNew);
console.log(...arrNew);

const name = "stephen";
console.log([...name]);

//function
function food(f1) {
  console.log(...f1);
}

food(["rice", "bean", "bread"]);

// Object and shallow copy

const person = {
  firstName: "stephen",
  lastName: "billy",
};

const personCopy = { ...person };
console.log((personCopy.age = 30));
console.log(person);
console.log(personCopy);

"use strict";

/*******In the global execution context (outside of any function), this refers to the global object whether in strict mode or not. /*******/
var b = 12;
this.a = 37;
console.log(this.b); // 37
console.log(this);

/******* Method(function inside Object) *****/
const person = {
  first_name: "Jame",
  last_name: "William",

  full_name: function () {
    console.log(this);
    console.log(this.first_name + " " + this.last_name);
  },
};

const person2 = {
  first_name: "Mary",
  last_name: "Bill",
};

person2.full_name = person.full_name;
//this is pointing to the Object calling the method
person.full_name();
person2.full_name();

/******* Simple function /*******/
function test_this() {
  const x = 45;
  console.log(this);

  if (x === this.x) {
    console.log(true);
  } else {
    console.log(this);
  }
}

test_this();

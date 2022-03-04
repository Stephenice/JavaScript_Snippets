"use strict";

//In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.
this.a = 37;
console.log(a); // 37
console.log(this);

//Method(function inside Object)
/*   */

// function expression
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

// this and object

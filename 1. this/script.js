// this in function expression point to the global object which is the window
"strict mode";

// function expression
function test_this() {
  const x = 45;

  if (x === this.x) {
    console.log(true);
  } else {
    console.log(this);
  }
}

test_this();

"use strict";

// function checking for Truthy and Falsy values

function checkTruthyFalsy(testValue) {
  if (
    testValue === false ||
    testValue === 0 ||
    testValue === 0n ||
    testValue === -0 ||
    testValue === undefined ||
    testValue === null ||
    testValue === NaN ||
    testValue === "" ||
    testValue === `` ||
    testValue === ""
  ) {
    console.log(`This ${testValue} is False value`);
  } else {
    console.log(`This ${testValue} is Truthy value`);
  }
}

checkTruthyFalsy(0);
checkTruthyFalsy("1");
checkTruthyFalsy([].length);

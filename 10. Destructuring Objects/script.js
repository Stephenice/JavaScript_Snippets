"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Basic assignment obj destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Assigning to new variable names to the property
const {
  name: restaurantName,
  openingHours: hours,
  categories: tag,
} = restaurant;
console.log(restaurantName, hours, tag);

//Assignment separate from declaration and mutating variables
let a = 111;
let b = 999;
const obj = {
  a: 2,
  b: 7,
};

({ a, b } = obj);
console.log(a, b);

//Default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Nested object
const {
  fri: { open: O, close: C },
} = openingHours;
console.log(O, C);

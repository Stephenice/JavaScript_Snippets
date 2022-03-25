"use strict";

const shoppingList = {
  kitchenItems: ["cups", "cutlery", "bin", "dish dryer"],
  food: ["rice", "bean", "bread"],
};

let [firstItem, secondItem, thirdItem] = shoppingList.food;
console.log(firstItem, secondItem);

// Swapping variables
[firstItem, secondItem] = [secondItem, firstItem];
console.log(firstItem, secondItem);

"use strict";

const shoppingList = {
  kitchenItems: ["cups", "cutlery", "bin", "dish dryer"],
  food: ["rice", "bean", "bread"],

  order: function (item1, item2) {
    return [this.kitchenItems[item1], this.kitchenItems[item2]];
  },
};

let [firstItem, secondItem, thirdItem] = shoppingList.food;
console.log(firstItem, secondItem);

// Swapping variables
[firstItem, secondItem] = [secondItem, firstItem];
console.log(firstItem, secondItem);

//function
const [a, b] = shoppingList.order(0, 1);
console.log(a, b);

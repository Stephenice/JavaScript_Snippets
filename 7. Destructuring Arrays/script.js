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

// undefined values
let [c, d, e, f, g] = shoppingList.food;
console.log(f, g);

//Default values
[c, d, e = "apple", f = "oil", g = "orange"] = shoppingList.food;
console.log(e, f, g);

//Ignoring some returned values
[c, d, , f = "oil", g = "orange"] = shoppingList.food;
console.log(e, f, g);

//Assigning the rest of an array to a variable
[c, d, , f = "oil", g = "orange"] = shoppingList.food;
console.log();

'use strict';

const restaurant = {
    name: "Briguiras Restaurant",
    location: "Trindade, GO - Brasil",
    categories: ["Italiana", "Pizzaria", "Vegetarian", "Organic"],
    startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order: function(startIndex, mainIndex) {
        return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// dessa forma eu pulo o segundo valor e "second" passa a ser vegetarian
let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching with desestructuration
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`${starter} and ${mainCourse}`);
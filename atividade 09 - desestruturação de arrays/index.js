'use strict';

const restaurant = {
    name: "Briguiras Restaurant",
    location: "Trindade, GO - Brasil",
    categories: ["Italiana", "Pizzaria", "Vegetarian", "Organic"],
    startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"]
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);
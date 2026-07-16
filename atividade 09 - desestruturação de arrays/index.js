'use strict';

const restaurant = {
    name: "Briguiras Restaurant",
    location: "Trindade, GO - Brasil",
    categories: ["Italiana", "Pizzaria", "Vegetarian", "Organic"],
    startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order: function (startIndex, mainIndex) {
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
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables (sem a desestruturação)
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching with desestructuration
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recebendo dois valores de uma função e armazenando-os cada um em uma variável
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`${starter} and ${mainCourse}`);

// Desestruturação 
const arrInArray = [1, 2, [5, 6]];
const [i, , j] = arrInArray;
console.log(i, j); // Resultado esperado: 1 [5, 6];

// Desestruturação dentro de desestruturação
const arrInArray2 = [6, 7, [2, 3]];
const [m, , [n, o]] = arrInArray2;
console.log(m, n, o); // Resultado esperado: 6, 2, 3;

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // Resultado esperado: 8, 9, undefined;

// Mas eu posso colocar variáveis com valores fixos
const [t = 1, u = 1, v = 1] = [3, 5];
console.log(t, u, v); // Resultado esperado: 3, 5, 1;
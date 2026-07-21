'use strict';

const restaurant = {
    name: "Briguiras Restaurant",
    location: "Trindade, GO - Brasil",
    categories: ["Italiana", "Pizzaria", "Vegetarian", "Organic"],
    startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },

        fri: {
            open: 11,
            close: 23
        },

        sat: {
            open: 0,
            close: 24 // 24 Horas aberto
        }
    },

    order: function (startIndex, mainIndex) {
        return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
    }
};

// Desestruturação de objetos
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Se eu quiser dar nomes diferentes as variáveis
const { name: restaurantName,
    openingHours: hours,
    categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// Outra dica útil é a aplicação de valores padrões para dados de terceiros
const { menu = [], startMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let e = 111;
let f = 222;

const obj = { e: 23, f: 67, g: 100 };
({ e, f } = obj);
console.log(e, f);

// Nested Objects
const {
    fri: { open: abrido, close: fechado }
} = hours;
console.log(abrido, fechado);

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

// Copiando e adicionando novos itens na array

// Dessa forma está apenas a copiar a array, não estamos alterando diretamente
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
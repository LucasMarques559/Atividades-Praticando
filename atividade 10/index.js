'use strict';

const weekdays = [' Monday', ' Tuesday', ' Wednesday', ' Thursday', ' Friday', ' Saturday', ' Sunday'];

const restaurant = {
    name: "Briguiras Restaurant",
    location: "Trindade, GO - Brasil",
    categories: ["Italiana", "Pizzaria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        [weekdays[3]]: {
            open: 12,
            close: 22
        },

        [weekdays[4]]: {
            open: 11,
            close: 23
        },

        [weekdays[5]]: {
            open: 10,
            close: 22
        },

        [weekdays[6]]: {
            open: 0,
            close: 12 + 12 // 24 Horas aberto
        }
    },

    order: function (startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        time,
        adress,
        mainIndex,
        starterIndex }) {
        console.log(
            `Order received ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        `Here your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`;
    },

    orderPizza: function (mainIngredient, ...othersIngredients) {
        console.log(mainIngredient);
        console.log(othersIngredients);
    }
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
    console.log(item);
}

console.log(' --- Índices ---')
// Printar os índices
for (const item of menu.entries()) {
    console.log(item);
}

for (const [i, el] of menu.entries()) {
    console.log(`${[i + 1]}: ${el}`);
}

// Melhorias do ES6
// -> Se eu quero incluir as propriedades de um objeto dentro do outro, é só eu escrever o nome do objeto desejado dentro do outro

console.log(restaurant.openingHours?.sat?.open);
console.log(restaurant.openingHours?.fri?.open);

for (const day of weekdays) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`In the ${day} we open at ${open}`);
}

console.log(restaurant.order?.(2, 1) ?? 'This method doesnt exist!');
console.log(restaurant.briguitis?.(0, 1) ?? 'This method doesnt exist!');

const users = [{ name: 'lukas', email: 'lukitos@gmail.com', age: 20 }];
console.log(users[0]?.name ?? 'User array empty');

const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
    openStr += `${day},`;
}

console.log(openStr);


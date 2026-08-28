'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////

// Slice method - dont change the arr
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log([...arr]);
console.log(arr.slice());

// Splice method - change the arr
let arr2 = ['x', 'y', 'z', 'w', 't'];
arr2.splice(-1);
console.log(arr2);
arr2.splice(1, 2);
console.log(arr2);

// Reverses method - change
let arr3 = ['e', 'd', 'c', 'b', 'a'];
console.log(arr3.reverse());
console.log(arr3);

// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr3]);

// JOIN
console.log(arr.join(' - '));

// At method
const array = [11, 67, 20];

console.log(array.at(0));
console.log(array.at(-1));
console.log('lukas'.at(0));
console.log('lukas'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// relembrando que entries() é para obter as chaves e os valores de uma lista, array, map etc
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: deposit made in the amount of ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: withdrew made in the amount of ${Math.abs(movement)}`);
  }
}

console.log('---- forEach ----');
// Loop forEach - Para cada

// O loop irá percorrer toda a array e cada valor que ele percorrer, irá repassar como argumento para a callback function
// no loop for, não precisa usar entries, só passar os parâmetros
// a ordem sempre é: valor, índice, array completo

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: deposit made in the amount of ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: withdrew made in the amount of ${Math.abs(mov)}`);
  }
});


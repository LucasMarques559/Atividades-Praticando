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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, arr) {
  console.log(`${key}: ${value}`);
});

const conjunto = new Set(['EUR', 'USD', 'BRL', 'EUR', 'USD', 'BRL']);

// em um conjunto (sets) não há índice, valor ou etc, por isso o segundo parâmetro (key) é inutil
// utiliza-se _ para definir que uma variável é inutilizavel
conjunto.forEach(function (value, _, arr) {
  console.log(`${value}: ${value}`);
});

const containerMovements = document.querySelector('.movements');

function displayMovements(movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                <div class="movements__value">${mov}</div>
            </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

// desafio de arrays

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4] 
*/

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

function checkDogs(dogsJulia, dogsKate) {
  const realDogsJulia = dogsJulia.slice(1, -1);
  console.log(realDogsJulia, dogsKate);

  const correctAgeDogs = [...realDogsJulia, ...dogsKate];
  console.log(correctAgeDogs);
  // .concat()

  correctAgeDogs.forEach(function (value, i) {
    if (value >= 3) {
      console.log(`Dog number ${i + 1} its old`);
    } else {
      console.log(`Dog number ${i + 1} its puppy!`);
    }
  });
};

checkDogs([...dogsJulia], dogsKate);

// 3 métodos importantes em arrays para a transformação de dados
// map, filter, reduce
// criar novas arrays com base na filtragem de dados de outras arrays

// map, faz o mesmo que o forEach, entretanto, cria uma array nova
// filter, é como um for só que com um if imbutido
// reduce, tipo uma bola de neve que com o tempo de acumula

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movToUSD = movements2.map(function (value) {
  return value * 1.1;
});

// const movToUSD = movements2.map(value => {
//   return value * 1.1;
// });
console.log(movements2);
console.log(movToUSD);

// Se eu fizesse com for of
const newArrEmpty = [];
for (const mov of movements2) {
  newArrEmpty.push(mov * 1.1);
}
console.log(newArrEmpty);

const movBanch = movements2.map((value, i) => {
  return `Movement number ${i + 1}: ${value > 0 ? 'deposit' : 'withdrawal'} made in the amount of ${Math.abs(value)}`;
});
console.log(movBanch);

// function createUsername(user) {
//   const username = user.toLowerCase().split(' ').map(name => name[0]).join('');
//   return username;
// }

// console.log(createUsername('Steven Thomas Williams'));

function createUsername(accs) {
  accs.forEach(acc => {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });

};

createUsername(accounts);
console.log(accounts);

// Método filter

const filtagremDeTransacoes = movements.filter(mov => {
  return mov > 0;
});
console.log(filtagremDeTransacoes);

// feito com for of
const newArrMovements = [];
for (const mov of movements) {
  if (mov > 0) {
    newArrMovements.push(mov);
  }
}
console.log(newArrMovements);

const negativeMovs = movements.filter(movValues => movValues < 0);
console.log(negativeMovs);

// reduce method

// neste método, os parâmetros funcionam assim: 1° acumulador (acc) 2° valor atual (value) 3° índice (i) 4° array inteira (arr)
// const balance = movements.reduce((acc, value, i, arr) => {
//   console.log(`Iteration number ${i}: ${acc}`);
//   return acc + value;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, value) => acc + value, 0);
console.log(balance);

let sum = 0;
for (const mov of movements) {
  sum += mov;
}
console.log(sum);

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

function calcAverageHumanAge(ages) {
  const humanAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const oldDogs = humanAge.filter(age => age >= 18);

  const averageAge = oldDogs.reduce((acc, age) => acc + age, 0) / oldDogs.length;

  return averageAge;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
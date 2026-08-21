'use strict';

const bookings = [];

// definindo números padrões
// eu posso fazer expressões com os números padrões definidos antes que ele
function createBooking(flightNum, numPassengers = 1, price = 199 * numPassengers) {

    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('IEL67');
createBooking('IEL67', 2, 800);

const flightNum2 = 'LS100';
const lukas = {
    name: 'Lukas Marques',
    passport: 1234578
}

function checkIn(flightNum, passenger) {
    flightNum = 'LS99';
    passenger.name = 'Sr(a)' + passenger.name;

    if (passenger.passport === 1234578) {
        // alert('Check-In');
    } else {
        // alert('Wrong Passport');
    }
}

checkIn(flightNum2, lukas);
console.log(flightNum2);
console.log(lukas);

// se eu tiver duas funções alternado o mesmo objeto é erro na certa
// o objeto muda pois está sendo alterado diretamente nele, pois tem o mesmo cabeçalho na heap
// já os valores primitivos são apenas cópias e não alterações diretas no endereço

function newPassport(object) {
    object.passport = Math.trunc(Math.random() * 1000000000);
    console.log(object);
}

newPassport(lukas);
checkIn('LS199', lukas); // erro

function oneWord(str) {
    return str.replace(/ /g, '');
}

function upperFirstWord(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function = recebe outra função como parâmetro
function transformer(str, fnc) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fnc(str)}`);
    console.log(`Transformed by: ${fnc.name}`);
}

transformer('JavaScript is the best language', upperFirstWord);
transformer('JavaScript is the best language', oneWord);

const high5 = function () {
    console.log('✋');
}

document.body.addEventListener('click', high5);
['Nomes', 'Aleatórios', 'Mutex', 'Rosa'].forEach(high5);

function greet(str) {
    return function (name) {
        console.log(str + " " + name);
    }
}

const greeting = greet('oie');
greeting('Lukas');
greeting('Erik');
greeting('Pedro');

// const greet2 = (str) => {
//     return (name) => {
//         console.log(`${str} ${name}`);
//     }
// }

// const greeting2 = greet2('Salve');
// greeting2('Lukinha');
// greeting2('Du');
// greeting2('Joãozinho');

// greet2('saaalve galera do')('youtube');

const greetArr = str => name => console.log(str + " " + name);
greetArr('Yoh')('Fin');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name})
    },
};

lufthansa.book(676, 'Lukas Marques');
lufthansa.book(123, 'Merlin Grey');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW23',
    bookings: [],

};

// Armazenei uma função de um objeto em uma variável global
// Uma cópia da função mas não é o mesmo, é apenas uma chamada de função regular
// NÃO UM MÉTODO
const book = lufthansa.book;

// quando eu realizo esse tipo de cópia, o método this fica uma bagunça e não sabe pra onde apontar quando eu chamo ele
// dessa forma exitem 3 métodos para que possamos definir para qual airline estamos nos referindo

// Método call
book.call(eurowings, 123, 'Nico Willians');
book.call(lufthansa, 906, 'Daniel Molo');
console.log(eurowings);

// Lembrando, funções são objetos e objetos tem seu métodos, então é totalmente comum chamar uma função com um método function.method()

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 738, 'Mary Jane');
console.log(swiss);

// Apply method
const flightData = [583, 'Patrick Jane'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
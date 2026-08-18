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
        alert('Check-In');
    } else {
        alert('Wrong Passport');
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


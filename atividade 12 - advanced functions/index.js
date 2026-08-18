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
'use strict'

const arrayTemp = [25, 20, 22, 19, 18];
const arrayTemp2 = [40, 35, 80, 56];

function printForecast() {

    let doubleArrays = arrayTemp.concat(arrayTemp2);
    let text = "";

    for(let i = 0; i < doubleArrays.length; i++) {
        text += `${doubleArrays[i]}°C in ${i + 1} days\n`;
    }

    console.log(text);
}

printForecast();
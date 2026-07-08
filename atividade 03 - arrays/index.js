'use scrict'

let arrayTest = [-1, 2, 67, "error", 9, 38, 18, 8];

function calcArray(temp) {

    let arrayMax = arrayTest[0];
    let arrayMin = arrayTest[0];
    let curTemp = arrayTest[i];

    for (let i = 0; i < arrayMax; i++) {
        if ( curTemp > arrayMax) {
            arrayMax = curTemp;
        }
        if ( curTemp < arrayMin) {
            arrayMin = curTemp;
        }
    }

    console.log()
}

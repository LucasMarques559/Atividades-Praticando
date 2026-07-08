const freeLanceHours = [9, 6.5, 0, 4, 8.2, 7.8, 2];

// total de horas trabalhadas
function totalHours() {

    let hours = 0;
    for (let i = 0; i < freeLanceHours.length; i++) {
        hours += freeLanceHours[i];
    }

    console.log(hours);
}

totalHours();

// média de horas
function averageHours() {

    let totalHours = 0;
    for (let i = 0; i < freeLanceHours.length; i++) {
        totalHours += Math.round(freeLanceHours[i] / freeLanceHours.length);
    }

    console.log(totalHours);
}

averageHours();

// dia com mais horas trabalhadas
function mostHours() {

    let dayMostHours = freeLanceHours[0];

    for (let i = 0; i < dayMostHours; i++) {
        if (freeLanceHours[i] > dayMostHours) {
            dayMostHours = freeLanceHours[i];
        }
    }

    console.log(dayMostHours);

}

mostHours();

// dias trabalhados
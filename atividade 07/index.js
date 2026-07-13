'use strict'

// variáveis globais declaradas com var utiliza-se o método "this.", portanto, é do próprio "window"
var firstName = "Josh";
// já variáveis como "let" e "const" não se usa o método "this." dentro das arrows functions
const lastName = "Calleb";

const lukas = {
    firstName: "lukas",

    // regular function dentro de um objeto
    calcAge: function (birthday) {
        let age = 2026 - birthday;
        console.log(age);
    },

    // lambda/arrow function em objetos
    // essas funções não se utilizam o método "this." 
    metro: () => {
        console.log("Hey " + this.firstName + " " + this.lastName + ", the metro is waiting!");
    }
}

lukas.metro();
lukas.calcAge(20)

// Nesta atividade estou mostrando basicamente um dos motivos para não se utilizar var
// O recomendável é não se utilizar arrow function para object methods

const z_Generation = {

    year: 2006,
    calcGeneration: function () {

        if (this.year >= 1997 && this.year <= 2009) {
            console.log("You're from generation Z");
        }

        // Primeira solução, 
        const self = this;
        const notZ = function () {
            if (self.year < 1997 && self.year > 2009) {
                console.log("Your are not from generation Z");
            }
        }
        notZ();
    }

}

z_Generation.calcGeneration();
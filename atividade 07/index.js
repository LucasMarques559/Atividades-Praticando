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
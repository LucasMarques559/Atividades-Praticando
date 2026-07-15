'use strict'

const lukas = {
    firstName: "Lukas",
    lastName: "Marques",
    age: 20
};

function oldPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
}

const oldLukas = oldPerson(lukas, "Oliveira");

// ambos printaram age: 45, pois lukas e oldLukas são apenas ponteiros de endereçamento
console.log(lukas);

// eu consegui alterar as propriedades de um objeto pois são propriedades, se eu tentasse colocar uma nova propriedade ao objeto const, ai sim daria erro

// lukas = {
//     newAge: 10
// };

const daniel = {
    firstName: "Daniel",
    lastName: "Marques",
    age: 22,
    married: true,
    parents: ["Rúbia, Dinywester"]
};

// Aqui eu crio uma cópia dos atributos do objeto Daniel e armazeno em uma variável "danielCopy"
// shallow copy
const danielCopy = { ...daniel };
danielCopy.lastName = "Oliveira";

console.log(daniel, danielCopy);
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
    family: ["Rúbia, Dinywester"]
};

// Aqui eu crio uma cópia dos atributos do objeto Daniel e armazeno em uma variável "danielCopy"
// shallow copy
const danielCopy = { ...daniel };
danielCopy.lastName = "Oliveira";

// console.log(daniel, danielCopy);

// daniel e danielCopy terão o mesmo valor em family, pois é uma cópia superficial, ou seja, é como se "family" fosse a variável e a array armazenada no heap
// danielCopy.family.push("Lukas");
// danielCopy.family.push("Joarlla");

// deep clone
const danielClone = structuredClone(daniel);
danielClone.family.push("Lukas");
danielClone.family.push("Joarlla");

console.log(daniel, danielClone);
// Manipulando uma array

let friends = ["Lucas", "Erik", "Pedro", "Eduardo"];

//Para adicionar elementos ao final de uma array:
friends.push("Rúbio");

//Para adicionar elementos no início da array:
friends.unshift("Luiz");

//Agora para remover elementos no final de uma array
//Não é necessário passar algum parâmetro dentro da função pop()
friends.pop();

//Removendo elementos no início
friends.shift();

//a função indexOf nos retorna qual indice tal elemente está
console.log(friends.indexOf("Lucas"));

//a função includes retorna true or false se o elemente está na array
console.log(friends.includes("Lukas"));

function calcTip() {
    
}
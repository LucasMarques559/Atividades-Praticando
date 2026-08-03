'use strict';

// Em um CONJUNTO não há índices e nem palavras repetidas
const saborPizza = new Set([
    'Uva Passa',
    'Brócolis',
    'Cavalo',
    'Uva Passa',
    'Brócolis',
    'Cavalo'
]);

console.log(saborPizza);
console.log(saborPizza.add('Camarão'));
console.log(saborPizza.has('Cavalo'));
saborPizza.delete('Brócolis');
console.log(saborPizza.size);

for (const sabores of saborPizza) {
    console.log(sabores);
}

const funCozinha = ['Chefe', 'Chefe', 'Garçom', 'Garçom', 'Garçom', 'Manager'];

const funCozinhaSet = [...new Set(funCozinha)];
console.log(funCozinhaSet);

const italianFoods = new Set([
    'Pasta',
    'Gnocci',
    'Tomatoes',
    'Olive oil',
    'Garlic',
    'Basil'
]);

const mexicanFoods = new Set([
    'Tortillas',
    'Beans',
    'Rice',
    'Tomatoes',
    'Avocado',
    'Garlic'
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Comidas em comum dos cardápios: ', [...commonFoods]);

const italianMexicanUnion = italianFoods.union(mexicanFoods);
console.log('A união dos cardápios: ', [...italianMexicanUnion]);
// console.log(italianMexicanUnion);

const differenceOfItalian = italianFoods.difference(mexicanFoods);
console.log('A diferença dos cardápios: ', [...differenceOfItalian]);

// Atenção: a ordem dos fatores altera o resultado!

const differenceOfMexican = mexicanFoods.difference(italianFoods);
console.log('Tem no mexicano mas não tem no italiano:', [...differenceOfMexican]);

//symmetricDifference
//isDisjoinFrom
'use strict';

const profile = {
    name: 'Lukas Marques',
    age: 20,
    height: 1.72,
    weight: 60
}

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

// Mapas - muito mais útil do que conjuntos e é totalmente diferente do que usamos na vida real

const map = new Map();
map.set('name', 'miojin restaurant');
map.set(1, 'Italy, Milan');
map.set(2, 'Lisboa, Portugal');

console.log(map);

map.set('categories', ['arroz', 'salada', 'pão', 'pique'])
    .set('open', 9)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'we are close :(');

console.log(map);
console.log(map.get(true));
console.log(map.get(1));
console.log(map.get('name'));

const time = 20;
console.log(map.get(time > map.get('open') && time < map.get('close')));

// Os mesmos métodos do conjunto

// console.log(map.has('name'));
// map.delete(2);
// console.log(map);
// map.clear();
// console.log(map.size);

const arr = [6, 7];

map.set(arr, 'Test67');
console.log(map.get(arr));
map.set([1, 2], 'Test');
console.log(map.get([1, 2]));
map.set(document.querySelector('h1'), 'Heading');
console.log(map);

// arr in maps
// Em mapas e conjuntos, o primeiro é a key e o segundo é o valor
const map2 = new Map([
    ['question', 'Qual a melhor linguagem de programação do mundo?\n'],
    [1, 'php\n'],
    [2, 'Python\n'],
    [3, 'Java\n'],
    [4, 'JavaScript\n'],
    ['corretAnswer', 4],
    [true, 'Correct 😍\n'],
    [false, 'Try again...\n']
]);

console.log(map2);

// Transformando objetos em mapas
const profileMap = Object.entries(profile);
console.log(profileMap);

console.log(map2.get('question'));
for (const [key, value] of map2) {
    if (typeof key === 'number') {
        console.log(`answers ${key}: ${value}\n`);
    }
}

const userAnswer = Number(prompt('Type here your answer'));

// userAnswer === 4 ? console.log(map2.get(true)) : console.log(map2.get(false));
// comparo a resposta certa com a respota do usuário
console.log(map2.get(map2.get('corretAnswer') === userAnswer));
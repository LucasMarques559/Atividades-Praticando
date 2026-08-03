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